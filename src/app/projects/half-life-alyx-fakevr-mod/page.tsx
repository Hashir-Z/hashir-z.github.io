import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'Half Life Alyx: FakeVR Mod | Hashir Bin Zahid',
  description: 'A groundbreaking mod that recieved international media attention as it enabled gamers to play Half-Life Alyx without a VR headset. Built with Lua Scripting, Source Engine, and Reverse Engineering.',
};

const details: ProjectDetails = {
  description: 'This project involved extensive reverse engineering of the Source 2 engine to bypass VR requirements, allowing players to experience Half-Life Alyx on standard monitors. It includes custom camera controls, weapon handling adaptations, and UI adjustments for a seamless non-VR experience.',
  metrics: [
    { label: 'Downloads', value: '500,000', suffix: '+' },
  ],
  links: [
    { label: 'ModDB Page', url: 'https://www.moddb.com/mods/halflifealyx-fakevrmod', type: 'external' },
    { label: 'PCGamer', url: 'https://www.pcgamer.com/the-first-half-life-alyx-non-vr-mod-is-here-but-its-ultra-janky/', type: 'external' },
    { label: 'PCMag', url: 'https://www.pcmag.com/news/half-life-alyx-mod-allows-play-without-a-vr-headset', type: 'external' },
    { label: 'WCCFTech', url: 'https://wccftech.com/half-life-alyx-new-mod-no-vr/', type: 'external' },
    { label: 'GamesRadar', url: 'https://www.gamesradar.com/half-life-alyx-no-vr-mod/', type: 'external' },
    { label: 'DSOGaming', url: 'https://www.dsogaming.com/news/first-non-vr-mod-released-for-half-life-alyx-allowing-you-to-play-with-mouse-and-keyboard/', type: 'external' },
  ],
  sections: [
    {
      title: 'Key Features',
      type: 'list',
      content: [
        'Ability to play without using VR headset',
        'Enhanced graphics options for people with low end system because rendering has to be only donce once',
        'Choices between different camera controls with multiple preset modes',
        'Community-requested quality-of-life improvements',
        'Performance optimizations for lower-end systems',
      ],
    },
    {
      title: 'Technical Implementation',
      type: 'text',
      content: 'The FakeVR Mod required deep integration with the Source 2 engine, including custom DLL modifications and input system overhauls. The project involved reverse engineering proprietary formats, creating custom tools for asset conversion, and implementing a plugin system for community contributions.',
    },
    {
      title: 'Development Process',
      type: 'text',
      content: 'This project was developed over 2 months with active community feedback. The development cycle included weekly beta releases, feature voting, and collaborative design sessions with the modding community. The final release represents the culmination of hundreds of hours of development and testing.',
    },
  ],
  images: [
    { src: '/resources/images/fakevr-mod-01.jpg', alt: 'Poster', caption: 'Poster for the mod' },
    { src: '/resources/images/fakevr-mod-02.png', alt: 'Mod Installer', caption: 'Custom made installer using InnoSetup and Pascal Scripting' },
    { src: '/resources/images/fakevr-mod-03.png', alt: 'In game screenshot', caption: 'In game screenshot' },
  ],
  videos: [
    {
      url: 'https://www.youtube.com/embed/uV4kIbvktQY',
      title: 'Release Trailer',
      thumbnail: '/images/halyx-mk-video-thumb.jpg',
      description: 'Official Release Trailer for Half-Life: Alyx - FakeVR Mod'
    },
    {
      url: 'https://www.youtube.com/embed/gKU-bgyN9DM',
      title: 'Installation and Setup Guide',
      thumbnail: '/images/halyx-mk-install-thumb.jpg',
      description: 'Step-by-step guide to installing and configuring the mod'
    },
  ],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'half-life-alyx-fakevr-mod');
  return <ProjectDetailPage project={project} details={details} />;
}
