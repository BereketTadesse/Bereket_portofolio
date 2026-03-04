import customerAnalytics from "@/assets/projects/customer-analytics.png";


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
  cvUrl: "/Bereket-Tadesse-Eshete.pdf",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "AI/ML" | "GenAI" | "Data";
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
    category: "Data",
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
    id: "rag-support-system",
    title: "CrediTrust Complaints Intelligence (RAG Chatbot)",
    description: "AI assistant turning unstructured customer complaints into evidence-backed insights using semantic search and Gemini LLM.",
    longDescription: "Built an internal AI assistant that turns thousands of unstructured customer complaints into instant, evidence-backed insights for product, support, and compliance teams. The system uses semantic search (ChromaDB + SentenceTransformers) to retrieve relevant complaint narratives and Gemini LLM to generate grounded answers, reducing trend discovery time from days to minutes.",
    category: "GenAI",
    technologies: ["React", "FastAPI", "ChromaDB", "SentenceTransformers", "Google Gemini API", "Python"],
    image: "/credit.png",
    featured: true,
    highlights: [
      "Semantic search with ChromaDB & SentenceTransformers",
      "Grounded answers using Google Gemini API",
      "Reduced trend discovery time from days to minutes",
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
    featured: true,
    highlights: [
      "Supported types: Drought, Earthquake, Flood, Hailstorm, Landslide, Locust, Sinkhole, Volcano, Wildfire",
      "ML-powered image verification with confidence scoring",
      "Reduces misinformation for government disaster response workflows",
    ],
  },
  {
    id: "disaster-triage-agent",
    title: "CDRP Disaster Triage Agent (Gemini + Demographic Risk Ranking)",
    description: "AI agent prioritizing disaster reports based on wereda-level demographics and population density to help responders allocate attention.",
    longDescription: "Built an AI agent for Ethiopia’s Crowdsourced Disaster Response Platform (CDRP) that prioritizes incoming disaster reports using wereda-level demographics (total population, children, elders, women) and population density. The service reverse-geocodes GPS coordinates to a wereda, matches it to a demographic dataset, and uses Gemini to classify incidents as Urgent / Medium / Not Urgent with a clear reason.",
    category: "GenAI",
    technologies: ["FastAPI", "Gemini API", "Pandas", "Geopy", "FuzzyWuzzy", "Python"],
    image: disasterResponse,
    featured: true,
    highlights: [
      "Prioritizes reports using wereda-level demographic risk factors",
      "Reverse-geocoding (Nominatim) with fuzzy matching fallbacks",
      "AI-driven classification (Urgent/Medium/Low) using Google Gemini API",
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
    title: "ML Engineer & Full-Stack Developer",
    company: "Green Value Groups",
    period: "Jul 2025 – Present",
    description: "Building intelligent systems with interactive and attractive designs, integrating ML models with full-stack applications.",
    highlights: [
      "Crafting highly interactive and visually attractive user interfaces with React and Tailwind",
      "Building robust, well-structured backend architectures using FastAPI and scalable databases",
      "Designing and deploying intelligent ML agents and RAG pipelines using Gemini & TensorFlow",
    ],
    current: true,
    location: "Addis Ababa, Ethiopia",
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
