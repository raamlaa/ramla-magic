import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ramla",
  lastName: "Azouni",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Creative Technologist",
  avatar: "/images/avatar.jpg",
  email: "ramlaazouni@outlook.com",
  location: "Africa/Tunis", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic","French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      🎮 Gaming YouTuber | 🚀 Project Manager @ TAWA | 👩‍💻 Creative Technologist<br />
      Hey, Im Ramla. A storyteller, strategist, and builder at the intersection of tech and creativity.

    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/raamlaa",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raamlaa",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  label: "Home",
  title: `Ramla's Portfolio`,
  description: `Portfolio website showcasing my work as a Creative Technologist`,
  headline: <>builder at the intersection of tech and creativity</>,
  subline: <>🎮 Gaming YouTuber | 🚀 Project Manager @ TAWA | 👩‍💻 Creative Technologist</>,
  featured: {
    display: false,
    title: "",
    href: ""
  }
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/raamlaa/30min",
  },
  intro: {
    display: false,
    title: "Introduction",
    description: (
      <>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: (
          <a href="https://8flamez.co/" target="_blank" rel="noopener noreferrer">
            8Flamez
          </a>
        ),
        timeframe: "11/2025 - Present",
        role: "Operations Manager",
        achievements: [
          <>
            Led end-to-end operations across Kings League events, managing logistics, schedules, and execution in high-pressure, live environments
          </>,
          <>
            Coordinated cross-functionally with league organizers, production teams, and stakeholders to ensure seamless match-day operations
          </>,
          <>
          Managed travel, accommodation, and on-ground logistics for players and team across international events
          </>,

          <>
          Built internal systems and workflows to track operations, budgets, and reporting, improving team efficiency and visibility
          </>,

          <>
          Handled real-time problem solving and crisis management without disrupting execution
          </>,
        ],
        images: [
          {
            src:"/images/brazil/kl.png",
            alt: "Kings League Event",
            width: 16,
            height: 9,
          },
          {
            src:"/images/brazil/kl-badge.jpg",
            alt: "Kings League Event",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Raffiti Media",
        timeframe: "10/2025 - 11/2025",
        role: "Strategist",
        achievements: [
          <>
            Developing content strategies and creative campaigns for digital media projects.
          </>,
          <>
            Collaborating with creators and brands to optimize content performance and audience engagement.
          </>,
        ],
        images: [],
      },
      {
        company: (
          <a href="https://www.tawa.digital" target="_blank" rel="noopener noreferrer">
            TAWA Digital Talents
          </a>
        ),
        timeframe: "11/2024 - 11/2025",
        role: "Project Manager",
        achievements: [
          <>
            Designed and developed key features for "Content Factory," including the UGC Creator Toolbox, the platform's first AI-powered
Media Kit, and the Highlighted Creators module.
          </>,
          <>
            Led independent projects like the Samy Chaffai Masterclass and the TAWA agency website.
          </>,
        ],
        images: [],
      },
      {
        company: (
          <a href="https://www.youtube.com/@KoussayBiz" target="_blank" rel="noopener noreferrer">
            KoussayBiz
          </a>
        ),
        timeframe: "06/2025 - 07/2025",
        role: "Content Lead",
        achievements: [
          <>
            Turned raw ideas, scripts, and footage into high-performing, platform-native content. I lead Short and Long content strategy, organize creator assets, pitch concepts and series And write hooks and captions.
          </>,
          <>
            Guided the editorial flow from ideation to publishing all while aligning with the creator's voice and growth goals.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src:"/images/gallery/KoussayBiz.png",
            alt: "KoussayBiz Project",
            width: 16,
            height: 9,
          },
                    {
            src:"/images/gallery/Koussaybiz-badhabits.png",
            alt: "KoussayBiz Project",
            width: 16,
            height: 9,
          },

          {
            src:"/images/gallery/Bali 1.png",
            alt: "KoussayBiz Project",
            width: 16,
            height: 9,
          },
        ],
      },




      {
        company: (
          <a href="https://www.youtube.com/@aburob" target="_blank" rel="noopener noreferrer">
            Aburob's Productions
          </a>
        ),
        timeframe: "07/2024 - 08/2024",
        role: "Content Researcher",
        achievements: [
          <>
            Collaborated directly with YouTuber Ahmad Aburob to research and enrich content strategies, increasing viewer engagement.

          </>,
          <>
            Managed pre-travel experience research and coordinated media access for the production team in multiple countries.
          </>,
        ],
        images: [
          {
            src: "/images/gallery/aburob-lie.jpg",
            alt: "Aburob - Lie Detector",
            width: 16,
            height: 9,
          },
        ],
      },

      {
  company: (
    <a href="https://www.linkedin.com/company/etijah-coaching-consulting" target="_blank" rel="noopener noreferrer">
      Etijah Coaching & Consulting Services
    </a>
  ),
  timeframe: "05/2024 - 07/2024",
  role: "IT Project Coordinator",
  achievements: [
    <>
      Supported daily operations of generative AI-based projects, including bootcamps and hackathons.
    </>,
    <>
      Revamped educational materials and designed new problem statements for innovation-driven hackathons.
    </>,
  ],

},
{
  company: (
    <a href="https://www.facebook.com/TGTunisia" target="_blank" rel="noopener noreferrer">
      TGTV - Tunisian Gamers TV
    </a>
  ),
  timeframe: "12/2021 - 10/2022",
  role: "Community Manager",
  achievements: [
    <>
      Developed a content strategy that lifted traffic by 30% within two weeks by addressing copyright challenges.
    </>,
    <>
      Rebranded the platform’s visual identity and produced multimedia content to promote Tunisian e-sports talent.
    </>,
  ],

}


    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Tunis El Manar",
        description: <>Studied Computer engineering.</>,
      },

    ],
  },
  // technical: {
  //   display: true, // set to false to hide this section
  //   title: "Technical skills",
  //   skills: [
  //     {
  //       title: "Figma",
  //       description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-02.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //         {
  //           src: "/images/projects/project-01/cover-03.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Next.js",
  //       description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //   ],
  // },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about everything & nothing",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // type: "image" (default) | "instagram" | "linkedin"
  // For instagram: provide the post URL
  // For linkedin: provide the post URL
  items: [
    
    {
      type: "image",
      src: "/images/gallery/ramla-post1.png",
      alt: "Ramla post 1",
    },
    {
      type: "image",
      src: "/images/gallery/ramla-post2.png",
      alt: "Ramla post 2",
    },
    {
      type: "image",
      src: "/images/gallery/ramla-tawa.png",
      alt: "Ramla at TAWA",
    },
    {
      type: "image",
      src: "/images/qatar/IMG_2811.png (2).jpg",
      alt: "Ramla in Qatar",
    },
    {
      type: "image",
      src: "/images/qatar/IMG_3017.png",
      alt: "Qatar moment",
    },
    {
      type: "image",
      src: "/images/tawa/IMG-20250228-WA0009.jpg",
      alt: "TAWA team moment",
    },
    {
      type: "image",
      src: "/images/tawa/IMG-20250228-WA0044.jpg",
      alt: "TAWA behind the scenes",
    },
    {
      type: "image",
      src: "/images/tawa/IMG_20250123_154235.jpg",
      alt: "Ramla at TAWA event",
    },
    {
      type: "image",
      src: "/images/tawa/IMG_20250404_185543.jpg",
      alt: "TAWA work session",
    },
    {
      type: "image",
      src: "/images/tawa/IMG_20250529_114021.jpg",
      alt: "TAWA day-in-the-life",
    },
    {
      type: "image",
      src: "/images/tawa/WhatsApp Image 2025-11-10 at 14.01.16_ca301e0e.jpg",
      alt: "TAWA collaboration moment",
    },
    {
      type: "image",
      src: "/images/tawa/WhatsApp Image 2025-11-13 at 5.15.55 PM.jpeg",
      alt: "TAWA team capture",
    },
    {
      type: "image",
      src: "/images/brazil/ramla-brazil.png",
      alt: "Ramla in Brazil",
    },
    {
      type: "image",
      src: "/images/brazil/2206.jpg",
      alt: "Brazil memory",
    },
    {
      type: "image",
      src: "/images/brazil/IMG_0359.JPG",
      alt: "Brazil street moment",
    },
    {
      type: "image",
      src: "/images/brazil/IMG_0370.JPG",
      alt: "Brazil behind the scenes",
    },
    {
      type: "image",
      src: "/images/brazil/IMG_1555.jpg",
      alt: "Brazil creator moment",
    },
    {
      type: "image",
      src: "/images/brazil/kl.png",
      alt: "Kings League Brazil",
    },
    {
      type: "image",
      src: "/images/brazil/kl-badge.jpg",
      alt: "Kings League badge",
    },
    // LinkedIn embed example — replace with your actual post URL:
    // {
    //   type: "linkedin",
    //   url: "https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_POST_ID",
    // },
  ],
  // keep images for backward compat
  get images() {
    return this.items.filter((i) => i.type === "image" || !i.type);
  },
};

export { person, social, newsletter, home, about, blog, work, gallery };
