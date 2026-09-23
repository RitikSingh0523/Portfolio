export const personalInfo = {
  name: "Ritik Kumar Singh",
  title: "Frontend / Full Stack JavaScript Developer",
  phone: "+91 7061986650",
  email: "ritiksingh0523@gmail.com",
  location: "Noida, India",
  resumeFilePdf: "/Ritik_Kumar_Singh_Resume.pdf",
  resumeFileDocx: "/Ritik_Kumar_Singh_Resume.docx",
  summary:
    "Frontend Developer with 3 year 9 months of experience building scalable, high-performance web applications using React.js and Angular. Strong expertise in modern JavaScript (ES6+), REST APIs, and component-based architecture. Experienced in full-stack development (Node.js, MongoDB), CI/CD pipelines, and cloud services (AWS, GCP). Proven track record delivering enterprise AI/chat platforms, HR self-service systems, file management dashboards, and shared component libraries in Agile environments.",
};

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Angular",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Responsive Design",
      "Tailwind CSS",
      "Taiga UI",
      "Nebular",
      "ECharts",
    ],
  },
  {
    label: "Micro-Frontend",
    skills: [
      "Single-SPA",
      "SystemJS Import Maps",
      "Module Federation-style orchestration (Angular + React)",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "WebSocket / Real-Time Streaming",
      "Joi Validation",
      "Swagger/OpenAPI",
    ],
  },
  {
    label: "Databases",
    skills: ["MongoDB (Mongoose)", "SQL"],
  },
  {
    label: "Cloud, DevOps & Integrations",
    skills: [
      "AWS",
      "Google Cloud Platform (GCP)",
      "Azure Blob Storage",
      "CI/CD Pipelines",
      "Azure AD / MSAL (SSO)",
      "Microsoft Teams SDK",
    ],
  },
  {
    label: "Tools & Practices",
    skills: [
      "Git",
      "Postman",
      "Linux",
      "Agile/Scrum",
      "Jira",
      "Web Performance Optimization",
      "Code Review",
      "API Integration",
      "UI/UX Collaboration",
      "VS Code",
      "Windsurf",
      "Antigravity",
      "Claude",
      "Gemini",
    ],
  },
];

export const experience: {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}[] = [
  {
    role: "Software Development Engineer – L3",
    company: "L&T Technology Services",
    location: "Chennai, India",
    period: "Oct 2022 – Present",
    bullets: [
      "Developed scalable enterprise frontend applications in Angular (v19) with reusable, component-based architecture, including an AI assistant platform and the company-wide MyLTTS intranet portal.",
      "Improved UI responsiveness by 20% through rendering performance optimization and eliminating unnecessary re-renders.",
      "Designed and implemented CI/CD pipelines (Azure Pipelines, Docker/Nginx), reducing deployment time by 30%.",
      "Collaborated with UI/UX designers to deliver responsive, accessible, and cross-browser compatible interfaces using Taiga UI and Nebular design systems.",
      "Built real-time features using WebSocket-based streaming and integrated REST APIs to support enterprise application requirements.",
      "Integrated Azure AD SSO (MSAL) and the Microsoft Teams SDK for enterprise authentication and Teams-embedded application experiences.",
      "Conducted code reviews and enforced best practices to maintain code quality and long-term maintainability.",
      "Troubleshot and resolved production issues, ensuring high system availability and reliability across mission-critical internal platforms.",
    ],
  },
  {
    role: "Associate Engineer Trainee – L1",
    company: "L&T Technology Services",
    location: "Mysore, India",
    period: "Feb 2022 – Sep 2022",
    bullets: [
      "Trained in full-stack web development using React.js, Node.js, and AWS cloud services.",
      "Assisted in building reusable UI components and integrating REST APIs into frontend workflows.",
      "Participated in Agile sprint cycles encompassing development, testing, and deployment phases.",
      "Contributed to debugging and performance optimization tasks across multiple applications.",
    ],
  },
];

export const projects: {
  name: string;
  role: string;
  tech: string[];
  bullets: string[];
}[] = [
  {
    name: "Enterprise Conversational AI Assistant (LINA)",
    role: "Frontend Developer",
    tech: [
      "Angular",
      "TypeScript",
      "WebSocket",
      "Azure MSAL",
      "Microsoft Teams SDK",
      "Taiga UI",
      "Tailwind CSS",
    ],
    bullets: [
      "Developed the frontend for LINA, an enterprise conversational AI assistant embedded in Microsoft Teams and web, enabling employees to complete HR and data workflows through natural-language chat instead of traditional forms.",
      "Implemented real-time streaming chat via a custom WebSocket service with chained streaming states (loading, chunked response, completion, error handling) for low-latency AI responses.",
      "Designed a dynamic, server-driven UI renderer allowing the backend AI agent to push structured components (charts, approval cards, pickers) directly into the chat stream instead of plain text.",
      "Built an agentic workflow visualizer (\"Excel Agent\") that displays multi-step AI task execution and results for spreadsheet and data-automation requests.",
      "Delivered core HR self-service modules within the assistant, including leave management (apply, track balances, approval status), attendance tracking, and approval workflows, all driven conversationally.",
      "Integrated Azure AD SSO via MSAL and the Microsoft Teams SDK for seamless authentication across standalone web and embedded Teams contexts.",
      "Built an admin console with analytics dashboards, feature-flag management, and user/retention controls to manage platform rollout.",
      "Implemented voice input and multilingual text-to-speech for accessible, hands-free interaction.",
    ],
  },
  {
    name: "Enterprise Employee Intranet Portal (MyLTTS)",
    role: "Frontend Developer",
    tech: [
      "Angular 19",
      "Nebular",
      "Taiga UI",
      "ECharts",
      "Azure MSAL",
      "Microsoft Teams SDK",
    ],
    bullets: [
      "Built major modules of MyLTTS, the company-wide employee intranet portal for L&T Technology Services, using Angular 19 with server-side rendering (Angular Universal) for fast, SEO-friendly page loads at enterprise scale.",
      "Implemented role- and permission-based access control (RBAC) guards to scope department and admin sections (Legal, HR Operations, Marketing, Procurement, Quality, Data Privacy) to authorized users only.",
      "Built employee engagement features including mood analysis/trends dashboards (ECharts) surfacing pulse-survey sentiment, and a Pulse365 employee engagement module.",
      "Developed the Townhall module for company-wide events (event creation, employee dashboard, RSVP/attendance tracking).",
      "Built My Team modules for org hierarchy, project-team views, and team attendance tracking across two iterations (My Team and My Team v2).",
      "Embedded the LINA AI chat widget directly into the portal home page, giving every employee direct access to the conversational assistant.",
      "Integrated Azure AD SSO (MSAL) and the Microsoft Teams SDK, enabling access via web and as an embedded Teams tab.",
      "Built a content upload/preview pipeline for admins to manage portal content, and containerized the app with Docker/Nginx, deployed via Azure Pipelines CI/CD.",
    ],
  },
  {
    name: "AppStudio Component Library & Micro-Frontend Playground",
    role: "Frontend Developer",
    tech: [
      "Angular",
      "React",
      "Single-SPA",
      "TypeScript",
      "Azure MSAL",
      "Chart.js",
      "Azure Blob Storage",
    ],
    bullets: [
      "Built a Single-SPA micro-frontend playground that orchestrates independently deployed Angular and React applications under one shell, resolved at runtime via SystemJS import maps.",
      "Consumed and validated the company-wide \"AppStudio\" component library, a set of versioned scoped npm packages published in parallel for Angular and React (generic UI, forms, charts, media viewer, navigation, authentication, resting displays), ensuring visual and behavioral parity across both frameworks.",
      "Built a JSON-schema-driven, low-code rendering layer where UI components (charts, forms, tables, maps) are composed from versioned configuration files rather than hardcoded markup.",
      "Implemented a broad catalog of shared data-visualization and input components — bar/line/pie/radar/doughnut/stacked/area/gauge charts, interactive maps with geocoding, QR/barcode scanning, multi-step forms, and draggable/streaming graphs — reused across multiple product teams.",
      "Built configurable health-monitoring widgets (ECG waveform, SpO2 oximeter, range and area displays) as reusable, JSON-driven components for healthcare-oriented dashboards.",
      "Integrated Azure AD SSO (MSAL) independently in both the Angular and React micro-apps, and a visual \"API Setup\" component for configuring and testing REST requests without writing code.",
      "Deployed each micro-app independently to Azure Blob Storage/CDN, allowing teams to ship framework-specific updates without redeploying the whole platform.",
    ],
  },
  {
    name: "File Management Dashboard",
    role: "Full Stack Developer",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    bullets: [
      "Built a role-based file management dashboard enabling users to upload, view, and manage files based on assigned access levels (Admin, Manager, Viewer).",
      "Implemented granular permission controls on both frontend and backend ensuring users can only access and perform operations authorized for their role.",
      "Developed a dynamic, filterable file explorer UI in React.js with real-time status updates and search functionality.",
      "Designed and built secure REST APIs in Node.js/Express.js to handle file operations, access validation, and role enforcement.",
      "Integrated MongoDB for scalable file metadata storage with efficient access-level based querying.",
    ],
  },
];

export const education: {
  degree: string;
  institution: string;
  period: string;
}[] = [
  {
    degree: "Bachelor of Technology (B.Tech) – Computer Science and Engineering",
    institution: "Lovely Professional University",
    period: "2018 – 2022",
  },
];

export const achievements: string[] = [
  "Promoted from L1 to L3 within 15 months at L&T Technology Services, reflecting consistent high performance.",
  "Received SPOT Award for delivering high-impact development contributions ahead of schedule.",
];

export const languages: { name: string; level: string }[] = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Bhojpuri", level: "Proficient" },
  { name: "Angika", level: "Proficient" },
];

export const stats: { label: string; value: string }[] = [
  { label: "Years of Experience", value: "3.9+" },
  { label: "Enterprise Projects", value: "4+" },
  { label: "Technologies", value: "40+" },
  { label: "UI Responsiveness Gain", value: "20%" },
];
