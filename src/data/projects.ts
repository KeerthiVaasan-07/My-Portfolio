import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'ransomware-detector',
    number: '01',
    title: 'Ransomware Detector',
    category: 'CYBERSECURITY / THREAT DETECTION',
    tagline: 'Real-time heuristic & Shannon entropy file system monitoring engine.',
    description: 'Ransomware Detector is a cybersecurity tool that detects ransomware by monitoring suspicious file activities such as rapid encryption, unusual modifications, and high entropy changes. It alerts users early to help prevent further data loss and system damage.',
    keyConcept: 'Heuristic anomaly detection based on file modification frequency and Shannon entropy thresholds to catch cryptographic malware before complete system lockdown.',
    technologies: ['Python', 'File System Watcher', 'Shannon Entropy Analysis', 'Linux / OS APIs'],
    visualType: 'ransomware',
    githubUrl: 'https://github.com/KeerthiVaasan-07',
    highlights: [
      'Heuristic entropy anomaly calculation on active disk writes',
      'Early threshold tripwire alerts prior to master key destruction',
      'Continuous process and modification rate monitoring'
    ],
    securityFocus: 'Zero-day ransomware mitigation, real-time alerting, and automated anomaly isolation.',
    status: 'Research Prototype'
  },
  {
    id: 'ethical-hacking-framework-tests',
    number: '02',
    title: 'Ethical Hacking Framework Tests',
    category: 'CYBERSECURITY / VULNERABILITY ASSESSMENT',
    tagline: 'Authorized vulnerability auditing and structured penetration testing methodology.',
    description: 'Ethical Hacking Framework Test is a structured process that identifies and tests security vulnerabilities in systems, networks, and applications with proper authorization. It helps strengthen cybersecurity by finding and fixing weaknesses before attackers can exploit them.',
    keyConcept: 'Systematic reconnaissance, service fingerprinting, and controlled vulnerability assessment conducted strictly within authorized scope boundaries.',
    technologies: ['Cybersecurity Assessment', 'Network Protocols', 'Linux', 'Security Frameworks'],
    visualType: 'ethical-hacking',
    githubUrl: 'https://github.com/KeerthiVaasan-07',
    highlights: [
      'Structured vulnerability mapping across system attack surfaces',
      'Strict adherence to authorized rules of engagement',
      'Comprehensive remediation documentation and mitigation advice'
    ],
    securityFocus: 'Proactive vulnerability discovery, remediation validation, and defense hardening.',
    status: 'Active'
  },
  {
    id: 'q-day-sentinel',
    number: '03',
    title: 'Q-Day Sentinel',
    category: 'CYBERSECURITY / POST-QUANTUM SECURITY',
    tagline: 'Auditing legacy cryptographic schemes against post-quantum computational threats.',
    description: 'Q-Day Sentinel is a cybersecurity tool that detects cryptographic vulnerabilities and assesses risks from future quantum computing attacks. It helps organizations prepare for the quantum era by supporting the adoption of quantum-resistant security measures.',
    keyConcept: 'Identification of Shor/Grover-susceptible cryptographic algorithms across codebases and recommending lattice-based or quantum-safe alternatives.',
    technologies: ['Cryptography', 'Quantum Risk Analysis', 'Python', 'Security Principles'],
    visualType: 'q-day',
    githubUrl: 'https://github.com/KeerthiVaasan-07',
    highlights: [
      'Inventory analysis of legacy asymmetric cipher vulnerabilities (RSA, ECC)',
      'Risk modeling for store-now-decrypt-later (SNDL) attack scenarios',
      'Post-quantum migration readiness roadmap and recommendations'
    ],
    securityFocus: 'Post-quantum cryptographic migration, quantum risk modeling, and cryptographic agility.',
    status: 'Research Prototype'
  },
  {
    id: 'gps-tracker-esp32',
    number: '04',
    title: 'GPS Tracker Using ESP32',
    category: 'IOT / EMBEDDED SYSTEMS',
    tagline: 'Microcontroller-driven telemetry node with multi-channel geolocation broadcast.',
    description: 'GPS Tracker Using ESP32 is an IoT-based system that tracks the real-time location of a person or object using an ESP32 and a GPS module. It transmits location data through Wi-Fi, Bluetooth, or GSM for monitoring via a mobile app or web interface.',
    keyConcept: 'Hardware-level NMEA sentence parsing from satellite signals on an ESP32 chip paired with low-power transmission channels for live telemetry.',
    technologies: ['ESP32 Microcontroller', 'C / C++', 'GPS Module (NMEA)', 'Wi-Fi / Bluetooth / GSM'],
    visualType: 'gps-tracker',
    githubUrl: 'https://github.com/KeerthiVaasan-07',
    highlights: [
      'Satellite constellation coordinate parsing via UART stream',
      'Dynamic transmission failover across Wi-Fi, Bluetooth, or GSM',
      'Low-power sleep state optimization for extended field operation'
    ],
    securityFocus: 'Secure IoT device communication, encrypted telemetry transmission, and hardware tampering awareness.',
    status: 'Completed'
  }
];
