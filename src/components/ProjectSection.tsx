'use client';

import React from 'react';
import Link from 'next/link';
import SpotlightCard from './SpotlightCard';
import { projects } from '@/data/content';

const ProjectSection = () => {
  const personalProjects = projects.filter(project => !project.slug.startsWith('stock-market') && !project.slug.startsWith('virus-creation'));
  const researchProjects = projects.filter(project => project.slug.startsWith('stock-market') || project.slug.startsWith('virus-creation'));

  return (
    <section id="projects" className="py-20 bg-[#11172a]">
      <div className="container mx-auto px-4">
        {/* Personal Projects */}
        <h2 className="text-3xl font-bold text-[#599692] mb-8">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {personalProjects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotlightCard className="p-6 flex flex-col h-full cursor-pointer">
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-[#626c7d] text-sm line-clamp-4 break-words leading-relaxed">{project.intro}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-[#1e293b] text-[#599692] rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                )}
                <span className="mt-4 inline-block text-[#599692] hover:underline">Learn more &rarr;</span>
              </SpotlightCard>
            </Link>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#599692]/20 to-transparent my-12"></div>

        {/* Research Projects */}
        <h2 className="text-3xl font-bold text-[#599692] mb-8">Research Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotlightCard className="p-6 flex flex-col h-full cursor-pointer">
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-[#626c7d] text-sm line-clamp-4 break-words leading-relaxed">{project.intro}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-[#1e293b] text-[#599692] rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                )}
                <span className="mt-4 inline-block text-[#599692] hover:underline">Learn more &rarr;</span>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
