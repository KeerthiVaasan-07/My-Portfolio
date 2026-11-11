import type { HobbyItem } from '../types';

export const hobbiesData: HobbyItem[] = [
  {
    id: 'handball',
    title: 'Handball',
    subtitle: 'High-Paced Spatial Awareness & Defensive Reflexes',
    category: 'COMPETITIVE ATHLETICS',
    description: 'A dynamic, high-speed discipline demanding lightning split-second decision making, rapid pattern recognition under pressure, and robust perimeter defense coordination.',
    attributes: [
      'Sub-second reaction latency',
      'Defensive positioning & zone containment',
      'High-stamina court tactical execution'
    ],
    strategicConnection: 'Parallels cybersecurity incident response: anticipating opponent angles, maintaining resilient defensive perimeters, and neutralizing breakthrough threats.'
  },
  {
    id: 'volleyball',
    title: 'Volleyball',
    subtitle: 'Synchronized Team Chemistry & Trajectory Anticipation',
    category: 'TEAM SPORTS',
    description: 'An aerial sport anchored in seamless communication, spatial trigonometry, kinetic timing, and seamless multi-stage handoffs between setter and striker.',
    attributes: [
      'Kinematic trajectory prediction',
      'Real-time team synchronization',
      'Unbroken defensive vigilance'
    ],
    strategicConnection: 'Mirrors engineering teamwork: zero-tolerance communication breakdowns, setting up peers for decisive impact, and never letting critical balls drop.'
  }
];
