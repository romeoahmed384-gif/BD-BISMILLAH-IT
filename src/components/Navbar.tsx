import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Menu, 
  X, 
  Award, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck,
  Calendar,
  FileText
} from 'lucide-react';
import { 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  MAIN_BRANCH_PHONE,
  EIGHTH_BRANCH_PHONE,
  FACEBOOK_PAGE_URL 
} from '../data/branchesData';

interface NavbarProps {
  onOpenAdmission: (courseId?: string) => void;
  onOpenChat: () => void;
  onOpenGoogleForm?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission, onOpenChat, onOpenGoogleForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const text = encodeURIComponent('আসসালামু আলাইকুম, আমি বিডি বিসমিল্লাহ আইটি সেন্টারের ৮ম ব্রাঞ্চ থেকে কোর্সের বিস্তারিত তথ্য জানতে চাই।');
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification & Branch Hotline Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/60">
              <Sparkles className="w-3.5 h-3.5" />
              ৫০% স্পেশাল স্কলারশিপ অফার চলছে
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              খুলনায় মোট ৪টি নিজস্ব আইটি ক্যাম্পাস
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              সকাল ১০:০০ - রাত ৮:০০ (শুক্রবার ব্যতীত ৬ দিন খোলা)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors shadow-sm"
              title="৮ম ব্রাঞ্চের হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
              ৮ম ব্রাঞ্চ WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY}
            </button>
            <a
              href={`tel:${EIGHTH_BRANCH_PHONE}`}
              className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors font-mono font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              ৮ম ব্রাঞ্চ কল: {EIGHTH_BRANCH_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' 
          : 'bg-slate-900 text-white py-4 border-b border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-900/30 group-hover:scale-105 transition-transform border border-rose-400/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  BD Bismillah <span className="text-rose-400">IT</span>
                </span>
                <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  Govt. Reg.
                </span>
              </div>
              <span className="text-xs sm:text-sm text-slate-300 font-medium">
                বিডি বিসমিল্লাহ কম্পিউটার এন্ড আইটি সেন্টার
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
            <a href="#courses" className="hover:text-rose-400 transition-colors flex items-center gap-1.5 py-1">
              <BookOpen className="w-4 h-4 text-rose-400" />
              কোর্সসমূহ
            </a>
            <a href="#success" className="hover:text-rose-400 transition-colors flex items-center gap-1.5 py-1">
              <Award className="w-4 h-4 text-amber-400" />
              সফলতার গল্প
            </a>
            <a href="#events" className="hover:text-rose-400 transition-colors flex items-center gap-1.5 py-1">
              <Calendar className="w-4 h-4 text-sky-400" />
              ফ্রি সেমিনার
            </a>
            <a href="#branches" className="hover:text-rose-400 transition-colors flex items-center gap-1.5 py-1">
              <MapPin className="w-4 h-4 text-rose-400" />
              ব্রাঞ্চ ও যোগাযোগ
            </a>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenGoogleForm && (
              <button
                onClick={onOpenGoogleForm}
                className="inline-flex items-center gap-1.5 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/50 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:shadow-md"
                title="গুগল ভর্তি ফরম ও লিংক ম্যানেজমেন্ট"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Google Form</span>
              </button>
            )}

            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-600/40 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-sky-400" />
              <span>বাংলা চ্যাটবট</span>
            </button>

            <button
              onClick={() => onOpenAdmission()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-rose-900/40 hover:shadow-rose-700/50 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>অনলাইন ভর্তি</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenAdmission()}
              className="bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold sm:hidden"
            >
              ভর্তি
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4">
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-rose-400"
              >
                <BookOpen className="w-4 h-4 text-rose-400" />
                কোর্সসমূহ
              </a>
              <a
                href="#success"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-amber-400"
              >
                <Award className="w-4 h-4 text-amber-400" />
                সফলতার গল্প
              </a>
              <a
                href="#events"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-sky-400"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                ফ্রি সেমিনার
              </a>
              <a
                href="#branches"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-rose-400"
              >
                <MapPin className="w-4 h-4 text-rose-400" />
                ব্রাঞ্চ ও যোগাযোগ
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              {onOpenGoogleForm && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGoogleForm();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 py-2.5 rounded-xl font-semibold text-sm border border-emerald-500/40"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>অফিশিয়াল গুগল ভর্তি ফরম (Google Form)</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-sky-300 py-2.5 rounded-xl font-semibold text-sm border border-sky-600/30"
              >
                <MessageSquare className="w-4 h-4 text-sky-400" />
                বাংলা এআই চ্যাটবটে প্রশ্ন করুন
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow"
              >
                <Phone className="w-4 h-4" />
                ৪র্থ ব্রাঞ্চে হোয়াটসঅ্যাপ করুন ({FOURTH_BRANCH_PHONE})
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
                className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white py-3 rounded-xl font-bold text-base shadow-lg shadow-rose-900/40"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                অনলাইন ভর্তি ও স্কলারশিপ আবেদন
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
