import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'Malware Analysis and Evasion Techniques | Hashir Bin Zahid',
  description: 'Research into creating and evading detection for malicious software. Built with C++, Assembly, Reverse Engineering, and Cybersecurity techniques.',
};

const details: ProjectDetails = {
  description: 'A research-oriented project focusing on understanding malware behavior, developing proof-of-concept viruses, and implementing techniques to evade common antivirus detection mechanisms. This project emphasizes ethical hacking and cybersecurity research.',
  images: ['/images/virus-evasion-1.jpg', '/images/virus-evasion-2.jpg'],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'virus-creation-and-evasion');
  return <ProjectDetailPage project={project} details={details} />;
}

