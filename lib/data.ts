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
  | "Full-Stack Web Development";

export type CaseStudySection = {
  title: string;
  status: "documented" | "confirmation-needed";
  content: string;
};

export type EngineeringFocus = {
  title: string;
  description: string;
};

export type EngineeringChallenge = {
  title: string;
  challenge: string;
  response: string;
};

export type EstieMetalsBotCaseStudy = {
  focus: readonly EngineeringFocus[];
  overview: readonly string[];
  objectives: readonly string[];
  contributions: readonly string[];
  architecture: readonly string[];
  architectureHighlights: readonly EngineeringFocus[];
  decisions: readonly string[];
  challenges: readonly EngineeringChallenge[];
  validation: {
    narrative: readonly string[];
    highlights: readonly string[];
  };
  outcomes: {
    narrative: readonly string[];
    highlights: readonly string[];
  };
  lessons: readonly string[];
};

export type DesktopApplicationCaseStudy = {
  focus: readonly EngineeringFocus[];
  overview: readonly string[];
  objectives: {
    introduction: string;
    items: readonly string[];
  };
  contributions: {
    introduction: string;
    items: readonly string[];
    conclusion: string;
  };
  architecture: {
    narrative: readonly string[];
    highlights: readonly EngineeringFocus[];
  };
  decisions: readonly string[];
  challenges: readonly EngineeringChallenge[];
  validation: {
    narrative: readonly string[];
    highlights: readonly string[];
  };
  outcomes: readonly string[];
  lessons: readonly string[];
};

export type MoodPlaylistCaseStudy = {
  focus: readonly EngineeringFocus[];
  hero: string[];
  overview: readonly string[];
  objectives: {
    introduction: string;
    items: readonly string[];
  };
  contributions: {
    introduction: string;
    items: readonly string[];
  };
  architecture: {
    narrative: readonly string[];
    highlights: readonly EngineeringFocus[];
  };
  decisions: readonly string[];
  challenges: readonly EngineeringChallenge[];
  validation: {
    narrative: readonly string[];
    highlights: readonly string[];
    currentDeploymentNote: string;
  };
  outcomes: {
    narrative: readonly string[];
    highlights: readonly string[];
  };
  lessons: readonly string[];
};

export type EarnTrackerCaseStudy = {
  focus: readonly EngineeringFocus[];
  hero: readonly string[];
  overview: readonly string[];
  objectives: {
    introduction: string;
    items: readonly string[];
  };
  contributions: {
    introduction: string;
    items: readonly string[];
  };
  architecture: {
    narrative: readonly string[];
    highlights: readonly EngineeringFocus[];
  };
  decisions: readonly string[];
  challenges: readonly EngineeringChallenge[];
  validation: {
    narrative: readonly string[];
    highlights: readonly string[];
    evidenceNote: string;
  };
  outcomes: {
    narrative: readonly string[];
    highlights: readonly string[];
    demonstrationNote: string;
  };
  lessons: readonly string[];
};

export type WebbieCaseStudy = {
  focus: readonly EngineeringFocus[];
  hero: readonly string[];
  overview: readonly string[];
  objectives: {
    introduction: string;
    items: readonly string[];
  };
  contributions: {
    introduction: string;
    items: readonly string[];
    conclusion: string;
  };
  architecture: {
    narrative: readonly string[];
    highlights: readonly EngineeringFocus[];
  };
  decisions: readonly string[];
  challenges: readonly EngineeringChallenge[];
  validation: {
    narrative: readonly string[];
    highlights: readonly string[];
  };
  outcomes: {
    narrative: readonly string[];
    highlights: readonly string[];
  };
  lessons: readonly string[];
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
    frontend?: CaseStudySection;
    backend?: CaseStudySection;
    integration?: CaseStudySection;
    features?: CaseStudySection;
    solutions?: CaseStudySection;
  };
  livePreviewEligible?: boolean;
  editorialCaseStudy?: EstieMetalsBotCaseStudy;
  desktopCaseStudy?: DesktopApplicationCaseStudy;
  moodPlaylistCaseStudy?: MoodPlaylistCaseStudy;
  earnTrackerCaseStudy?: EarnTrackerCaseStudy;
  webbieCaseStudy?: WebbieCaseStudy;
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
      "Enterprise Desktop Application Modernization is a professional desktop-engineering project I worked on as a contract frontend developer at Desires Investment Ltd. My work focused on modernizing Windows desktop application interfaces using C#, .NET, WPF, and XAML, with an emphasis on usability, consistency, and maintainable UI structure. Because this was a confidential employer engagement, proprietary product details are intentionally omitted, but the project reflects my practical experience redesigning forms and screens, improving interface workflows, and building reusable desktop UI patterns.",
    overview:
      "I modernized an existing Windows desktop application interface at Desires Investment Ltd, focusing on usability, consistency, and maintainable UI structure while preserving existing functionality.",
    tags: ["C#", ".NET", "WPF", "XAML"],
    status: "Private / Confidential Engagement",
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content:
          "I worked on modernizing an existing desktop application interface while preserving the underlying functionality of the software. My focus was on clearer layouts, consistent visual structure, better navigation patterns, and reusable UI elements. I approached the work as an interface modernization effort intended to make the application more coherent, easier to use, and easier to maintain over time.",
      },
      objectives: {
        title: "Objectives",
        status: "documented",
        content:
          "I aimed to improve usability and consistency without disrupting core business functionality: redesigning forms and screens, clarifying common workflows, improving layout and navigation, building reusable UI patterns, and modernizing the visual presentation within the existing application context.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "documented",
        content:
          "As the contract frontend developer working on this desktop application, I was responsible for improving the interface layer. My work included redesigning forms and screens in WPF, refining layouts and navigation, building and reusing UI components, styles, and templates, and improving consistency and maintainability across the interface.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "documented",
        content:
          "My work focused on the application’s interface layer, using WPF and XAML to structure and refine the desktop user experience within an existing Windows application. The technical approach emphasized reusable UI structure, consistent design patterns, maintainable layouts, and practical refinement without disclosing private business logic.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "documented",
        content:
          "I focused on incremental modernization rather than replacing the interface all at once. This let me improve forms, screens, and workflows while respecting the established application and avoiding unnecessary disruption. I also emphasized reusable UI structure and balanced visual refinement with practical usability.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "documented",
        content:
          "I worked within an existing application, improved consistency across multiple screens by reusing interface patterns and refining layouts, and considered maintainability alongside visual polish by working with reusable styles, templates, and structured interface patterns.",
      },
      validation: {
        title: "Testing and validation",
        status: "documented",
        content:
          "My validation approach emphasized practical interface review, iterative refinement, workflow clarity, visual consistency, and how changes fit into the broader desktop application. I do not claim specific test coverage or formal testing systems.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "documented",
        content:
          "I contributed to improving the clarity, consistency, and maintainability of an existing Windows desktop application. The work strengthened my practical desktop-development experience and reinforced the importance of making interface improvements usable and sustainable within a working product. No unapproved metrics are claimed.",
      },
      lessons: {
        title: "Lessons learned",
        status: "documented",
        content:
          "I learned the importance of consistency in both the visual interface and the way users move through an application. The work reinforced the value of reusable UI structure and strengthened my ability to improve usability and maintainability carefully within an established system.",
      },
    },
    desktopCaseStudy: {
      focus: [
        {
          title: "Desktop UI",
          description: "WPF/XAML interface modernization.",
        },
        {
          title: "Usability",
          description: "Clearer workflows and improved navigation.",
        },
        {
          title: "Consistency",
          description: "Shared UI patterns, styles, and templates.",
        },
        {
          title: "Maintainability",
          description: "Structured, reusable interface improvements.",
        },
      ],
      overview: [
        "In this role, I worked on modernizing an existing desktop application interface while preserving the underlying functionality of the software.",
        "My focus was on improving the quality of the user experience through clearer layouts, more consistent visual structure, better navigation patterns, and reusable UI elements.",
        "Rather than treating the work as isolated screen changes, I approached it as an interface modernization effort aimed at making the application more coherent, easier to use, and easier to maintain over time. Because the product is private, I am careful not to disclose proprietary implementation details, but the work gave me meaningful hands-on experience in WPF desktop interface engineering.",
      ],
      objectives: {
        introduction:
          "My objective in this engagement was to improve the usability and consistency of an existing Windows desktop application without disrupting the core business functionality already in place. The work centered on several practical goals:",
        items: [
          "Redesign forms and screens to improve clarity and visual consistency.",
          "Make common workflows easier for users to understand and complete.",
          "Improve layout structure and navigation across the application.",
          "Build reusable UI components, styles, and templates where possible.",
          "Support long-term maintainability through cleaner and more consistent interface patterns.",
          "Modernize the visual presentation while respecting the existing application context.",
        ],
      },
      contributions: {
        introduction:
          "As the contract frontend developer working on this desktop application, I was responsible for improving the interface layer of the product.",
        items: [
          "Redesigned existing forms and screens in WPF.",
          "Refined application layouts and interface structure.",
          "Improved navigation and user interaction patterns.",
          "Built and reused UI components, styles, and templates.",
          "Enhanced interface consistency across multiple parts of the application.",
          "Worked within the constraints of an existing system while improving usability.",
          "Contributed to a cleaner and more maintainable desktop UI experience.",
        ],
        conclusion:
          "This work required balancing visual improvement with practical implementation constraints inside an established application environment.",
      },
      architecture: {
        narrative: [
          "My work focused on the application’s interface layer, using WPF and XAML to structure and refine the desktop user experience.",
          "I worked within an existing Windows desktop application environment, improving the presentation and interaction layer without exposing the private internal business logic of the system.",
          "From a technical standpoint, the work emphasized reusable UI structure, consistent design patterns, maintainable layouts, and practical interface refinement within an established .NET application. This required careful attention to how updated UI elements fit into the existing application rather than treating every screen as a standalone redesign.",
        ],
        highlights: [
          {
            title: "WPF & XAML",
            description:
              "Desktop interface design, layout structure, and reusable presentation patterns.",
          },
          {
            title: "C# / .NET",
            description:
              "Application-layer integration within an existing desktop environment.",
          },
          {
            title: "Reusable UI Components",
            description:
              "Shared styles, templates, and consistent interface elements.",
          },
          {
            title: "Usability-Focused Refinement",
            description:
              "Navigation, clarity, visual consistency, and workflow improvement.",
          },
        ],
      },
      decisions: [
        "One important implementation decision was to focus on modernization through incremental improvement rather than trying to rebuild the interface all at once.",
        "Working within an existing application meant I needed to improve forms, screens, and workflows in a way that respected the surrounding system and reduced unnecessary disruption. I also emphasized reusable UI structure so that interface improvements could scale more consistently across the application.",
        "Another key consideration was balancing visual refinement with practical usability. The goal was not just to make screens look better, but to make them clearer, more consistent, and easier for users to work with.",
      ],
      challenges: [
        {
          title: "Modernizing an Existing Interface Without Disrupting Functionality",
          challenge:
            "Because the application already existed and served real business needs, the work could not be approached like a blank-slate redesign. I had to improve the UI while respecting the established functionality and existing user workflows.",
          response:
            "I addressed this by making targeted, incremental improvements that enhanced clarity and usability without unnecessarily destabilizing the product.",
        },
        {
          title: "Maintaining Consistency Across Multiple Screens",
          challenge:
            "In legacy or evolving desktop applications, inconsistency can build up over time across forms, controls, layouts, and interaction patterns. Part of my work involved bringing greater consistency to how the application looked and behaved.",
          response:
            "I approached this by reusing interface patterns, refining layouts, and introducing more structured UI conventions where possible.",
        },
        {
          title: "Balancing Visual Improvement with Practical Maintainability",
          challenge:
            "Improving the interface was not just about visual polish. The updated UI also needed to remain practical for ongoing development and maintenance.",
          response:
            "By working with reusable styles, templates, and structured interface patterns, I aimed to support a cleaner and more maintainable desktop UI layer.",
        },
      ],
      validation: {
        narrative: [
          "Because this work involved improving an existing desktop application interface, validation was closely tied to usability, consistency, and whether the updated screens supported the intended workflows effectively.",
          "My approach emphasized practical interface review, iterative refinement, and attention to how changes fit into the broader desktop application. In a project like this, success is reflected in whether the interface becomes clearer, easier to navigate, and more consistent while preserving functionality.",
        ],
        highlights: [
          "Interface refinement and review",
          "Workflow clarity improvements",
          "Visual consistency checks",
          "Reusable UI pattern application",
          "Incremental improvement within an existing system",
          "Maintainability-focused UI updates",
        ],
      },
      outcomes: [
        "This project strengthened my practical desktop-development experience and gave me the opportunity to work on interface modernization in a real business environment.",
        "Through the work, I contributed to improving the clarity, consistency, and maintainability of an existing Windows desktop application.",
        "The experience also reinforced the importance of designing UI improvements that are not only visually cleaner but also more usable and sustainable inside a working product. It remains one of my most meaningful examples of applying C#, .NET, WPF, and XAML in a real-world engineering context.",
      ],
      lessons: [
        "This project deepened my understanding of how to improve software interfaces within the constraints of an existing product.",
        "I learned the importance of consistency, not just visually, but in how users move through the application and interact with different parts of the interface. The work also reinforced the value of reusable UI structure when maintaining or evolving a desktop application over time.",
        "Most importantly, it strengthened my ability to work carefully inside an established system, improving usability and maintainability without losing sight of the broader product context.",
      ],
    },
  },
  {
    slug: "webbie-backend",
    title: "Webbie",
    category: "Backend Systems",
    role: "Backend Developer at CVSpan",
    description:
      "Webbie is a professional software project I contributed to during my time as a Backend Developer at CVSpan. My work focused on developing backend services using Node.js and TypeScript, working with REST APIs, integrating authentication functionality, and supporting database operations through Prisma. The experience strengthened my understanding of backend architecture, application security, API design, and testing within a professional development environment.",
    overview:
      "During my time at CVSpan, I worked on backend development for Webbie, contributing to the services that supported the application's functionality.",
    tags: ["Node.js", "TypeScript", "Prisma", "Chai", "REST APIs", "OAuth"],
    status: "Professional Work · July–December 2024",
    webbieCaseStudy: {
      focus: [
        {
          title: "Backend Development",
          description: "Node.js and TypeScript application services.",
        },
        {
          title: "API Engineering",
          description: "REST endpoints, request handling, and integration.",
        },
        {
          title: "Authentication",
          description: "OAuth-related authentication integration.",
        },
        {
          title: "Data Access and Testing",
          description: "Prisma data operations and backend validation work.",
        },
      ],
      hero: [
        "Webbie is a professional software project I contributed to during my time as a Backend Developer at CVSpan.",
        "My work focused on developing backend services using Node.js and TypeScript, working with REST APIs, integrating authentication functionality, and supporting database operations through Prisma.",
        "The experience strengthened my understanding of backend architecture, application security, API design, and testing within a professional development environment.",
      ],
      overview: [
        "During my time at CVSpan, I worked on backend development for Webbie, contributing to the services that supported the application's functionality.",
        "My responsibilities involved working with Node.js and TypeScript to develop and maintain backend features, including API endpoints, authentication integrations, and database-related operations.",
        "The project provided practical experience building application services that need to communicate clearly with other parts of a software system. It also strengthened my understanding of maintaining backend code within an existing product development environment.",
      ],
      objectives: {
        introduction:
          "My objective was to contribute reliable, maintainable backend functionality that supported the broader application's requirements. My technical focus included:",
        items: [
          "Developing and maintaining backend services.",
          "Supporting REST API functionality.",
          "Integrating authentication mechanisms.",
          "Working with database access and persistence through Prisma.",
          "Improving the clarity and maintainability of backend code.",
          "Testing API behaviour and investigating integration issues.",
          "Supporting dependable communication between application components.",
        ],
      },
      contributions: {
        introduction:
          "As a Backend Developer at CVSpan, I contributed to Webbie's backend implementation within an existing product and development team.",
        items: [
          "Worked with Node.js and TypeScript.",
          "Developed and maintained REST API endpoints.",
          "Implemented or integrated OAuth-related authentication functionality.",
          "Worked with Prisma for database operations.",
          "Investigated backend issues and debugged API behaviour.",
          "Tested relevant functionality with the available development tools.",
          "Supported integration between backend services and other application components.",
          "Maintained readable and organized backend code.",
        ],
        conclusion:
          "This role helped me strengthen my ability to translate application requirements into backend functionality while working within an established development process.",
      },
      architecture: {
        narrative: [
          "My development work focused on Webbie's backend application layer. I worked with Node.js and TypeScript to develop application services and REST API functionality.",
          "Prisma provided an abstraction for database operations I worked on, while authentication integrations required attention to how identity and authorization information moved through the system.",
          "I approached my responsibilities by keeping API behaviour, data handling, and integration concerns organized so individual features could be developed, tested, and maintained more effectively. I do not make claims about specific database engines, service boundaries, or authentication providers.",
        ],
        highlights: [
          {
            title: "Node.js and TypeScript",
            description:
              "Backend application logic and strongly typed development.",
          },
          {
            title: "REST APIs",
            description:
              "Endpoint implementation and communication with application consumers.",
          },
          {
            title: "OAuth Integration",
            description:
              "Authentication-related functionality and external identity integration.",
          },
          {
            title: "Prisma",
            description: "Database access and application data operations.",
          },
        ],
      },
      decisions: [
        "One important consideration in my backend work was maintaining a clear separation between request handling, application logic, and data access. This helped me think carefully about backend maintainability and how changes in one part of a system can affect other components.",
        "I also worked with TypeScript to improve the clarity of application contracts and reduce avoidable type-related issues.",
        "For authentication-related functionality, I considered how external identity integrations interacted with backend behaviour. These experiences strengthened my understanding of API design, maintainable backend structure, and reliable application integration.",
      ],
      challenges: [
        {
          title: "Integrating Authentication Functionality",
          challenge:
            "Authentication integration introduced the need to coordinate external identity mechanisms with application-level backend behaviour.",
          response:
            "I worked on OAuth-related functionality and investigated how authentication data interacted with relevant backend workflows. This helped me improve my understanding of identity integration and the importance of handling authentication responses carefully.",
        },
        {
          title: "Maintaining Clear API Behaviour",
          challenge:
            "Backend APIs need predictable request and response behaviour so that other application components can use them reliably.",
          response:
            "I worked on developing and refining REST API functionality while paying attention to how requests were handled and how relevant data was returned. This reinforced the importance of consistent API contracts and clear backend implementation.",
        },
        {
          title: "Debugging and Testing Backend Functionality",
          challenge:
            "Developing backend features involved identifying implementation issues and validating whether functionality behaved as expected.",
          response:
            "I used debugging and API testing to investigate problems, check responses, and improve the reliability of the code I contributed. This helped me build stronger habits around validating functionality rather than relying only on successful manual execution.",
        },
      ],
      validation: {
        narrative: [
          "Testing was an important part of my backend development responsibilities. I worked on validating API behaviour, investigating backend errors, and checking authentication-related functionality.",
          "The project technology list includes Chai as a testing tool. I do not have evidence to describe its exact role, test coverage, or specific test outcomes, so I avoid making those claims.",
          "Working with the available development and testing tools helped me understand how to identify integration issues and verify that backend changes behaved as expected. The experience reinforced the value of clear API contracts, repeatable tests, and systematic debugging.",
        ],
        highlights: [
          "REST API behaviour checks",
          "Request and response verification",
          "Authentication integration checks",
          "Database-operation validation where applicable",
          "Backend debugging",
          "Repeatable testing with available tools",
        ],
      },
      outcomes: {
        narrative: [
          "My work on Webbie provided valuable professional experience developing backend services using Node.js and TypeScript.",
          "Through the project, I strengthened my experience with REST APIs, authentication integrations, data-access tooling, and backend testing. It also improved my ability to work within an existing codebase and contribute application functionality that other parts of a product depend on.",
          "This experience has continued to inform how I approach backend architecture, integration boundaries, and maintainable code in later projects.",
        ],
        highlights: [
          "Professional Node.js and TypeScript development",
          "REST API implementation",
          "OAuth authentication integration experience",
          "Prisma data-access work",
          "Backend testing and debugging",
          "Contributing to an established software product",
        ],
      },
      lessons: [
        "Working on Webbie strengthened my understanding of professional backend development.",
        "I learned the importance of clear API contracts, consistent data handling, and carefully managing authentication-related integration points. Working with TypeScript and Prisma also helped me understand how development tools can support maintainable backend functionality.",
        "Testing and debugging reinforced the importance of checking application behaviour systematically. Most importantly, the experience helped me become more confident contributing to existing codebases and implementing backend features within a professional development environment.",
      ],
    },
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content:
          "I contributed to Webbie's backend services during my Backend Developer role at CVSpan from July to December 2024.",
      },
      objectives: {
        title: "Objectives",
        status: "documented",
        content:
          "I focused on contributing maintainable backend services, REST API functionality, authentication integration, Prisma-based data operations, and dependable communication with other application components.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "documented",
        content:
          "I worked with Node.js and TypeScript, developed REST API endpoints, contributed to OAuth-related authentication and Prisma data operations, investigated backend issues, tested relevant functionality, and supported integration with other application components.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "documented",
        content:
          "My work focused on the backend application layer using Node.js and TypeScript. I worked with REST API functionality, Prisma for database operations, and OAuth-related authentication integration. Specific database engines, providers, and internal architecture are not disclosed.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "documented",
        content:
          "I considered the separation of request handling, application logic, and data access, and used TypeScript to support clear application contracts. My work also required attention to how authentication integrations interacted with backend behaviour.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "documented",
        content:
          "My work involved coordinating authentication functionality with backend workflows, maintaining predictable REST API behaviour, and investigating backend issues through debugging and API testing.",
      },
      validation: {
        title: "Testing and validation",
        status: "documented",
        content:
          "I worked on validating API behaviour, investigating backend errors, and checking authentication-related functionality. Chai is listed among the project technologies, but its specific use, test coverage, and test outcomes are not independently documented.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "documented",
        content:
          "The project strengthened my professional experience with Node.js, TypeScript, REST APIs, authentication integration, Prisma, and backend testing while contributing to an established software product. No business or performance metrics are claimed.",
      },
      lessons: {
        title: "Lessons learned",
        status: "documented",
        content:
          "Working on Webbie strengthened my understanding of clear API contracts, consistent data handling, authentication integration, systematic testing, and contributing backend functionality within an existing codebase.",
      },
    },
  },
  {
    slug: "estie-metals-bot",
    title: "EstieMetalsBot",
    category: "Personal Engineering Projects",
    role: "Private project",
    description:
      "A private trading-system application I am developing with C# and .NET. It combines financial market-data processing, structured analysis, interactive charting, historical replay, and risk-aware decision workflows within a modular software architecture.",
    overview:
      "EstieMetalsBot is a private trading-system application I am developing with C# and .NET. It combines financial market-data processing, structured analysis, interactive charting, historical replay, and risk-aware decision workflows within a modular software architecture. Through this project, I am exploring complex system design, data integrity, external integrations, and the reliability challenges involved in engineering automated financial software.",
    tags: ["C#", ".NET", "PostgreSQL", "MetaTrader 5", "MQL5"],
    status: "Private · In Development",
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content:
          "I started EstieMetalsBot to engineer a structured and maintainable application capable of processing financial market information and supporting rule-based trading decisions. Rather than placing all the application logic inside a trading terminal, I designed the system around a dedicated C#/.NET engine with separate responsibilities for market-data handling, analysis, persistence, visualization, risk controls, and external integrations. I have also focused on building tools that make complex application behaviour easier to observe, inspect, and validate. The application remains under active development, with particular attention to correctness, reliability, and controlled progression toward automated execution.",
      },
      objectives: {
        title: "Objectives",
        status: "documented",
        content:
          "My main objective is to develop a reliable, extensible trading-system application that can process market data, evaluate structured trading conditions, and support consistent decision-making. I am working to establish dependable data acquisition and validation, separate analysis from external trading infrastructure, create reusable market-analysis components, build visual inspection tools, incorporate risk-awareness and safeguards, support repeatable testing and historical replay, and keep the system maintainable as it develops.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "documented",
        content:
          "As the developer responsible for EstieMetalsBot, I have translated complex functional and technical requirements into a structured software system. My work spans C#/.NET architecture, market-data processing, MetaTrader 5 communication, data validation and PostgreSQL persistence, chart visualization and historical replay, analytical tooling, rule-based workflows, safety-oriented requirements, and investigation of technical failures. I organize development into manageable, verifiable milestones, prioritizing separation of concerns, maintainability, traceability, and reliable behaviour.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "documented",
        content:
          "I designed EstieMetalsBot around a dedicated C#/.NET engine responsible for application orchestration and analytical logic. The application integrates with MetaTrader 5 through a thin MQL5 bridge, allowing market information to reach the .NET engine without placing every decision-making responsibility inside the trading terminal. I worked with broker-native candles across multiple timeframes, validation workflows, and PostgreSQL-backed historical persistence. Charting and replay use persisted market information for visualization, historical inspection, and controlled analytical testing. Separating these responsibilities makes the application easier to understand, test, maintain, and extend.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "documented",
        content:
          "One of my most important architectural decisions was to separate the analytical engine from the trading terminal. This lets me develop, inspect, and validate application behaviour independently of external execution. I also chose to maintain validated historical market information instead of relying entirely on transient data. For charting and historical inspection, I worked with broker-native timestamps and persisted candle data to improve consistency between source information and visual representation. I keep historical replay and analytical validation separate from live trading operations; these boundaries reduce coupling and support safer development, debugging, and future extensibility.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "documented",
        content:
          "I addressed the complexity of combining data processing, analysis, persistence, charting, and external integration by separating major responsibilities into components with clearer boundaries. To improve market-data consistency, I worked on validation and persistence for broker-native candles, including timestamps and timeframe consistency, and made that data available to visualization and historical inspection. Long-running validation also exposed timing-related problems and execution inconsistencies. I investigated these through controlled testing, evidence inspection, and incremental debugging, maintaining clear boundaries between completed, incomplete, and blocked validation rather than treating partial runs as successful. This work is ongoing; I do not claim those timing issues are permanently resolved.",
      },
      validation: {
        title: "Testing and validation",
        status: "documented",
        content:
          "Testing has been central to how I approach EstieMetalsBot. I have worked with native MT5 market data, persisted historical candles, chart inspection, and replay-oriented workflows to examine behaviour under controlled conditions. I have also used structured validation and debugging to investigate analytical outputs and identify inconsistencies. For complex execution workflows, I emphasize reproducibility, explicit failure reporting, and preserving evidence when mandatory checks cannot be completed. This helps me distinguish verified behaviour from functionality that still needs development and testing.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "documented",
        content:
          "EstieMetalsBot has allowed me to build a substantial software-engineering foundation for a complex, data-driven application. My work has brought together market-data integration, historical persistence, chart visualization, analytical workflows, and diagnostic tooling within a modular C#/.NET system. The project has strengthened my experience designing applications around reliability, data integrity, traceability, and validation. Development is ongoing, and this foundation supports further testing, refinement, and integration. I make no claim of financial performance or trading results.",
      },
      lessons: {
        title: "Lessons learned",
        status: "documented",
        content:
          "Building EstieMetalsBot has strengthened my understanding of developing complex, interconnected systems. Reliable applications need more than individual components that work in isolation: they need clear architectural boundaries, consistent data, dependable communication, and predictable failure handling. Working with market data reinforced the importance of accurate timestamps, persistence, and data integrity. Diagnostic tools showed me how much observability matters when investigating complex behaviour. Extended validation has also strengthened my approach to debugging, reproducible testing, and evidence-based development. The project continues to improve my ability to translate complex requirements into maintainable software through disciplined, incremental engineering.",
      },
    },
    editorialCaseStudy: {
      focus: [
        {
          title: "Market Data",
          description: "Ingestion, validation, and persistence.",
        },
        {
          title: "Architecture",
          description: "Modular C#/.NET components.",
        },
        {
          title: "Visualization",
          description: "Charts, historical replay, and diagnostics.",
        },
        {
          title: "Reliability",
          description: "Testing, validation, and safeguards.",
        },
      ],
      overview: [
        "I started EstieMetalsBot to engineer a structured and maintainable application capable of processing financial market information and supporting rule-based trading decisions.",
        "Rather than placing all the application logic inside a trading terminal, I designed the system around a dedicated C#/.NET engine with separate responsibilities for market-data handling, analysis, persistence, visualization, risk controls, and external integrations.",
        "I have also focused on building tools that make complex application behaviour easier to observe, inspect, and validate. The application remains under active development, with particular attention to correctness, reliability, and controlled progression toward automated execution.",
      ],
      objectives: [
        "Establish dependable market-data acquisition, validation, and persistence workflows.",
        "Separate analytical responsibilities from external trading infrastructure.",
        "Build reusable components for market analysis.",
        "Develop visual interfaces for inspecting market conditions and application behaviour.",
        "Incorporate risk-awareness and operational safeguards into the application architecture.",
        "Create repeatable testing and historical replay workflows.",
        "Design maintainable components that support future development.",
      ],
      contributions: [
        "Designed the C#/.NET application architecture.",
        "Developed market-data processing components.",
        "Integrated market-data communication with MetaTrader 5.",
        "Implemented data validation and PostgreSQL persistence workflows.",
        "Worked on chart visualization and historical replay capabilities.",
        "Developed tools for inspecting analytical outputs and system behaviour.",
        "Implemented and validated rule-based analytical workflows.",
        "Defined safety-oriented engineering requirements.",
        "Investigated technical failures and improved validation procedures.",
        "Organized development into manageable, verifiable engineering milestones.",
      ],
      architecture: [
        "I designed EstieMetalsBot around a dedicated C#/.NET engine responsible for application orchestration and analytical logic.",
        "The application integrates with MetaTrader 5 through a thin MQL5 bridge, allowing market information to reach the .NET engine without placing every decision-making responsibility inside the trading terminal.",
        "For market-data management, I worked with broker-native candles across multiple timeframes, validation workflows, and PostgreSQL-backed historical persistence. Charting and replay use persisted market information for visualization, historical inspection, and controlled analytical testing.",
        "Separating these responsibilities makes the application easier to understand, test, maintain, and extend.",
      ],
      architectureHighlights: [
        {
          title: "C#/.NET Engine",
          description: "Application orchestration, domain logic, and analytical workflows.",
        },
        {
          title: "MT5/MQL5 Integration",
          description: "Market-data communication and external trading-system integration.",
        },
        {
          title: "PostgreSQL",
          description: "Historical market-data storage and persistence.",
        },
        {
          title: "Charting and Replay",
          description: "Visualization, historical inspection, and diagnostic workflows.",
        },
      ],
      decisions: [
        "One of my most important architectural decisions was to separate the analytical engine from the trading terminal. This separation allows important application behaviour to be developed, inspected, and validated independently of external execution.",
        "I also chose to maintain validated historical market information instead of relying entirely on transient data. For charting and historical inspection, I worked with broker-native timestamps and persisted candle data to improve consistency between source information and visual representation.",
        "Another important decision was to keep historical replay and analytical validation separate from live trading operations. These architectural boundaries reduce unnecessary coupling and support safer development, debugging, and future extensibility.",
      ],
      challenges: [
        {
          title: "Managing complex application responsibilities",
          challenge:
            "EstieMetalsBot combines market-data processing, analytical logic, persistence, charting, and external integration. Keeping these responsibilities organized presented an architectural challenge.",
          response:
            "I addressed this by separating major responsibilities into distinct components with clearer integration boundaries. This improved the structure of the application and made individual subsystems easier to reason about and validate.",
        },
        {
          title: "Maintaining market-data consistency",
          challenge:
            "Processing financial market data required careful attention to candle timestamps, timeframe consistency, and historical data integrity.",
          response:
            "I worked on validation and persistence workflows for broker-native market data, making that information available to charting and historical inspection components. This established a more consistent foundation for visualization and repeatable analysis.",
        },
        {
          title: "Reliability during extended validation",
          challenge:
            "Long-running validation workflows exposed recurring timing-related problems and execution inconsistencies.",
          response:
            "I investigated these issues through controlled testing, evidence inspection, and incremental debugging. Rather than treating incomplete runs as successful results, I maintained strict validation boundaries and worked on safer, more traceable continuation procedures. Resolving these issues remains ongoing.",
        },
      ],
      validation: {
        narrative: [
          "I have worked with native MT5 market data, persisted historical candles, chart inspection, and replay-oriented workflows to examine application behaviour under controlled conditions.",
          "I have also used structured validation and debugging to investigate analytical outputs and identify inconsistencies. For complex execution workflows, I emphasize reproducibility, explicit failure reporting, and preserving evidence when mandatory checks cannot be completed.",
          "This approach helps me distinguish verified application behaviour from functionality that still requires further development and testing.",
        ],
        highlights: [
          "Market-data validation",
          "Historical data consistency",
          "Chart and replay verification",
          "Structured debugging",
          "Repeatable tests",
          "Failure reporting",
          "Controlled development milestones",
        ],
      },
      outcomes: {
        narrative: [
          "EstieMetalsBot has allowed me to build a substantial software-engineering foundation for a complex, data-driven application. My work has brought together market-data integration, historical persistence, chart visualization, analytical workflows, and diagnostic tooling within a modular C#/.NET system.",
          "The project has strengthened my experience designing applications around reliability, data integrity, traceability, and validation. Although development is ongoing, this foundation supports further testing, refinement, and integration.",
        ],
        highlights: [
          "Modular C#/.NET application architecture",
          "Broker-native market-data processing",
          "PostgreSQL-backed historical data workflows",
          "Chart visualization and historical replay capabilities",
          "Rule-based analysis and diagnostic tooling",
          "Structured testing and validation procedures",
        ],
      },
      lessons: [
        "Building EstieMetalsBot has strengthened my understanding of what it takes to develop complex, interconnected software systems. Reliable applications require clear architectural boundaries, consistent data, dependable communication, and predictable failure handling.",
        "Working with market data reinforced the importance of accurate timestamps, persistence, and data integrity. Developing visual diagnostic tools helped me appreciate the role of observability when investigating complex application behaviour.",
        "The challenges encountered during extended validation strengthened my approach to debugging, reproducible testing, and evidence-based development. Most importantly, the project continues to improve my ability to translate complex requirements into maintainable software through disciplined, incremental engineering.",
      ],
    },
  },
  {
    slug: "mood-playlist",
    title: "MoodPlaylist",
    category: "Full-Stack Web Development",
    role: "Full-Stack Developer · Personal project",
    description:
      "A mood-based music discovery application with a Next.js frontend and C# Web API backend. Its public description presents Spotify track suggestions, playlist creation, saved favourites, and refreshed selections; those workflows have not been independently tested.",
    overview:
      "MoodPlaylist is a deployed mood-based music discovery application. The supplied project information identifies a Next.js frontend and C# Web API backend. Its public description presents mood-based discovery and Spotify-related playlist features; operation of those workflows has not been independently verified.",
    tags: ["Next.js", "C#", "C# Web API"],
    status: "Live deployment",
    liveLink: "https://mood-playlist-five.vercel.app",
    livePreviewEligible: true,
    moodPlaylistCaseStudy: {
      focus: [
        {
          title: "Frontend Engineering",
          description:
            "Responsive Next.js interfaces and interactive application workflows.",
        },
        {
          title: "Backend Development",
          description: "C# Web API services and application logic.",
        },
        {
          title: "Music Discovery",
          description:
            "Mood-based discovery and Spotify-related integration work.",
        },
        {
          title: "Full-Stack Integration",
          description:
            "Communication between the frontend, backend, and external services.",
        },
      ],
      hero: [
        "MoodPlaylist is a full-stack music discovery application I developed using Next.js for the frontend and C# Web API for the backend.",
        "The application is designed around a simple idea: making music discovery feel more personal by helping users explore tracks and playlists based on their current mood.",
        "Through this project, I have worked on connecting a responsive frontend experience with backend application logic and external music-related services.",
      ],
      overview: [
        "I developed MoodPlaylist to explore how a music application could provide a more personalized discovery experience through mood-based interaction.",
        "Rather than making users begin with a specific song, artist, or genre, the application presents mood selection as the starting point for discovering music.",
        "I built the frontend with Next.js and used a C# Web API to support the backend functionality. The project gave me an opportunity to work across the application stack, from interface development and user interactions to API integration and data-driven features.",
      ],
      objectives: {
        introduction:
          "My goal was to develop a full-stack music application that combines a simple user experience with maintainable frontend and backend responsibilities. The main objectives were to:",
        items: [
          "Design an intuitive interface for mood-based music discovery.",
          "Support a smooth journey from mood selection to music suggestions.",
          "Connect the Next.js frontend to a C# Web API.",
          "Integrate the application's music-discovery functionality.",
          "Make music selection and playlist interactions easy to understand.",
          "Keep application components organized and maintainable.",
          "Provide an experience that works comfortably across different screen sizes.",
        ],
      },
      contributions: {
        introduction:
          "As the developer of MoodPlaylist, I worked across both the frontend and backend of the application.",
        items: [
          "Developed the frontend using Next.js.",
          "Built backend functionality using C# Web API.",
          "Connected frontend user interactions to backend services.",
          "Designed and implemented user-facing music-discovery interfaces.",
          "Worked on mood-selection and music-discovery workflows.",
          "Worked on integrating external music-related services.",
          "Worked on backend data handling and application integration.",
          "Debugged frontend/backend communication and deployment behaviour.",
          "Refined the user experience and application responsiveness.",
        ],
      },
      architecture: {
        narrative: [
          "I structured MoodPlaylist around a Next.js frontend and a separate C# Web API backend.",
          "The frontend presents the music-discovery experience and handles user interactions, while the backend supports server-side application functionality and integration requirements. This separation allowed me to work on the presentation layer and application services independently, with an API boundary between them.",
          "I also worked on the supporting backend infrastructure needed to run the application beyond local development. I have not included database, authentication, or hosting-provider specifics here because I could not verify those details from the available project documentation.",
        ],
        highlights: [
          {
            title: "Next.js Frontend",
            description:
              "Interface rendering, navigation, mood selection, and user interactions.",
          },
          {
            title: "C# Web API",
            description: "Backend application logic and API services.",
          },
          {
            title: "Music Integration",
            description:
              "Spotify-related discovery interactions described by the application.",
          },
          {
            title: "Data and Infrastructure",
            description:
              "Backend hosting and data handling; provider and persistence details are not asserted.",
          },
        ],
      },
      decisions: [
        "One important decision I made was to keep the frontend and backend as separate application layers. Using Next.js for the interface and C# Web API for backend functionality helped me organize responsibilities and keep the application easier to maintain.",
        "I focused on making the main user journey straightforward: the user selects a mood, explores music, and interacts with the available playlist features.",
        "I also considered how the frontend should respond to asynchronous backend and external-service operations. This brought attention to loading behaviour, error handling, and how the experience should behave when requested data is not immediately available.",
      ],
      challenges: [
        {
          title: "Connecting Two Technology Stacks",
          challenge:
            "Building MoodPlaylist required coordinating a Next.js frontend with a backend developed in C#.",
          response:
            "I approached this by keeping responsibilities clearly separated and using API communication to connect the user experience with backend functionality. This strengthened my practical understanding of full-stack integration across different technology stacks.",
        },
        {
          title: "Building an Intuitive Discovery Experience",
          challenge:
            "A key design challenge was keeping music discovery simple while introducing mood-based personalization.",
          response:
            "I focused on making the interface straightforward, with clear interactions intended to guide users from selecting a mood to exploring relevant music. This helped me think more carefully about how frontend architecture and user experience influence each other.",
        },
        {
          title: "Backend Deployment and Reliability",
          challenge:
            "Running the application's backend outside my local development environment introduced operational challenges, including backend availability and health-check issues.",
          response:
            "I investigated how deployment behaviour affected API accessibility. The experience reinforced the importance of deployment diagnostics, service health monitoring, and reliable communication between deployed frontend and backend systems. I do not claim that every historical availability issue has been resolved.",
        },
      ],
      validation: {
        narrative: [
          "My testing approach has involved checking frontend behaviour, API communication, and application workflows. I have also worked on debugging backend responses and deployment-related issues to understand how the application behaves when services are unavailable or respond unexpectedly.",
          "These activities have helped me develop a stronger understanding of end-to-end debugging, frontend/backend integration, and the importance of validating behaviour beyond the user interface alone.",
        ],
        highlights: [
          "Frontend interaction checks",
          "API integration and response debugging",
          "Responsive interface review",
          "Error and unavailable-service checks",
          "Deployment diagnostics",
        ],
        currentDeploymentNote:
          "The public landing page is available, but a CORS preflight failure prevented the mood-list API request from completing during review. API-dependent workflows therefore remain unverified in the deployed preview.",
      },
      outcomes: {
        narrative: [
          "MoodPlaylist demonstrates my experience developing a full-stack application with Next.js and C# Web API.",
          "Through the project, I worked on a user-facing music-discovery experience while also gaining practical experience with backend services, integration boundaries, and deployment-related problem-solving. It has strengthened my ability to approach software development across multiple application layers rather than focusing on the frontend alone.",
        ],
        highlights: [
          "Full-stack Next.js and C# development",
          "Music-discovery user interface",
          "Frontend-to-backend integration work",
          "External-service integration work",
          "Backend deployment troubleshooting",
          "Responsive application development",
        ],
      },
      lessons: [
        "Developing MoodPlaylist helped me better understand the relationship between frontend experience and backend reliability.",
        "I learned that an intuitive interface is only one part of a successful full-stack application. The underlying services also need to communicate reliably, handle unexpected responses, and provide the data the interface depends on.",
        "Working with separate technology stacks strengthened my understanding of API-driven development. The project also reinforced the importance of clear component responsibilities, thoughtful user experience, and careful debugging when integrating multiple systems.",
      ],
    },
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content: "MoodPlaylist is a mood-based music discovery application. Its public deployment responds successfully. Detailed source code and project documentation were not available in this portfolio repository.",
      },
      objectives: {
        title: "Objectives",
        status: "documented",
        content: "The stated purpose is to help people discover music based on mood. Further product objectives have not been independently documented.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "documented",
        content: "This is a personal project that I developed. The supplied project information identifies a Next.js frontend and C# Web API backend; feature-level ownership has not been independently reviewed against source.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "documented",
        content: "The supplied stack is Next.js for the frontend and C# Web API for the backend. API endpoints, persistence, authentication, and deployment topology have not been verified and are not asserted here.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "documented",
        content: "Specific implementation decisions and their trade-offs have not been verified from source or project documentation.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "documented",
        content: "No project-specific technical challenge has been independently verified for publication.",
      },
      validation: {
        title: "Testing and validation",
        status: "documented",
        content: "The public deployment returned HTTP 200 during review. No application workflows, integrations, or automated tests were independently exercised.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "documented",
        content: "The public application is deployed. No user, business, or measured outcome is claimed, and the advertised workflows have not been independently verified.",
      },
      lessons: {
        title: "Lessons learned",
        status: "documented",
        content: "Project-specific lessons have not been supplied or verified.",
      },
      frontend: {
        title: "Frontend implementation",
        status: "documented",
        content: "The project information identifies Next.js as the frontend framework. Component structure and implementation details have not been reviewed.",
      },
      backend: {
        title: "C# Web API backend",
        status: "documented",
        content: "The project information identifies a C# Web API backend. Endpoints, data model, and backend behavior have not been reviewed.",
      },
      integration: {
        title: "Frontend-to-backend integration",
        status: "documented",
        content: "A Next.js frontend and C# Web API are identified in the supplied project information. The API contract and integration behavior have not been independently tested.",
      },
      features: {
        title: "Advertised application features",
        status: "documented",
        content: "The project description lists mood-based music discovery, Spotify track suggestions, playlist creation, saved favourite tracks, and refreshing selections. These are descriptions of advertised functionality, not a claim that each workflow was verified in this review.",
      },
      solutions: {
        title: "Solutions",
        status: "documented",
        content: "Specific implemented solutions have not been independently verified from source or documentation.",
      },
    },
  },
  {
    slug: "earn-tracker",
    title: "EarnTracker",
    category: "Full-Stack Web Development",
    role: "Full-Stack Developer · Personal project",
    description:
      "An earnings-management and financial-tracking application for freelancers and independent earners, with a Next.js frontend and C# Web API backend. Payment and financial workflows shown on its public landing page have not been independently tested.",
    overview:
      "EarnTracker is a deployed earnings-management and financial-tracking application for freelancers and independent earners. The supplied project information identifies a Next.js frontend and C# Web API backend. Its public landing page describes income tracking, goals, and safe payment demonstrations; operational behavior has not been independently verified.",
    tags: ["Next.js", "C#", "C# Web API"],
    status: "Live deployment",
    liveLink: "https://earn-tracker-chi.vercel.app",
    livePreviewEligible: true,
    earnTrackerCaseStudy: {
      focus: [
        {
          title: "Full-Stack Architecture",
          description: "Next.js frontend and C# Web API backend.",
        },
        {
          title: "Financial Data",
          description:
            "Income, fees, and net-earnings presentation for independent work.",
        },
        {
          title: "Payment Integration",
          description:
            "Development and testing workflows described by the public application.",
        },
        {
          title: "Data Visualization",
          description:
            "Dashboard information and financial-goal progress presentation.",
        },
      ],
      hero: [
        "EarnTracker is a full-stack financial tracking application I developed using Next.js for the frontend and C# Web API for the backend.",
        "The application is designed to help freelancers and independent earners bring their income, fees, payment information, and financial goals into one organized experience.",
        "Through this project, I have worked on building data-driven interfaces, integrating frontend workflows with backend services, and handling financial information in a clear and structured way.",
      ],
      overview: [
        "I developed EarnTracker around a practical problem: people earning money from multiple sources can find it difficult to maintain a clear picture of how much they actually earn.",
        "The application is designed to bring income information, associated fees, and financial goals into a more organized interface.",
        "I built the user-facing application with Next.js and used C# Web API for backend functionality. Working on EarnTracker gave me the opportunity to develop a full-stack application that combines financial data, interactive dashboards, API communication, and user-focused design.",
      ],
      objectives: {
        introduction:
          "My objective was to build a maintainable financial tracking application that makes earnings information easier to understand. I focused on several goals:",
        items: [
          "Create an intuitive interface for viewing income and earnings.",
          "Organize financial information from multiple income sources.",
          "Present the relationship between incoming payments, fees, and net earnings.",
          "Provide an understandable view of financial goals and progress.",
          "Integrate the Next.js frontend with a C# Web API.",
          "Support safe development and testing of payment-related workflows.",
          "Keep financial data presentation clear, structured, and responsive.",
          "Design maintainable components that could support further improvements.",
        ],
      },
      contributions: {
        introduction:
          "As the developer of EarnTracker, I worked on both its frontend and backend components.",
        items: [
          "Built the frontend using Next.js.",
          "Developed backend functionality using C# Web API.",
          "Connected application interfaces with backend endpoints.",
          "Worked on income-related dashboard interfaces.",
          "Worked with financial data representation and application workflows.",
          "Worked on financial-goal features.",
          "Worked on payment-related development workflows.",
          "Handled frontend states and backend responses.",
          "Debugged application behaviour and integration issues.",
          "Improved interface organization and usability.",
        ],
      },
      architecture: {
        narrative: [
          "I structured EarnTracker around a Next.js frontend and a C# Web API backend. The frontend provides the interactive experience for viewing income information, financial summaries, and application workflows.",
          "The backend supports application services and processing of relevant financial information. I used API communication to connect the frontend with server-side functionality, organizing the application around these responsibilities.",
          "I also worked on payment-related development workflows, where separating test operations from real financial activity was an important consideration. The available project material did not verify a database, ORM, authentication library, or payment-processing architecture, so I do not make claims about those implementation details.",
        ],
        highlights: [
          {
            title: "Next.js Frontend",
            description:
              "Application views, forms, dashboard components, and user interactions.",
          },
          {
            title: "C# Web API",
            description: "Backend services, request handling, and application logic.",
          },
          {
            title: "Financial Data",
            description:
              "Income, fees, summaries, and goals as presented by the product.",
          },
          {
            title: "Payment Testing",
            description:
              "Publicly described demo and provider test flows; integrations were not independently exercised.",
          },
        ],
      },
      decisions: [
        "One of my key decisions was to separate the frontend experience from the backend services. This helped me organize the application's financial data handling independently from how information is displayed to users.",
        "I focused on presenting financial information in a way that is understandable without requiring users to interpret unnecessarily complicated data.",
        "Another important consideration involved payment-related development. I worked with development and demonstration workflows rather than treating test payments as real financial activity. This helped me think critically about application structure, user trust, and predictable financial-data behaviour.",
      ],
      challenges: [
        {
          title: "Organizing Financial Information",
          challenge:
            "Financial information can become difficult to interpret when income, fees, and payment sources are spread across different records.",
          response:
            "I approached this by organizing the application's data presentation around clearer summaries and relevant financial details. This helped me improve how information is structured and communicated within the interface.",
        },
        {
          title: "Frontend and Backend Integration",
          challenge:
            "Connecting a Next.js application with a C# Web API required coordination between frontend data requirements and backend responses.",
          response:
            "I worked on maintaining clear communication between these layers and handling the information needed by the application's user-facing features. This strengthened my experience integrating different technology stacks into a single application.",
        },
        {
          title: "Payment Workflows and Data Consistency",
          challenge:
            "Developing payment-related functionality introduced considerations around transaction information, response handling, and the difference between simulated and real financial activity.",
          response:
            "I worked on payment-related development and testing workflows with a distinction between demonstration activity and real-money operations. This reinforced the importance of reliable application states and careful validation when working with financial data.",
        },
      ],
      validation: {
        narrative: [
          "My testing approach has focused on validating application workflows, checking frontend-to-backend communication, and reviewing the way financial information is displayed.",
          "I have also worked on payment-related functionality using development and demonstration environments. The live page describes PayPal and Paystack test-payment options, but I did not independently test those integrations, authenticated workflows, or backend API behaviour during this review.",
        ],
        highlights: [
          "Frontend workflow checks",
          "Backend API integration work",
          "Financial data presentation review",
          "Input validation where implemented",
          "Payment development workflows",
          "Responsive interface review",
          "Error handling and debugging",
        ],
        evidenceNote:
          "The public landing page describes income and fee summaries, financial goals, and PayPal and Paystack test-payment workflows. These feature descriptions were not verified against application source or by completing authenticated flows.",
      },
      outcomes: {
        narrative: [
          "EarnTracker demonstrates my experience developing a full-stack application around financial-management requirements.",
          "Through the project, I worked on connecting a modern Next.js frontend to a C# backend while building interfaces intended to organize income-related information and financial goals. It has also provided practical experience with payment-related development, financial-data representation, and coordinating features across frontend and backend services.",
        ],
        highlights: [
          "Next.js and C# full-stack development",
          "Earnings-oriented dashboard design",
          "API-driven application workflows",
          "Financial-data presentation",
          "Financial-goal feature development",
          "Payment integration development experience",
        ],
        demonstrationNote:
          "Figures shown in the public landing page’s demonstration dashboard are illustrative product data. They are not verified user earnings, financial results, or project impact metrics.",
      },
      lessons: [
        "Developing EarnTracker strengthened my understanding of the responsibility involved in building applications that handle financial information.",
        "I learned the importance of presenting data clearly while ensuring that the underlying application logic is structured and maintainable. Working across Next.js and C# Web API reinforced my full-stack integration skills.",
        "The payment-related work also helped me appreciate why financial applications need reliable response handling, careful testing, and clear separation between demonstration and real transactions. Overall, the project strengthened my ability to connect technical implementation decisions with usability and application reliability.",
      ],
    },
    caseStudy: {
      purpose: {
        title: "Project overview",
        status: "documented",
        content: "EarnTracker is an earnings-management and financial-tracking application for freelancers and independent earners. Its public deployment responds successfully. Detailed source code and project documentation were not available in this portfolio repository.",
      },
      objectives: {
        title: "Objectives",
        status: "documented",
        content: "The stated purpose is to help independent earners understand and track earnings. Further product objectives have not been independently documented.",
      },
      responsibilities: {
        title: "My responsibilities",
        status: "documented",
        content: "This is a personal project that I developed. The supplied project information identifies a Next.js frontend and C# Web API backend; feature-level ownership has not been independently reviewed against source.",
      },
      architecture: {
        title: "Architecture and technical approach",
        status: "documented",
        content: "The supplied stack is Next.js for the frontend and C# Web API for the backend. API endpoints, persistence, authentication, payment architecture, and deployment topology have not been verified and are not asserted here.",
      },
      decisions: {
        title: "Implementation decisions",
        status: "documented",
        content: "Specific implementation decisions and their trade-offs have not been verified from source or project documentation.",
      },
      challenges: {
        title: "Challenges and solutions",
        status: "documented",
        content: "No project-specific technical challenge has been independently verified for publication.",
      },
      validation: {
        title: "Testing and validation",
        status: "documented",
        content: "The public deployment returned HTTP 200 during review. No application workflows, payment integrations, or automated tests were independently exercised.",
      },
      outcomes: {
        title: "Outcomes and impact",
        status: "documented",
        content: "The public application is deployed. No user, business, financial, or measured outcome is claimed, and the advertised workflows have not been independently verified.",
      },
      lessons: {
        title: "Lessons learned",
        status: "documented",
        content: "Project-specific lessons have not been supplied or verified.",
      },
      frontend: {
        title: "Frontend implementation",
        status: "documented",
        content: "The project information identifies Next.js as the frontend framework. Component structure and implementation details have not been reviewed.",
      },
      backend: {
        title: "C# Web API backend",
        status: "documented",
        content: "The project information identifies a C# Web API backend. Endpoints, data model, and backend behavior have not been reviewed.",
      },
      integration: {
        title: "Frontend-to-backend integration",
        status: "documented",
        content: "A Next.js frontend and C# Web API are identified in the supplied project information. The API contract and integration behavior have not been independently tested.",
      },
      features: {
        title: "Advertised application features",
        status: "documented",
        content: "The EarnTracker landing page describes income and fee visibility, multiple income sources, financial goals, safe demonstration payments, and PayPal and Paystack test-payment workflows. These are descriptions of advertised functionality, not a claim that each integration was verified.",
      },
      solutions: {
        title: "Solutions",
        status: "documented",
        content: "Specific implemented solutions have not been independently verified from source or documentation.",
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
