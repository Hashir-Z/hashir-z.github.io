import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'ECommerce-CMS | Hashir Bin Zahid',
  description: 'A fully functional E-Commerce and Content Management System built entirely in C++ without external libraries. This application features distinct portals for customers and employees, implementing persistent data storage through file handling and advanced inventory analytics.',
};

const details: ProjectDetails = {
  description: 'An E-Commerce CMS written entirely in C++ without external libraries, featuring distinct portals for customers and employees with persistent data storage through file handling and advanced inventory analytics.',
  links: [
    { label: 'View on Github', url: 'https://github.com/Hashir-Z/ECommerce-CMS', type: 'external' },
  ],
  images: [
    { src: '/resources/images/e-commerce-01.png', alt: 'Welcome Screen', caption: 'Welcome Screen' },
    { src: '/resources/images/e-commerce-02.png', alt: 'Input error handling', caption: 'Input error handling' },
    { src: '/resources/images/e-commerce-03.png', alt: 'Buyer Main Menu', caption: 'Buyer Main Menu' },
    { src: '/resources/images/e-commerce-04.png', alt: 'Seller Sign Up', caption: 'Seller Sign Up with security feature implemented' },
    { src: '/resources/images/e-commerce-05.png', alt: 'Login page', caption: 'Login page' },
    { src: '/resources/images/e-commerce-06.png', alt: 'Edit item details', caption: 'Edit item details' },
  ],
  sections: [
    {
      title: 'Key Features',
      type: 'list',
      content: [
        'Dual-portal system: Separate customer and employee interfaces',
        'Secure employee signup with master password protection ("12345")',
        'Advanced analytics dashboard with profitability insights',
        'Inventory management: low stock alerts and sales forecasting',
        'Comprehensive sale reporting by day, month, or year',
        'Product management: add, edit, and modify item details',
        'Customer purchase tracking and transaction history',
        'Colorful console interface for enhanced user experience',
      ],
    },
    {
      title: 'Technical Implementation',
      type: 'text',
      content: 'Built entirely in C++ from scratch without any external libraries, utilizing manual memory management through pointers and addresses. Features custom file handling for data persistence, recursive function implementations, global variable management, and function overloading. Includes custom sorting algorithms that work with multiple data types and comprehensive error handling to ensure system stability.',
    },
    {
      title: 'Development Process',
      type: 'text',
      content: 'This university project challenged conventional approaches by building a complete e-commerce system in C++ without modern frameworks. Self-imposed constraints included minimizing code through function repurposing, maximizing pointer usage, and implementing function overloading. The project taught valuable lessons about documentation importance, recursion management, code reduction techniques, global variable usage, and advanced pointer manipulation in larger programs.',
    },
  ],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'ecommerce-cms');
  return <ProjectDetailPage project={project} details={details} />;
}

