import type { SkillItem, SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  'PROGRAMMING LANGUAGES',
  'WEB TECHNOLOGIES',
  'CYBERSECURITY',
  'TOOLS'
];

export const skillsData: SkillItem[] = [
  // PROGRAMMING LANGUAGES
  {
    id: 'python',
    name: 'Python',
    category: 'PROGRAMMING LANGUAGES',
    description: 'Core language for cybersecurity automation, threat analysis tooling, algorithmic problem-solving, and script development.',
    proficiencyLevel: 'Core',
    color: '#A78BFA',
    details: 'Certified Cisco Python Essentials 1 & 2. Utilized in malware signature analysis, socket programming, and entropy calculation.'
  },
  {
    id: 'c',
    name: 'C',
    category: 'PROGRAMMING LANGUAGES',
    description: 'Low-level systems programming, memory architecture comprehension, pointers, buffer handling, and core computer science fundamentals.',
    proficiencyLevel: 'Core',
    color: '#93C5FD',
    details: 'Essential foundation for analyzing memory vulnerabilities, understanding system calls, and embedded firmware logic.'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'PROGRAMMING LANGUAGES',
    description: 'Object-oriented systems engineering, high-performance logic, data structures, and secure algorithmic implementation.',
    proficiencyLevel: 'Core',
    color: '#60A5FA',
    details: 'Applied in performance-critical modules, embedded IoT systems with ESP32, and hardware-near computing.'
  },

  // WEB TECHNOLOGIES
  {
    id: 'html',
    name: 'HTML',
    category: 'WEB TECHNOLOGIES',
    description: 'Semantic document structuring, modern web standards, and secure client-side content hierarchy.',
    proficiencyLevel: 'Core',
    color: '#F97316',
    details: 'Structuring modern web interfaces and understanding DOM manipulation, client-side injection vectors, and accessibility.'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'WEB TECHNOLOGIES',
    description: 'Modern styling systems, responsive layouts, flexbox/grid, animations, and dark obsidian UI design.',
    proficiencyLevel: 'Core',
    color: '#38BDF8',
    details: 'Crafting responsive user interfaces, aesthetic micro-interactions, and visual feedback states.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'WEB TECHNOLOGIES',
    description: 'Dynamic client-side execution, asynchronous event handling, DOM manipulation, and interactive web architecture.',
    proficiencyLevel: 'Core',
    color: '#FACC15',
    details: 'Interactive web applications, API integrations, real-time client logic, and secure front-end state handling.'
  },

  // CYBERSECURITY
  {
    id: 'cryptography',
    name: 'Cryptography',
    category: 'CYBERSECURITY',
    description: 'Mathematical foundations of data security, encryption algorithms, hashing, public-key infrastructure, and quantum-resistant exploration.',
    proficiencyLevel: 'Core',
    color: '#C084FC',
    details: 'Symmetric & asymmetric encryption, cryptographic integrity verification, hash entropy calculation, and post-quantum preparedness.'
  },
  {
    id: 'cybersecurity-essentials',
    name: 'Cybersecurity Essentials',
    category: 'CYBERSECURITY',
    description: 'Threat landscapes, defense-in-depth principles, vulnerability scanning, security hygiene, and authorized testing frameworks.',
    proficiencyLevel: 'Core',
    color: '#34D399',
    details: 'Certified Cisco Cybersecurity Essentials. Foundation in threat identification, confidentiality-integrity-availability (CIA) triage, and network security.'
  },

  // TOOLS
  {
    id: 'linux',
    name: 'Linux',
    category: 'TOOLS',
    description: 'Command line operations, file permission hierarchies, process monitoring, shell environments, and security auditing.',
    proficiencyLevel: 'Core',
    color: '#B99B72',
    details: 'Primary environment for cybersecurity analysis, network inspection, systems inspection, and developer toolchains.'
  }
];
