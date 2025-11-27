'use client';

import LiquidEther from '@/components/LiquidEther';
import TextType from '@/components/TextType';
import ProfileCard from '@/components/ProfileCard';
import TechStackSection from '@/components/TechStackSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectSection from '@/components/ProjectSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#11172a] text-[#626c7d]">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={30}
            cursorSize={100}
            isViscous={true}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20 md:pt-0">
            {/* Text Content */}
            <div className="text-left pointer-events-auto z-20 order-2 lg:order-1 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                <TextType
                  text={[
                    "Hello World!",
                    "Booting HashirOS...",
                    "Deploying creative code",
                    "I'm Hashir Bin Zahid"
                  ]}
                  typingSpeed={75}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-[#599692]"
                />
              </h1>
              <p className="text-xl md:text-2xl text-[#626c7d] mt-4 max-w-lg">
                Software Engineer | Full Stack Developer | Tech Enthusiast
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#experience"
                  className="px-6 py-3 border border-[#599692] text-[#599692] rounded-lg hover:bg-[#599692]/10 transition-colors font-medium"
                >
                  View Work Experience
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 bg-[#599692] text-white rounded-lg hover:bg-[#4a8581] transition-colors font-medium shadow-lg shadow-[#599692]/20"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-[#599692] text-[#599692] rounded-lg hover:bg-[#599692]/10 transition-colors font-medium"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Profile Card */}
            <div className="flex justify-center items-center pointer-events-auto z-20 order-1 lg:order-2">
              <div className="w-full max-w-md scale-90 md:scale-100 transition-transform">
                <ProfileCard
                  name="Hashir Bin Zahid"
                  title="Software Engineer"
                  handle="hashir-z"
                  status="Open for work"
                  contactText="Get in touch"
                  avatarUrl="/resources/images/profile.png"
                  miniAvatarUrl="/resources/images/profile.png"
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={true}
                  onContactClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStackSection />
      <div className="container mx-auto px-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#599692]/20 to-transparent"></div>
      </div>
      <ExperienceSection />
      <div className="container mx-auto px-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#599692]/20 to-transparent"></div>
      </div>
      <ProjectSection />
      <div className="container mx-auto px-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#599692]/20 to-transparent"></div>
      </div>
      <CertificationsSection />
      <div className="container mx-auto px-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#599692]/20 to-transparent"></div>
      </div>
      <ContactSection />
    </main>
  );
}
