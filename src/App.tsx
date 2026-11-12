import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationDock } from './components/navigation/NavigationDock';
import { MobileMenu } from './components/navigation/MobileMenu';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { EducationSection } from './components/education/EducationSection';
import { CertificationsSection } from './components/certifications/CertificationsSection';
import { ContactSection } from './components/contact/ContactSection';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageLoader } from './components/ui/PageLoader';
import { ResumeModal } from './components/ui/ResumeModal';
import { Toast } from './components/ui/Toast';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with URL Hash on mount
  useEffect(() => {
    const validSections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
    const currentHash = window.location.hash.replace('#', '').toLowerCase();

    if (currentHash && validSections.includes(currentHash)) {
      setActiveSection(currentHash);
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash && validSections.includes(hash)) {
        setActiveSection(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Section Navigation Handler
  const handleNavigate = (id: string) => {
    setActiveSection(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Copy Email with Toast
  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setToastMessage(`Copied to clipboard: ${email}`);
      setTimeout(() => setToastMessage(null), 3500);
    }).catch(() => {
      setToastMessage(`Email: ${email}`);
      setTimeout(() => setToastMessage(null), 3500);
    });
  };

  // Resume Download Handler
  const handleDownloadResume = () => {
    const resumePath = `${import.meta.env.BASE_URL}resume/Keerthi-Vaasan-Resume.pdf`;

    // Trigger direct browser download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Keerthi-Vaasan-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Open dedicated viewer
    setIsResumeModalOpen(true);
    setToastMessage('Initiating resume download & opening document preview.');
    setTimeout(() => setToastMessage(null), 4000);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection onNavigate={handleNavigate} />;
      case 'skills':
        return <SkillsSection onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsSection onNavigate={handleNavigate} />;
      case 'education':
        return <EducationSection onNavigate={handleNavigate} />;
      case 'certifications':
        return <CertificationsSection onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <ContactSection
            onCopyEmail={handleCopyEmail}
            onDownloadResume={handleDownloadResume}
            onNavigate={handleNavigate}
          />
        );
      case 'hero':
      default:
        return (
          <HeroSection
            onExploreClick={() => handleNavigate('about')}
            onDownloadResume={handleDownloadResume}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#F2F0EB] selection:bg-[#A78BFA]/30 overflow-x-hidden">
      {/* Cinematic Page Loader */}
      {isLoading && (
        <PageLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Floating Navigation Dock with "Keerthi Vaasan T" */}
      <NavigationDock
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Fullscreen Mobile Navigation Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Divided Multi-Section Page View with Cinematic Transition */}
      <main className="w-full min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dedicated Interactive Resume Document Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
