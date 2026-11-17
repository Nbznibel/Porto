import type { PortfolioData } from "../types/portfolio.types";

// Single source of truth for all portfolio and dashboard-editable content.
// Values come from the professional profile supplied by Nibel Ben Ezzine.
export const portfolioData: PortfolioData = {
  profile: {
    name: "Nibel Ben Ezzine",
    role: "Software Engineer",
    location: "Sousse, Tunisia",
    email: "nibelbenezzine@gmail.com",
    phone: "+216 20 312 095",
    linkedin: "https://www.linkedin.com/in/nibel-ben-ezzine-89742a216",
    availability: "Open to opportunities",
    tagline: "Building secure, scalable web platforms across healthcare, insurance, accounting and SaaS.",
    summary:
      "Software Engineer with 4+ years of experience designing and delivering secure, scalable web platforms in healthcare, insurance, accounting and SaaS. Strong background in microservices, API gateways (Kong), IAM (Keycloak) and event-driven architectures. Full-stack across NestJS, .NET, Laravel, FastAPI and React (TypeScript), with hands-on DevOps experience (Docker, CI/CD). Also experienced in teaching full-stack development and ERP (Odoo).",
  },

  domains: ["Healthcare", "Insurance", "Accounting", "SaaS"],

  focus: [
    "Microservices and distributed systems",
    "API gateways (Kong) and IAM (Keycloak)",
    "Event-driven architecture",
    "Full-stack delivery with React and backend frameworks",
    "DevOps with Docker, Kubernetes and CI/CD",
    "Teaching full-stack development and ERP (Odoo)",
  ],

  skills: [
    {
      name: "Backend",
      items: ["NestJS", "Node.js", "Spring Boot", "Laravel", "Django", ".NET", "FastAPI"],
    },
    {
      name: "Frontend",
      items: ["React (TypeScript)", "Next.js", "Angular", "Vue.js", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "Architecture",
      items: [
        "Microservices",
        "Event-Driven Architecture",
        "REST APIs",
        "GraphQL",
        "API Gateway (Kong)",
        "IAM (Keycloak)",
      ],
    },
    {
      name: "DevOps & Tools",
      items: ["Docker", "Kubernetes", "CI/CD", "Git", "Jira", "Portainer", "Prometheus"],
    },
    {
      name: "Messaging & Caching",
      items: ["RabbitMQ", "Kafka", "Redis"],
    },
    {
      name: "Databases & Search",
      items: [
        "PostgreSQL",
        "MongoDB",
        "SQL Server",
        "Elasticsearch",
        "Logstash",
        "Kibana (ELK)",
      ],
    },
    {
      name: "Other",
      items: [
        "Rasa",
        "LLM",
        "RAG",
        "OCR",
        "Three.js",
        "MSMQ",
        "Active Directory",
        "Odoo",
      ],
    },
  ],

  experiences: [
    {
      id: "mediwave",
      role: "Full Stack Developer",
      company: "MEDIWAVE Tunisie",
      period: "Feb 2026 – Present",
      highlights: [],
      projects: [
        {
          name: "MediLink — Healthcare platform with AI-powered assistant",
          description:
            "Healthcare platform module that digitizes patient workflows under GDPR and CNSS/CNRPS compliance constraints.",
          highlights: [
            "Built patient workflow digitization with RBAC, data encryption, audit logging and real-time patient tracking.",
            "Automated appointment, document, insurance and billing workflows on a microservices architecture with a custom API Gateway.",
            "Integrated an AI chatbot using Rasa as orchestrator with LLM-augmented NLU, a RAG-based medical agent and action routing separating administrative actions from medical queries.",
          ],
          stack: ["NestJS", "React (TypeScript)", "FastAPI", "Redis", "Docker", "Rasa", "LLM", "RAG"],
        },
      ],
      stack: ["NestJS", "React (TypeScript)", "FastAPI", "Redis", "Docker", "Rasa", "LLM", "RAG"],
    },
    {
      id: "eims",
      role: "Lecturer",
      company: "EIMS International School of Management and Marketing of Sousse",
      period: "Apr 2026 – Present",
      highlights: [
        "Teach ERP courses on Odoo covering Sales, Purchase, Inventory and Accounting modules.",
        "Design and run hands-on workshops simulating business workflows such as reordering rules, lead times and automation flows.",
        "Assess students through practical projects and case studies, and provide mentorship and technical support.",
      ],
      projects: [],
      stack: ["Odoo"],
    },
    {
      id: "vaerdia",
      role: "Full Stack Developer",
      company: "Vaerdia",
      period: "Nov 2024 – Jan 2026",
      highlights: [],
      projects: [
        {
          name: "OpenCare — AssurTech and HealthTech platform",
          description:
            "Platform managing insurance ecosystems and healthcare services with sensitive data protection.",
          highlights: [
            "Managed offers, families, clients, companies, providers and healthcare services.",
            "Designed secure microservices with a custom API Gateway and data protection for social security, medical and client data.",
            "Integrated RabbitMQ messaging and Redis caching with containerized deployment.",
          ],
          stack: ["NestJS", "React (TypeScript)", "RabbitMQ", "Redis", "Docker"],
        },
        {
          name: "DMC — Web platform for accountants",
          description:
            "Platform extending the DTMAX tax software SDK to manage clients, tax files and declarations.",
          highlights: [
            "Built microservices behind a Kong API Gateway with Keycloak for secure authentication and authorization of financial data.",
            "Implemented messaging, caching, OCR and financial workflows.",
          ],
          stack: [
            ".NET",
            "React (TypeScript)",
            "Kong",
            "Keycloak",
            "RabbitMQ",
            "Redis",
            "Docker",
            "DTMAX SDK",
            "OCR",
          ],
        },
        {
          name: "HDCE Tracking — Session monitoring and activity analysis",
          description:
            "Windows-based event-driven microservices system recording user activity on RDP sessions.",
          highlights: [
            "Synchronized data with Jira and Active Directory to compare real and declared activity.",
            "Calculated productivity and costs based on TJM and built a monitoring dashboard for statistics and follow-up.",
          ],
          stack: [".NET", "RDP Servers", "Active Directory", "Jira"],
        },
        {
          name: "AFIAMED — Medical information and subscription platform",
          description:
            "Hexagonal-architecture platform centralizing Tunisian drug data behind structured APIs.",
          highlights: [
            "Centralized molecules, interactions, dosage and pricing data with structured APIs.",
            "Implemented subscription-based access control with usage tracking, rate limiting, caching and custom SQL queries.",
            "Integrated online payment with Paymee.",
          ],
          stack: ["Spring Boot", "React (TypeScript)", "Paymee", "custom SQL"],
        },
        {
          name: "DUPRAS — Plumbing design platform (Canada)",
          description: "Engineering tool for designing plumbing installations.",
          highlights: [
            "Designed pumps, domestic hot water systems, expansion tanks, sanitary networks and grease separators.",
            "Implemented calculation logic based on real-world constraints and automatic material list generation.",
            "Built interactive 3D visualization with Three.js.",
          ],
          stack: ["NestJS", "React (TypeScript)", "Three.js"],
        },
        {
          name: "HDCE RDS — Security orchestration for nested Windows Server",
          description:
            "Event-driven .NET microservices system for 24/7 RDP session validation.",
          highlights: [
            "Designed Windows Services with Active Directory integration for real-time authentication.",
            "Automated detection and blocking of suspicious connections and unauthorized lateral movement.",
            "Implemented MSMQ asynchronous communication and centralized logging for nested Windows Server hardening.",
          ],
          stack: [".NET", "Windows Services", "MSMQ", "Active Directory"],
        },
        {
          name: "GRON — SaaS platform for home energy renovation (France)",
          description:
            "Multi-tenant SaaS supporting the MaPrimeRénov’ renovation lifecycle with ANAH compliance.",
          highlights: [
            "Automated the lead-to-project pipeline and generation and verification of administrative funding files.",
            "Built interfaces for companies, field workers and clients to schedule visits, track progress and manage technical verifications.",
          ],
          stack: ["Laravel", "React", "Next.js", "Redis (caching)"],
        },
      ],
      stack: [
        "NestJS",
        "React (TypeScript)",
        ".NET",
        "Spring Boot",
        "Laravel",
        "Next.js",
        "RabbitMQ",
        "Kafka",
        "Redis",
        "Docker",
      ],
    },
    {
      id: "bcc",
      role: "Full Stack Instructor",
      company: "BCC",
      period: "Jul 2023 – Nov 2024",
      highlights: [
        "Taught students to design, develop and maintain secure RESTful and GraphQL APIs with efficient front-end/back-end communication.",
        "Guided learners in building responsive web applications and reusable UI components with modern frameworks.",
      ],
      projects: [],
      stack: ["React", "Node.js", "Laravel", "HTML/CSS/JavaScript"],
    },
    {
      id: "msit-conseil",
      role: "Full Stack Developer",
      company: "MSIT Conseil",
      period: "Jul 2022 – Nov 2024",
      highlights: [],
      projects: [
        {
          name: "Msit-Dashboard — ERP/ATS platform for IT service companies",
          description:
            "Node.js and React microservices platform covering candidate sourcing through project billing.",
          highlights: [
            "Built a matching engine combining OCR resume scanning, position and skill classification and a decision model for candidate-mission matches.",
            "Integrated ELK for full-text CV search and real-time visualization of commercial performance.",
            "Developed a CV builder and a multi-stage interview pipeline with scheduling, feedback and candidate status.",
            "Built real-time activity tracking (CRA) with timers calculating TJM and operational costs for client reporting.",
          ],
          stack: ["Node.js", "React", "Docker", "Elasticsearch", "Logstash", "Kibana", "OCR"],
        },
        {
          name: "MedSquare — B2B e-commerce platform for the dental industry",
          description: "Catalog and procurement platform for dental instruments and clinical supplies.",
          highlights: [
            "Designed a React interface for a complex dental catalog.",
            "Developed a Node.js backend covering supplier purchase orders to clinic fulfillment.",
            "Built an inventory engine with automated medical invoicing, recurring orders and replenishment.",
          ],
          stack: ["Node.js", "React"],
        },
        {
          name: "ElectroHouse — E-commerce and retail management",
          description: "Inventory and fulfillment system for home appliances.",
          highlights: [
            "Managed high-volume inventory with SKU management and purchase order tracking.",
            "Streamlined purchase-to-warehouse flow with stock deductions and real-time order status.",
            "Automated invoicing and sales reporting for profit margins and transaction history.",
          ],
          stack: ["Node.js", "React"],
        },
        {
          name: "Msit Website — maintenance and enhancement",
          description: "Maintenance and enhancement of the MSIT website.",
          highlights: [],
          stack: ["Laravel"],
        },
      ],
      stack: ["Node.js", "React", "Docker", "ELK", "OCR", "Laravel"],
    },
  ],

  personalProjects: [
    {
      name: "AddiPass — Event-driven microservices platform",
      description:
        "Event-driven microservices architecture with Kong as API Gateway and Keycloak as identity provider.",
      highlights: [
        "Designed secure authentication and authorization with Kong and Keycloak.",
      ],
      stack: ["Node.js", "Angular", "Kong", "Keycloak", "RabbitMQ", "Kafka", "Redis", "Docker", "Portainer"],
    },
  ],

  education: [
    {
      id: "epi",
      school: "EPI, International Multidisciplinary School (work-study program)",
      degree: "Master of Engineering in Computer Science, specialized in Software Engineering (Génie Logiciel)",
      period: "2023 – 2026",
    },
    {
      id: "sst-h-sousse",
      school: "Superior School of Sciences & Technologies H Sousse",
      degree: "Bachelor’s Degree in Computer Science, Génie Logiciel",
      period: "2020 – 2023",
    },
  ],
};
