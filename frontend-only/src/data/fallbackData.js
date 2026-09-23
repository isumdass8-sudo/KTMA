// Fallback content mirrors database/schema.sql seed data.
// The site fetches from the Express + MySQL API first; if that request
// fails (e.g. backend not running yet), these keep the UI fully populated
// for demos, screenshots, and local development without a DB.

const galleryAssets = import.meta.glob('../assets/gallery/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const galleryImages = Object.fromEntries(
  Object.entries(galleryAssets).map(([path, image]) => [path.replace('../assets/gallery/', ''), image]),
);

export const resolveImage = (filename) => galleryImages[filename] || '';

export const fallbackCommittee = [
  { id: 1, full_name: 'Namal Danasekara', role: 'Main Advisor', term: '2026-2028', photo_url: 'executive-committee.jpg' },
  { id: 2, full_name: 'Chethiya Yatawara', role: 'Advisor', term: '2026-2028', photo_url: 'executive-committee.jpg' },
  { id: 3, full_name: 'Azard Suhood', role: 'President', term: '2026-2028', photo_url: 'executive-committee.jpg' },
  { id: 4, full_name: 'Sena Bandara', role: 'Secretary', term: '2026-2028', photo_url: 'executive-committee.jpg' },
  { id: 5, full_name: 'Priyantha Dissanayake', role: 'Treasurer', term: '2026-2028', photo_url: 'executive-committee.jpg' },
  { id: 6, full_name: 'Angelo Ferdinand', role: 'National Organizer', term: '2026-2028', photo_url: 'executive-committee.jpg' },
  { id: 7, full_name: 'Sampath Chaminda Lal', role: 'Vice Secretary', term: '2026-2028', photo_url: 'executive-committee.jpg' },
  { id: 8, full_name: 'W.M.J.P. Wijekoon', role: 'Vice President', term: '2026-2028', photo_url: 'executive-committee.jpg' },
  { id: 9, full_name: 'Nalin Nanayakkara', role: 'Accountant', term: '2026-2028', photo_url: 'executive-committee.jpg' },
];

export const fallbackMembershipList = [
  'Angelo Ferdinand',
  'H.M. Keerthi Bandara',
  'B. Azard Suhood',
  'W.M.J.P. Wijekoon',
  'R.A.C Theekshana Rajapaksha',
  'D.M.P.P Dissanayake',
  'H.D. Lalantha Perera',
  'M.A. Venura Kumara',
  'Sanjaya Madushanka Wijesinghe',
  'Mohomed Mahir Faiq Hussain',
  'Sampath Chaminda Lal',
  'Upul Chaminda Pushpa Kumara',
  'W.M.K.R. Senabandara',
  'Nipuna Viraj Senevirathne',
  'N.U.A. Nanayakkara',
  'Namal Bandara Dhanasekara',
  'Prasanna Romesh Rathnayake',
  'Isuru Udayanga Chandrathilake',
  'Akuratiya Kasun Lakmal',
  'Chethiya Yatawara',
  'Shashika Yatawara',
  'N.R. Rukshan Thilakarathne',
  'R.S. Shamika Kalidasa',
  'Lasantha Gangdara',
  'Gamini Thikalasiri',
  'Janaka Wasantha Bandara',
  'D.M.P.B. Dissanayake',
  'Mohammedu Rahuman Mohammedu Rasni',
  'M.R. Nuwan Senarathne',
].map((name, index) => ({ membershipNo: index + 1, name }));

export const fallbackBusinessMembers = [
  { id: 1, business_name: 'Sanura Silks', category: 'Retail & Handloom', description: 'Traditional Kandyan handloom textiles and silk products supporting local artisans.', location: 'Kandy City Centre', featured: 1 },
  { id: 2, business_name: 'Abey Silk Centre', category: 'Retail & Handloom', description: 'Fine silks and souvenirs for the discerning traveller.', location: 'Kandy', featured: 0 },
  { id: 3, business_name: 'Eventro Photography', category: 'Event Services', description: 'Official event and wedding photography partner for KTMA activations.', location: 'Kandy', featured: 0 },
  { id: 4, business_name: 'Oshin Silva & Co.', category: 'Hospitality Partner', description: 'Hospitality and travel trade partner supporting KTMA member events.', location: 'Kandy', featured: 0 },
];

export const fallbackDestinations = [
  {
    id: 1,
    name: 'Temple of the Sacred Tooth Relic',
    summary: "Sri Lanka's most venerated Buddhist shrine.",
    description:
      'Set on the edge of Kandy Lake, the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) is the spiritual heart of the city and a UNESCO World Heritage Site, drawing pilgrims and travellers from across the globe.',
    image_url: '987654321.jpg',
    category: 'Heritage',
  },
  {
    id: 2,
    name: 'Nine Arch Bridge & Hill Country Rail',
    summary: "An icon of Sri Lanka's hill country.",
    description:
      'Wind through misty tea estates aboard the scenic highland railway, crossing colonial-era viaducts framed by emerald plantations.',
    image_url: 'nine-arche.jpg',
    category: 'Nature',
  },
  {
    id: 3,
    name: 'Royal Botanical Gardens, Peradeniya',
    summary: 'A living museum of tropical flora.',
    description:
      "Just outside Kandy, 147 acres of orchid houses, giant bamboo, and a canopy of century-old trees make this one of Asia's finest botanical gardens.",
    image_url: 'event-gathering.jpg',
    category: 'Nature',
  },
  {
    id: 4,
    name: 'Traditional Kandyan Culture',
    summary: 'Dance, drumming, and centuries of ceremony.',
    description:
      'Experience the rhythm of the Kandyan dance tradition — vibrant costumes, ritual drumming, and choreography passed down through generations.',
    image_url: 'my 7.jpg',
    category: 'Culture',
  },
];

export const fallbackEvents = [
  {
    id: 1,
    title: 'KTMA Cricket Tournament',
    event_date: '2025-12-17',
    location: 'Katukelle Grounds, Kandy',
    summary:
      'Members, hoteliers and tourism partners came together for a friendly cricket tournament celebrating the KTMA community, complete with traditional dance performances and an awards presentation.',
    cover_image: 'event-team-panorama.jpg',
  },
  {
    id: 2,
    title: 'World Tourism Day 2023',
    event_date: '2023-09-27',
    location: 'Kandy City',
    summary:
      'KTMA joined the global "I Love Sri Lanka" campaign for World Tourism Day, welcoming visitors and promoting Kandy as a premier cultural destination.',
    cover_image: 'tourism-worldtourismday.jpg',
  },
  {
    id: 3,
    title: '4th Anniversary Celebration',
    event_date: null,
    location: 'Kandy',
    summary: 'KTMA members and tourism partners came together to celebrate the association\'s fourth anniversary.',
    cover_image: '4th anniversary celebration/IMG_8100.jpg',
  },
  {
    id: 4,
    title: '2025 Tourism Day',
    event_date: '2025-09-27',
    location: 'Kandy',
    summary: 'A collection of moments from KTMA\'s 2025 Tourism Day activities and community celebrations.',
    cover_image: '2025 tourism day/555386059_122181577148552693_2812107753044883980_n.jpg',
  },
  {
    id: 5,
    title: 'Cancer Hospital Donation',
    event_date: null,
    location: 'Kandy',
    summary: 'KTMA members supported the local community through a donation to the cancer hospital.',
    cover_image: 'cancer hospital donation/1000231154.jpg',
  },
  {
    id: 6,
    title: 'KTMS Super Cup 2025',
    event_date: '2025-12-17',
    location: 'Kandy',
    summary: 'Tourism partners and members came together for the KTMS Super Cup 2025.',
    cover_image: 'KTMS super cup 2025/556864498_122182986866552693_449550902081314826_n.jpg',
  },
];

export const fallbackGallery = [
  { id: 1, title: 'Cricket Tournament — Team Panorama', category: 'Events', image_url: 'event-team-panorama.jpg', event_id: 1 },
  { id: 2, title: 'Cricket Tournament — Full Squad', category: 'Events', image_url: 'event-team-full.jpg', event_id: 1 },
  { id: 3, title: 'Cricket Tournament — Match Action', category: 'Events', image_url: 'event-cricket-action.jpg', event_id: 1 },
  { id: 4, title: 'Cultural Dance Performance', category: 'Culture', image_url: 'event-cultural-dance.jpg', event_id: 1 },
  { id: 5, title: 'Members Gathering', category: 'Events', image_url: 'event-gathering.jpg', event_id: 1 },
  { id: 6, title: 'Awards Presentation', category: 'Events', image_url: 'event-awards-tent.jpg', event_id: 1 },
  { id: 7, title: 'Team at Dusk', category: 'Events', image_url: 'event-team-dusk.jpg', event_id: 1 },
  { id: 8, title: 'Association Members', category: 'Events', image_url: 'event-group-1.jpg', event_id: 1 },
  { id: 9, title: 'Association Duo', category: 'Events', image_url: 'event-duo.jpg', event_id: 1 },
  { id: 10, title: 'World Tourism Day — Visit Sri Lanka', category: 'Culture', image_url: 'tourism-worldtourismday.jpg', event_id: 2 },
  { id: 11, title: 'World Tourism Day — Nine Arch Bridge', category: 'Culture', image_url: 'nine-arche.jpg', event_id: 2 },
  { id: 12, title: 'Executive Committee 2026–2028', category: 'Association', image_url: 'executive-committee.jpg', event_id: null },
  { id: 13, title: 'Kandyan Cultural Performance', category: 'Culture', image_url: 'my 1.jpg', event_id: 1 },
  { id: 14, title: 'KTMA Members at the Grounds', category: 'Events', image_url: 'my 2.jpg', event_id: 1 },
  { id: 15, title: 'Traditional Kandyan Dance', category: 'Culture', image_url: 'my 3.jpg', event_id: 1 },
  { id: 16, title: 'Cricket Tournament Match Action', category: 'Events', image_url: 'my 4.jpg', event_id: 1 },
  { id: 17, title: 'Community Coconut Stall', category: 'Community', image_url: 'my 5.jpg', event_id: null },
  { id: 18, title: 'Community Outreach at Kandy Branch', category: 'Community', image_url: 'my 6.jpg', event_id: null },
  { id: 19, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555386059_122181577148552693_2812107753044883980_n.jpg', event_id: 4 },
  { id: 20, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555421438_122181574718552693_4828852258525659227_n.jpg', event_id: 4 },
  { id: 21, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555429194_122181573950552693_6414731051361179122_n.jpg', event_id: 4 },
  { id: 22, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555438979_122181576632552693_9146839297011914697_n.jpg', event_id: 4 },
  { id: 23, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555462317_122181577034552693_387339891141286056_n.jpg', event_id: 4 },
  { id: 24, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555463608_122181578870552693_2915581491771757520_n.jpg', event_id: 4 },
  { id: 25, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555464885_122181577622552693_6815493859937549497_n.jpg', event_id: 4 },
  { id: 26, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555524259_122181576500552693_634261325409657032_n.jpg', event_id: 4 },
  { id: 27, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555528544_122181578150552693_8672564356964958649_n.jpg', event_id: 4 },
  { id: 28, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555536833_122181577694552693_2566349200812281467_n.jpg', event_id: 4 },
  { id: 29, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555551741_122181573638552693_4118145034068082669_n.jpg', event_id: 4 },
  { id: 30, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555551752_122181573836552693_6856062072522229320_n.jpg', event_id: 4 },
  { id: 31, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555561050_122181579206552693_5229058446013959906_n.jpg', event_id: 4 },
  { id: 32, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555676040_122181573896552693_8886439934522056023_n.jpg', event_id: 4 },
  { id: 33, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555721871_122181574274552693_829214457875662542_n.jpg', event_id: 4 },
  { id: 34, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555736018_122181574028552693_5322815527985249908_n.jpg', event_id: 4 },
  { id: 35, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/555897400_122181577070552693_1682442959656659657_n.jpg', event_id: 4 },
  { id: 36, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/556009303_122181574868552693_5351611086937685828_n.jpg', event_id: 4 },
  { id: 37, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/556022968_122181575342552693_7630054930916065622_n.jpg', event_id: 4 },
  { id: 38, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/556067479_122181577760552693_2603450418034892836_n.jpg', event_id: 4 },
  { id: 39, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/556092953_122181576740552693_5982921461064084473_n.jpg', event_id: 4 },
  { id: 40, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/556128305_122181574622552693_6931311984029396918_n.jpg', event_id: 4 },
  { id: 41, title: '2025 Tourism Day', category: 'Culture', image_url: '2025 tourism day/557246947_122181575348552693_4814487941348033335_n.jpg', event_id: 4 },
  { id: 42, title: 'Cancer Hospital Donation', category: 'Community', image_url: 'cancer hospital donation/1000231154.jpg', event_id: 5 },
  { id: 43, title: 'Cancer Hospital Donation', category: 'Community', image_url: 'cancer hospital donation/1000231155.jpg', event_id: 5 },
  { id: 44, title: 'Cancer Hospital Donation', category: 'Community', image_url: 'cancer hospital donation/1000231156.jpg', event_id: 5 },
  { id: 45, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/556864498_122182986866552693_449550902081314826_n.jpg', event_id: 6 },
  { id: 46, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/556966012_122182973450552693_7007621868107147048_n.jpg', event_id: 6 },
  { id: 47, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557196832_122182976756552693_7993573628305788186_n.jpg', event_id: 6 },
  { id: 48, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557547990_122182974686552693_7784515366954656221_n.jpg', event_id: 6 },
  { id: 49, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557548043_122182977776552693_9124923879324613296_n.jpg', event_id: 6 },
  { id: 50, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557548049_122182975610552693_8178154444505152393_n (1).jpg', event_id: 6 },
  { id: 51, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557548049_122182975610552693_8178154444505152393_n.jpg', event_id: 6 },
  { id: 52, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557589881_122182974332552693_1906047193628438037_n.jpg', event_id: 6 },
  { id: 53, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557596683_122182973798552693_1485353978197176170_n.jpg', event_id: 6 },
  { id: 54, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557641815_122182974020552693_93747268584011504_n.jpg', event_id: 6 },
  { id: 55, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557712904_122182986002552693_7974435262596056077_n.jpg', event_id: 6 },
  { id: 56, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557747417_122182986812552693_2752846537995742716_n.jpg', event_id: 6 },
  { id: 57, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557750878_122182975424552693_6051663973900749777_n.jpg', event_id: 6 },
  { id: 58, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557849732_122182983320552693_5651577747628829140_n.jpg', event_id: 6 },
  { id: 59, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557855664_122182974014552693_1407120832688118826_n.jpg', event_id: 6 },
  { id: 60, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557950763_122182986902552693_1084690316075947504_n.jpg', event_id: 6 },
  { id: 61, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557999916_122182977068552693_5515773511328554527_n (1).jpg', event_id: 6 },
  { id: 62, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/557999916_122182977068552693_5515773511328554527_n.jpg', event_id: 6 },
  { id: 63, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558011019_122182973726552693_5957614870312572567_n.jpg', event_id: 6 },
  { id: 64, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558300479_122182985936552693_7725886452763668485_n.jpg', event_id: 6 },
  { id: 65, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558638979_122182974248552693_6124996434681258798_n.jpg', event_id: 6 },
  { id: 66, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558645615_122182973636552693_4170445450855007076_n (1).jpg', event_id: 6 },
  { id: 67, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558645615_122182973636552693_4170445450855007076_n.jpg', event_id: 6 },
  { id: 68, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558655482_122182980194552693_676553120454973065_n.jpg', event_id: 6 },
  { id: 69, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558911062_122182983248552693_6823283500018220020_n.jpg', event_id: 6 },
  { id: 70, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558961921_122182988630552693_4270472376753404344_n.jpg', event_id: 6 },
  { id: 71, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/558965554_122182982822552693_4562209514804264301_n.jpg', event_id: 6 },
  { id: 72, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/559355312_122182974176552693_8544525325543506424_n.jpg', event_id: 6 },
  { id: 73, title: 'KTMS Super Cup 2025', category: 'Events', image_url: 'KTMS super cup 2025/559799104_122182975928552693_7153601957938050187_n.jpg', event_id: 6 },
  { id: 74, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8100.jpg', event_id: 3 },
  { id: 75, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8104.jpg', event_id: 3 },
  { id: 76, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8152.jpg', event_id: 3 },
  { id: 77, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8156.jpg', event_id: 3 },
  { id: 78, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8160.jpg', event_id: 3 },
  { id: 79, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8171.jpg', event_id: 3 },
  { id: 80, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8182.jpg', event_id: 3 },
  { id: 81, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8229.jpg', event_id: 3 },
  { id: 82, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8240.jpg', event_id: 3 },
  { id: 83, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8352 (1).jpg', event_id: 3 },
  { id: 84, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8352.jpg', event_id: 3 },
  { id: 85, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8384.jpg', event_id: 3 },
  { id: 86, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8398.jpg', event_id: 3 },
  { id: 87, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8439.jpg', event_id: 3 },
  { id: 88, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8584.jpg', event_id: 3 },
  { id: 89, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8586.jpg', event_id: 3 },
  { id: 90, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8699.jpg', event_id: 3 },
  { id: 91, title: '4th Anniversary Celebration', category: 'Events', image_url: '4th anniversary celebration/IMG_8773.jpg', event_id: 3 },
];

export const getFallbackEventWithGallery = (id) => {
  const event = fallbackEvents.find((e) => String(e.id) === String(id));
  if (!event) return null;
  const gallery = fallbackGallery.filter((g) => String(g.event_id) === String(id));
  return { ...event, gallery };
};
