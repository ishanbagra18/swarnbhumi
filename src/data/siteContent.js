export const brand = {
  name: 'Swarnbhoomi Properties',
  tagline: 'Luxury land deals. Local trust. Transparent guidance.',
  story:
    'A trusted real estate firm in Rajasthan helping clients secure residential plots, commercial properties, and agricultural land across the Kalwar-Bhambori belt near Jaipur.',
  mission:
    'We pair local market expertise with legal documentation support so every transaction feels clear, secure, and professionally guided.',
};

export const phones = ['7976203143', '9511697601', '9784010115'];
export const emails = ['adwaitsharma116@gmail.com', 'sryuvaan15@gmail.com'];
export const address = 'Bhambori Rd, Deendayal Nagar, Kalwar, Bhambori, Rajasthan 303706';

export const serviceCards = [
  {
    title: 'Our Mission',
    text: 'Make premium property buying in Rajasthan feel trustworthy, calm, and fully guided from first call to final paperwork.',
    icon: 'compass',
  },
  {
    title: 'Why Choose Us',
    text: 'Transparent dealings, deep local knowledge, and 24/7 availability for site visits, calls, and urgent coordination.',
    icon: 'shield',
  },
  {
    title: 'Our Services',
    text: 'Residential plots, commercial properties, agricultural land, legal documentation support, and site visit assistance.',
    icon: 'building',
  },
];

export const contactItems = [
  { label: 'Address', value: address, icon: 'map' },
  { label: 'Hours', value: 'Open 24 Hours', icon: 'clock', badge: true },
  { label: 'Phone', value: phones, icon: 'phone' },
  { label: 'Email', value: emails, icon: 'mail' },
];

const photoUrl = (fileName) => new URL(`../../photos/${fileName}`, import.meta.url).href;

export const galleryItems = [
  { title: 'Property Listing', text: 'Premium land listing with a polished presentation.', image: photoUrl('1.png'), size: 'xl:col-span-2 xl:row-span-2' },
  { title: 'New Plot Available', text: 'Fresh opportunity near Kalwar Road with strong access.', image: photoUrl('2.png'), size: 'xl:row-span-2' },
  { title: 'Site Visit', text: 'On-ground walkthroughs with practical local support.', image: photoUrl('3.png'), size: 'xl:col-span-2' },
  { title: 'Office Snapshot', text: 'A clean, professional workspace for buyer consultations.', image: photoUrl('4.png'), size: 'xl:row-span-2' },
];

export const updates = [
  'New plots available near Kalwar Road - contact us today for current pricing and availability.',
  'Site visits are being scheduled daily across the Bhambori belt for serious buyers.',
  'We are assisting clients with transparent documentation and property verification this week.',
];

export const clientNotes = [
  {
    name: 'Ishan Bagra',
    phone: phones[0],
    note: 'Professional guidance, fast follow-up, and a smooth site visit experience.',
  },
  {
    name: 'Shankar Lal Sharma',
    phone: phones[1],
    note: 'Clear property details and honest local support for buyers near Kalwar Road.',
  },
  {
    name: 'Shyam Sharma',
    phone: phones[2],
    note: 'Helpful team, transparent communication, and strong documentation support.',
  },
];