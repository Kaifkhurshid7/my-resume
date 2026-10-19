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
  role: 'AI & Backend Developer',
  tagline: 'LLM Agents · RAG · Scalable Backends',
  bio: 'I build LLM-powered products end to end: RAG pipelines over vector databases, tool-using AI agents, and the Django and FastAPI backends that serve them. I work on multi-tenant APIs with async workers and real-time features, and my projects span agent workflows, LLM fine-tuning and computer vision.',
  email: 'kaifkhurshid18@gmail.com',
  github: 'https://github.com/Kaifkhurshid7',
  linkedin: 'https://linkedin.com/in/kaif-khurshid',
  leetcode: 'https://leetcode.com/u/kaifkhurshid7',
  resumeUrl: '#',
};

// ─── Marquee ──────────────────────────────────────────────────────────────────

export const MARQUEE_ITEMS = [
  'LLM Agents',
  'RAG Systems',
  'Django REST Framework',
  'FastAPI',
  'Multi-tenant Architecture',
  'Celery & Redis',
  'WebSockets',
  'Computer Vision',
  'Deep Learning',
  'System Design',
  'Query Optimization',
];

// ─── Technical Skills ─────────────────────────────────────────────────────────

export const TECH_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Terminal',
    items: ['Python', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    id: 'ai_backend',
    title: 'AI & Backend',
    icon: 'Brain',
    subcategories: [
      { label: 'AI / ML', items: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'Vector Databases', 'Embeddings', 'Prompt Engineering', 'PyTorch', 'Scikit-learn', 'OpenCV', 'OCR'] },
      { label: 'Backend & Frameworks', items: ['Django REST Framework', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'Microservices', 'JWT Auth', 'WebSockets', 'Celery', 'Socket.IO', 'React.js'] },
      { label: 'Databases & Caching', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Vector Stores', 'Query Optimization'] },
    ],
  },
  {
    id: 'tools',
    title: 'Cloud, DevOps & CS',
    icon: 'Wrench',
    items: ['AWS (EC2, S3)', 'Docker', 'Git & GitHub', 'Linux', 'Postman', 'System Design', 'DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

export const CURRENTLY_LEARNING = {
  title: 'LLM Fine-tuning',
  subtitle: '& Agent Workflows',
  description: 'LoRA fine-tuning and evaluation for RAGA, plus human-in-the-loop agent graphs with LangGraph.',
  label: 'Applied LLM Engineering',
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
    company: 'LexiAI',
    role: 'AI & Backend Developer Intern',
    duration: 'March 2026 — Present',
    location: 'Remote',
    desc: 'Backend and LLM engineering for LexiAI, a legal-tech and education platform supporting 1,000+ legal professionals.',
    points: [
      'Engineered 18+ production REST APIs across 8+ Django applications using Django REST Framework and a multi-tenant architecture.',
      'Built LLM and RAG-powered backend services for legal document generation, intelligent suggestions and automated workflows, using vector retrieval and asynchronous processing.',
      'Implemented secure OTP authentication, RBAC and tenant isolation across 40+ database models, integrating Twilio for OTP/SMS and notifications.',
      'Optimized 25+ SQL queries and added Celery, caching, indexing and WebSockets: 20%+ lower API latency and real-time collaboration.',
      'Engineered credit consumption logic for subscription plans: configurable feature costs, automated deduction and real-time usage tracking across AI workflows.',
      'Built a KPI and analytics dashboard for law-school student performance, aggregating assessment, submission, attendance and evaluation data.',
    ],
    tech: ['Django REST Framework', 'Python', 'LLMs / RAG', 'Vector Retrieval', 'Celery', 'Redis', 'WebSockets', 'Twilio', 'RBAC', 'Multi-tenancy'],
    highlights: ['18+ production APIs', 'RAG & LLM Services', '20%+ lower API latency', '1,000+ users supported'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECT_GROUPS = [
  {
    id: 'agents',
    label: 'LLM & AI Agents',
    kicker: 'Agentic systems',
    blurb: 'Systems where a language model reasons, uses tools and acts, with a human approving the steps that matter.',
    projects: [
      {
        num: '01',
        type: 'Autonomous Agent',
        status: 'Working prototype',
        title: 'CartMind — AI Shopping Agent',
        desc: 'Autonomous agent that turns a plain-language request into structured requirements, researches live products on Amazon.in and Flipkart in a visible Chrome window, scores candidates against mandatory specs, and adds the best match to the cart only after explicit approval. Gemini reasons, LangGraph controls the workflow with human-in-the-loop interrupts and SQLite checkpoints, Playwright drives the browser. Never purchases or pays.',
        highlights: ['Human approval at every action', 'Conversational re-planning', 'Re-verifies cart after adding'],
        tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Gemini', 'Playwright', 'React'],
        github: 'https://github.com/Kaifkhurshid7/CartMind-',
      },
      {
        num: '02',
        type: 'LLM Fine-tuning & Evaluation',
        status: 'In progress',
        title: 'RAGA — Raga-Aware Assistant',
        desc: 'Research system that reduces confident fabrication in an LLM answering questions about Hindustani classical music. Fine-tunes Llama 3.1 8B Instruct with LoRA on a small verified dataset with calibrated refusals, and reports fabrication and over-refusal rates side by side so gains cannot hide behind refusing everything. Baseline study and dataset pipeline are done; fine-tuning and evaluation are designed but not yet run.',
        highlights: ['Paired fabrication / over-refusal metrics', 'GPU-free backend, separate inference service', 'No placeholder results'],
        tech: ['Python', 'Llama 3.1', 'LoRA', 'FastAPI', 'React'],
        github: 'https://github.com/Kaifkhurshid7/raga-llm',
      },
    ],
  },
  {
    id: 'mldl',
    label: 'Machine Learning & Deep Learning',
    kicker: 'Vision & audio',
    blurb: 'End-to-end models: data collection and annotation, training, evaluation and a deployed interface.',
    projects: [
      {
        num: '01',
        type: 'OCR & Computer Vision',
        title: 'Swaralipi — Music Notation Detection',
        desc: 'End-to-end deep learning system digitizing handwritten Hindustani notation. Trained YOLOv8 in PyTorch on a self-annotated 480-image dataset across 12 swara classes (89% mAP@0.5, 91% precision, 85.4% recall). A 5-stage post-processing pipeline (cosine-similarity template matching, geometric features, IoU deduplication, notation reconstruction) cut duplicate detections by 12%, served via FastAPI with a React interface.',
        highlights: ['89% mAP@0.5', '91% precision', '85.4% recall'],
        tech: ['Python', 'PyTorch', 'YOLOv8', 'FastAPI', 'React', 'SQLite'],
        github: 'https://github.com/Kaifkhurshid7/swara-detection',
        live: 'https://swara-detection.vercel.app/',
      },
      {
        num: '02',
        type: 'Computer Vision & Graph Analysis',
        title: 'Intelligent Node Detection System',
        desc: 'End-to-end computer vision pipeline converting diagram images into structured workflow graphs. Implemented 8-stage processing pipeline using OpenCV, Tesseract OCR, and semantic classification at <120ms inference latency. Reduced noisy detections by 82%+ via Hough-based edge detection and IoU deduplication.',
        highlights: ['<120ms inference', '82%+ less noise', '8-stage pipeline'],
        tech: ['Python', 'FastAPI', 'OpenCV', 'Tesseract OCR', 'NetworkX', 'Docker', 'React'],
        github: 'https://github.com/Kaifkhurshid7/intelligent-node-detection',
        live: 'https://intelligent-node-detection.vercel.app/',
      },
      {
        num: '03',
        type: 'Audio Classification & ML',
        title: 'Instrument Recognition Dashboard',
        desc: 'End-to-end audio classification for 11 instrument classes on 3,724 IRMAS samples, using MFCC, Chroma, Centroid, Rolloff and ZCR features plus 128×128 Mel-spectrograms. A k-NN baseline (cosine similarity, PCA, StandardScaler) reached 37–42%; upgrading to a residual CNN with SpecAugment, Mixup and AdamW reached 77.64% test accuracy and 78.01% Macro F1. Deployed with FastAPI and React.',
        highlights: ['77.64% test accuracy', '78.01% Macro F1', 'k-NN → residual CNN'],
        tech: ['Python', 'PyTorch', 'Librosa', 'Scikit-learn', 'FastAPI', 'React'],
        github: 'https://github.com/Kaifkhurshid7/Instrument-Recognizer-KNN-BASED',
        live: 'https://instrument-recognizer.vercel.app/',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Systems',
    kicker: 'APIs, real-time & on-chain',
    blurb: 'Production services, authentication, real-time messaging and verifiable records.',
    projects: [
      {
        num: '01',
        type: 'Fullstack System',
        title: 'ACM-XIM Envoy',
        desc: 'Production-deployed backend serving 100+ concurrent users, with JWT role-based authentication, paginated REST APIs, real-time WebSocket events (Socket.IO) and security hardening (rate limiting, Helmet, NoSQL injection prevention). MongoDB compound indexes, aggregation pipelines, debounced socket emissions to scoped rooms and structured logging cut query latency 3x under load.',
        highlights: ['100+ concurrent users', '3x lower query latency', 'Rate limiting & Helmet'],
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.IO'],
        github: 'https://github.com/Kaifkhurshid7/ACM-XIM-Envoy',
        live: 'https://acmmedia-frontend.vercel.app/',
      },
      {
        num: '02',
        type: 'Blockchain & Supply Chain',
        title: 'Craft-Chain — Provenance on Ethereum',
        desc: 'Gives every handcrafted product batch a single public record. Batches are minted as ERC-721 tokens by MINTER_ROLE accounts, descriptive data and photos live on IPFS via Pinata (API key kept server-side), and each journey step is recorded on-chain as a hash with the actor and timestamp, writable only by the current owner. Buyers verify the full history from a batch page or QR code, with Etherscan links.',
        highlights: ['41 contract tests', 'Owner-only journey steps', 'QR-code verification'],
        tech: ['Solidity', 'ERC-721', 'TypeScript', 'IPFS', 'Pinata', 'Sepolia'],
        github: 'https://github.com/Kaifkhurshid7/craft-chain',
      },
    ],
  },
];

/** Flat list kept for any consumer that does not need grouping. */
export const PROJECTS = PROJECT_GROUPS.flatMap((g) => g.projects);

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
