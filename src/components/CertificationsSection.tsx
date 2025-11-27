'use client';

import React, { useState } from 'react';
import SpotlightCard from '@/components/SpotlightCard';
import { certifications } from '@/data/content';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  const openModal = (cert: typeof certifications[0]) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div id="certifications" className="py-20 bg-[#11172a] text-[#626c7d]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#599692] mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <SpotlightCard
              key={index}
              className={`h-full ${cert.link ? 'cursor-pointer' : ''}`}
              onClick={cert.link ? () => openModal(cert) : undefined}
            >
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              <p className="text-[#599692] text-sm mb-1">{cert.issuer}</p>
              <p className="text-xs text-gray-500 mb-3">{cert.year}</p>
              {cert.technologies && cert.technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {cert.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-[#1e293b] text-[#599692] rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {cert.link && (
                <div className="mt-4 inline-block text-[#599692] text-sm">
                  View Certificate →
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              // Close modal only if clicked on the overlay itself, not on child elements
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div className="bg-[#1a2036] rounded-lg shadow-xl border border-[#1e293b] max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-[#2d3748]">
                <h3 className="text-xl font-semibold text-white">{selectedCert.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-[#626c7d] hover:text-white text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                <iframe
                  src={selectedCert.link}
                  className="w-full h-[70vh] border-0 rounded"
                  title={`${selectedCert.title} Certificate`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

