import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import logoFull from '../assets/images/logo-full.png';

const VISITED_KEY = 'ktma-welcome-seen';

export default function WelcomeOverlay() {
  const [visible, setVisible] = useState(() => {
    try {
      return window.localStorage.getItem(VISITED_KEY) !== 'true';
    } catch {
      return true;
    }
  });
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!visible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    confetti({
      particleCount: 180,
      spread: 125,
      startVelocity: 30,
      gravity: 0.75,
      ticks: 240,
      origin: { x: 0.5, y: 0.58 },
      colors: ['#F6C453', '#FF6B6B', '#55C2DA', '#9B7EDE', '#65C18C', '#F7EFE3'],
      disableForReducedMotion: true,
    });

    const celebrationTimer = window.setTimeout(() => {
      confetti({
        particleCount: 90,
        angle: 60,
        spread: 55,
        startVelocity: 38,
        gravity: 0.8,
        ticks: 220,
        origin: { x: 0.05, y: 0.72 },
        colors: ['#FF6B6B', '#F6C453', '#55C2DA', '#9B7EDE'],
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 90,
        angle: 120,
        spread: 55,
        startVelocity: 38,
        gravity: 0.8,
        ticks: 220,
        origin: { x: 0.95, y: 0.72 },
        colors: ['#65C18C', '#F6C453', '#55C2DA', '#FF6B6B'],
        disableForReducedMotion: true,
      });
    }, 450);

    const hideTimer = window.setTimeout(() => setExiting(true), 2700);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      try {
        window.localStorage.setItem(VISITED_KEY, 'true');
      } catch {
        // Continue without persistence when storage is unavailable.
      }
    }, 3500);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(celebrationTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`welcome-overlay ${exiting ? 'welcome-overlay--exit' : ''}`}
      role="status"
      aria-label="Welcome to the Kandy Tourism Marketing Association"
    >
      <div className="welcome-mark">
        <div className="welcome-particles" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} style={{ '--particle-index': index }} />
          ))}
        </div>
        <img src={logoFull} alt="Kandy Tourism Marketing Association" />
      </div>
      <p className="welcome-kicker">Kandy Tourism Marketing Association</p>
      <p className="welcome-title">Welcome to Kandy</p>
      <span className="welcome-rule" aria-hidden="true" />
    </div>
  );
}