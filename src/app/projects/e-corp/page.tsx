import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'E-Corp | Hashir Bin Zahid',
  description: 'An enterprise resource planning (ERP) solution for small to medium businesses. Built with Angular, Spring Boot, and PostgreSQL.',
};

const details: ProjectDetails = {
  description: 'E-Corp provides modules for inventory management, human resources, customer relationship management (CRM), and financial accounting. Its modular design allows for easy customization and scalability to fit various business needs.',
  images: ['/images/e-corp-1.jpg', '/images/e-corp-2.jpg'],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'e-corp');
  return <ProjectDetailPage project={project} details={details} />;
}

