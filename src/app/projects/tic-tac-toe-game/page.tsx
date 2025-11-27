import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'TicTacToe Game | Hashir Bin Zahid',
  description: 'A classic Tic-Tac-Toe game with an AI opponent. Built with C++ and MiniMax Algorithm.',
};

const details: ProjectDetails = {
  description: 'A simple yet robust implementation of Tic-Tac-Toe, featuring both single-player (against an AI) and two-player modes. The AI uses a minimax algorithm for optimal play.',
  links: [
    { label: 'View on Github', url: 'https://github.com/Hashir-Z/TicTacToe', type: 'external' },
  ],
  images: [
    { src: '/resources/images/tictactoe-01.jpg', alt: 'Loading Screen', caption: 'Loading Screen' },
    { src: '/resources/images/tictactoe-02.jpg', alt: 'Game Loaded', caption: 'Game Loaded' },
    { src: '/resources/images/tictactoe-03.jpg', alt: 'Player character selection', caption: 'Player character selection (X/O)' },
    { src: '/resources/images/tictactoe-04.jpg', alt: 'First Player Selection', caption: 'First player selection' },
    { src: '/resources/images/tictactoe-05.jpg', alt: 'Player move', caption: 'Player move' },
    { src: '/resources/images/tictactoe-06.jpg', alt: 'Bot move', caption: 'Bot move' },
  ],

  sections: [
    {
      title: 'Key Features',
      type: 'list',
      content: [
        'Color-changing loading screen with progress display',
        'Character selection screen with alphabet validation',
        'First/second player choice with input validation',
        'User input screen with comprehensive error checking',
        'Unbeatable AI opponent using Minimax algorithm',
        'Win/draw result screens for both player and AI victories',
        'Play again functionality with proper game reset',
        'Extensive error handling to prevent user input issues',
      ],
    },
    {
      title: 'Technical Implementation',
      type: 'text',
      content: 'Built as a C++ console application featuring runtime color manipulation, strategic AI implementation using the Minimax algorithm for perfect play, and comprehensive input validation systems. The program utilizes sleep functions for controlled timing and includes well-documented code with references to external resources.',
    },
    {
      title: 'Development Process',
      type: 'text',
      content: 'This university project was developed with a focus on creating an engaging console-based gaming experience. The development included implementing visual feedback through color changes, creating an unbeatable AI opponent, and building robust error handling systems. The project demonstrates console application development skills and algorithmic thinking through the Minimax implementation.',
    },
  ],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'tic-tac-toe-game');
  return <ProjectDetailPage project={project} details={details} />;
}

