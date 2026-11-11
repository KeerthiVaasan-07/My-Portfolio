export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  roleTitles: string[];
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    period: string;
    currentSemester: string;
    cgpa: number;
    location: string;
  };
  summary: string;
  tagline: string;
  status: string;
  location: string;
}

export type SkillCategory = 'PROGRAMMING LANGUAGES' | 'WEB TECHNOLOGIES' | 'CYBERSECURITY' | 'TOOLS';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  proficiencyLevel: 'Core' | 'Advanced' | 'Practicing';
  color: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  keyConcept: string;
  technologies: string[];
  visualType: 'ransomware' | 'ethical-hacking' | 'q-day' | 'gps-tracker';
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  securityFocus: string;
  status: 'Completed' | 'Research Prototype' | 'Experimental' | 'Active';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: 'Cisco Networking Academy' | 'Microsoft Learn' | string;
  category: 'Cisco' | 'Microsoft';
  credentialId?: string;
  verificationUrl?: string;
  completionDate?: string;
  skillsCovered: string[];
  status: 'Verified';
  badgeType?: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  attributes: string[];
  strategicConnection: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  number: string;
  href: string;
}
