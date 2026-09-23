import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CommitteeCard from '../components/CommitteeCard';
import { fallbackCommittee, fallbackMembershipList } from '../data/fallbackData';
import heroImage from '../assets/gallery/event-gathering.jpg';
import groupPhoto from '../assets/gallery/executive-committee.jpg';

export default function Members() {
  const committee = fallbackCommittee;

  return (
    <>
      <PageHero
        eyebrow="Our members"
        title="The people and businesses behind Kandy tourism"
        description="From our executive committee to member hotels and service providers, KTMA is powered by a shared commitment to the region."
        image={heroImage}
      />

      {/* Committee */}
      <section id="committee" className="container-ktma py-20">
        <SectionHeading
          eyebrow="Executive committee"
          title={'2026\u20132028 leadership'}
          description="Elected to guide KTMA's strategy, events, and partnerships over the current term."
        />
        <div className="mt-10 overflow-hidden rounded-3xl shadow-soft">
          <img src={groupPhoto} alt="KTMA members group photo" className="h-100 w-full object-cover md:h-100" />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {committee.map((member) => (
            <CommitteeCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Membership list */}
      <section className="border-t border-teal-950/8 bg-sand-100 py-20">
        <div className="container-ktma">
          <SectionHeading
            eyebrow="Membership list"
            title="KTMA members"
            description="The current KTMA membership list by membership number."
          />
          <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-teal-950/5">
            <div className="grid grid-cols-[7rem_1fr] border-b border-teal-950/10 bg-teal-950 px-5 py-4 text-xs font-semibold uppercase tracking-wide text-sand-50 sm:px-6">
              <span>Membership No.</span>
              <span>Name</span>
            </div>
            <div className="divide-y divide-teal-950/8">
              {fallbackMembershipList.map((member) => (
                <div key={member.membershipNo} className="grid grid-cols-[7rem_1fr] px-5 py-4 text-sm text-ink-700 sm:px-6">
                  <span className="font-semibold text-clay-600">{String(member.membershipNo).padStart(2, '0')}</span>
                  <span className="font-medium text-teal-950">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
