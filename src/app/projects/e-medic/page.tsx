import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'E-Medic | Hashir Bin Zahid',
  description: 'A comprehensive medical management system for clinics and hospitals. Built with React, Node.js, MongoDB, and Express.',
};

const details: ProjectDetails = {
  description: 'E-Medic is a comprehensive medical management system built with C# that provides an all-in-one solution for medical staff, patients, and doctors. The application includes various functions to make healthcare operations more efficient through organized patient care and administrative workflows.',
  links: [
    { label: 'View on Github', url: 'https://github.com/Hashir-Z/E-Medic', type: 'external' },
  ],
  images: [
    { src: '/resources/images/e-medic-01.png', alt: 'Loading Screen', caption: 'Loading Screen' },
    { src: '/resources/images/e-medic-02.png', alt: 'Main Menu Screen', caption: 'Main Menu Screen' },
    { src: '/resources/images/e-medic-03.png', alt: 'Patient Sign Up', caption: 'Patient Sign Up' },
    { src: '/resources/images/e-medic-04.png', alt: 'Login page', caption: 'Login page' },
    { src: '/resources/images/e-medic-05.png', alt: 'Patient Dashboard', caption: 'Patient Dashboard with different options' },
    { src: '/resources/images/e-medic-06.png', alt: 'Admin Dashboard', caption: 'Admin Dashboard with different options' },
  ],

  sections: [
    {
      title: 'Key Features',
      type: 'list',
      content: [
        'Patient portal with signup, login, and password reset via email',
        'Blood test ordering and appointment scheduling system',
        'PDF report generation for medical records',
        'Payment management and billing system',
        'Calendar view for past records and future appointments',
        'Admin dashboard for comprehensive patient management',
        'Doctor and appointment management for administrators',
        'Lab result management and medical record updates',
      ],
    },
    {
      title: 'Technical Implementation',
      type: 'text',
      content: 'Developed using C# with Windows Forms and requires the Syncfusion.Pdf.WinForms NuGet package for PDF generation functionality. The application implements comprehensive input data validation, secure user authentication systems, and role-based access control. Features include email-based password recovery, automated report generation, and persistent data storage for medical records and administrative data.',
    },
    {
      title: 'Development Process',
      type: 'text',
      content: 'This university project was designed to create a comprehensive healthcare management solution that serves both patients and medical staff. The development focused on creating intuitive user interfaces for different user roles while implementing robust data validation and security measures. The project demonstrates Windows application development skills, database integration, and the implementation of complex business logic for healthcare workflows.',
    },
  ],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'e-medic');
  return <ProjectDetailPage project={project} details={details} />;
}
