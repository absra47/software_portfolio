export const profile = {
  name: "Absra Girma",
  firstName: "Absra",
  lastName: "Girma",
  role: "ERP Developer & Software Engineer",
  location: "Addis Ababa, Ethiopia",
  email: "absra12c@gmail.com",
  phone: "+251 98 578 7139",
  phoneHref: "+251985787139",
  linkedin: "https://linkedin.com/in/absragirma",
  github: "https://github.com/absra47",
  resumeUrl: "/Absra_Girma_Resume.pdf",
  tagline:
    "Applying strong analytical skills to identify issues and implement efficient software solutions — with a growing focus on ERP systems built on Odoo.",
  summary:
    "I'm a software developer based in Addis Ababa, Ethiopia, specializing in ERP customization and Odoo development, with strong Python, SQL, and full-stack skills. I've delivered compliance-critical integrations — including government e-invoicing (EIMS) automation within Odoo — and I care about translating complex regulatory and operational requirements into reliable, audit-ready systems across the full customization stack.",
  currentlyLine: "Currently working as a Mid-Level ERP Developer at Pitron Tech Solutions.",
  availability: "Open to ERP & full-stack work",
};

export const heroFields = [
  { label: "Role", value: "Mid-Level ERP Developer" },
  { label: "Focus", value: "Odoo · Full-Stack" },
  { label: "Core stack", value: "Python · Next.js · PostgreSQL" },
  { label: "Based in", value: "Addis Ababa, ET" },
];

export const focusAreas = [
  {
    title: "ERP Development & Customization",
    tag: "Odoo",
    description:
      "Building and customizing Odoo modules — backend logic, database models, workflow automation, and UI — to streamline real business processes.",
  },
  {
    title: "Full-Stack Web Development",
    tag: "React · Node",
    description:
      "Building robust web applications from conception to deployment with React, Next.js, and Node.js, focused on functionality and user experience.",
  },
  {
    title: "API & Systems Integration",
    tag: "Integration",
    description:
      "Engineering reliable integrations between ERP systems and external APIs, including synchronous and asynchronous bulk processing at scale.",
  },
  {
    title: "Problem Solving & Debugging",
    tag: "Analysis",
    description:
      "Tracing issues through complex, real-world systems and shipping efficient, maintainable fixes rather than quick patches.",
  },
];

export const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    category: "ERP & Odoo",
    skills: [
      "Odoo Module Development",
      "ERP Concepts",
      "Workflow Automation",
      "API Integration & Customization",
      "CRM · Sales · Purchase",
      "Manufacturing · Inventory · Accounting",
    ],
  },
  {
    category: "ERP Industries Served",
    skills: [
      "Food & Retail",
      "Construction",
      "Pharmaceutical & Manufacturing",
      "HR & Payroll Consulting",
      "Government & Tax Compliance",
    ],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "pgAdmin"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Zustand"],
  },
  {
    category: "Tooling & Platforms",
    skills: ["Git / GitHub", "Docker", "Linux", "VS Code", "Postman", "Stripe"],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  subtitle?: string;
  start: string;
  end: string;
  active?: boolean;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Mid-Level ERP Developer",
    company: "Pitron Tech Solutions",
    subtitle: "Odoo 18 Community · Multi-Client ERP Delivery",
    start: "Feb 2026",
    end: "Present",
    active: true,
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Design and ship custom Odoo 18 Community modules across multiple client deployments — models, views, security, OWL front-end, QWeb reports, and CI/CD — including leading a multi-branch inventory management system replacing legacy software for a food & retail client.",
      "Built an OWL-based executive dashboard (pitron_erp_dashboard) with a scheduled cron-sync architecture that ingests external Performance Tracking and Cash Collection APIs into normalized snapshot models, delivering fast daily-aggregated reporting without live API calls in the UI.",
      "Developed a Chapa payout webhook receiver with audit logging, idempotency via transaction reference, and automated draft vendor-bill creation, plus a ZKTeco biometric attendance integration.",
      "Implemented Ethiopian pension-law HR/payroll enhancements and an ERCA e-invoicing branch-registration module, and kept production instances healthy through production-safe SQL diagnostics — resolving module version conflicts and missing database constraints.",
    ],
  },
  {
    role: "ERP Developer",
    company: "Ashewa Technologies",
    subtitle: "Construction ERP Implementation (Odoo) · HR Consulting",
    start: "Jul 2025",
    end: "Feb 2026",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Implemented and customized Odoo modules for construction-industry clients — spanning project management, procurement, inventory, and cost tracking — tailoring workflows to construction project lifecycles, site operations, and multi-project reporting.",
      "Provided HR consultancy and configured Odoo HR and Payroll modules to client policies — covering the employee lifecycle, leave, attendance, and payroll runs — advising on process design, statutory compliance, and system adoption.",
      "Integrated the EIMS API for government e-invoicing and tax clearance (IRN and QR-code capture), linking validation data to Odoo's accounting records for audit-ready, traceable financial reporting.",
    ],
  },
  {
    role: "Junior Techno-Functional Consultant",
    company: "Top Technologies",
    start: "Dec 2024",
    end: "Jun 2025",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Contributed to functional analysis ensuring core ERP modules (Inventory, Production, QC) aligned with Good Manufacturing Practices and client SOPs, with a focus on batch/lot traceability.",
      "Configured key components in the Grace ERP environment and executed structured UAT scripts to validate pharmaceutical workflows, including materials receipt and product release.",
      "Supported preparation and validation of complex master data (BOMs, Item Master), ensuring data integrity for regulatory compliance and system migration.",
      "Provided first-level technical support and debugging, and contributed to user manuals and training for system adoption.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Ministry of Innovation and Technology (Ethiopia)",
    start: "Nov 2023",
    end: "Nov 2024",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Assisted in the full-stack design and deployment of a secure Document Management System, using React.js for the UI and Node.js for scalable backend services and database interactions.",
      "Implemented user authentication and document versioning for comprehensive audit trails, while enforcing system security and data management protocols.",
      "Participated in architectural discussions and rigorous testing cycles (unit, integration, UAT), and improved code quality through detailed peer review.",
    ],
  },
];

export const education = {
  degree: "BSc in Computer Science and Engineering",
  school: "Adama Science and Technology University",
  start: "Jul 2018",
  end: "Jul 2023",
};

export const certificates = [
  "Odoo Technical Training — Python for Odoo",
  "Learning Linux Basics Course",
  "JavaScript — Badge Collection",
];

export const languages = ["English", "Amharic"];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Store & Admin Dashboard",
    description:
      "A full-stack e-commerce platform with a responsive customer storefront and a powerful admin dashboard — product management, a dynamic shopping cart, Stripe payments with a conditional coupon rewards system, and Redis caching for performance.",
    stack: ["React", "Node.js", "Express", "Stripe", "Redis", "MongoDB"],
    repo: "https://github.com/absra47/e-commerce_store",
  },
  {
    title: "Task Manager System",
    description:
      "A RESTful task management API built with Node.js, Express, and Mongoose — JWT authentication, full CRUD operations, pagination, and search, deployed live on Render.",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    repo: "https://github.com/absra47/Task_Manager_System",
  },
  {
    title: "Music Catalog API",
    description:
      "A FastAPI application for managing a personal music collection — full CRUD on songs, persistent storage, advanced search, external lyrics fetching, and asynchronous metadata enrichment.",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    repo: "https://github.com/absra47/song-management",
  },
  {
    title: "Spotify Clone",
    description:
      "A responsive, user-friendly music platform for browsing and listening to tracks, modeled after Spotify's core listening experience.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    repo: "https://github.com/absra47/song_managment",
  },
  {
    title: "Blog Web App",
    description:
      "A full-stack blog application for creating and managing posts, with an admin panel for editing and moderation, and a reverse-chronological, real-time feed on the homepage.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/absra47/GO2COD_FS_01",
  },
  {
    title: "Document Management System",
    description:
      "A secure, multi-tier document management system built for Ethiopia's Ministry of Innovation and Technology — React front end, Node.js services, authentication, document versioning, and full audit trails.",
    stack: ["React", "Node.js", "REST APIs"],
    note: "Private — government client",
  },
];

export const contactChannels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { label: "LinkedIn", value: "linkedin.com/in/absragirma", href: profile.linkedin },
  { label: "GitHub", value: "github.com/absra47", href: profile.github },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
