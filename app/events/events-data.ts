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
    email: "andi@andixd.com",
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
      "Hi, I'm Andi Galpern! I'm the Founder of Cascade SF, a design and technology organization based in San Francisco. For the past 15 years, I've brought speakers, partners, volunteers, and communities together to produce conferences and events that connect designers and technologists. I love turning ideas into memorable experiences that spark conversations, build relationships, and inspire new possibilities.",
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

  // ---- 3. What I do (full lifecycle) ----
  lifecycle: {
    heading: "Great events are a team sport.",
    intro: "I lead every phase, and I never do it alone. Here's who's in the room at each step.",
    phases: [
      {
        phase: "01",
        title: "Strategy",
        collab:
          "With host companies and partners to shape the theme, audience, and goals, and with the community to choose topics people actually want.",
        items: ["Concept development", "Programming & topic curation", "Positioning & messaging"],
      },
      {
        phase: "02",
        title: "Speakers",
        collab:
          "1:1 with every speaker: shaping the story, tightening the flow, designing slides, and rehearsing until they're confident on stage.",
        items: ["Speaker & mentor recruiting", "Speaker coaching", "Sponsor & venue partnerships"],
      },
      {
        phase: "03",
        title: "Marketing",
        collab:
          "With partner marketing teams on co-promotion, plus email, social, and community channels to fill the room.",
        items: ["Email & social campaigns", "Promotional design", "Ticket pricing & registration"],
      },
      {
        phase: "04",
        title: "Production",
        collab:
          "With venue teams, caterers, AV crews, and volunteers to make the night run smoothly, from registration to the last goodbye.",
        items: ["Budgets", "Catering & AV", "Logistics, volunteers & onsite production"],
      },
    ],
  },

  // ---- 3b. It takes a crew ----
  crew: {
    title: "It takes a crew.",
    copy: "Every event is a small team working as one. Host companies open their doors, speakers bring their best thinking, and volunteers run registration, wrangle mics, and keep the energy up. My job is to make sure everyone knows the plan, has what they need, and feels like part of something worth showing up for.",
  image: "/events/crew-audience.jpg",
  imageAlt: "A packed, attentive audience wearing name tags seated in rows at a Cascade SF event in a modern loft space",
    // Optional stat chips — fill in a value to show a chip; leave value as "" to hide it.
    stats: [
      { value: "", label: "speakers coached" },
      { value: "", label: "volunteers" },
      { value: "", label: "host companies" },
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
      metrics: ["3 nights", "~500 attendees / night", "Sold out"],
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
  copy: "Cascade SF is a San Francisco community for designers, product managers, and engineers who want to learn from each other, meet the people doing the work, and help each other grow. I started it in 2011 because I was looking for design events and couldn't find the ones I wanted, so I started building them. Fifteen years later, it's a community of more than 10,000 people.",
  image: "/events/andi-uxnight.jpg",
  imageAlt: "Andi Galpern speaking on stage at UXNight, a Cascade SF event, in front of a packed crowd",
  whatWeDo: [
  {
  title: "Talks & panels (UXNight)",
  copy: "After-work events where practitioners share what they're actually building, followed by time to meet the room.",
  },
  {
  title: "Mentor Nights",
  copy: "Designers bring their work and get 1:1 feedback from senior mentors, hosted at companies like Adobe and Microsoft Reactor.",
  },
  {
  title: "Multi-night conferences",
  copy: "Deep-dive series on emerging topics, including UX of VR, Growth Design, Data & Design, and Design + AI.",
  },
  ],
  pullQuote:
  "I used to only get big name speakers. Now I help designers, product managers, and people in tech tell their stories, so they can share their knowledge and we can create more people like them. It's about creating new leaders, and creating content the industry needs.",
  beat: {
  title: "The Beat",
  copy: "Cascade SF's anonymous research survey on how designers really work.",
  },
  },

  // ---- 5b. Podcast ----
  podcast: {
  heading: "Listen: how I design events so everybody wins.",
  label: "Featured on the freeCodeCamp Podcast · Ep. 79",
  copy: "I talked with freeCodeCamp about how Cascade SF started, what makes an event worth showing up for, and why great events are designed content-first.",
  embedSrc:
  "https://html5-player.libsyn.com/embed/episode/id/11152949/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/ffffff/",
  linkLabel: "Listen on freeCodeCamp",
  linkHref: "https://freecodecamp.libsyn.com/ep-79-how-to-design-tech-event-experiences-so-everybody-wins",
  },

  // ---- 6. Speakers & partners ----
  onStage: {
    heading: "Who I've built events with.",
    blurb:
      "Senior designers and leaders from Google, Apple, Amazon, Salesforce, YouTube, Workday, Chase, and Cisco.",
    companies: ["Google", "Apple", "Amazon", "Salesforce", "YouTube", "Workday", "Chase", "Cisco"],
    speakers: ["Alan Cooper", "Daniel Burka", "Mark Otto", "Julia Melton", "Josh Constine", "Eva Galperin"],
    partnersLabel: "Partners & sponsors",
    partners: ["Google", "Adobe", "Intuit", "Microsoft", "and more"],
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
        "She went above and beyond by jumping in and helping me not just with the flow and content of the presentation, but with the visual design of the slides. The finished product was significantly better than it would have been without her.",
      name: "Jane Davis",
      title: "Senior Product Manager",
      company: "Salesforce",
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
        "My company has sponsored several of her events, and she's been a pleasure to work with from start to finish. She's very responsive to one-off requests and goes out of her way to make sure your company gets the most out of being involved.",
      name: "Amy Ziari",
      title: "Senior Vice President",
      company: "We. Communications",
    },
    {
      quote:
        "We've worked together at several Adobe events and Andi is always on top of things during the planning stages. When the day of the event arrives, I am always shocked at how smoothly everything runs.",
      name: "Kelly McCathran",
      title: "Staff Technical Writer",
      company: "ServiceNow",
    },
    {
      quote:
        "UXNight is by far the best event I had a chance to speak at. Well organised (up to every single, tiny, detail), extremely professional and super-successful in gathering large crowd of super-smart designers.",
      name: "Marcin Treder",
      title: "Director of User Experience",
      company: "Google Play",
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
