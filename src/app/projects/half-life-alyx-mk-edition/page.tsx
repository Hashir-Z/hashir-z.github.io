import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'Half Life Alyx: MK Edition | Hashir Bin Zahid',
  description: 'An enhancement mod for FakeVR, adding new features and quality-of-life improvements. Built with C++, Unreal Engine 4, Modding, and 3D Modelling.',
};

const details: ProjectDetails = {
  description: 'Building upon the FakeVR Mod, the MK Edition introduces advanced features such as improved weapon mechanics, enhanced graphics options, and community-requested quality-of-life changes, further refining the non-VR gameplay.',
  longDescription: 'Inspired by the art direction of Half Life: Alyx, the MK Edition was created. This was a small portion developed at the time when Valve released just the gameplay trailer for Half Life: Alyx.' +
    'It is created in enhanced graphics options, and community- requested quality-of - life changes, further refining the non - VR gameplay.',

  images: [
    { src: '/resources/images/MKEdition-01.jpg', alt: 'MK Edition Main Menu', caption: 'Enhanced main menu with new UI elements' },
    { src: '/resources/images/MKEdition-02.jpg', alt: 'Explosion effects', caption: 'Improved graphics and lighting in action' },
    { src: '/resources/images/MKEdition-03.jpg', alt: 'Post Processing', caption: 'New weapon customization options' },
    { src: '/resources/images/MKEdition-04.jpg', alt: 'Reflections in the blood', caption: 'Comprehensive settings and options menu' },
    { src: '/resources/images/MKEdition-05.jpg', alt: 'Lighting control', caption: 'Lighting adjusted based on level lighting theory' },
    { src: '/resources/images/MKEdition-06.jpg', alt: 'Cinematic screenshot', caption: 'Designed to invoke feelings of eerie' },
  ],
  videos: [
    {
      url: 'https://www.youtube.com/embed/ZIaT5ZMq0qk',
      title: 'MK Edition Gameplay Trailer',
      thumbnail: '/images/halyx-mk-video-thumb.jpg',
      description: 'Watch the MK Edition in action with all its new features'
    },
    {
      url: 'https://www.youtube.com/embed/fl5kPH_DOe0',
      title: 'WIP Showcase',
      thumbnail: '/images/halyx-mk-install-thumb.jpg',
      description: 'Step-by-step guide to installing and configuring the mod'
    },
  ],
  sections: [
    {
      title: 'Key Features',
      type: 'list',
      content: [
        'Performance optimizations for lower-end systems',
        'Redesigned user interface for mouse and keyboard users',
        'Improved graphics options including dynamic lighting and shadows',
        'Customizable control schemes and key bindings',
      ]
    },
    {
      title: 'Technical Implementation',
      type: 'text',
      content: 'The MK Edition was created with Unreal Engine 4. The project creating models, rigging models to animations, designing the environment, and programming different events.' +
        'The mod utilizes C++ for performance-critical components and Blueprints for rapid prototyping of gameplay features.' +
        'Advanced graphics techniques such as dynamic lighting, shadow mapping, and post-processing effects were employed to enhance visual fidelity while maintaining optimal performance across a range of hardware configurations.',
    },
    {
      title: 'Development Process',
      type: 'text',
      content: 'This project was developed over 3 months with artistic direction taken from Half Life Alyx release trailer.' +
        'The development cycle included incremental feature addition, planned environment creation, and building of modular components.' +
        'The final release represents the culmination of hundreds of hours of development and testing.',
    },
  ],
  links: [
    { label: 'Itch.io', url: 'https://icedwhisper.itch.io/half-life-alyx-mk-edition-mouse-keyboard-remake', type: 'external' },
    { label: 'ModDB Page', url: 'https://www.moddb.com/games/half-life-alyx-mk-edition-mouse-keyboard-remake', type: 'external' },
  ],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'half-life-alyx-mk-edition');
  return <ProjectDetailPage project={project} details={details} />;
}

