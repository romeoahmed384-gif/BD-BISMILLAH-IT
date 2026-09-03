import React, { useState } from 'react';
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
import { GoogleFormManagerModal } from './components/GoogleFormManagerModal';

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
  const [isGoogleFormModalOpen, setIsGoogleFormModalOpen] = useState(false);
  const [admissionCourseId, setAdmissionCourseId] = useState<string | undefined>(undefined);
  const [selectedCourseCategory, setSelectedCourseCategory] = useState<string>('all');

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Hind_Siliguri',sans-serif] selection:bg-rose-500 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenGoogleForm={() => setIsGoogleFormModalOpen(true)}
      />

      {/* 2. Main Hero Showcase Section with 3D Model & Interactive Canvas Particles */}
      <Hero
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* 3. Skill & Service Categories (গ্রাফিক্স, ওয়েব, মার্কেটিং, অফিস ইত্যাদি) */}
      <SectionScrollWrapper id="services">
        <ServiceHighlights onSelectCategory={handleCategorySelect} />
      </SectionScrollWrapper>

      {/* 4. Comprehensive Course Catalog & Syllabus (কোর্স সেকশন) */}
      <SectionScrollWrapper id="courses">
        <CourseCatalog
          selectedCategory={selectedCourseCategory}
          onSelectCategory={setSelectedCourseCategory}
          onOpenAdmission={handleOpenAdmission}
        />
      </SectionScrollWrapper>

      {/* 5. Success Stories & Student Testimonials */}
      <SectionScrollWrapper id="success">
        <SuccessStories />
      </SectionScrollWrapper>

      {/* 6. Dedicated 4th Branch WhatsApp Section & Persistent Widget */}
      <SectionScrollWrapper id="whatsapp">
        <WhatsAppConnector />
      </SectionScrollWrapper>

      {/* 7. Events, Free Seminars & Tech Blog */}
      <SectionScrollWrapper id="events">
        <EventsAndBlog />
      </SectionScrollWrapper>

      {/* 8. Contact Info, 4 Branches & Maps */}
      <SectionScrollWrapper id="branches">
        <ContactAndBranches />
      </SectionScrollWrapper>

      {/* 9. Comprehensive Footer */}
      <SectionScrollWrapper>
        <Footer
          onOpenAdmission={() => handleOpenAdmission()}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </SectionScrollWrapper>

      {/* 10. Interactive Bangla AI Chatbot Modal */}
      <ChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* 11. Online Admission & Seat Booking Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        initialCourseId={admissionCourseId}
      />

      {/* 12. Google Forms Student Manager Modal */}
      <GoogleFormManagerModal
        isOpen={isGoogleFormModalOpen}
        onClose={() => setIsGoogleFormModalOpen(false)}
      />
    </div>
  );
}


