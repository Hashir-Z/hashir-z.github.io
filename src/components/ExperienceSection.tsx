'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';
import { experiences } from '@/data/content';

export default function ExperienceSection() {
  return (
    <div id="experience" className="py-20 bg-[#11172a] text-[#626c7d]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#599692] mb-8">Work Experience</h2>
        <VerticalTimeline lineColor="#599692">
          {experiences.map((exp, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#1e293b',
                  color: '#fff',
                  border: '1px solid #599692',
                  borderRadius: '8px'
                }}
                contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
                date={exp.duration}
                iconStyle={{ background: '#599692', color: '#fff' }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-semibold text-white mb-2">
                  {exp.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-[#599692] mb-4">
                  {exp.company}
                </h4>
                <div className="mb-4">
                  {exp.description.map((item, idx) => (
                    <p key={idx} className="text-sm text-gray-300 mb-2">
                      {item}
                    </p>
                  ))}
                </div>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-[#599692] text-white rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
