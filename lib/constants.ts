import { Project, SkillCategory, ExperienceItem, EducationItem } from "@/types";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { name: "Phone", url: "tel:+917488124325", icon: "phone" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kumar-harsh-99b4982b1/",
    icon: "linkedin",
  },
];

export const MEDIA_PROJECTS: Project[] = [];

export const DEV_PROJECTS: Project[] = [
  {
    id: "1",
    title: "AQUA Face Lite - AI Face Verification",
    image: "/assets/images/project1.png",
    description:
      "Engineered real-time face verification system achieving 98% accuracy using InsightFace ArcFace model. Developed responsive Streamlit web interface processing 50+ image comparisons per minute with deep learning pipeline.",
    techStack: ["Python", "TensorFlow", "Streamlit", "OpenCV", "InsightFace"],
    githubUrl: "https://github.com/kumarharsh",
    category: "development",
  },
  {
    id: "2",
    title: "Multiplayer Gaming Server - GTA V Roleplay",
    image: "/assets/images/project2.png",
    description:
      "Architected custom gaming server with 100+ concurrent active players daily. Developed 20+ custom scripts for gameplay features, managed AWS VPS with 10,000+ registered users, integrated Discord API.",
    techStack: ["Lua", "JavaScript", "Node.js", "MySQL", "AWS", "Docker"],
    githubUrl: "https://github.com/kumarharsh",
    category: "development",
  },
  {
    id: "3",
    title: "Alzheimer Disease Prediction - ML Healthcare",
    image: "/assets/images/project3.png",
    description:
      "Developed CNN-based ML model achieving 92% accuracy in Alzheimer disease prediction. Processed 5000+ medical images using OpenCV, built Flask REST API for deployment and real-time predictions.",
    techStack: [
      "Python",
      "TensorFlow",
      "CNN",
      "OpenCV",
      "Flask",
      "Scikit-learn",
    ],
    githubUrl: "https://github.com/kumarharsh",
    category: "development",
  },
  {
    id: "4",
    title: "Game Engine Development",
    image: "/assets/images/project4.png",
    description:
      "Designed modular game engine architecture using OOP principles. Implemented efficient data structures and algorithms optimizing performance by 35%, with 90% code coverage using TDD methodology.",
    techStack: ["C++", "Data Structures", "Algorithms", "DBMS", "OOP"],
    githubUrl: "https://github.com/kumarharsh",
    category: "development",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Kotlin" },
      { name: "SQL" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Lambda" },
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "Git" },
    ],
  },
  {
    title: "ML/AI",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Keras" },
      { name: "OpenCV" },
      { name: "NumPy" },
      { name: "Pandas" },
    ],
  },
  {
    title: "Web & Mobile",
    skills: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Flask" },
      { name: "Django" },
      { name: "REST APIs" },
      { name: "Android Studio" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Redis" },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Cloud Computing Intern",
    organization: "Amazon Web Services Academy Program",
    duration: "October 2024 - December 2024",
    responsibilities: [
      "Engineered serverless solutions using AWS Lambda, API Gateway, and S3, cutting infrastructure costs by 40%",
      "Automated CI/CD pipelines with CloudFormation and CodePipeline, reducing deployment time from 2 hours to 15 minutes",
      "Managed 10,000+ daily API requests with 99.9% uptime using optimized Lambda and CloudWatch alerting",
      "Configured IAM security policies across 3 production environments, meeting SOC 2 compliance",
      "Earned AWS Cloud Foundations and Cloud Architecting certifications with 95% scores",
    ],
  },
  {
    role: "Android Developer Intern",
    organization: "Google for Developers Program",
    duration: "January 2025 - March 2025",
    responsibilities: [
      "Published 3 Android apps on Google Play using Kotlin and Jetpack Compose, earning 4.5-star rating",
      "Decreased crash rate by 60% through exception handling, unit testing, and Firebase Crashlytics",
      "Boosted user retention by 25% by optimizing SQLite queries, cutting load time by 30%",
      "Built scalable Firebase backend supporting 500+ daily active users with real-time sync",
      "Led sprint planning with 5 developers using Agile/Scrum and Git version control",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institute: "KIIT University, Bhubaneswar, Odisha",
    duration: "2022 - 2026",
    description:
      "Relevant Coursework: Data Structures, Algorithms, Machine Learning, Cloud Computing, DBMS, OOP, Operating Systems",
  },
  {
    degree: "Senior Secondary Education (12th CBSE)",
    institute: "PPM School, Jehanabad, Bihar",
    duration: "2020 - 2021",
    description:
      "Completed senior secondary education with focus on Science stream.",
  },
  {
    degree: "Secondary Education (10th CBSE)",
    institute: "PPM School, Jehanabad, Bihar",
    duration: "2019 - 2020",
    description:
      "Completed secondary education with strong academic foundation.",
  },
];

export interface EquipmentItem {
  type: string;
  model: string;
  usage: string;
  specs?: string[];
}

export const EQUIPMENT: EquipmentItem[] = [
  {
    type: "Laptop",
    model: "ASUS ROG Zephyrus",
    usage:
      "Primary development machine for coding, ML training, and cloud deployments",
    specs: [
      "Intel Core i7/AMD Ryzen 9",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
      "NVIDIA RTX 4060/4070",
      '15.6" QHD 165Hz Display',
    ],
  },
  {
    type: "Smartphone",
    model: "Samsung Galaxy S23 Ultra",
    usage: "Mobile app testing, on-the-go development, and communication",
    specs: [
      "Snapdragon 8 Gen 2",
      "12GB RAM",
      "256GB Storage",
      "200MP Camera",
      '6.8" Dynamic AMOLED',
    ],
  },
  {
    type: "Primary Camera",
    model: "Canon EOS R50",
    usage: "Content creation, video recording, and photography",
    specs: [
      "24.2MP APS-C Sensor",
      "4K 30fps Video",
      "Dual Pixel CMOS AF II",
      "Wi-Fi & Bluetooth",
    ],
  },
  {
    type: "Microphone",
    model: "Blue Yeti X",
    usage: "Professional audio recording for tutorials and podcasts",
    specs: [
      "Blue VO!CE Software",
      "Four Capsule Array",
      "High-Res LED Metering",
      "USB Connectivity",
    ],
  },
  {
    type: "IEM",
    model: "KZ ZS10 Pro",
    usage: "Audio monitoring and music during coding sessions",
    specs: [
      "4BA + 1DD Hybrid",
      "Detachable Cable",
      "Noise Isolation",
      "Ergonomic Design",
    ],
  },
  {
    type: "Gimbal",
    model: "DJI OM 6",
    usage: "Stabilized video recording for smooth content",
    specs: [
      "3-Axis Stabilization",
      "ActiveTrack 5.0",
      "Gesture Control",
      "Quick Launch",
    ],
  },
];
