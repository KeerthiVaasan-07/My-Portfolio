import type { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  // --- MICROSOFT LEARN BADGES ---
  {
    id: 'ms-azure-virtual-desktop',
    title: 'Azure Virtual Desktop Architecture',
    issuer: 'Microsoft Learn',
    category: 'Microsoft',
    completionDate: 'Completed on 8/10/2026',
    verificationUrl: 'https://learn.microsoft.com/en-in/users/keerthivaasant-2593/',
    skillsCovered: [
      'Azure Cloud Infrastructure & Virtualization',
      'Virtual Desktop Infrastructure (VDI) Architecture',
      'Enterprise Identity, Access & Host Pools',
      'Cloud Security, Network Routing & Resilience'
    ],
    status: 'Verified',
    badgeType: 'microsoft-azure'
  },
  {
    id: 'ms-github-copilot-js',
    title: 'Using GitHub Copilot with JavaScript',
    issuer: 'Microsoft Learn',
    category: 'Microsoft',
    completionDate: 'Completed on 23/8/2026',
    verificationUrl: 'https://learn.microsoft.com/en-in/users/keerthivaasant-2593/',
    skillsCovered: [
      'AI-Assisted Pair Programming & Copilot Prompts',
      'JavaScript Unit Testing & Code Generation',
      'Context-Aware Refactoring & Code Completion',
      'Secure Software Generation & Algorithmic Debugging'
    ],
    status: 'Verified',
    badgeType: 'microsoft-copilot'
  },
  {
    id: 'ms-vscode-web-dev',
    title: 'Get started with web development using Visual Studio Code',
    issuer: 'Microsoft Learn',
    category: 'Microsoft',
    completionDate: 'Completed on 23/8/2026',
    verificationUrl: 'https://learn.microsoft.com/en-in/users/keerthivaasant-2593/',
    skillsCovered: [
      'Modern Web Toolchains & Editor Workflows',
      'HTML5, CSS3 & JavaScript Integration',
      'Source Code Debugging & Inspection Tools',
      'Developer Extensions & Live Server Workspaces'
    ],
    status: 'Verified',
    badgeType: 'microsoft-vscode'
  },

  // --- CISCO NETWORKING ACADEMY ---
  {
    id: 'cisco-os-basics',
    title: 'Operating Systems Basics',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'Operating System Kernels, Processes & Threading',
      'Memory Management, Paging & File System Hierarchies',
      'Command Line Interfaces & System Security Controls',
      'Virtualization & Hardware Abstraction Layers'
    ],
    status: 'Verified',
    badgeType: 'cisco-os'
  },
  {
    id: 'cisco-cpp-essentials-1',
    title: 'C++ Essentials 1',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'C++ Fundamental Syntax & Compilation Model',
      'Data Types, Memory Allocation & Pointer Operations',
      'Control Structures, Loops & Functions',
      'Namespace Architecture & Header Management'
    ],
    status: 'Verified',
    badgeType: 'cisco-cpp-1'
  },
  {
    id: 'cisco-cpp-essentials-2',
    title: 'C++ Essentials 2',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'Object-Oriented Programming (OOP) in C++',
      'Class Hierarchies, Inheritance & Polymorphism',
      'Operator Overloading & Stream I/O Operations',
      'Exception Handling & Resource Management'
    ],
    status: 'Verified',
    badgeType: 'cisco-cpp-2'
  },
  {
    id: 'cisco-cpp-advanced',
    title: 'C++ Advanced',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'Standard Template Library (STL) Containers & Iterators',
      'Generic Programming & Template Metaprogramming',
      'Modern C++ Memory Management & Smart Pointers',
      'High-Performance Systems & Algorithm Optimization'
    ],
    status: 'Verified',
    badgeType: 'cisco-cpp-adv'
  },
  {
    id: 'cisco-js-essentials-1',
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'Core JavaScript Syntax, Data Types & Variables',
      'Control Flow, Conditionals & Loops',
      'Function Declarations, Scope & Closures',
      'Array Methods & Object Manipulation'
    ],
    status: 'Verified',
    badgeType: 'cisco-js-1'
  },
  {
    id: 'cisco-js-essentials-2',
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'Asynchronous JavaScript, Promises & Async/Await',
      'Object-Oriented JavaScript & Prototype Inheritance',
      'Browser Document Object Model (DOM) & Event Handling',
      'Error Handling & Client-Side API Communication'
    ],
    status: 'Verified',
    badgeType: 'cisco-js-2'
  },
  {
    id: 'cisco-cybersecurity-essentials',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'Cyber Threat Landscape & Attack Vectors',
      'Confidentiality, Integrity, Availability (CIA Triad)',
      'Network Security, Firewalls & Cryptography',
      'Incident Response & Mitigation Strategies'
    ],
    status: 'Verified',
    badgeType: 'cisco-cybersecurity'
  },
  {
    id: 'cisco-python-1',
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'Python Data Types, Operators & Variables',
      'Control Flow, Boolean Logic & Looping',
      'Lists, Slices & Data Structures',
      'Functions, Scope & Algorithmic Problem Solving'
    ],
    status: 'Verified',
    badgeType: 'cisco-python'
  },
  {
    id: 'cisco-python-2',
    title: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    category: 'Cisco',
    verificationUrl: 'https://www.netacad.com/',
    skillsCovered: [
      'Object-Oriented Programming (Classes & Inheritance)',
      'Exception Handling & File Stream Operations',
      'Generators, Iterators & Lambda Expressions',
      'Standard Library Modules & Package Architecture'
    ],
    status: 'Verified',
    badgeType: 'cisco-python-2'
  }
];
