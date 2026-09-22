/**
 * Single source of truth for the /events landing page.
 * Edit copy, stats, case studies, speakers, and links here.
 *
 * NOTE: Values wrapped in obvious placeholders (RESUME_URL, TICKET_URL, etc.)
 * are meant to be replaced with real URLs.
 */

export const events = {
  // ---- Links & contact (replace placeholders with real values) ----
  links: {
    site: "https://andixd.com",
    email: "hello@andixd.com", // TODO: replace with your contact email
    resume: "#resume", // TODO: replace with a link to your resume PDF
    linkedin: "https://www.linkedin.com/in/andigalpern", // TODO: confirm handle
    cascade: "https://cascadesf.com",
    beat: "https://cascadesf.com/beat",
  },

  // ---- 1. Hero ----
  hero: {
    kicker: "Event & Field Marketing",
    headline: "I build events people actually show up for.",
    subhead:
      "Andi Galpern has spent 15 years producing conferences, community events, and experiences for designers and technologists in San Francisco, from first idea to final load-out.",
    portrait: {
      src: "/events/andi-portrait.png",
      alt: "Portrait of Andi Galpern, event and field marketing leader, outdoors in front of greenery",
    },
  },

  // ---- 2. Stats ----
  stats: [
    { value: 15, suffix: "", label: "Years running" },
    { value: 200, suffix: "+", label: "Events produced" },
    { value: 10, suffix: "", label: "Multi-day conferences built from the ground up" },
    { value: 10000, suffix: "+", label: "Community members" },
    { value: 15900, suffix: "+", label: "Tickets sold" },
  ] as const,
  statsFootnote: "Community-funded through ticket sales, not sponsor-dependent.",

  // ---- 3. What I do (full lifecycle) ----
  lifecycle: {
    intro: "I don't hand off pieces. I run the whole thing.",
    phases: [
      {
        phase: "01",
        title: "Strategy",
        items: ["Concept development", "Programming & topic curation", "Positioning & messaging"],
      },
      {
        phase: "02",
        title: "Talent & partners",
        items: ["Speaker & mentor recruiting", "Speaker coaching", "Sponsor & venue partnerships"],
      },
      {
        phase: "03",
        title: "Marketing",
        items: ["Email & social campaigns", "Promotional design", "Ticket pricing & registration"],
      },
      {
        phase: "04",
        title: "Production",
        items: ["Budgets", "Catering & AV", "Logistics, volunteers & onsite production"],
      },
    ],
  },

  // ---- 4. Featured case studies ----
  caseStudies: [
    {
      title: "Designing with AI",
      image: "/events/gallery-crowd.png",
      imageAlt: "A full evening conference audience watching a speaker under warm stage lighting",
      story:
        "A three-night, after-work conference on design, AI, and technology — produced years before generative AI went mainstream. It sold out all three nights.",
      metrics: ["3 nights", "~300 attendees / night", "Sold out"],
    },
    {
      title: "Mentor Night at Adobe SF",
      image: "/events/gallery-mentor.png",
      imageAlt: "Professionals talking in small groups at round tables during a mentorship event",
      story:
        "A large-scale mentorship event at Adobe's San Francisco headquarters, pairing seasoned mentors with designers looking to grow.",
      metrics: ["~45 mentors", "~220 attendees"],
    },
  ],

  // ---- 5. Cascade SF ----
  cascade: {
    title: "Founder, Cascade SF",
    period: "2011 – present",
    copy: "I founded Cascade SF in 2011 and grew it into a community of more than 10,000 designers and technology professionals. Our multi-night series — including UX of VR, Growth Design, Data & Design, and Design + AI — consistently drew the biggest crowds. Our current programming focuses on how designers use AI and how product teams design agentic experiences.",
    image: "/events/andi-uxnight.jpg",
    imageAlt: "Andi Galpern speaking on stage at UXNight, a Cascade SF event, in front of a packed crowd",
    series: ["UX of VR", "Growth Design", "Data & Design", "Design + AI"],
    beat: {
      title: "The Beat",
      copy: "Cascade SF's anonymous research survey on how designers really work.",
    },
  },

  // ---- 6. Speakers & partners ----
  onStage: {
    heading: "Who's been on stage",
    blurb:
      "Senior designers and leaders from Google, Apple, Amazon, Salesforce, YouTube, Workday, Chase, and Cisco.",
    companies: ["Google", "Apple", "Amazon", "Salesforce", "YouTube", "Workday", "Chase", "Cisco"],
    speakers: ["Alan Cooper", "Daniel Burka", "Mark Otto", "Julia Melton", "Josh Constine", "Eva Galperin"],
    partnersLabel: "Partners & sponsors",
    partners: ["Adobe", "Microsoft Reactor", "InVision", "WalkMe", "Proto.io"],
  },

  // ---- 7. Also ----
  also: {
    title: "Women Techmakers Ambassador, Google",
    copy: "One of about 1,000 ambassadors worldwide, supporting women in technology through community events.",
    image: "/events/andi-google-io.jpg",
    imageAlt: "Andi Galpern at Google I/O standing beside a large green Android mascot statue",
  },

  // ---- 8. Gallery ----
  gallery: [
    { src: "/events/gallery-crowd.png", alt: "Engaged audience seated at an evening technology and design conference", tall: false },
    { src: "/events/gallery-panel.png", alt: "Four speakers on stage during a panel discussion holding microphones", tall: true },
    { src: "/events/gallery-mentor.png", alt: "Small groups of professionals talking at round tables during a mentorship event", tall: false },
    { src: "/events/andi-google-io.jpg", alt: "Andi Galpern at Google I/O beside a giant Android mascot statue", tall: true },
    { src: "/events/andi-uxnight.jpg", alt: "Andi Galpern speaking on stage at UXNight, a Cascade SF event", tall: false },
    { src: "/events/gallery-registration.png", alt: "Event registration desk with name badges and lanyards laid out", tall: true },
    { src: "/events/gallery-networking.png", alt: "Evening networking reception with attendees holding drinks", tall: false },
    { src: "/events/gallery-keynote.png", alt: "Packed keynote room seen from the back facing a bright stage", tall: true },
    { src: "/events/gallery-workshop.png", alt: "Hands-on design workshop with laptops and colorful sticky notes", tall: false },
    { src: "/events/gallery-backstage.png", alt: "Organizers with headsets and clipboards coordinating backstage", tall: false },
    { src: "/events/andi-portrait.png", alt: "Portrait of Andi Galpern outdoors in front of greenery", tall: true },
  ],

  // ---- 9. Testimonials (placeholder — fill in later) ----
  testimonials: [
    { quote: "[TESTIMONIAL]", name: "[Name]", title: "[Title]", company: "[Company]" },
    { quote: "[TESTIMONIAL]", name: "[Name]", title: "[Title]", company: "[Company]" },
    { quote: "[TESTIMONIAL]", name: "[Name]", title: "[Title]", company: "[Company]" },
  ],

  // ---- 10. Closing CTA ----
  closing: {
    headline: "Planning something people will remember?",
    subhead:
      "I'm open to full-time event and field marketing roles, plus select event partnerships.",
  },
} as const

export type CaseStudy = (typeof events.caseStudies)[number]
export type Testimonial = (typeof events.testimonials)[number]
