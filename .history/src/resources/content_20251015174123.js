import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ramla",
  lastName: "Azouni",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Project Manager & Content Strategist",
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
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
    display: true,
    title: "Introduction",
    description: (
      <>
      🎮 Gaming YouTuber | 🚀 Project Manager @ TAWA | 👩‍💻 Creative Technologist<br />
      Hey, Im Ramla. A storyteller, strategist, and builder at the intersection of tech and creativity.<br />
      <br />
      Total experience: ~4 years<br />
        – 2 years of professional experience (Project Manager, Content Lead, etc.)<br />
        – 2 years in marketing and content creation through extracurricular activities
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
            {
        company: (
          <a href="https://www.tawa.digital" target="_blank" rel="noopener noreferrer">
            TAWA Digital Talents
          </a>
        ),
        timeframe: "11/2024 - Present",
        role: "Project Manager",
        achievements: [
          <>
            Designed and developed key features for "Content Factory," including the UGC Creator Toolbox, the platform’s first AI-powered 
Media Kit, and the Highlighted Creators module. 
          </>,
          <>
            Led independent projects like the Samy Chaffai Masterclass and the TAWA agency website.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   // src: "/images/projects/project-01/cover-01.jpg",
          //   // alt: "Once UI Project",
          //   // width: 16,
          //   // height: 9,
          // },
        ],
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
            Guided the editorial flow from ideation to publishing all while aligning with the creator’s voice and growth goals.
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

// const gallery = {
//   path: "/gallery",
//   label: "Gallery",
//   title: `Photo gallery – ${person.name}`,
//   description: `A photo collection by ${person.name}`,
//   // Images by https://lorant.one
//   // These are placeholder images, replace with your own
//   images: [
//     {
//       src: "/images/gallery/horizontal-1.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/horizontal-2.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/horizontal-3.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/horizontal-4.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-1.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/vertical-2.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/vertical-3.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/vertical-4.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//   ],
// };

export { person, social, newsletter, home, about, blog, work };
