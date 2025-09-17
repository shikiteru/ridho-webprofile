import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ridho",
  lastName: "",
  name: `Ridho`,
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg",
  email: "syamridho58@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a FullStack Developer with over 3 years of experience in the
        industry.I have experience building robust and scalable server-side
        applications using both Node.js and Golang, and I have a solid
        understanding of RESTful APIs (JSON) and effective database design. I am
        highly committed to continuous learning and growth in the field of web
        development, always striving to stay up to date with industry trends and
        best practices to deliver efficient, maintainable, and high performance
        applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2021 - Present",
        role: "Fullstack Developer",
        achievements: [
          <>
            Design and build conversion-oriented landing pages based on client
            briefs, with responsive UI and on-page SEO best practices.
          </>,
          <>
            Collaborate with other developers to deliver server-side features
            using Node.js/Express (auth, REST APIs, integrations).
          </>,
          <>
            Publish and maintain APIs on RapidAPI (e.g., X (Twitter) Unofficial
            API, BBC News Crawler API), including usage quotas, billing, and
            versioning.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "PT Hadi Putra Manunggal ",
        timeframe: "2024 - 2025",
        role: "Fullstack Developer",
        achievements: [
          <>
            Built and shipped internal web applications (workflow, reporting,
            and ops tools) with Next.js / Node.js (Express/Nest), Prisma, and
            PostgreSQL, implementing RBAC, JWT, and audit logging to meet
            internal compliance.
          </>,
          <>
            Designed reliable web-scraping pipelines using Puppeteer/Playwright,
            scheduling (node-cron),reducing manual data collection by ~70–90%.
          </>,
        ],
        images: [],
      },
      {
        company: "UKUR.com",
        timeframe: "2023 - 2024",
        role: "Fullstack Developer",
        achievements: [
          <>
            Built internal web applications (workflow/reporting tools) with
            Next.js/React and Node.js (Express/Nest); implemented RBAC, JWT, and
            input validation.
          </>,
          <>
            Designed and administered SQL/NoSQL data models (PostgreSQL/MySQL,
            MongoDB), including indexing, migrations, and backups.
          </>,
          <>
            Monitored uptime and logs; wrote runbooks, automated health checks,
            and scheduled maintenance, helping achieve {">"}99.9% availability.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dibimbing.id",
        description: (
          <>
            Bootcamp full-stack web developer: React/Next.js, Node.js
            (Express/Nest), Prisma/ORM, PostgreSQL/MySQL, REST API,Basic
            Authenticate JWT,Git/Github.
          </>
        ),
      },
      {
        name: "Eduwork",
        description: (
          <>
            Mini bootcamp: Basic PHP, JavaScript, React, Node.js, Basic
            database, Git/GitHub.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Building modern apps with Next.js (App Router, RSC, Server Actions)
            and React.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
          {
            name: "Zod",
            icon: "zod",
          },
          {
            name: "TanStack",
            icon: "reactquery",
          },
          {
            name: "Redux",
            icon: "redux",
          },
        ],
        images: [],
      },
      {
        title: "Backend Development",
        description: (
          <>
            Designing and operating secure, scalable APIs and background workers
            and production ops with Docker & Nginx.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "NestJS", icon: "nestjs" },
          { name: "Fastify", icon: "fastify" },
          { name: "Prisma", icon: "prisma" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "Redis", icon: "redis" },
          { name: "JWT", icon: "jwt" },
          { name: "Docker", icon: "docker" },
          { name: "Nginx", icon: "nginx" },
          { name: "Bun", icon: "bun" },
          { name: "Go", icon: "golang" },
          { name: "Supabase", icon: "supabase" },
          { name: "Socket.io", icon: "socket" },
        ],
        images: [],
      },
      {
        title: "Web Scraping & Automation",
        description: (
          <>
            High-reliability crawlers and browser automations, structured
            outputs, and fault-tolerant pipelines.
          </>
        ),
        tags: [
          { name: "Puppeteer", icon: "puppeteer" },
          { name: "Cheerio", icon: "cheerio" },
          { name: "Axios/HTTP", icon: "axios" },
          { name: "Node-cron (Scheduling)", icon: "cron" },
          { name: "CSV/JSON/Parquet", icon: "json" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
