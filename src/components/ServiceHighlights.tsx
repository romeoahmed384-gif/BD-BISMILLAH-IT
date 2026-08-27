import React from 'react';
import { 
  Palette, 
  Code2, 
  Megaphone, 
  Monitor, 
  Video, 
  ShieldCheck, 
  Database, 
  Compass, 
  ArrowUpRight, 
  Sparkles
} from 'lucide-react';

interface ServiceHighlightsProps {
  onSelectCategory: (category: string) => void;
}

export const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ onSelectCategory }) => {
  const services = [
    {
      id: 'design',
      title: 'গ্রাফিক্স ডিজাইন ও মাল্টিমিডিয়া',
      engTitle: 'Graphic Design & UI/UX',
      desc: 'Photoshop, Illustrator, Figma ও Canva দিয়ে প্রফেশনাল লোগো, সোশ্যাল ব্যানার, প্যাকেজিং ও ব্রোশিওর ডিজাইন।',
      icon: Palette,
      color: 'from-rose-500 to-red-600',
      bgLight: 'bg-rose-50 border-rose-200 text-rose-600',
      studentCount: '১,৪৫০+ শিক্ষার্থী',
      badge: 'টপ রেটেড'
    },
    {
      id: 'web',
      title: 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
      engTitle: 'Full-Stack MERN Development',
      desc: 'HTML, CSS, Tailwind, JavaScript, React.js ও Node.js দিয়ে আধুনিক ও রেসপনসিভ ওয়েব অ্যাপ্লিকেশন তৈরি।',
      icon: Code2,
      color: 'from-blue-600 to-indigo-700',
      bgLight: 'bg-blue-50 border-blue-200 text-blue-600',
      studentCount: '৯৮০+ শিক্ষার্থী',
      badge: 'হাই পেইড জব'
    },
    {
      id: 'marketing',
      title: 'ডিজিটাল মার্কেটিং ও এসইও',
      engTitle: 'Digital Marketing & Growth',
      desc: 'Facebook Ads, Google Ads, SEO, কন্টেন্ট স্ট্র্যাটেজি ও লিড জেনারেশন শিখে ক্লায়েন্ট সেলস বৃদ্ধি।',
      icon: Megaphone,
      color: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 border-amber-200 text-amber-600',
      studentCount: '১,১২০+ শিক্ষার্থী',
      badge: 'সহজ ফ্রিল্যান্সিং'
    },
    {
      id: 'office',
      title: 'বেসিক কম্পিউটার ও অফিস ম্যানেজমেন্ট',
      engTitle: 'Computer Office Applications',
      desc: 'MS Word, Advanced Excel, PowerPoint, বাংলা/ইংরেজি দ্রুত টাইপিং ও সরকারি চাকরি পরীক্ষার প্রস্তুতি।',
      icon: Monitor,
      color: 'from-emerald-500 to-teal-700',
      bgLight: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      studentCount: '৩,২০০+ শিক্ষার্থী',
      badge: 'চাকরির অপরিহার্য'
    },
    {
      id: 'multimedia',
      title: 'ভিডিও এডিটিং ও মোশন গ্রাফিক্স',
      engTitle: 'Video Editing & Motion Graphics',
      desc: 'Premiere Pro ও After Effects দিয়ে সিনেমাটিক ভিডিও, ইউটিউব ব্লগ, রিলস ও সোশ্যাল কমার্শিয়াল তৈরি।',
      icon: Video,
      color: 'from-purple-600 to-pink-600',
      bgLight: 'bg-purple-50 border-purple-200 text-purple-600',
      studentCount: '৭৪০+ শিক্ষার্থী',
      badge: 'ভাইরাল ক্রিয়েটর'
    },
    {
      id: 'office',
      title: 'অ্যাডভান্সড এক্সেল ও ডাটা অ্যানালিটিক্স',
      engTitle: 'Excel & Data Automation',
      desc: 'গুগল শিট, ভিবিএ ম্যাক্রো, পিভট টেবিল, ড্যাশবোর্ড ও বিজনেস ডাটা অ্যানালাইসিস স্পেশালাইজেশন।',
      icon: Database,
      color: 'from-emerald-600 to-teal-700',
      bgLight: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      studentCount: '১,০৫০+ শিক্ষার্থী',
      badge: 'কর্পোরেট ডিমান্ড'
    },
    {
      id: 'office',
      title: 'ডাটা এন্ট্রি ও অফিস ম্যানেজমেন্ট',
      engTitle: 'Data Entry & Office Support',
      desc: 'দ্রুত টাইপিং, ডাটা ক্লিনিং, ওয়েব রিসার্চ ও ভার্চুয়াল অ্যাসিস্ট্যান্ট হিসেবে প্রফেশনাল সার্ভিস।',
      icon: Monitor,
      color: 'from-slate-700 to-slate-900',
      bgLight: 'bg-slate-100 border-slate-300 text-slate-700',
      studentCount: '৮৫০+ শিক্ষার্থী',
      badge: 'নতুনদের জন্য'
    },
    {
      id: 'design',
      title: 'মার্কেটপ্লেস ও ফ্রিল্যান্সিং গাইডেন্স',
      engTitle: 'Freelancing Career Making',
      desc: 'Fiverr, Upwork ও আন্তর্জাতিক প্ল্যাটফর্মে একাউন্ট অপটিমাইজেশন, বিডিং ও সরাসরি পেমেন্ট উত্তোলন।',
      icon: Compass,
      color: 'from-rose-600 to-amber-600',
      bgLight: 'bg-rose-50 border-rose-200 text-rose-600',
      studentCount: 'সকল কোর্সে ফ্রি',
      badge: '১০০% গাইডেন্স'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800/80 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>আমাদের মূল সার্ভিস ও বিষয়সমূহ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            যেকোনো স্কিল অর্জন করে শুরু করুন আপনার স্বপ্নের আইটি ক্যারিয়ার
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            বিডি বিসমিল্লাহ আইটি সেন্টারে প্রতিটি কোর্স পরিচালনা করেন অভিজ্ঞ প্রফেশনাল ও সফল ফ্রিল্যান্সারগণ।
          </p>
        </div>

        {/* Bento Grid layout for services */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Bento Item 1: Graphic Design (Span 7 on lg) */}
          <div
            onClick={() => onSelectCategory('design')}
            className="col-span-12 md:col-span-6 lg:col-span-7 bg-slate-900/90 hover:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-rose-500/50 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-rose-600/20 transition-all"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-rose-600 text-white shadow-md">
                  টপ রেটেড
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                গ্রাফিক্স ডিজাইন ও মাল্টিমিডিয়া
              </h3>
              <p className="text-xs text-rose-300 font-mono mb-3">Graphic Design & UI/UX</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Photoshop, Illustrator, Figma ও Canva দিয়ে প্রফেশনাল লোগো, সোশ্যাল ব্যানার, ব্র্যান্ডিং, প্যাকেজিং ও ব্রোশিওর ডিজাইন মাস্টারক্লাস।
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['Photoshop', 'Illustrator', 'Figma', 'UI/UX', 'Branding'].map((t, idx) => (
                  <span key={idx} className="bg-slate-950/80 text-slate-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>১,৪৫০+ সফল শিক্ষার্থী</span>
              <span className="inline-flex items-center gap-1 text-rose-400 font-bold group-hover:translate-x-1 transition-transform">
                কোর্স সিলেবাস দেখুন
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Bento Item 2: Full-Stack Web (Span 5 on lg) */}
          <div
            onClick={() => onSelectCategory('web')}
            className="col-span-12 md:col-span-6 lg:col-span-5 bg-slate-900/90 hover:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-sky-500/50 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-600/20 transition-all"></div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-sky-600 text-white shadow-md">
                  হাই পেইড জব
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট
              </h3>
              <p className="text-xs text-sky-300 font-mono mb-3">Full-Stack MERN Development</p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                HTML, CSS, Tailwind, JavaScript, React.js ও Node.js দিয়ে আধুনিক ও রেসপনসিভ ওয়েব অ্যাপ্লিকেশন এবং লাইভ প্রজেক্ট তৈরি।
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {['React.js', 'Tailwind', 'Node.js', 'Express', 'MongoDB'].map((t, idx) => (
                  <span key={idx} className="bg-slate-950/80 text-slate-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>৯৮০+ সফল শিক্ষার্থী</span>
              <span className="inline-flex items-center gap-1 text-sky-400 font-bold group-hover:translate-x-1 transition-transform">
                কোর্স সিলেবাস দেখুন
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Bento Item 3: Digital Marketing (Span 4) */}
          <div
            onClick={() => onSelectCategory('marketing')}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-slate-900/90 hover:bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-amber-500/50 shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Megaphone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                  সহজ ফ্রিল্যান্সিং
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                ডিজিটাল মার্কেটিং ও এসইও
              </h3>
              <p className="text-[11px] text-slate-400 font-mono mb-2">Digital Marketing & SEO</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Facebook Ads, Google Ads, SEO, কন্টেন্ট স্ট্র্যাটেজি ও লিড জেনারেশন শিখে ক্লায়েন্ট সেলস বৃদ্ধি।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>১,১২০+ শিক্ষার্থী</span>
              <span className="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                বিস্তারিত <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Bento Item 4: Computer Office Application (Span 4) */}
          <div
            onClick={() => onSelectCategory('office')}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-slate-900/90 hover:bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-emerald-500/50 shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Monitor className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-300 border border-slate-700">
                  চাকরির অপরিহার্য
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                বেসিক কম্পিউটার ও অফিস
              </h3>
              <p className="text-[11px] text-slate-400 font-mono mb-2">Office Applications</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                MS Word, Advanced Excel, PowerPoint, দ্রুত টাইপিং ও সরকারি চাকরি পরীক্ষার প্রস্তুতি।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>৩,২০০+ শিক্ষার্থী</span>
              <span className="text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                বিস্তারিত <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Bento Item 5: Video Editing (Span 4) */}
          <div
            onClick={() => onSelectCategory('multimedia')}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-slate-900/90 hover:bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-purple-500/50 shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-purple-300 border border-slate-700">
                  ভাইরাল ক্রিয়েটর
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                ভিডিও এডিটিং ও মোশন
              </h3>
              <p className="text-[11px] text-slate-400 font-mono mb-2">Premiere Pro & After Effects</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                সিনেমাটিক ভিডিও, ইউটিউব ভ্লগ, রিলস, কালার গ্রেডিং ও মোশন গ্রাফিক্সের পূর্ণাঙ্গ কোর্স।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>৭৪০+ শিক্ষার্থী</span>
              <span className="text-purple-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                বিস্তারিত <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Bento Item 6: Advanced Excel & Data Analytics (Span 4) */}
          <div
            onClick={() => onSelectCategory('office')}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-slate-900/90 hover:bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-emerald-500/50 shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-300 border border-slate-700">
                  কর্পোরেট ডিমান্ড
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                অ্যাডভান্সড এক্সেল ও ডাটা
              </h3>
              <p className="text-[11px] text-slate-400 font-mono mb-2">Excel & Data Automation</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                গুগল শিট, ভিবিএ ম্যাক্রো, পিভট টেবিল, ড্যাশবোর্ড ও বিজনেস ডাটা অ্যানালাইসিস স্পেশালাইজেশন।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>১,০৫০+ শিক্ষার্থী</span>
              <span className="text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                বিস্তারিত <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Bento Item 7: Data Entry & Excel (Span 4) */}
          <div
            onClick={() => onSelectCategory('office')}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-slate-900/90 hover:bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-slate-500/50 shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-slate-700/50 text-slate-300 border border-slate-600/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  নতুনদের জন্য
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-slate-300 transition-colors">
                ডাটা এন্ট্রি ও এক্সেল অ্যানালিটিক্স
              </h3>
              <p className="text-[11px] text-slate-400 font-mono mb-2">Data Entry & Automation</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                গুগল শিট, এক্সেল ম্যাক্রো, ডাটা ক্লিনিং, ওয়েব রিসার্চ ও ভার্চুয়াল অ্যাসিস্ট্যান্ট সার্ভিস।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>৮৫০+ শিক্ষার্থী</span>
              <span className="text-slate-300 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                বিস্তারিত <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Bento Item 8: Marketplace & Freelancing (Span 4) */}
          <div
            onClick={() => onSelectCategory('design')}
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-slate-900/90 hover:bg-slate-900 rounded-3xl p-6 border border-slate-800 hover:border-amber-500/50 shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-rose-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/30">
                  ১০০% সাপোর্ট
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                মার্কেটপ্লেস ও ফ্রিল্যান্সিং গাইডেন্স
              </h3>
              <p className="text-[11px] text-slate-400 font-mono mb-2">Fiverr, Upwork & Direct Client</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                বায়ার কমিউনিকেশন, গিগ এসইও, কভার লেটার বিডিং এবং সরাসরি ব্যাংক পেমেন্ট উত্তোলন।
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>সকল কোর্সে অন্তর্ভুক্ত</span>
              <span className="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                বিস্তারিত <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
