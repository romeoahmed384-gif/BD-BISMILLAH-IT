import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Award, 
  Building2, 
  TrendingUp, 
  Play, 
  Send,
  MessageCircle,
  Clock,
  Box,
  Image as ImageIcon,
  Compass,
  Flame,
  Megaphone
} from 'lucide-react';
import { 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  EIGHTH_BRANCH_PHONE 
} from '../data/branchesData';
import { ParticleHeroBackground } from './ParticleHeroBackground';
import { ThreeHeroModel } from './ThreeHeroModel';

interface HeroProps {
  onOpenAdmission: (courseId?: string) => void;
  onOpenChat: () => void;
  onPlayVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmission, onOpenChat, onPlayVideoModal }) => {
  const [rightPanelTab, setRightPanelTab] = useState<'3d' | 'lab'>('3d');

  const openWhatsApp = () => {
    const text = encodeURIComponent('আসসালামু আলাইকুম, আমি বিডি বিসমিল্লাহ আইটি সেন্টারে ভর্তি হতে চাই ও ৮ম ব্রাঞ্চের কোর্স অফার সম্পর্কে জানতে চাই।');
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-6 pb-16 lg:pt-10 lg:pb-20 border-b border-slate-800/80">
      {/* 1. Interactive Canvas Particle Background reacting to mouse motion */}
      <ParticleHeroBackground />

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-rose-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-10 w-[24rem] h-[24rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Bento Grid Top Level Row */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6 items-stretch">
          
          {/* Bento Tile 1: Major Headline & Action Hub (Span 7 on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 hover:border-slate-700/80 shadow-2xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            {/* Top Accent Gradient Border Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 opacity-80"></div>
            
            <div className="space-y-5">
              {/* Top Banner Tag */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => onOpenAdmission()}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold shadow-inner cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>মেগা অফার: যেকোনো কোর্সে ৪০% ছাড় + ফ্রি বোর্ড রেজিস্ট্রেশন</span>
                <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">১০ তারিখ পর্যন্ত</span>
              </motion.div>

              {/* Display Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black leading-tight tracking-tight text-white">
                আপনার ক্যারিয়ারের নতুন দিগন্ত খুলুন{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-300 to-amber-300">
                  বিডি বিসমিল্লাহ আইটি সেন্টারের সাথে
                </span>
              </h1>

              {/* Highlighted News Card */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                onClick={() => onOpenAdmission()}
                className="cursor-pointer p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-rose-950/90 via-red-950/80 to-amber-950/90 border-2 border-rose-500/50 shadow-xl shadow-rose-950/40 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-colors" />
                <div className="flex items-start sm:items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-600 to-amber-600 flex items-center justify-center shrink-0 shadow-md text-white">
                    <Flame className="w-5 h-5 fill-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                        জরুরি অফার সংবাদ
                      </span>
                      <span className="text-amber-300 text-xs font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-300" /> অফার চলবে ১০ তারিখ পর্যন্ত
                      </span>
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium leading-snug">
                      আমাদের যে কোনো কোর্সের ওপর চলছে সরাসরি <strong className="text-yellow-300 font-extrabold underline decoration-yellow-400">৪০% ডিসকাউন্ট</strong> এবং সাথে <strong className="text-emerald-300 font-extrabold">বোর্ড রেজিস্ট্রেশন ফি সম্পূর্ণ ফ্রি</strong>!
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform shrink-0">
                    <span>ভর্তি ফরম</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                দক্ষতা অর্জন করুন, স্বাবলম্বী হোন। আধুনিক কম্পিউটার ল্যাব, অভিজ্ঞ ফ্রিল্যান্সার মেন্টর এবং লাইভ প্রজেক্টের মাধ্যমে অফিস অ্যাপ্লিকেশন, গ্রাফিক্স ডিজাইন, ফুল-স্ট্যাক ওয়েব ও ডিজিটাল মার্কেটিং শিখে দেশি ও আন্তর্জাতিক ক্যারিয়ার নিশ্চিত করুন।
              </p>

              {/* Value Feature Pills with Stagger Hover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-200">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }}
                  className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>১০০% প্র্যাকটিক্যাল প্রজেক্ট ও কম্পিউটার ল্যাব</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }}
                  className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>লাইফটাইম মেন্টরশিপ ও জব সাপোর্ট</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }}
                  className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>খুলনায় ৪টি সুসজ্জিত নিজস্ব ক্যাম্পাস</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }}
                  className="flex items-center gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>শুক্রবার ব্যতীত প্রতিদিন শিডিউল ক্লাস ও ল্যাব</span>
                </motion.div>
              </div>
            </div>

            {/* Bottom Actions & 8th Branch Notification with Interactive Glassmorphism */}
            <div className="pt-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenAdmission()}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-500 hover:to-red-500 text-white px-6 py-3.5 rounded-2xl text-sm font-bold shadow-xl shadow-rose-900/40 border border-rose-400/30 transition-all group"
                >
                  {/* Subtle glass reflection sweep */}
                  <div className="absolute inset-0 w-1/2 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                  <span>কোর্সে ভর্তি আবেদন করুন</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Glassmorphism WhatsApp Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={openWhatsApp}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-800/80 hover:bg-emerald-700/90 text-white px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold border border-emerald-400/40 backdrop-blur-md shadow-lg shadow-emerald-950/40 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>৮ম ব্রাঞ্চ WhatsApp</span>
                </motion.button>

                {/* Glassmorphism AI Consultation Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenChat}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/90 text-sky-300 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold border border-slate-700/80 hover:border-sky-400/40 backdrop-blur-md transition-all shadow-md"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>এআই পরামর্শ</span>
                </motion.button>
              </div>

              {/* 8th Branch Quick Alert & Timings */}
              <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 flex-shrink-0 animate-ping"></div>
                <div>
                  <strong className="text-emerald-300 font-semibold">৮ম ব্রাঞ্চ নোটিশ (বয়রা মডেল স্কুল এন্ড কলেজ এলাকা):</strong>{' '}
                  আমাদের ৮ম ব্রাঞ্চের সার্বক্ষণিক হেল্পলাইন নাম্বারে (<span className="text-sky-300 font-mono font-bold">{EIGHTH_BRANCH_PHONE}</span>) বা হোয়াটসঅ্যাপে ({FOURTH_BRANCH_WHATSAPP_DISPLAY}) যেকোনো কোর্স ও ফি তথ্য তাৎক্ষণিক জেনে নিন। অফিস ও ক্লাস সময়সূচি: <strong>সকাল ১০:০০ টা - রাত ৮:০০ টা</strong> (শুক্রবার বন্ধ, বাকি সব দিন খোলা)।
                </div>
              </div>
            </div>

          </motion.div>

          {/* Bento Tile 2: 3D Interactive Model Section using Three.js (Span 5 on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5 bg-slate-900/90 rounded-3xl p-4 sm:p-5 border border-slate-800 hover:border-slate-700/80 shadow-2xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            {/* Header Switcher: 3D Model vs Lab View */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5 bg-slate-950/90 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setRightPanelTab('3d')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    rightPanelTab === '3d'
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-950/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>৩ডি মডেল</span>
                </button>
                <button
                  onClick={() => setRightPanelTab('lab')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    rightPanelTab === 'lab'
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-950/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>ল্যাব ফটো</span>
                </button>
              </div>

              <span className="text-[11px] bg-slate-800/90 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700 font-medium hidden sm:inline-block">
                খুলনায় ৪টি ক্যাম্পাস
              </span>
            </div>

            {/* Content: 3D Model or Lab Photos */}
            <div className="my-3 flex-1 flex flex-col">
              {rightPanelTab === '3d' ? (
                <div className="relative flex-1">
                  <ThreeHeroModel className="h-[340px] sm:h-[380px] lg:h-[400px]" />
                </div>
              ) : (
                <div className="space-y-3">
                  <div
                    className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer border border-slate-800 shadow-lg"
                    onClick={() => onOpenAdmission()}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                      alt="BD Bismillah IT Lab"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-amber-300 font-semibold">হ্যান্ডস-অন ট্রেনিং</p>
                          <h4 className="text-base font-bold text-white leading-tight">অত্যাধুনিক মাল্টিমিডিয়া ক্লাসরুম</h4>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Student Community Pulse */}
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">বর্তমান চলমান ব্যাচসমূহ:</span>
                      <span className="text-emerald-400 font-bold">২৪টি সক্রিয়</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-rose-500 to-amber-500 h-full w-[85%] rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
                      <span>অনলাইন + অফলাইন ল্যাব</span>
                      <span className="text-amber-300 font-semibold">★ ৪.৯/৫ (১,২০০+ রিভিউ)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Consultation Trigger */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenAdmission()}
                className="w-full py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700/90 text-xs font-bold transition-all text-center backdrop-blur-md shadow-sm"
              >
                ফ্রি ক্লাসরুম ভিজিট ও ল্যাব ট্রায়াল বুক করুন →
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* Bento Grid Bottom Row: 4 Metric Bento Boxes with Slide-Up Hover */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          
          {/* Metric 1: Students */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ y: -4 }}
            className="col-span-12 sm:col-span-6 lg:col-span-3 bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 shadow-md backdrop-blur-md flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                ১৫,০০০+
              </div>
              <div className="text-xs text-slate-400 font-medium">সফল প্রশিক্ষণার্থী</div>
            </div>
          </motion.div>

          {/* Metric 2: Success Rate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="col-span-12 sm:col-span-6 lg:col-span-3 bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-md backdrop-blur-md flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                ৯৫%
              </div>
              <div className="text-xs text-slate-400 font-medium">মার্কেটপ্লেস সাকসেস রেট</div>
            </div>
          </motion.div>

          {/* Metric 3: Branches */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="col-span-12 sm:col-span-6 lg:col-span-3 bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-md backdrop-blur-md flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                ৪টি ক্যাম্পাস
              </div>
              <div className="text-xs text-slate-400 font-medium">খুলনা মেট্রোপলিটন কেন্দ্র</div>
            </div>
          </motion.div>

          {/* Metric 4: Mentors */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="col-span-12 sm:col-span-6 lg:col-span-3 bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-md backdrop-blur-md flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                ৫০+ মেন্টর
              </div>
              <div className="text-xs text-slate-400 font-medium">লাইফটাইম ক্যারিয়ার সাপোর্ট</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
