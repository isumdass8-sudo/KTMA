import { useState } from 'react';

const initialState = { name: '', email: '', subject: '', message: '' };
const accessKey = 'c07e7014-9354-4ec8-b71a-dffae2f34f9e';

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.message.trim()) next.message = 'Please enter a message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrors({});

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ access_key: accessKey, ...form }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message. Please try again.');
      }

      setStatus('success');
      setForm(initialState);
    } catch (error) {
      setStatus('error');
      setErrors({ form: error.message || 'Unable to send your message. Please try again.' });
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-forest-700/10 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-sand-50">
          &#10003;
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-teal-950">Message sent</h3>
        <p className="mt-2 text-sm text-ink-500">
          Thank you for reaching out — the KTMA team will get back to you shortly.
        </p>
        <button className="btn-outline mt-6" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={update('name')}
            className={inputClass(errors.name)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={update('email')}
            className={inputClass(errors.email)}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div>
        <Field label="Subject">
          <input
            type="text"
            value={form.subject}
            onChange={update('subject')}
            className={inputClass()}
            placeholder="Membership inquiry, partnership, etc."
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message}>
        <textarea
          value={form.message}
          onChange={update('message')}
          rows={5}
          className={inputClass(errors.message)}
          placeholder="Tell us how we can help..."
        />
      </Field>

      {errors.form && <p className="text-sm font-medium text-clay-700" role="alert">{errors.form}</p>}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink-700">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs font-medium text-clay-700">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/50 focus:border-teal-700 focus:outline-none ${
    error ? 'border-clay-600' : 'border-teal-950/12'
  }`;
}
