/**
 * CONTENT DATA FOR HOMEPAGE
 * 
 * This file contains only basic information needed for the homepage display.
 * Detailed project information (images, videos, sections, etc.) should be
 * defined in each project's individual page file under src/app/projects/[slug]/page.tsx
 * 
 * Basic Structure:
 * - slug: unique identifier for the URL
 * - title: project title
 * - intro: short introduction (displayed on homepage)
 * - technologies: array of tech stack items
 */

export const techStackLogos = [
  { name: 'Next.js', logo: '/logos/nextjs.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'TensorFlow', logo: '/logos/tensorflow.svg' },
  { name: 'Unity', logo: '/logos/unity.svg' },
  { name: 'C#', logo: '/logos/csharp.svg' },
  { name: 'C++', logo: '/logos/cpp.svg' },
  { name: 'Azure', logo: '/logos/azure.svg' },
  { name: 'Git', logo: '/logos/git.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
];

export const experiences = [
  {
    slug: 'full-stack-developer-infodat',
    title: 'Full-Stack Developer',
    company: 'Infodat International Inc.',
    duration: 'June 2024 - May 2025',
    description: [
      'Engineered scalable full-stack applications and RESTful APIs to enhance data exchange efficiency between microservices. Focused on optimizing system performance, reducing latency, and implementing containerized workflows for audit compliance.'],
    technologies: ['Spring Boot', 'Java', 'Angular', 'Docker', 'RESTful APIs', 'Microservices'],
  },
  {
    slug: 'ai-specialist-data-annotations',
    title: 'AI Specialist',
    company: 'Data Annotations',
    duration: 'May 2024 - March 2025',
    description: [
      'Contributed to the training and refinement of advanced AI models by evaluating, rewriting, and training existing models. Specialized in prompt engineering and rigorous evaluation of model responses to ensure accuracy, safety, and strict instruction adherence'],
    technologies: ['Prompt Engineering', 'AI Evaluation', 'Machine Learning', 'NLP', 'Data Quality Assurance', 'AI Model Training' ],
  },
  {
    slug: 'usability-specialist-usertesting',
    title: 'Usability Specialist',
    company: 'UserTesting, Remote',
    duration: 'January 2022 - May 2025',
    description: [
      'Collaborated with Google, Meta, Amazon, and Microsoft to review their software and web design interfaces, providing actionable feedback to improve user experience and accessibility.',
    ],
    technologies: ['UX/UI', 'User Research', 'Accessibility Testing'],
  },
];

export const projects = [
  {
    slug: 'half-life-alyx-fakevr-mod',
    title: 'Half Life Alyx: FakeVR Mod',
    intro: 'A widely-used accessibility modification that enables the VR-exclusive title Half-Life: Alyx to be played with a standard Keyboard and Mouse. This project involved reverse-engineering VR interaction mechanics to work on traditional hardware.',
    technologies: ['Lua Scripting', 'Source 2 Engine', 'Reverse Engineering', 'Input Mapping'],
  },
  {
    slug: 'half-life-alyx-mk-edition',
    title: 'Half Life Alyx: MK Edition',
    intro: 'A high-fidelity recreation of a key environment from Half-Life: Alyx, rebuilt entirely in Unreal Engine 4. This technical showcase demonstrates the adaptation of VR-exclusive assets and gameplay for standard desktop (Mouse & Keyboard) playability without sacrificing visual quality.',
    technologies: ['Unreal Engine 4', 'Blender', '3D Modelling'],
  },
  {
    slug: 'e-medic',
    title: 'E-Medic',
    intro: 'A comprehensive desktop application designed to streamline hospital operations. Built with C# and .NET, this system unifies patient care and administrative workflows into a single interface with role-based access control.',
    technologies: ['C#', 'MySQL'],
  },
  // {
  //   slug: 'e-corp',
  //   title: 'E-Corp',
  //   intro: 'An enterprise resource planning (ERP) solution for small to medium businesses.',
  //   technologies: ['C#', 'MySQL'],
  // },
  {
    slug: 'ecommerce-cms',
    title: 'ECommerce-CMS',
    intro: 'A lightweight, dual-portal E-Commerce platform built entirely in C++ from scratch without external libraries. Features custom file-based persistence, manual memory management via pointers, and an algorithmic inventory analytics dashboard for sales forecasting.',
    technologies: ['C++', 'Data Structures', 'Memory Management'],
  },
  {
    slug: 'endless-runner',
    title: 'Endless Runner Game',
    intro: 'A 3D endless runner game developed for Android using Unreal Engine 4. Features a complex dynamic spawning system and a 3-lane navigation mechanic supporting 90-degree turns.',
    technologies: ['Unreal Engine 4', 'C++', 'Procedural Generation', 'Object Pooling', 'State Management'],
  },
  {
    slug: 'tic-tac-toe-game',
    title: 'TicTacToe Game',
    intro: 'A console-based implementation of Tic-Tac-Toe featuring an invincible AI opponent utilizing the MiniMax algorithm. This project focuses on game theory concepts and robust user experience design within a command-line interface.',
    technologies: ['MiniMax Algorithm (Game Theory)', 'C++', 'Recursion'],
  },
  {
    slug: 'stock-market-price-prediction',
    title: 'Stock Market Price Prediction',
    intro: 'Engineered a custom Stacked Ensemble Model (CNN, LSTM, GRU) to forecast NVIDIA stock prices. Achieved 55.5% directional accuracy and minimized error (MSE 11.64) by aggregating predictions from multiple deep learning architectures, outperforming standard baseline models.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn', ],
  },
  // {
  //   slug: 'virus-creation-and-evasion',
  //   title: 'Malware Analysis and Evasion Techniques',
  //   intro: 'Research into creating and evading detection for malicious software.',
  //   technologies: ['C++', 'Assembly', 'Reverse Engineering', 'Cybersecurity'],
  // },
];

export const certifications = [
  {
    title: 'Fundamentals of Accelerated Data Science',
    issuer: 'NVIDIA Deep Learning Institute',
    year: '2024',
    technologies: ['Data Science', 'Nvidia'],
    link: '/resources/certs/Fundamentals_of_Accelerated_Data_Science.pdf',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'uCertify',
    year: '2023',
    technologies: ['Azure', 'Cloud Computing'],
    link: '/resources/certs/Certificate_of_Completion_Microsoft_Azure.pdf',
  },
  {
    title: 'UH Energy Leadership Certificate',
    issuer: 'University of Houston',
    year: '2023',
    technologies: ['Leadership', 'Energy Sector'],
    link: '/resources/certs/UH_Energy_Leadership.pdf',
  },
  {
    title: 'Presidential List - Spring 2023',
    issuer: 'Lone Star College',
    year: '2023',
    technologies: [],
    link: '/resources/certs/LSC_Spring23_Presidential_List.pdf',
  },
  {
    title: 'Presidential List - Fall 2022',
    issuer: 'Lone Star College',
    year: '2022',
    technologies: [],
    link: '/resources/certs/LSC_Fall22_Presidential_List.pdf',
  },
  {
    title: 'Presidential List - Fall 2021',
    issuer: 'Lone Star College',
    year: '2021',
    technologies: [],
    link: '/resources/certs/LSC_Fall21_Presidential_List.pdf',
  },
];
