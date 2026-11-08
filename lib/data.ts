type Experience = {
  employer: string;
  role: string;
  date: string;
  employmentType?: string;
  location?: string;
  summary: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
};

type SkillGroup = {
  category: string;
  skills: readonly string[];
};

export type ProjectCategory =
  | "Desktop Applications"
  | "Backend Systems"
  | "Personal Engineering Projects"
  | "Full-Stack Applications";

export type CaseStudySection = {
  title: string;
  status: "documented" | "confirmation-needed";
  content: string;
};

export type ProjectDetails = {
  slug: string;
  title: string;
  category: ProjectCategory;
  role: string;
  description: string;
  tags: readonly string[];
  overview: string;
  status?: string;
  image?: {
    src: string;
    alt: string;
  };
  liveLink?: string;
  repositoryLink?: string;
  caseStudy: {
    purpose: CaseStudySection;
    objectives: CaseStudySection;
    responsibilities: CaseStudySection;
    architecture: CaseStudySection;
    decisions: CaseStudySection;
    challenges: CaseStudySection;
    validation: CaseStudySection;
    outcomes: CaseStudySection;
    lessons: CaseStudySection;
  };
};

export const portfolioContent = {
  title: "Full-Stack Software Engineer",
  tagline: "Building reliable software with clarity, precision, and purpose.",
  introduction:
    "I build software across C#/.NET desktop applications, backend systems, and responsive web experiences, with an emphasis on usability and maintainability.",
  summary:
    "I build and improve software across desktop, backend, and web interfaces. My work includes modernizing Windows desktop user interfaces with C#, .NET, WPF, and XAML; developing REST APIs and authentication integrations; and building web applications with React, Next.js, TypeScript, and Node.js. I value practical problem-solving, usable workflows, and code that is clear and maintainable.",
  about: [
    "My experience spans desktop application interface modernization, backend development, and full-stack and frontend web development. I enjoy working across those areas to make software easier to use and simpler to maintain.",
    "My engineering approach starts with understanding the problem and the people using the software. I aim for clear, dependable solutions, reusable patterns where they help, and improvements that respect existing functionality.",
    "Alongside software engineering, I have foundational knowledge of SEO and digital marketing, including content strategy and audience awareness. These are complementary skills, not my professional specialization.",
  ],
} as const;

export const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Skills",
    href: "/#skills",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;

export const experiencesData: readonly Experience[] = [
  {
    employer: "Desires Investment Ltd",
    role: "Contract Frontend Developer — Desktop Applications",
    date: "2025–Present",
    employmentType: "Contract",
    summary:
      "Modernizing Windows desktop application interfaces and improving usability with C#, .NET, WPF, and XAML.",
    responsibilities: [
      "Redesign application forms and screens, refine navigation and controls, and improve user workflows.",
      "Create reusable interface components, styles, and templates while preserving compatibility with existing functionality.",
    ],
    technologies: ["C#", ".NET", "WPF", "XAML"],
  },
  {
    employer: "CVSpan",
    role: "Backend Developer",
    date: "July–December 2024",
    location: "Remote",
    summary:
      "Developed REST APIs and worked on authentication systems in collaboration with frontend developers.",
    responsibilities: [
      "Designed and implemented REST APIs and supported authentication integration.",
      "Worked with frontend developers to integrate backend functionality.",
    ],
    technologies: ["Node.js", "TypeScript", "Prisma", "REST APIs", "OAuth", "Testing"],
  },
  {
    employer: "LuTA",
    role: "Full-Stack Developer Intern",
    date: "February–December 2023",
    location: "Remote",
    summary:
      "Contributed to web application development across frontend interfaces and backend functionality.",
    responsibilities: [
      "Built interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
      "Developed backend functionality using Node.js and MongoDB.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    employer: "HerTechTrail",
    role: "Frontend Developer Intern",
    date: "August–November 2023",
    location: "Remote",
    summary:
      "Contributed to responsive user interfaces and translated design prototypes into working components.",
    responsibilities: [
      "Built and refined responsive user interfaces.",
      "Collaborated with designers and product managers to implement Figma prototypes.",
    ],
    technologies: ["Responsive UI", "Figma"],
  },
];

export const projectsData: readonly ProjectDetails[] = [
  {
    slug: "enterprise-desktop-modernization",
    title: "Enterprise Desktop Application Modernization",
    category: "Desktop Applications",
    role: "Contract Frontend Developer — Desktop Applications",
    description:
      "Private client work modernizing Windows desktop interfaces with C#, .NET, WPF, and XAML. The work includes redesigning forms, creating reusable UI components, and improving usability. Product-specific details are omitted.",
    overview:
      "A confidential desktop-application interface modernization engagement at Desires Investment Ltd. Product details and proprietary implementation are intentionally omitted.",
    tags: ["C#", ".NET", "WPF", "XAML"],
    status: "Private · Ongoing",
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content:
          "Modernize Windows desktop application interfaces while preserving existing functionality and omitting confidential product details.",
      },
      objectives: {
        title: "Objectives",
        status: "documented",
        content:
          "Redesign forms and screens, improve navigation and user workflows, and create reusable UI components, styles, and templates.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "documented",
        content:
          "The supplied role description attributes interface modernization, form and screen redesign, navigation and control refinement, and reusable UI component work to my contract role. Exact ownership boundaries require confirmation.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "confirmation-needed",
        content:
          "Confirm the application structure, UI patterns, component boundaries, data flow, and how the updated interfaces integrate with existing functionality. No architecture details are published yet.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "confirmation-needed",
        content:
          "Add specific implementation decisions only after confirming the actual constraints, alternatives considered, and rationale.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "confirmation-needed",
        content:
          "Confirm representative challenges and the solutions personally implemented before publication.",
      },
      validation: {
        title: "Testing and validation",
        status: "confirmation-needed",
        content:
          "Confirm the tests, user review, or validation process used for the interface changes.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "confirmation-needed",
        content:
          "No impact metrics are published. Previously mentioned form counts, interaction-time reductions, and satisfaction figures remain unverified and require evidence and disclosure approval.",
      },
      lessons: {
        title: "Lessons learned",
        status: "confirmation-needed",
        content:
          "Add lessons learned after confirming them with the project owner; do not infer them from the project description.",
      },
    },
  },
  {
    slug: "webbie-backend",
    title: "Webbie",
    category: "Backend Systems",
    role: "Backend Developer at CVSpan",
    description:
      "Backend development for an organization-facing platform, including REST API implementation and third-party authentication integration.",
    overview:
      "Backend development work for Webbie during my Backend Developer role at CVSpan from July to December 2024. The public portfolio does not link to webbie.io because it is not verified as the same project.",
    tags: ["Node.js", "TypeScript", "Prisma", "Chai", "REST APIs", "OAuth"],
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content:
          "Backend development for an organization-facing platform, as described in the existing portfolio content. Further product details are not available.",
      },
      objectives: {
        title: "Objectives",
        status: "confirmation-needed",
        content:
          "Confirm the product requirements and project objectives before adding specifics.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "documented",
        content:
          "Existing project and experience documentation identifies REST API development, authentication integration, and collaboration with frontend developers. Confirm feature-level ownership before publishing more detail.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "confirmation-needed",
        content:
          "The documented technologies include Node.js, TypeScript, Prisma, REST APIs, and OAuth. Confirm service boundaries, data model, authentication flow, and integration design before describing architecture.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "confirmation-needed",
        content:
          "Confirm specific technical decisions and their trade-offs before publication.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "confirmation-needed",
        content:
          "Confirm a representative technical challenge and the solution I personally implemented.",
      },
      validation: {
        title: "Testing and validation",
        status: "confirmation-needed",
        content:
          "Chai appears in the supplied project technology list. Confirm the specific test coverage, tooling, and validation performed.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "confirmation-needed",
        content:
          "No measured or verified outcome has been supplied. Add results only when supported by evidence and approved for disclosure.",
      },
      lessons: {
        title: "Lessons learned",
        status: "confirmation-needed",
        content:
          "Confirm project-specific lessons before adding them.",
      },
    },
  },
  {
    slug: "estie-metals-bot",
    title: "EstieMetalsBot",
    category: "Personal Engineering Projects",
    role: "Private project",
    description:
      "A private C#/.NET trading-systems engineering project currently in development. Implementation details are withheld pending confirmation of what is safe to disclose.",
    overview:
      "A private personal project in active development. It is presented only as a software-engineering project; no trading strategy, performance, or operational capability is claimed.",
    tags: ["C#", ".NET"],
    status: "Private · Ongoing",
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content:
          "Private, ongoing C#/.NET trading-systems engineering project. Further project purpose and implementation details require owner approval.",
      },
      objectives: {
        title: "Objectives",
        status: "confirmation-needed",
        content:
          "Confirm the project objectives and the development scope that may be shared publicly.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "confirmation-needed",
        content:
          "Confirm which components and engineering tasks are implemented personally before describing them.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "confirmation-needed",
        content:
          "Confirm the implemented architecture and approved level of detail. Do not expose private source code, credentials, accounts, strategies, or sensitive configuration.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "confirmation-needed",
        content:
          "Confirm technical decisions that can be described without disclosing proprietary trading logic or configuration.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "confirmation-needed",
        content:
          "Confirm a safe, representative engineering challenge and the implemented solution. Reliability and risk controls may be discussed only at an approved high level.",
      },
      validation: {
        title: "Testing and validation",
        status: "confirmation-needed",
        content:
          "Confirm implemented tests and validation status. Do not imply production readiness or live execution.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "documented",
        content:
          "The project is in development. No profitability, trading win rate, or production outcome is claimed.",
      },
      lessons: {
        title: "Lessons learned",
        status: "confirmation-needed",
        content:
          "Add project-specific lessons only after confirmation and disclosure review.",
      },
    },
  },
  {
    slug: "wallet-system",
    title: "Wallet System",
    category: "Full-Stack Applications",
    role: "Personal contribution requires confirmation",
    description:
      "A wallet web application. Existing portfolio documentation describes account management, fund transfers, and transaction history; implementation details and personal contribution require confirmation.",
    overview:
      "A publicly deployed wallet application represented by the existing portfolio screenshot and project documentation. Feature and technology claims should be checked against the application source before final publication.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "CSS"],
    liveLink: "https://estie-wallet-system.vercel.app/",
    image: {
      src: "/EstieWallet.png",
      alt: "Landing page for the Estie Wallet web application",
    },
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content:
          "Existing portfolio documentation describes a web-based wallet application. The deployment is available, but its source implementation has not been verified in this repository.",
      },
      objectives: {
        title: "Objectives",
        status: "confirmation-needed",
        content:
          "Confirm the intended users and application objectives from project documentation or source.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "confirmation-needed",
        content:
          "Confirm my individual role and implementation responsibilities before publication.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "confirmation-needed",
        content:
          "The existing portfolio lists React.js, Node.js, Express, MongoDB, and CSS. Verify the actual frontend/backend architecture and deployed implementation before treating these as confirmed project technologies.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "confirmation-needed",
        content:
          "Confirm implementation choices and rationale from the project's source or documentation.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "confirmation-needed",
        content:
          "Confirm challenges and solutions personally implemented.",
      },
      validation: {
        title: "Testing and validation",
        status: "confirmation-needed",
        content:
          "Confirm the testing approach and validation performed.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "confirmation-needed",
        content:
          "No measured outcome has been provided. Do not infer business, security, or user impact from the live deployment.",
      },
      lessons: {
        title: "Lessons learned",
        status: "confirmation-needed",
        content:
          "Confirm project-specific lessons before adding them.",
      },
    },
  },
];

export const skillsData: readonly SkillGroup[] = [
  {
    category: "Desktop Development",
    skills: ["C#", ".NET", "WPF", "XAML"],
  },
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "REST APIs", "Authentication and authorization"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    category: "Testing",
    skills: ["Chai"],
  },
  {
    category: "Development Tools",
    skills: ["Visual Studio", "Git", "GitHub", "Figma"],
  },
];

export const additionalKnowledge = [
  "SEO fundamentals",
  "Digital marketing fundamentals",
  "Content strategy awareness",
  "Audience understanding",
] as const;
