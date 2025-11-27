'use client';

import Link from 'next/link';
import Image from 'next/image';
import CountUp from '@/components/CountUp';
import { projects } from '@/data/content';
import { useState, useEffect } from 'react';

type Project = typeof projects[number];

export type ProjectDetails = {
  description?: string;
  longDescription?: string;
  images?: Array<{ src: string; alt?: string; caption?: string } | string>;
  videos?: Array<{ url: string; title: string; thumbnail?: string; description?: string }>;
  sections?: Array<{ title: string; type: 'text' | 'list'; content: string | string[] }>;
  metrics?: Array<{ label: string; value: string; suffix?: string }>;
  links?: Array<{ label: string; url: string; type: 'external' | 'internal' }>;
};

// Image Gallery Component with Popup Modal
const ImageGallery = ({ images }: { images: Array<{ src: string; alt?: string; caption?: string } | string> }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const processedImages = images.map((image, index) =>
    typeof image === 'string'
      ? { src: image, alt: `Project image ${index + 1}`, caption: undefined }
      : image
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % processedImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + processedImages.length) % processedImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImageIndex]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processedImages.map((imgData, index) => (
          <div
            key={index}
            className="group relative w-full aspect-video rounded-lg overflow-hidden bg-[#2a324a] hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative w-full h-full">
              {imgData.src.startsWith('http') ? (
                // External image
                <img
                  src={imgData.src}
                  alt={imgData.alt || `Project image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : (
                // Local image using Next.js Image
                <Image
                  src={imgData.src}
                  alt={imgData.alt || `Project image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              )}
              {/* Fallback for missing images */}
              <div className="hidden absolute inset-0 items-center justify-center text-center text-[#626c7d]">
                <div>
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm">Image {index + 1}</p>
                  {imgData.caption && <p className="text-xs opacity-60 mt-1">{imgData.caption}</p>}
                </div>
              </div>
              {/* Click overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              {imgData.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{imgData.caption}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            // Close modal only if clicked on the overlay itself, not on child elements
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          {processedImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {processedImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image container */}
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            {(() => {
              const currentImage = processedImages[selectedImageIndex];
              return (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt || `Project image ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />

                  {/* Fallback for missing images */}
                  <div className="hidden absolute inset-0 items-center justify-center text-center text-white">
                    <div>
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-xl">Image {selectedImageIndex + 1}</p>
                      {currentImage.caption && <p className="text-sm opacity-70 mt-2">{currentImage.caption}</p>}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Image counter and caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-center">
            <p className="text-sm">
              {selectedImageIndex + 1} / {processedImages.length}
            </p>
            {processedImages[selectedImageIndex].caption && (
              <p className="text-xs opacity-80 mt-1">{processedImages[selectedImageIndex].caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Video Gallery Component
const VideoGallery = ({ videos }: { videos: Array<{ url: string; title: string; thumbnail?: string; description?: string }> }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <div key={index} className="bg-[#2a324a] rounded-lg overflow-hidden">
          <div className="relative w-full aspect-video bg-[#1a2036]">
            <iframe
              src={video.url}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-4">
            <h4 className="text-white font-semibold mb-2">{video.title}</h4>
            {video.description && (
              <p className="text-[#626c7d] text-sm">{video.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Custom Section Component
const CustomSection = ({ section }: { section: { title: string; type: string; content: string | string[] } }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-white mb-4 border-b border-[#2d3748] pb-2">
        {section.title}
      </h3>
      {section.type === 'list' && Array.isArray(section.content) ? (
        <ul className="space-y-3">
          {section.content.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-lg text-[#626c7d]">
              <span className="text-[#599692] mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-[#626c7d] leading-relaxed">{section.content}</p>
      )}
    </div>
  );
};

// Links Component
const ProjectLinks = ({
  links,
  onPdfClick
}: {
  links: Array<{ label: string; url: string; type: 'internal' | 'external' }>;
  onPdfClick?: (url: string) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link, index) => {
        // Check if it's a PDF link
        const isPdf = link.url.toLowerCase().endsWith('.pdf');

        if (isPdf && onPdfClick) {
          return (
            <button
              key={index}
              onClick={() => onPdfClick(link.url)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#599692]/10 text-[#599692] border border-[#599692]/20 rounded-lg hover:bg-[#599692]/20 transition-colors cursor-pointer"
            >
              {link.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          );
        }

        return link.type === 'external' ? (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#599692]/10 text-[#599692] border border-[#599692]/20 rounded-lg hover:bg-[#599692]/20 transition-colors"
          >
            {link.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <Link
            key={index}
            href={link.url}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#599692]/10 text-[#599692] border border-[#599692]/20 rounded-lg hover:bg-[#599692]/20 transition-colors"
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default function ProjectDetailPage({
  project,
  details
}: {
  project: Project | undefined;
  details?: ProjectDetails;
}) {
  const [pdfModalUrl, setPdfModalUrl] = useState<string | null>(null);

  const openPdfModal = (url: string) => {
    setPdfModalUrl(url);
  };

  const closePdfModal = () => {
    setPdfModalUrl(null);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#11172a] text-[#626c7d] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-lg mb-6">We couldn't find the requested project.</p>
          <Link href="/#projects" className="inline-block mt-6 px-6 py-3 border border-[#599692] text-[#599692] rounded-lg hover:bg-[#599692]/10 transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const projectDetails = details || {};
  const hasImages = projectDetails.images && projectDetails.images.length > 0;
  const hasVideos = projectDetails.videos && projectDetails.videos.length > 0;
  const hasSections = projectDetails.sections && projectDetails.sections.length > 0;
  const hasLinks = projectDetails.links && projectDetails.links.length > 0;

  return (
    <div className="min-h-screen bg-[#11172a] text-[#626c7d] py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="text-[#599692] hover:text-white transition-colors flex items-center gap-2"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-lg md:text-xl text-[#599692] mb-6 leading-relaxed max-w-3xl mx-auto">
            {project.intro}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Overview Section */}
          <div className="bg-[#1a2036] p-8 md:p-12 rounded-2xl shadow-xl border border-[#1e293b]">
            <h2 className="text-3xl font-semibold text-white mb-6 border-b border-[#2d3748] pb-3">
              Overview
            </h2>
            <p className="text-lg text-[#626c7d] leading-relaxed mb-6">
              {projectDetails.longDescription || projectDetails.description || 'No detailed description available.'}
            </p>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#599692]/10 text-[#599692] border border-[#599692]/20 rounded-lg hover:bg-[#599692]/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics */}
            {projectDetails.metrics && projectDetails.metrics.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Key Metrics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectDetails.metrics.map((metric, index) => (
                    <div key={index} className="bg-[#2a324a] p-6 rounded-lg text-center border border-[#1e293b]">
                      <p className="text-4xl font-bold text-[#599692] mb-2">
                        <CountUp
                          end={parseInt(metric.value.replace(/,/g, ''))}
                          duration={3000}
                        />
                        {metric.suffix}
                      </p>
                      <p className="text-sm text-[#626c7d]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            {hasLinks && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Project Links</h3>
                <ProjectLinks
                  links={projectDetails.links as Array<{ label: string; url: string; type: 'external' | 'internal' }>}
                  onPdfClick={openPdfModal}
                />
              </div>
            )}
          </div>

          {/* Custom Sections */}
          {hasSections && (
            <div className="bg-[#1a2036] p-8 md:p-12 rounded-2xl shadow-xl border border-[#1e293b]">
              {projectDetails.sections!.map((section, index) => (
                <CustomSection key={index} section={section} />
              ))}
            </div>
          )}

          {/* Image Gallery */}
          {hasImages && projectDetails.images && (
            <div className="bg-[#1a2036] p-8 md:p-12 rounded-2xl shadow-xl border border-[#1e293b]">
              <h2 className="text-3xl font-semibold text-white mb-6 border-b border-[#2d3748] pb-3">
                Image Gallery
              </h2>
              <ImageGallery
                images={projectDetails.images.map((img, idx) =>
                  typeof img === 'string'
                    ? { src: img, alt: `${project.title} image ${idx + 1}` }
                    : img
                )}
              />
            </div>
          )}

          {/* Video Gallery */}
          {hasVideos && projectDetails.videos && (
            <div className="bg-[#1a2036] p-8 md:p-12 rounded-2xl shadow-xl border border-[#1e293b]">
              <h2 className="text-3xl font-semibold text-white mb-6 border-b border-[#2d3748] pb-3">
                Videos
              </h2>
              <VideoGallery videos={projectDetails.videos} />
            </div>
          )}
        </div>
      </div>

      {/* PDF Modal */}
      {pdfModalUrl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            // Close modal only if clicked on the overlay itself, not on child elements
            if (e.target === e.currentTarget) {
              closePdfModal();
            }
          }}
        >
          <div className="bg-[#1a2036] rounded-lg shadow-xl border border-[#1e293b] max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-[#2d3748]">
              <h3 className="text-xl font-semibold text-white">Document Viewer</h3>
              <button
                onClick={closePdfModal}
                className="text-[#626c7d] hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-0">
              <iframe
                src={pdfModalUrl}
                className="w-full h-[80vh] border-0"
                title="PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

