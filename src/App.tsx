import React, { useState } from 'react';
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

      {/* 2. Main Hero Showcase Section (হোমপেজ সেকশন ১) */}
      <Hero
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* 3. Skill & Service Categories (গ্রাফিক্স, ওয়েব, মার্কেটিং, অফিস ইত্যাদি) */}
      <ServiceHighlights onSelectCategory={handleCategorySelect} />

      {/* 4. Comprehensive Course Catalog & Syllabus (কোর্স সেকশন ২) */}
      <CourseCatalog
        selectedCategory={selectedCourseCategory}
        onSelectCategory={setSelectedCourseCategory}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* 5. Success Stories & Student Testimonials */}
      <SuccessStories />

      {/* 6. Dedicated 4th Branch WhatsApp Section & Persistent Widget (সেকশন ৩: হোয়াটসঅ্যাপ) */}
      <WhatsAppConnector />

      {/* 7. Events, Free Seminars & Tech Blog (সেকশন ৬: অন্যান্য) */}
      <EventsAndBlog />

      {/* 9. Contact Info, 4 Branches & Maps (সেকশন ৫: যোগাযোগ) */}
      <ContactAndBranches />

      {/* 10. Comprehensive Footer */}
      <Footer
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* 11. Interactive Bangla AI Chatbot Modal (সেকশন ৪: চ্যাটবট) */}
      <ChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* 12. Online Admission & Seat Booking Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        initialCourseId={admissionCourseId}
      />

      {/* 13. Google Forms Student Manager Modal */}
      <GoogleFormManagerModal
        isOpen={isGoogleFormModalOpen}
        onClose={() => setIsGoogleFormModalOpen(false)}
      />
    </div>
  );
}

