import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceHighlights } from './components/ServiceHighlights';
import { CourseCatalog } from './components/CourseCatalog';
import { SuccessStories } from './components/SuccessStories';
import { WhatsAppConnector } from './components/WhatsAppConnector';
import { EventsAndBlog } from './components/EventsAndBlog';
import { ContactAndBranches } from './components/ContactAndBranches';
import { Footer } from './components/Footer';
import { ChatbotModal } from './components/ChatbotModal';
import { AdmissionModal } from './components/AdmissionModal';
import { AuthModal } from './components/AuthModal';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';

// Reusable Section Animation Wrapper for smooth scroll reveal
const SectionScrollWrapper: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 45 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [admissionCourseId, setAdmissionCourseId] = useState<string | undefined>(undefined);
  const [selectedCourseCategory, setSelectedCourseCategory] = useState<string>('all');
  
  // User profile state from localStorage
  const [userProfile, setUserProfile] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('bdbcit_user_profile');
      if (stored) {
        setUserProfile(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading stored user:', e);
    }
  }, []);

  const handleOpenAdmission = (courseId?: string) => {
    setAdmissionCourseId(courseId);
    setIsAdmissionOpen(true);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCourseCategory(category);
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('bdbcit_user_profile');
    setUserProfile(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Hind_Siliguri',sans-serif] selection:bg-rose-500 selection:text-white">
      
      {/* 1. Header & Navigation (Contains Breaking News Offer Bar & Hotlines) */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        userProfile={userProfile}
        onLogout={handleLogout}
      />

      {/* 3. Main Hero Showcase Section with 3D Model & Interactive Canvas Particles */}
      <Hero
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* 4. Skill & Service Categories (গ্রাফিক্স, ওয়েব, মার্কেটিং, অফিস ইত্যাদি) */}
      <SectionScrollWrapper id="services">
        <ServiceHighlights onSelectCategory={handleCategorySelect} />
      </SectionScrollWrapper>

      {/* 5. Comprehensive Course Catalog & Syllabus (কোর্স সেকশন) */}
      <SectionScrollWrapper id="courses">
        <CourseCatalog
          selectedCategory={selectedCourseCategory}
          onSelectCategory={setSelectedCourseCategory}
          onOpenAdmission={handleOpenAdmission}
        />
      </SectionScrollWrapper>

      {/* 6. Success Stories & Student Testimonials & Social Proof */}
      <SectionScrollWrapper id="success">
        <SuccessStories />
      </SectionScrollWrapper>

      {/* 7. Dedicated 4th Branch WhatsApp Section & Persistent Widget */}
      <SectionScrollWrapper id="whatsapp">
        <WhatsAppConnector />
      </SectionScrollWrapper>

      {/* 8. Events, Free Seminars & Tech Blog */}
      <SectionScrollWrapper id="events">
        <EventsAndBlog />
      </SectionScrollWrapper>

      {/* 9. Contact Info, 4 Branches & Maps */}
      <SectionScrollWrapper id="branches">
        <ContactAndBranches
          onOpenAdmission={() => handleOpenAdmission()}
        />
      </SectionScrollWrapper>

      {/* 10. Comprehensive Footer */}
      <SectionScrollWrapper>
        <Footer
          onOpenAdmission={() => handleOpenAdmission()}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </SectionScrollWrapper>

      {/* 11. Floating WhatsApp Chat Widget (Bottom-Left) */}
      <FloatingWhatsAppWidget />

      {/* 12. Smart AI Chatbot Component with Floating Trigger Icon (Bottom-Right) */}
      <ChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* 13. Online Admission & Seat Booking Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        initialCourseId={admissionCourseId}
      />

      {/* 14. Student Authentication / Login & Sign Up Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccessLogin={(user) => setUserProfile(user)}
      />
    </div>
  );
}
