import customerAnalytics from "@/assets/projects/customer-analytics.png";
import fraudDetection from "@/assets/projects/fraud-detection.png";
import ragSupport from "@/assets/projects/rag-support.png";
import disasterResponse from "@/assets/projects/disaster-response.png";
import hrAnalytics from "@/assets/projects/hr-analytics.png";

export const personalInfo = {
  name: "Bereket Tadesse",
  title: "Machine Learning Engineer & Full-Stack Developer",
  tagline: "I build intelligent products end-to-end — from clean UI to scalable APIs to ML-powered insights.",
  shortTagline: "From UI to APIs to ML models.",
  email: "berekettadesse1244@gmail.com",
  location: "Addis Ababa",
  github: "https://github.com/BereketTadesse",
  linkedin: "https://www.linkedin.com/in/bereket-tadesse-72b237232/",
  cvUrl: "/cv.pdf",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "AI/ML" | "GenAI" | "Full-Stack" | "Data";
  technologies: string[];
  image: string;
  featured: boolean;
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    id: "customer-experience-analytics",
    title: "Customer Experience Analytics for Fintech Apps",
    description: "Data engineering and analysis project evaluating customer satisfaction with mobile banking apps from three major Ethiopian banks.",
    longDescription: "This project contains complete data engineering and analysis for evaluating customer satisfaction with mobile banking apps from three major Ethiopian banks: Commercial Bank of Ethiopia (CBE), Bank of Abyssinia (BOA), and Dashen Bank. The project simulates the role of a Data Analyst at Omega Consultancy, a firm advising these banks on how to improve their digital offerings. The analysis includes sentiment analysis, theme extraction, rating distribution analysis, and actionable insights to help banks enhance their mobile banking experience.",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker"],
    image: customerAnalytics,
    featured: true,
    highlights: [
      "App Experience Inconsistency: Dashen Bank offers reliable positive experience, while BOA's app is extremely polarized, and CBE has strong core but significant edge case issues",
      "Transaction Performance is Critical: The most dominant reason for negative reviews across all three banks is poor transaction reliability and speed",
      "UI is the Key Strength: High-quality User Interface & Experience was the most common driver of satisfaction for all banks",
    ],
    images: [
      "/fintec_analysis/1_sentiment_by_bank.png",
      "/fintec_analysis/2_themes_by_bank_clean.png",
      "/fintec_analysis/3_rating_distribution.png",
      "/fintec_analysis/advanced_4_kiss_of_death_themes.png",
      "/fintec_analysis/insight_1_rating_polarization.png",
      "/fintec_analysis/insight_2_unique_advantages_filtered.png",
      "/fintec_analysis/insight_2_unique_disadvantages_filtered.png",
    ],
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection for E-commerce & Bank Transactions",
    description: "ML-based anomaly detection system achieving 98% precision in identifying fraudulent transactions.",
    longDescription: "Developed a sophisticated fraud detection system using ensemble methods and deep learning. The system analyzes transaction patterns in real-time and flags suspicious activities with explainable AI components.",
    category: "AI/ML",
    technologies: ["Python", "XGBoost", "PyTorch", "Scikit-learn", "AWS", "MongoDB"],
    image: fraudDetection,
    featured: true,
    highlights: [
      "98% precision with 0.1% false positive rate",
      "Processes 10K+ transactions per minute",
      "Saved $2M+ in potential fraud losses",
    ],
  },
  {
    id: "rag-support-system",
    title: "RAG Support System",
    description: "AI-powered customer support chatbot using Retrieval-Augmented Generation for context-aware responses.",
    longDescription: "Implemented a RAG-based support system that combines company documentation with LLM capabilities. The system provides accurate, contextual responses while reducing support ticket volume.",
    category: "GenAI",
    technologies: ["LangChain", "OpenAI", "Pinecone", "Next.js", "Node.js", "PostgreSQL"],
    image: ragSupport,
    featured: true,
    highlights: [
      "40% reduction in support tickets",
      "95% user satisfaction rate",
      "Sub-2 second response times",
    ],
  },
  {
    id: "disaster-response-platform",
    title: "Crowdsourced Disaster Response Platform",
    description: "Real-time coordination platform connecting volunteers, resources, and affected communities.",
    longDescription: "Built a full-stack platform for disaster response coordination featuring real-time mapping, resource tracking, and volunteer management. Includes mobile-responsive UI and offline capabilities.",
    category: "Full-Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Mapbox", "Docker"],
    image: disasterResponse,
    featured: true,
    highlights: [
      "Coordinated 500+ volunteers in pilot deployment",
      "Real-time mapping with offline sync",
      "Multi-language support for 5 languages",
    ],
  },
  {
    id: "koket-habesha-dress",
    title: "Koket Habesha Dress",
    description: "Ethiopian cultural clothes e-commerce website showcasing Koket's traditional and casual clothing designs.",
    longDescription: "A full-stack e-commerce website for Koket Habesha Dress, featuring Ethiopian cultural and casual clothing. The platform showcases Koket's product designs with an elegant portfolio section displaying their cultural and casual clothes collection. The website includes an About page highlighting the brand's story and a comprehensive portfolio gallery showcasing their work.",
    category: "Full-Stack",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    image: "/koket/koket.png",
    featured: true,
    highlights: [
      "Showcases Ethiopian cultural and casual clothing designs",
      "Portfolio gallery displaying Koket's work and products",
      "About page featuring the brand's story and mission",
    ],
    demoUrl: "https://kokihabeshadress.vercel.app/",
    images: [
      "/koket/koket.png",
    ],
  },
  {
    id: "muday-marketing-solution",
    title: "Muday Marketing Solution",
    description: "Full-stack website for a globally-oriented marketing firm showcasing services, portfolio, and company story for businesses worldwide.",
    longDescription: "Built a comprehensive full-stack website for Muday Marketing Solution, a globally-oriented marketing firm founded in Ethiopia. The website features an interactive interface that showcases Muday's digital marketing services, displays their portfolio of completed work and projects, and includes a compelling storytelling section that narrates the company's journey from where they began to where they are now. The platform presents Muday as an investment partner, highlighting their mission to transform client investments into measurable growth through smart, targeted marketing solutions tailored for global markets.",
    category: "Full-Stack",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "PostgreSQL"],
    image: "/muday/muday.png",
    featured: true,
    highlights: [
      "Interactive website showcasing Muday's services and portfolio of completed work",
      "Portfolio section displaying the works and projects Muday has accomplished",
      "Storytelling section narrating Muday's journey from where they began to where they are now",
    ],
    demoUrl: "https://muday-marketing.vercel.app/",
    images: [
      "/muday/muday.png",
    ],
  },
  {
    id: "pavepath-design",
    title: "PavePath Design",
    description: "Full-stack website for a drafting-focused studio showcasing services, portfolio, and company information for civil and transportation engineering teams.",
    longDescription: "Built a comprehensive full-stack website for PavePath Design, a drafting-focused studio supporting civil and transportation engineering teams. The website features an interactive interface that showcases the company's services, displays their portfolio of completed projects, and provides detailed information about their expertise in CAD production. The platform includes an About Us section highlighting the company's journey, statistics showcasing their experience and achievements, and a clean, professional design that reflects their focus on accuracy and consistency in drafting services.",
    category: "Full-Stack",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"],
    image: "/pave/pave.png",
    featured: true,
    highlights: [
      "Interactive website showcasing company services and portfolio of completed projects",
      "About Us section narrating PavePath Design's journey and expertise",
      "Statistics display highlighting years of experience, projects delivered, and team expertise",
    ],
    demoUrl: "https://pavepath-design.vercel.app/",
    images: [
      "/pave/pave.png",
    ],
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    description: "Comprehensive Power BI dashboard providing actionable insights into employee demographics, promotions, retrenchments, satisfaction, and job roles.",
    longDescription: "This project presents a comprehensive HR Analytics Dashboard created using Power BI, based on cleaned and curated HR data. It provides actionable insights into employee demographics, promotions, retrenchments, satisfaction levels, job roles, and more. The dashboard is designed for HR departments to make informed decisions quickly through visual storytelling and interaction.",
    category: "Data",
    technologies: ["Power BI", "Python", "Pandas", "Scikit-learn", "SQL Server"],
    image: hrAnalytics,
    featured: false,
    highlights: [
      "Comprehensive insights into employee demographics, promotions, and retrenchments",
      "Visual storytelling and interactive dashboard for quick decision-making",
      "Cleaned and curated HR data for accurate analytics",
    ],
    images: [
      "/hr_analysis/home.png",
      "/hr_analysis/detail.png",
      "/hr_analysis/action.png",
    ],
  },
];

export type Skill = {
  name: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    name: "AI/ML/NLP",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
  },
  {
    name: "GenAI",
    items: ["OpenAI APIs", "LangChain", "Gemini", "RAG"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs"],
  },
  {
    name: "Data",
    items: ["Pandas", "NumPy", "Plotly", "Power BI"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle XE"],
  },
  {
    name: "DevOps",
    items: ["Docker", "AWS", "Streamlit", "Git"],
  },
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  current: boolean;
};

export const experiences: Experience[] = [
  {
    title: "Machine Learning Engineer",
    company: "Green Investment Groups",
    period: "Jul 2025 – Present",
    description: "Leading ML initiatives for sustainable investment analytics and ESG scoring systems.",
    highlights: [
      "Developing ML models for ESG risk assessment",
      "Building data pipelines for financial analytics",
      "Collaborating with cross-functional teams on AI strategy",
    ],
    current: true,
  },
  {
    title: "Front-End Developer Intern",
    company: "Madda Walabu University",
    period: "2024",
    description: "Designed and developed web applications for academic management systems.",
    highlights: [
      "Built responsive UIs with React and Tailwind CSS",
      "Implemented REST API integrations",
      "Improved user experience based on feedback analysis",
    ],
    current: false,
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
