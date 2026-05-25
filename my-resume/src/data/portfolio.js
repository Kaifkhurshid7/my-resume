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
  role: 'Software Engineer',
  tagline: 'Data Science Enthusiast',
  bio: 'Kaif Khurshid is a pre-final year B.Tech (Hons.) CSE student at XIM University, Bhubaneswar — passionate about building impactful solutions. He works with the MERN stack and is actively exploring Data Science and Machine Learning.',
  email: 'kaifkhurshid18@gmail.com',
  github: 'https://github.com/Kaifkhurshid7',
  linkedin: 'https://linkedin.com/in/kaif-khurshid',
  resumeUrl: '#',
};

// ─── Marquee ──────────────────────────────────────────────────────────────────

export const MARQUEE_ITEMS = [
  'MERN Stack',
  'Machine Learning',
  'Artificial Intelligence',
  'Deep Learning',
  'Natural Language Processing',
  'Big Data',
  'Data Science',
  'Operating Systems',
  'Database Systems',
  'System Design',
];

// ─── Technical Skills ─────────────────────────────────────────────────────────

export const TECH_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Terminal',
    items: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Database',
    subcategories: [
      { label: 'Frameworks', items: ['Node.js', 'Express', 'Flask'] },
      { label: 'Persistence', items: ['MySQL', 'MongoDB', 'Redis'] },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Research',
    icon: 'Brain',
    items: ['TensorFlow', 'Scikit-Learn', 'OpenCV', 'Pandas', 'NumPy', 'NLTK'],
  },
];

export const CURRENTLY_LEARNING = {
  title: 'Machine Learning',
  subtitle: '& Data Science',
  description: 'Exploring ML algorithms and Data Science concepts for future data science roles.',
  label: 'For Data Science Role',
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

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    num: '01',
    type: 'OCR & Computer Vision',
    title: 'Swaralipi OCR System',
    desc: 'OCR-based recognition system for Indian musical notation — detects and classifies swara symbols from scanned manuscripts using a custom-labeled dataset and YOLOv8 bounding-box pipeline with sequential reconstruction, confidence scoring, and duplicate filtering. Achieves 90%+ detection accuracy.',
    tech: ['Python', 'FastAPI', 'YOLOv8', 'PyTorch', 'React', 'TypeScript', 'Vite', 'SQLite'],
    github: 'https://github.com/Kaifkhurshid7/swara-detection',
    live: null,
  },
  {
    num: '02',
    type: 'Computer Vision & Graph Analysis',
    title: 'Intelligent Node Detection',
    desc: 'End-to-end computer vision pipeline that transforms diagram images into directed graphs — extracts 60–70 visual primitives using OpenCV, OCR, and NLP heuristics, then applies spatial clustering and rule-based post-processing to merge fragmented detections into logical nodes with 75% noise reduction.',
    tech: ['Python', 'OpenCV', 'OCR', 'NLP', 'Graph Analysis'],
    github: 'https://github.com/Kaifkhurshid7/intelligent-node-detection',
    live: null,
  },
  {
    num: '03',
    type: 'AI & Signal Processing',
    title: 'Instrument Recognition',
    desc: 'Audio classification pipeline extracting a 26-dimensional spectral fingerprint (MFCCs, Delta, Chroma, Centroid, Rolloff, ZCR) from 3724 IRMAS samples across 11 instrument classes. Achieves 61.9% accuracy using k-NN with cosine distance, validated via 5-fold stratified cross-validation.',
    tech: ['React', 'Python', 'Librosa', 'Flask', 'Scikit-learn'],
    github: 'https://github.com/Kaifkhurshid7/Instrument-Recognition',
    live: null,
  },
  {
    num: '04',
    type: 'Fullstack System',
    title: 'ACM-XIM Envoy',
    desc: 'Secure full-stack platform with JWT-based role authentication and protected REST APIs for posts, likes, comments, and live news via NewsAPI. Features real-time Socket.IO messaging supporting 100+ active users.',
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
