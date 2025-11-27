'use client';

import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiCplusplus, SiPython, SiMongodb, SiPostgresql, SiFirebase, SiUnity, SiTensorflow } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org/" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com/" },
  { node: <SiUnity />, title: "Unity", href: "https://unity.com/" },
  { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org/" },
];

export default function TechStackSection() {
  return (
    <div className="py-16 bg-[#11172a] border-t border-[#1e293b] relative z-10">
      <div className="w-full overflow-hidden text-[#599692] opacity-70 hover:opacity-100 transition-opacity duration-300">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#11172a"
          ariaLabel="Technology partners"
        />
      </div>

    </div>
  );
}

