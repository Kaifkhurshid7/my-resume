/**
 * @file portfolio.js
 * @description Centralized portfolio data store.
 *
 * All personal, professional, and project information lives here so that
 * UI components remain purely presentational. Updating content requires
 * editing only this file — no component logic changes needed.
 */

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { name: 'Intro', id: 'home' },
  { name: 'Tech', id: 'tech' },
  { name: 'Work', id: 'work' },
  { name: 'Activities', id: 'activities' },
  { name: 'Contact', id: 'contact' },
];

// ─── Hero / Personal ──────────────────────────────────────────────────────────

export const PERSONAL = {
  name: 'Kaif Khurshid',
  role: 'AI & Backend Engineer',
  tagline: 'RAG · LLM Services · Production APIs',
  bio: 'Building production-grade AI backends and RAG systems. Specialized in LLM services, vector databases, and scalable microservices architecture. Experienced in Django REST Framework, FastAPI, Node.js, and building intelligent systems that bridge models with production infrastructure.',
  email: 'kaifkhurshid18@gmail.com',
  github: 'https://github.com/Kaifkhurshid7',
  linkedin: 'https://linkedin.com/in/kaif-khurshid',
  resumeUrl: '#',
};

// ─── Marquee ──────────────────────────────────────────────────────────────────

export const MARQUEE_ITEMS = [
  'RAG Systems',
  'LLM Services',
  'Vector Databases',
  'Django REST Framework',
  'FastAPI',
  'Real-time APIs',
  'Microservices',
  'System Design',
  'Database Optimization',
  'Production Backend',
];

// ─── Technical Skills ─────────────────────────────────────────────────────────

export const TECH_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Terminal',
    items: ['Python', 'JavaScript', 'SQL', 'TypeScript', 'Java'],
  },
  {
    id: 'ai_backend',
    title: 'AI & Backend',
    icon: 'Brain',
    subcategories: [
      { label: 'LLM & RAG', items: ['LangChain', 'LangGraph', 'Vector Databases', 'Embeddings', 'Prompt Engineering'] },
      { label: 'Backend Frameworks', items: ['Django REST Framework', 'FastAPI', 'Express.js', 'Flask'] },
      { label: 'Infrastructure', items: ['PostgreSQL', 'MongoDB', 'Redis', 'JWT Auth', 'WebSockets'] },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Cloud',
    icon: 'Wrench',
    items: ['Docker', 'Git', 'AWS', 'Linux', 'REST APIs', 'System Design', 'API Design', 'NLP'],
  },
];

export const CURRENTLY_LEARNING = {
  title: 'Advanced LLM Optimization',
  subtitle: '& Vector Search',
  description: 'Exploring fine-tuning, retrieval optimization, and production-scale RAG deployments.',
  label: 'For Production LLM',
};

// ─── Education ────────────────────────────────────────────────────────────────

export const EDUCATION = [
  {
    degree: 'B.Tech (Hons.) · Ongoing',
    title: 'Computer Science & Engineering',
    school: 'XIM University (New Campus)',
    year: '2023 — 2027',
    active: true,
  },
  {
    degree: 'CBSE Class XII · Completed',
    title: 'Higher Secondary Education',
    school: 'Agrasen Dav Public School, Ramgarh Jharkhand',
    year: '2021 — 2023',
    active: false,
  },
  {
    degree: 'CBSE Class X · Completed',
    title: 'Secondary Education',
    school: 'Agrasen Dav Public School, Ramgarh Jharkhand',
    year: '2020 — 2021',
    active: false,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    company: 'LexiAI (Astute Lex Servicado Pvt. Ltd.)',
    role: 'AI & Backend Developer',
    duration: 'March 2026 — Present',
    location: 'Remote',
    desc: 'Architected 25+ RESTful APIs and LLM-powered backend services for the LexiAI education platform. Implemented RAG pipelines with vector database retrieval for AI-generated performance insights. Built Python web scrapers and optimized SQL queries (40% latency reduction). Deployed Celery + Redis background workers for batch LLM inference.',
    tech: ['Django REST Framework', 'Python', 'LangChain', 'Vector Databases', 'PostgreSQL', 'Redis', 'JWT Auth', 'RBAC'],
    highlights: ['25+ RESTful APIs', 'RAG & LLM Services', 'API Optimization (40% latency cut)', 'Background Workers'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    num: '01',
    type: 'OCR & Computer Vision',
    title: 'Swaralipi — Music Notation Detection',
    desc: 'End-to-end deep learning system digitizing handwritten Hindustani notation. Trained YOLOv8 on self-annotated 480-image dataset across 12 swara classes, achieving 89% mAP@0.5, 91% precision, 85.4% recall. Designed 5-stage post-processing pipeline reducing duplicate detections by 12%.',
    tech: ['Python', 'PyTorch', 'YOLOv8', 'FastAPI', 'React', 'SQLite'],
    github: 'https://github.com/Kaifkhurshid7/swara-detection',
    live: 'https://swara-detection.vercel.app/',
  },
  {
    num: '02',
    type: 'Computer Vision & Graph Analysis',
    title: 'Intelligent Node Detection System',
    desc: 'End-to-end computer vision pipeline converting diagram images into structured workflow graphs. Implemented 8-stage processing pipeline using OpenCV, Tesseract OCR, and semantic classification at <120ms inference latency. Reduced noisy detections by 82%+ via Hough-based edge detection and IoU deduplication.',
    tech: ['Python', 'FastAPI', 'OpenCV', 'Tesseract OCR', 'NetworkX', 'Docker', 'React'],
    github: 'https://github.com/Kaifkhurshid7/intelligent-node-detection',
    live: 'https://intelligent-node-detection.vercel.app/',
  },
  {
    num: '03',
    type: 'Audio Classification & ML',
    title: 'Instrument Recognition Dashboard',
    desc: 'Audio classification system identifying 11 instrument classes from 3,724 IRMAS samples. Engineered 26-dimensional spectral feature vector (MFCCs, Delta, Chroma, Centroid, Rolloff, ZCR) through 5-stage signal processing pipeline. Achieved 71.9% accuracy with tuned k-NN, validated via 5-fold stratified cross-validation.',
    tech: ['Python', 'Librosa', 'Scikit-learn', 'Flask', 'React'],
    github: 'https://github.com/Kaifkhurshid7/Instrument-Recognizer-KNN-BASED',
    live: 'https://instrument-recognizer.vercel.app/',
  },
  {
    num: '04',
    type: 'Fullstack System',
    title: 'ACM-XIM Envoy',
    desc: 'Production-deployed backend serving 100+ concurrent users with JWT role-based authentication. Secured REST APIs for posts, likes, comments, and real-time news integration. Implemented WebSocket messaging via Socket.IO with optimized MongoDB queries (3x latency reduction via compound indexing).',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.IO'],
    github: 'https://github.com/Kaifkhurshid7/ACM-XIM-Envoy',
    live: 'https://acmmedia-frontend.vercel.app/',
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export const ACHIEVEMENTS = [
  {
    badge: 'National Winner',
    icon: 'Award',
    title: '1st Prize —\nACM India Summit',
    desc: 'Ranked #1 among 50+ nationwide teams. Recognized for outstanding technical innovation and community leadership within the ACM network.',
    location: 'Indore, India',
    date: 'December 2025',
  },
  {
    badge: 'Innovation Award',
    icon: 'Sparkles',
    title: 'Runner-up —\nXamboree Idea Competition',
    desc: 'Awarded among participants from 30+ universities for designing and pitching a viable tech-driven solution.',
    location: 'Bhubaneswar',
    date: 'March 2025',
  },
];

// ─── Roles / Positions of Responsibility ──────────────────────────────────────

export const ROLES = [
  {
    chip: 'Leadership',
    title: 'Chairperson — ACM Chapter',
    desc: 'Led ACM XIM as Chairperson by building a coding and project development community, mentoring <strong>60+ students</strong> through real-world collaboration, technical upskilling, and peer-driven learning initiatives.',
  },
  {
    chip: 'Placement',
    title: 'Executive — Career Advisory',
    desc: 'Served as liaison between students and corporate recruiters, organizing peer-to-peer coding bootcamps and guidance sessions to strengthen technical placement preparation.',
  },
  {
    chip: 'Events',
    title: 'Coordinator — Synchronize 4.0',
    desc: 'Coordinated a 3-day annual technical fest at SCSE, XIM University, with <strong>700+ participants</strong> from 15+ colleges across Odisha. Led 100+ volunteers across technical, esports, robotics, and cultural events.',
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT_LINKS = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'kaifkhurshid18@gmail.com',
    href: 'mailto:kaifkhurshid18@gmail.com',
  },
  {
    icon: 'Linkedin',
    label: 'LinkedIn',
    value: '/in/kaif-khurshid',
    href: 'https://linkedin.com/in/kaif-khurshid',
  },
  {
    icon: 'Github',
    label: 'GitHub',
    value: 'Kaifkhurshid7',
    href: 'https://github.com/Kaifkhurshid7',
  },
];
