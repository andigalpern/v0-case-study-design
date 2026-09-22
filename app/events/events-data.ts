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
      image: "/events/designing-with-ai.jpg",
      imageAlt: "A packed auditorium of hundreds of designers and technologists at a major tech company headquarters, facing a lit stage with panelists for Designing with AI",
      story:
        "A three-night, after-work conference on design, AI, and technology — produced years before generative AI went mainstream. It sold out all three nights.",
      metrics: ["3 nights", "~300 attendees / night", "Sold out"],
    },
    {
      title: "Mentor Night at Adobe HQ",
      image: "/events/mentor-night.jpg",
      imageAlt: "A large group of mentors and designers posing together for a photo at Mentor Night, hosted at Adobe's headquarters",
      story:
        "A large-scale mentorship event at Adobe's headquarters, pairing seasoned mentors with designers looking to grow.",
      metrics: ["~45 mentors", "~220 attendees"],
    },
  ],

  // ---- 4b. Virtual events ----
  virtual: {
    title: "Virtual events",
    copy: "When the world moved online, I rebuilt the whole production stack from home — lighting, audio, streaming, and run-of-show — and kept the community connected. I produced live talks, panels, and workshops for thousands of remote attendees without missing a beat.",
    image: "/events/virtual-events.jpg",
    imageAlt: "Andi Galpern giving two thumbs up at her home broadcast studio with a ring light, video lights, mic, and laptop",
    highlights: ["Live-streamed talks & panels", "Remote speaker coaching", "Interactive online workshops"],
  },

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
    { src: "/events/photo-panel-wide.jpg", alt: "Four panelists on stage in front of an orange backdrop with a full audience seated at a Cascade SF event", tall: false },
    { src: "/events/photo-andi-stage.jpg", alt: "Andi Galpern on stage with a handheld microphone, gesturing mid-talk", tall: true },
    { src: "/events/photo-networking-couches.jpg", alt: "Attendees networking on colorful couches with drinks at a packed reception", tall: false },
  { src: "/events/cascade-panel-stools.jpg", alt: "Three panelists seated on stools while Andi Galpern holds a microphone with her arm raised in front of a blue Cascade SF lightning-bolt wall", tall: false },
    { src: "/events/photo-panel-andi.jpg", alt: "Andi Galpern laughing beside a co-panelist at the microphones during a panel discussion", tall: true },
    { src: "/events/photo-audience.jpg", alt: "Large audience seated with laptops open in an open loft event space", tall: false },
    { src: "/events/photo-conversation.jpg", alt: "Three attendees in conversation at an event in a brick-and-beam venue", tall: true },
    { src: "/events/photo-catering.jpg", alt: "A caterer plating a buffet spread at a Cascade SF event", tall: false },
    { src: "/events/photo-attendees-laptops.jpg", alt: "Attendees working on laptops in the audience during a talk", tall: false },
    { src: "/events/photo-candid-carry.jpg", alt: "A playful candid of an attendee carrying Andi Galpern in a loft event venue", tall: true },
  ],

  // ---- 9. Testimonials ----
  testimonials: [
    {
      quote:
        "UXNight is by far the best event I had a chance to speak at. Well organised (up to every single, tiny, detail), extremely professional and super-successful in gathering large crowd of super-smart designers.",
      name: "Marcin Treder",
      title: "Director of User Experience",
      company: "Google Play",
    },
    {
      quote:
        "Not only is Andi able to logistically pull off sell-out-sized events, but she also does a fantastic job at curating, shaping and honing the content itself.",
      name: "Nicholas Cottrell",
      title: "Principal Operator",
      company: "3DMATH",
    },
    {
      quote:
        "She went above and beyond by jumping in and helping me not just with the flow and content of the presentation, but with the visual design of the slides. The finished product was significantly better than it would have been without her.",
      name: "Jane Davis",
      title: "Senior Product Manager",
      company: "Salesforce",
    },
    {
      quote:
        "Andi's Cascade events are an essential portion of any designer's calendar who hopes to keep up with local trends and network with the best collection of talent in the bay.",
      name: "Jamie Martin",
      title: "Head of Design",
      company: "Reka AI",
    },
    {
      quote:
        "I am impressed how she was able to build CASCADE SF from zero to one of the most engaged entrepreneurial groups in SF/Bay Area… I also recommend Andi as a business partner without any reservation.",
      name: "Vasil Azarov",
      title: "Founder",
      company: "Growth Blazers",
    },
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
