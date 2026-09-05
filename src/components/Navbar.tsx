import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Calendar,
  FileText,
  ChevronRight,
  Zap,
  Flame,
  Megaphone,
  ArrowRight,
  User,
  LogOut
} from 'lucide-react';
import { 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  EIGHTH_BRANCH_PHONE
} from '../data/branchesData';

interface NavbarProps {
  onOpenAdmission: (courseId?: string) => void;
  onOpenChat: () => void;
  onOpenGoogleForm?: () => void;
  onOpenAuth?: () => void;
  userProfile?: { name: string; email: string } | null;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAdmission, 
  onOpenChat, 
  onOpenGoogleForm,
  onOpenAuth,
  userProfile,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { id: 'courses', href: '#courses', label: 'কোর্সসমূহ', icon: BookOpen, iconColor: 'text-rose-400', badge: '১৫টি কোর্স' },
    { id: 'success', href: '#success', label: 'সফলতার গল্প', icon: Award, iconColor: 'text-amber-400', badge: 'রিভিউ' },
    { id: 'events', href: '#events', label: 'ফ্রি সেমিনার', icon: Calendar, iconColor: 'text-sky-400', badge: 'ফ্রি' },
    { id: 'branches', href: '#branches', label: 'ব্রাঞ্চ ও যোগাযোগ', icon: MapPin, iconColor: 'text-emerald-400', badge: '৪টি ক্যাম্পাস' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* 0. Breaking News Highlight: 40% Discount on any course + Board Registration Fees Free until 10th */}
      <div className="bg-gradient-to-r from-rose-700 via-red-600 to-amber-600 text-white py-2 px-3 sm:px-4 border-b border-rose-500/50 shadow-md relative z-20 overflow-hidden">
        {/* Shimmer sweep animation */}
        <motion.div
          animate={{ x: ['-100%', '250%'] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
          className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start text-center md:text-left">
            <span className="inline-flex items-center gap-1 bg-white text-rose-700 font-black px-2.5 py-0.5 rounded-full text-[11px] shadow-sm tracking-wide shrink-0 animate-pulse">
              <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
              জরুরি অফার সংবাদ
            </span>
            <p className="text-white font-semibold text-xs sm:text-sm leading-tight">
              আমাদের যে কোনো কোর্সের ওপর চলছে <span className="font-black text-yellow-200 bg-black/20 px-1.5 py-0.5 rounded border border-yellow-300/30">সরাসরি ৪০% ডিসকাউন্ট</span> এবং সাথে <span className="font-black text-emerald-200 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-400/40">বোর্ড রেজিস্ট্রেশন ফি সম্পূর্ণ ফ্রি</span>!
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 bg-black/30 text-yellow-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-yellow-400/40 backdrop-blur-xs">
              <Clock className="w-3 h-3 text-yellow-300 animate-spin" style={{ animationDuration: '9s' }} />
              <span>অফার চলবে আগামী ১০ তারিখ অবধি</span>
            </span>
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenAdmission()}
              className="bg-white hover:bg-yellow-50 text-rose-700 font-black text-xs px-3 py-1 rounded-full shadow-sm border border-white/60 transition-all inline-flex items-center gap-1 cursor-pointer"
            >
              <span>ভর্তি আবেদন</span>
              <ArrowRight className="w-3 h-3" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* 1. Top Notification & Branch Hotline Bar with Micro-animations */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 relative overflow-hidden"
      >
        {/* Subtle background shimmer line */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 relative z-10">
          
          {/* Left Info Badges with lively micro-animations */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            
            {/* BTEB Govt Approval Chip */}
            <motion.span 
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 text-amber-300 font-semibold bg-gradient-to-r from-amber-950/80 to-yellow-950/70 px-3 py-1 rounded-full border border-amber-500/40 shadow-sm cursor-default"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </motion.div>
              <span>বাংলাদেশ কারিগরি শিক্ষা বোর্ড অনুমোদিত প্রতিষ্ঠান (কোড: ৬২০৭৪)</span>
            </motion.span>

            {/* Campus Info Badge */}
            <motion.span 
              whileHover={{ scale: 1.04, color: '#f43f5e' }}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 transition-colors cursor-default"
            >
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
              </motion.span>
              <span>খুলনায় মোট ৪টি নিজস্ব আইটি ক্যাম্পাস</span>
            </motion.span>

            {/* Timing Badge */}
            <motion.span 
              whileHover={{ scale: 1.04, color: '#34d399' }}
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 transition-colors cursor-default"
            >
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>সকাল ১০:০০ - রাত ৮:০০ (শুক্রবার ব্যতীত ৬ দিন)</span>
            </motion.span>
          </div>

          {/* Right Hotline & WhatsApp Action Chips */}
          <div className="flex items-center gap-2.5">
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all relative overflow-hidden group"
              title="৮ম ব্রাঞ্চের হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>৮ম ব্রাঞ্চ WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${EIGHTH_BRANCH_PHONE}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors font-mono font-bold text-xs"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, repeatDelay: 3 }}
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
              </motion.div>
              <span>কল: {EIGHTH_BRANCH_PHONE}</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* 2. Main Navigation Bar */}
      <motion.nav 
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800 py-2.5' 
            : 'bg-slate-900 text-white py-3.5 border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity with Hover Bounce & Sheen */}
          <motion.a 
            href="#" 
            className="flex items-center gap-3 group select-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-900/40 border border-rose-400/40 relative overflow-hidden"
            >
              {/* Inner shimmer sweep */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/2 bg-white/20 -skew-x-12"
              />
              <GraduationCap className="w-6 h-6 relative z-10" />
            </motion.div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-rose-100 transition-colors">
                  BD Bismillah <span className="text-rose-400 group-hover:text-amber-300 transition-colors">IT</span>
                </span>
                <motion.span 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shadow-sm"
                >
                  Govt. Reg.
                </motion.span>
              </div>
              <span className="text-xs sm:text-sm text-slate-300 font-medium group-hover:text-slate-100 transition-colors">
                বিডি বিসমিল্লাহ কম্পিউটার এন্ড আইটি সেন্টার
              </span>
            </div>
          </motion.a>

          {/* 3. Desktop Nav Links with Micro-Hover Animations */}
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-200">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredNav === item.id;

              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onHoverStart={() => setHoveredNav(item.id)}
                  onHoverEnd={() => setHoveredNav(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-3.5 py-2 rounded-xl flex items-center gap-2 text-slate-200 hover:text-white transition-colors group cursor-pointer"
                >
                  {/* Subtle active / hover pill glow background */}
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-hover-indicator"
                      className="absolute inset-0 bg-slate-800/80 border border-slate-700/80 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Icon with hover rotation */}
                  <motion.div
                    animate={isHovered ? { rotate: [0, -10, 10, 0], scale: 1.15 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <Icon className={`w-4 h-4 ${item.iconColor}`} />
                  </motion.div>

                  <span className="relative z-10">{item.label}</span>

                  {/* Micro badge chip */}
                  <span className="relative z-10 text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 group-hover:text-rose-300 group-hover:border-rose-500/40 transition-colors">
                    {item.badge}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* 4. Right Action CTAs with Rich Micro-Interactions */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Login / Student Portal Action */}
            {userProfile ? (
              <div className="flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 rounded-xl px-2.5 py-1.5 text-xs">
                <div className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-[11px]">
                  {userProfile.name.charAt(0)}
                </div>
                <span className="font-semibold text-white max-w-[90px] truncate">{userProfile.name}</span>
                {onLogout && (
                  <button
                    onClick={onLogout}
                    className="p-1 text-slate-400 hover:text-rose-400 rounded transition-colors"
                    title="লগআউট করুন"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenAuth}
                className="inline-flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:text-white"
              >
                <User className="w-4 h-4 text-rose-400" />
                <span>লগইন</span>
              </motion.button>
            )}

            {/* Google Form Button with Gentle Lift */}
            {onOpenGoogleForm && (
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenGoogleForm}
                className="inline-flex items-center gap-1.5 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/50 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:shadow-md shadow-emerald-950/40"
                title="গুগল ভর্তি ফরম ও লিংক ম্যানেজমেন্ট"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.2 }}
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                </motion.div>
                <span>Google Form</span>
              </motion.button>
            )}

            {/* AI Chatbot Button with Wobble & Ping Dot */}
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenChat}
              className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-sky-300 border border-sky-600/40 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:shadow-md shadow-sky-950/40 group"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
                >
                  <MessageSquare className="w-4 h-4 text-sky-400 group-hover:text-sky-300" />
                </motion.div>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              </div>
              <span>বাংলা চ্যাটবট</span>
            </motion.button>

            {/* Online Admission CTA with Shimmer & Pulse */}
            <motion.button
              whileHover={{ scale: 1.06, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenAdmission()}
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 via-red-600 to-rose-600 hover:from-rose-500 hover:to-red-500 text-white px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-rose-900/50 hover:shadow-rose-700/60 overflow-hidden"
            >
              {/* Shimmer effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                className="absolute inset-0 w-1/2 bg-white/25 -skew-x-12 pointer-events-none"
              />
              <span className="relative z-10">অনলাইন ভর্তি</span>
              <motion.div
                animate={{ rotate: [0, 180, 360], scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="relative z-10"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
              </motion.div>
            </motion.button>
          </div>

          {/* 5. Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => onOpenAdmission()}
              className="bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold sm:hidden flex items-center gap-1 shadow-md shadow-rose-900/40"
            >
              <span>ভর্তি</span>
              <Zap className="w-3 h-3 text-amber-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white focus:outline-none border border-slate-700"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-rose-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-slate-200" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* 6. Mobile Dropdown Menu with Staggered Motion Animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 overflow-hidden"
            >
              {/* Mobile 2-column Nav Grid */}
              <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
                {navLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        handleNavClick(e, item.href);
                      }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-800 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${item.iconColor} group-hover:scale-110 transition-transform`} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="pt-2 flex flex-col gap-2"
              >
                {/* Mobile Auth Button */}
                {userProfile ? (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs">
                        {userProfile.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white">{userProfile.name}</div>
                        <div className="text-[11px] text-slate-400">{userProfile.email}</div>
                      </div>
                    </div>
                    {onLogout && (
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onLogout();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-rose-400 font-bold hover:bg-slate-700"
                      >
                        লগআউট
                      </button>
                    )}
                  </div>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuth?.();
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-semibold text-sm border border-slate-700 shadow-sm"
                  >
                    <User className="w-4 h-4 text-rose-400" />
                    <span>স্টুডেন্ট লগইন / রেজিস্ট্রেশন</span>
                  </motion.button>
                )}

                {onOpenGoogleForm && (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenGoogleForm();
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 py-2.5 rounded-xl font-semibold text-sm border border-emerald-500/40 shadow-sm"
                  >
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>অফিশিয়াল গুগল ভর্তি ফরম (Google Form)</span>
                  </motion.button>
                )}

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenChat();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-sky-300 py-2.5 rounded-xl font-semibold text-sm border border-sky-600/30 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-sky-400" />
                  <span>বাংলা এআই চ্যাটবটে প্রশ্ন করুন</span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWhatsApp();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>৪র্থ ব্রাঞ্চে হোয়াটসঅ্যাপ করুন ({FOURTH_BRANCH_PHONE})</span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmission();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white py-3 rounded-xl font-bold text-base shadow-lg shadow-rose-900/50"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>অনলাইন ভর্তি ও স্কলারশিপ আবেদন</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

