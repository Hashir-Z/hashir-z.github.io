'use client';

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div id="contact" className="py-20 bg-[#1e293b]/50 backdrop-blur-sm border-y border-[#599692]/20 text-[#626c7d]">
      <div className="px-4 text-center">
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-[#626c7d] mb-10 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, shoot me an email and I'll get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:hashir2k@yahoo.com"
              className="px-8 py-3 bg-[#599692] text-white rounded-lg hover:bg-[#4a8581] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-[#599692]/20 font-medium"
            >
              hashir2k@yahoo.com
            </a>
            <a
              href="https://docs.google.com/document/d/1OBOplwiRCuMMoevqYHKO-hHrqKwLBQ7P"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#599692] text-[#599692] rounded-lg hover:bg-[#599692]/10 transition-all transform hover:-translate-y-1 font-medium"
            >
              View Resume
            </a>
            <a
              href="https://www.linkedin.com/in/hashir-z/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#599692] text-[#599692] rounded-lg hover:bg-[#599692]/10 transition-all transform hover:-translate-y-1 font-medium flex items-center gap-2"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Hashir-Z"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#599692] text-[#599692] rounded-lg hover:bg-[#599692]/10 transition-all transform hover:-translate-y-1 font-medium flex items-center gap-2"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

