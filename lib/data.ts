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
