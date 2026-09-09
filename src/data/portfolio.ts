import disasterResponse from "@/assets/projects/disaster-response.png";

export const personalInfo = {
  name: "Bereket Tadesse",
  title: "Backend Developer",
  tagline: "I transform ideas into enterprise-grade backend systems that are fast, secure, scalable, and easy to maintain.",
  shortTagline: "Building scalable APIs & backend services.",
  email: "berekettadesse1244@gmail.com",
  location: "Addis Ababa",
  github: "https://github.com/BereketTadesse",
  linkedin: "https://www.linkedin.com/in/bereket-tadesse-72b237232/",
  telegram: "https://t.me/Building_in_Public_6",
  cvUrl: "/Bereket_Tadesse_Tadesse_B.pdf",
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  image: string;
  featured: boolean;
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  huggingFaceUrl?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    id: "expense-tracker-api",
    title: "Expense Tracker API",
    subtitle: "Automated Personal Finance Backend for Ethiopian Banking",
    description: "Production-oriented backend system that captures, parses, and organizes bank and mobile-wallet transactions into structured financial records, budgets, and analytics.",
    longDescription: "Built a production-oriented personal finance API using NestJS, TypeScript, PostgreSQL, and TypeORM. The system automatically ingests transaction SMS messages from Ethiopian banks and mobile wallets such as CBE, Telebirr, Bank of Abyssinia, and Dashen Bank, then converts them into structured financial records. It includes secure authentication, webhook processing, concurrency-safe balance updates, budgeting, analytics, and Dockerized deployment.",
    category: "BACKEND / FINTECH",
    technologies: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "TypeORM", "JWT", "Docker", "REST APIs", "Resend API"],
    image: "/expense_tracker/photo_2026-09-09_22-25-14.jpg",
    githubUrl: "https://github.com/BereketTadesse/expense-tracker-api",
    featured: true,
    highlights: [
      "Automated SMS transaction ingestion for Ethiopian banks and mobile wallets",
      "JWT authentication, secure webhook tokens, and HMAC signature verification",
      "Idempotent transaction processing to prevent duplicate financial records",
      "Concurrency-safe account balance updates and internal transfers",
      "Cursor-based pagination and advanced transaction filtering",
      "Budget tracking with warning and exceeded states",
      "Financial analytics for income, expenses, savings, categories, and trends",
      "Docker and Docker Compose support",
    ],
    images: [
      "/expense_tracker/photo_2026-09-09_22-25-14.jpg",
      "/expense_tracker/photo_2026-09-09_22-25-36.jpg",
      "/expense_tracker/photo_2026-09-09_22-25-43.jpg",
      "/expense_tracker/photo_2026-09-09_22-25-49.jpg",
    ],
  },
  {
    id: "weg-blog",
    title: "Weg Blog",
    subtitle: "Social Blogging Backend API",
    description: "Backend API for a social blogging platform supporting posts, comments, likes, follower relationships, and scalable content feeds.",
    longDescription: "Built a modular backend for a social blogging platform using Node.js, Express.js, MongoDB, and Mongoose. The system supports user-generated posts, nested comments, likes, follower relationships, and content interactions through a structured controller, model, route, middleware, and utility architecture. Cursor-based pagination was implemented to support scalable content feeds and reduce database and network overhead.",
    category: "BACKEND / SOCIAL PLATFORM",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "REST APIs", "Git"],
    image: "/weg_blog/photo_2026-09-09_22-25-54.jpg",
    githubUrl: "https://github.com/BereketTadesse/weg_Blog",
    featured: true,
    highlights: [
      "REST API architecture using Node.js and Express.js",
      "MongoDB data modeling with Mongoose",
      "Posts, comments, likes, and follower relationships",
      "Modular controller, model, route, middleware, and utility layers",
      "Cursor-based pagination for scalable content feeds",
      "Backend middleware for request handling and application logic",
      "Structured architecture designed for maintainability and extension",
    ],
    images: [
      "/weg_blog/photo_2026-09-09_22-25-54.jpg",
      "/weg_blog/photo_2026-09-09_22-26-08.jpg",
      "/weg_blog/photo_2026-09-09_22-26-13.jpg",
      "/weg_blog/photo_2026-09-09_22-26-18.jpg",
    ],
  },
  {
    id: "mihret-multimedia",
    title: "Mihret Multimedia & Film Production",
    subtitle: "Modern Web Platform for Film & Media Production",
    description: "A modern, fast, and visually engaging web platform showcasing the film works, creative services, and production team of Mihret Multimedia.",
    longDescription: "Built a production-grade web platform for Mihret Multimedia and Film Production to showcase their films, creative services, and talented team in a clean, professional, and visually engaging way. Used Google Stitch to explore and shape the UI/UX design direction, then developed the site using React, TypeScript, Tailwind CSS, React Router, and Vite, with deployment on Yegara. Designed with a strong focus on responsiveness and cross-browser compatibility across all modern devices.",
    category: "Frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "Vite", "Google Stitch", "Yegara"],
    image: "/mihret_multimedia/home.jpeg",
    demoUrl: "https://mihretmultimedia.com/",
    featured: true,
    highlights: [
      "Modern web platform built for Mihret Multimedia and Film Production",
      "Interactive showcase for creative services, film catalog, and production team",
      "UI/UX exploration and design direction crafted with Google Stitch",
      "Built with React, TypeScript, Tailwind CSS, and Vite",
      "Responsive, cross-browser optimized, and deployed on Yegara hosting",
    ],
    images: [
      "/mihret_multimedia/home.jpeg",
      "/mihret_multimedia/service.jpeg",
      "/mihret_multimedia/portfolio.jpeg",
      "/mihret_multimedia/our_team.jpeg",
    ],
  },
  {
    id: "disaster-response-platform",
    title: "CDRP Disaster Evidence Verifier (Image ↔ Incident Match Model)",
    description: "ML-powered verification service checking whether user-uploaded images match reported disaster types to reduce misinformation.",
    longDescription: "Built an ML-powered verification service for a Crowdsourced Disaster Response Platform (CDRP) in Ethiopia that checks whether a user-uploaded image matches the reported disaster type. Trained a TensorFlow model on scraped disaster images and exposed it through a FastAPI API—helping reduce misinformation and improve data quality for government response workflows.",
    category: "AI/ML",
    technologies: ["TensorFlow", "Keras", "FastAPI", "Python", "NumPy", "Pillow", "scikit-learn"],
    image: disasterResponse,
    demoUrl: "https://cdrp-disaster-evidence-verifier.vercel.app/",
    featured: true,
    highlights: [
      "Supported types: Drought, Earthquake, Flood, Hailstorm, Landslide, Locust, Sinkhole, Volcano, Wildfire",
      "ML-powered image verification with confidence scoring",
      "Reduces misinformation for government disaster response workflows",
    ],
  },
  {
    id: "etraincon-quiz-generator",
    title: "Etraincon AI Quiz Generator (PDF → MCQ + Open-Ended)",
    description: "AI service for the Etraincon LMS that generates full quizzes from course materials with 50/50 MCQ and open-ended questions.",
    longDescription: "Built an AI service for the Etraincon LMS as part of the Green Value Groups (GVG) team that generates full quizzes from uploaded course materials. The system extracts text from PDFs, chunks content semantically, retrieves relevant sections using FAISS, and uses Gemini to generate a balanced quiz (50% MCQ, 50% open-ended) including correct answers and explanations.",
    category: "GenAI",
    technologies: ["FastAPI", "Gemini API", "SentenceTransformers", "FAISS", "PyMuPDF", "Python", "NumPy", "asyncio"],
    image: "/Etraincon.jpg",
    featured: true,
    highlights: [
      "Work developed as part of GVG (Green Value Groups)",
      "Generates balanced 50/50 MCQ and Open-Ended quizzes",
      "Semantic search with FAISS for relevant question generation",
    ],
  },
  {
    id: "etraincon-answer-grader",
    title: "Etraincon Meaning-Based Answer Grader (Gemini Scoring API)",
    description: "Automated grading service evaluating student answers against core meanings of reference answers with detailed scoring and reasoning.",
    longDescription: "Built an automated grading service as part of the GVG (Green Value Groups) team for the Etraincon LMS. The API evaluates whether a student's answer matches the core meaning of a reference answer, rather than just exact wording. It returns a score (0–1), verdict (Correct/Partial/Incorrect), reasons, and matched/missed key points, featuring caching and strict JSON outputs for seamless integration into the Etraincon quiz workflow.",
    category: "GenAI",
    technologies: ["FastAPI", "Gemini API", "Pydantic", "Python", "dotenv", "CORS", "Caching"],
    image: "/Etraincon.jpg",
    featured: true,
    highlights: [
      "Work developed as part of GVG (Green Value Groups)",
      "Meaning-based scoring (0-1 range) with AI-generated reasoning",
      "Returns detailed verdict and matched/missed key points",
    ],
  },
];

export type Skill = {
  name: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    name: "Backend",
    items: ["NestJS", "Node.js", "Express", "FastAPI", "REST APIs", "TypeScript", "Python"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "TypeORM", "Prisma", "Mongoose", "Drizzle"],
  },
  {
    name: "DevOps & Deployment",
    items: ["Docker", "GitHub Actions", "Git", "CI/CD", "Render", "Vercel"],
  },
  {
    name: "API & Security",
    items: ["JWT Auth", "Webhooks", "HMAC", "API Integration", "Validation", "Caching", "Pagination"],
  },
  {
    name: "AI Integration",
    items: ["OpenAI APIs", "Gemini", "LangChain", "RAG", "ML Model Integration"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  current: boolean;
  location?: string;
};

export const experiences: Experience[] = [
  {
    title: "Backend Developer",
    company: "Lersha Green Agro Solution",
    period: "Jul 2026 – Present",
    description:
      "Building backend solutions for an AgriTech platform that connects smallholder farmers with agro-dealers, wholesalers, financial institutions, and agricultural service providers.",
    highlights: [
      "Building and maintaining backend services using NestJS and FastAPI",
      "Developing REST APIs for farmer, partner, and marketplace workflows",
      "Contributing to integrations that connect farmers with suppliers, buyers, and financial services",
      "Supporting scalable backend architecture for digital agriculture and financing workflows",
    ],
    current: true,
    location: "Addis Ababa, Ethiopia",
  },
  {
    title: "Backend Developer & Machine Learning Engineer",
    company: "Green Value Groups",
    period: "Aug 2025 – Apr 2026",
    description:
      "Worked on backend systems and machine-learning projects, integrating APIs, databases, and ML-powered features into web applications.",
    highlights: [
      "Built and integrated REST APIs using Node.js and Express.js",
      "Worked with PostgreSQL, MySQL, and MongoDB",
      "Designed schemas and queries using Prisma and Drizzle",
      "Integrated machine-learning models into backend services",
      "Used Docker and GitHub Actions for CI/CD and deployment",
    ],
    current: false,
    location: "Addis Ababa, Ethiopia",
  },
  {
    title: "Front-End Developer Intern",
    company: "Madda Walabu University",
    period: "Jul 2024 – Sep 2024",
    description:
      "Developed responsive web interfaces and integrated frontend applications with backend APIs for university systems.",
    highlights: [
      "Built responsive interfaces using React and TypeScript",
      "Integrated frontend features with REST APIs",
      "Participated in integration testing and troubleshooting",
      "Collaborated with backend teams to ensure reliable data flow",
    ],
    current: false,
    location: "Bale Robe, Ethiopia",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford",
    date: "2024",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "2024",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
  },
];
