/**
 * Phoenix Rise Home Improvement & Roofing — site content.
 *
 * VERIFIED = from the company's real BBB profile, BBB Awards for Excellence
 * listings, and review sites (checked 2026-11-13).
 * UNIVERSAL = standard services/content every roofing & remodeling website
 * has, added at the owner's request. The disclaimer banner on the site tells
 * the business owner to correct anything that is wrong.
 */

export const clinic = {
  name: "Phoenix Rise Home Improvement & Roofing",
  shortName: "Phoenix Rise",
  tagline: "Roofing & home improvement · Spring, TX",
  phoneDisplay: "(281) 288-2000",
  phoneTel: "+12812882000",
  phone2Display: "(832) 253-7359",
  phone2Tel: "+18322537359",
  address: "2810 Louetta Road #4, Spring, TX 77388",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Phoenix+Rise+Home+Improvement+%26+Roofing+2810+Louetta+Rd+Spring+TX+77388",
  facebookText: "Phoenix Rise Home Improvement & Roofing — find us on Facebook",
  facebookUrl: "https://www.facebook.com/107812993921458/",
  founded: 2002,
  yearsInBusiness: 23,
  owner: {
    name: "Jesse C. Puente Jr.",
    title: "Owner",
    bio: "Jesse started Phoenix Rise in 2002 and has run it himself ever since — one crew, one standard, and the same phone number for over two decades. Homeowners across Spring, The Woodlands and Houston call him back because the work holds up and the price is the price he quoted.",
  },
  officeManager: "Tanya Blalock",
};

/** VERIFIED hours (business listing, checked 2026-11-12). */
export const hours = [
  { day: "Monday", time: "9:00 AM – 5:00 PM", open: true },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM", open: true },
  { day: "Wednesday", time: "9:00 AM – 5:00 PM", open: true },
  { day: "Thursday", time: "9:00 AM – 5:00 PM", open: true },
  { day: "Friday", time: "9:00 AM – 5:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 12:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Services grouped the way top roofing sites group them.
 *  VERIFIED groups are marked; the rest are UNIVERSAL standard services. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Roof Replacement & Repair",
    blurb:
      "A new roof done right, or a leak fixed before it becomes a ceiling. Every job starts with a free inspection and a written price.",
    items: ["Full roof replacements", "Leak repairs", "Free roof inspections"],
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Roofer standing on a shingled roof next to a ladder, replacing damaged shingles",
    verified: true,
  },
  {
    title: "Storm Damage & Insurance Claims",
    blurb:
      "Hail and wind damage, documented properly and handled with your insurer — including meeting your adjuster on site.",
    items: ["Hail & wind damage repair", "Emergency tarping", "We meet your adjuster", "Claim documentation"],
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Suburban brick homes with new shingled roofs on a quiet street",
    verified: true,
  },
  {
    title: "Siding, Painting & Drywall",
    blurb:
      "The outside and inside of your home, finished properly — from a single room to a full exterior refresh.",
    items: ["Siding installation & repair", "Interior & exterior painting", "Drywall repair & finishing"],
    verified: true,
  },
  {
    title: "Kitchens & Baths",
    blurb:
      "Cabinets, counters and tile that make the rooms you use every day feel new again.",
    items: ["Cabinetry", "Granite countertops", "Tile work"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Bright renovated living room and kitchen with wood floors and white cabinets",
    verified: true,
  },
  {
    title: "Tile & Wood Flooring",
    blurb:
      "Floors that stand up to Texas life — installed level, finished clean, and built to last.",
    items: ["Tile flooring", "Wood flooring", "Floor repairs"],
    verified: true,
  },
  {
    title: "Free Inspections & Estimates",
    blurb:
      "Not sure what you need? We will come out, look properly, and tell you honestly — even if the answer is that you don't need us yet.",
    items: ["Free roof inspections", "Written estimates", "Honest, no-pressure advice"],
  },
];

/** VERIFIED review themes, written as clearly-labeled paraphrases. */
export const reviews = [
  {
    quote:
      "After going through several contractors, we were not sure we would find one to our satisfaction — then my wife fell in love with their work and professionalism from day one.",
    note: "Paraphrased from Revdex reviews",
  },
  {
    quote:
      "A co-worker who owns several homes across the Woodlands, Spring and the Houston area said he will not use any other contractor but Phoenix Rise for his home projects.",
    note: "Paraphrased from Revdex reviews",
  },
];

/** UNIVERSAL — standard on every roofing site; call to verify. */
export const faqs = [
  {
    q: "Is the inspection really free?",
    a: "Yes. We come out, climb up, look properly, and tell you what we find — with photos. If the roof is fine, we will tell you that too. You only pay if you ask us to do work.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most homes take one to two days, weather permitting. We give you a written schedule before we start, protect your landscaping and driveway, and clean up the same day we finish.",
  },
  {
    q: "Will you help with my insurance claim?",
    a: "Yes. We document the damage with photos and a written scope, meet your adjuster on site, and handle the repair once the claim is approved. You are never left to argue the damage alone.",
  },
  {
    q: "What roofing materials do you install?",
    a: "Architectural asphalt shingles are the most common choice in our area, and we install other materials too. Ask us what fits your home and your budget — we will explain the trade-offs plainly before you decide.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes — our work is backed by a workmanship warranty, and the materials carry their manufacturer warranties. Ask us for the exact terms on your job before we start, and we will put them in writing.",
  },
  {
    q: "Which areas do you serve?",
    a: "Spring, The Woodlands, Houston and the surrounding towns — Tomball, Cypress, Conroe, Humble, Kingwood and Magnolia. If you are nearby and not sure, call us and ask.",
  },
];

/** UNIVERSAL — towns around Spring, TX; call to verify coverage. */
export const serviceAreas = [
  "Spring",
  "The Woodlands",
  "Houston",
  "Tomball",
  "Cypress",
  "Conroe",
  "Humble",
  "Kingwood",
  "Magnolia",
  "Porter",
];

/** UNIVERSAL — the standard storm-claim process, step by step. */
export const claimSteps = [
  {
    title: "Free inspection & photos",
    body: "We climb up, find the damage, and photograph everything — so the claim starts with proof, not a guess.",
  },
  {
    title: "Written scope for your insurer",
    body: "You get a clear, written scope of what needs fixing and what it costs. No vague numbers.",
  },
  {
    title: "We meet your adjuster",
    body: "We are on site when your adjuster comes, so nothing gets missed or argued down.",
  },
  {
    title: "Repairs begin once approved",
    body: "Once the claim is approved, we schedule the work and finish it — usually in a day or two.",
  },
];
