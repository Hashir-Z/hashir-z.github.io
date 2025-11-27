import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'Endless Runner Game | Hashir Bin Zahid',
  description: 'A sophisticated Android endless runner game featuring procedural generation, dynamic spawning systems, and modular asset architecture.',
};

const details: ProjectDetails = {
  description: 'An Android endless runner game developed with Unity, featuring advanced procedural generation systems and modular architecture. The game implements dynamic spawning mechanisms for various game objects while maintaining optimal performance on mobile platforms.',
  images: [
    { src: '/resources/images/endless-runner-01.png', alt: 'Main Menu', caption: 'Simple but stylish main menu' },
    { src: '/resources/images/endless-runner-02.png', alt: 'In game screenshot', caption: 'In game screenshot with powerup, obstacles, and UI visible' },
    { src: '/resources/images/endless-runner-03.png', alt: 'Game Over Menu', caption: 'Game over menu' },
  ],
  videos: [
    {
      url: 'https://www.youtube.com/embed/LTCSfhn5kXY',
      title: 'Endless Runner Game Demo',
      description: 'Gameplay demonstration of the Android endless runner game'
    }
  ],
  sections: [
    {
      title: 'Key Features',
      type: 'list',
      content: [
        'Procedural tile generation system for infinite gameplay',
        'Dynamic object spawning (power-ups, obstacles, coins, buildings)',
        'Three-lane movement system with directional turning mechanics',
        'Modular asset architecture for easy content replacement',
        'Comprehensive UI system (Main Menu, Pause Menu, Game Over Menu)',
        'Local data persistence for score and highscore tracking',
        'Optimized mobile performance and touch controls',
        'Runtime object pooling for memory efficiency',
      ],
    },
    {
      title: 'Technical Implementation',
      type: 'text',
      content: 'Built using Unity game engine targeting Android platforms, featuring custom procedural generation algorithms and optimized spawning systems. The game utilizes object pooling techniques for performance optimization, modular prefab systems for asset management, and Unity\'s PlayerPrefs API for local data persistence. The three-lane movement system implements smooth interpolation and collision detection, while the dynamic spawner uses weighted randomization algorithms to maintain gameplay balance.',
    },
    {
      title: 'Development Process',
      type: 'text',
      content: 'This Android game project focused on mastering mobile game development principles, procedural content generation, and performance optimization for constrained hardware. The development process involved implementing efficient spawning algorithms, designing modular asset systems for scalability, and optimizing for mobile platforms. While intended for Play Store publication, the project provided valuable experience in Android deployment, monetization strategies, and mobile-specific performance considerations.',
    },
  ],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'endless-runner');
  return <ProjectDetailPage project={project} details={details} />;
}

