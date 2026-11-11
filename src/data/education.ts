export interface EducationItem {
  id: string;
  degree: string;
  specialization: string;
  institution: string;
  period: string;
  currentStatus: string;
  cgpa: string;
  description: string;
  highlights: string[];
  keyCourses: string[];
}

export const educationData: EducationItem[] = [
  {
    id: 'btech-cybersecurity',
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'Cybersecurity Specialization',
    institution: 'Amrita Vishwa Vidyapeetham',
    period: '2025 – 2029',
    currentStatus: 'Currently in III Semester',
    cgpa: '7.36',
    description: 'Undergraduate engineering program blending foundational computer science principles, discrete mathematics, and systems design with advanced, specialized training in modern cybersecurity, vulnerability assessment, cryptography, and network defense.',
    highlights: [
      'Comprehensive focus on secure software development life cycle (SSDLC) and system internals',
      'Rigorous practical coursework in operating systems, algorithm design, and cryptographic paradigms',
      'Continuous hands-on laboratory exercises in threat analysis and authorized security audits'
    ],
    keyCourses: [
      'Cybersecurity Principles',
      'Foundations of Cryptography',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (C++)',
      'Computer Architecture & Linux Operating Systems',
      'Web Application Technologies'
    ]
  }
];
