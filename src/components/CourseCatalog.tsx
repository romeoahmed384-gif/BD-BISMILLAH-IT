import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Calendar,
  Layers,
  Award,
  Search,
  LayoutGrid,
  Table as TableIcon,
  Zap,
  PhoneCall,
  Check
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { Course } from '../types';
import { SyllabusModal } from './SyllabusModal';
import { FOURTH_BRANCH_WHATSAPP } from '../data/branchesData';

interface CourseCatalogProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenAdmission: (courseId?: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ 
  selectedCategory, 
  onSelectCategory, 
  onOpenAdmission 
}) => {
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState<Course | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const categories = [
    { id: 'all', label: 'সকল কোর্স (১৫টি)' },
    { id: 'design', label: 'গ্রাফিক্স ও ডিজাইন' },
    { id: 'office', label: 'কম্পিউটার অফিস ও টাইপিং' },
    { id: 'marketing', label: 'ডিজিটাল মার্কেটিং' },
    { id: 'multimedia', label: 'ভিডিও ও ফটোগ্রাফি' },
    { id: 'web', label: 'ওয়েব ডেভেলপমেন্ট' },
    { id: 'special', label: '১ বছর মেয়াদী মাস্টার কোর্স' },
    { id: 'language', label: 'স্পোকেন ইংলিশ' },
    { id: 'engineering', label: 'অটোক্যাড' }
  ];

  // Filter courses based on category and search query
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.duration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.serialNo.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openWhatsAppForCourse = (courseTitle: string) => {
    const text = encodeURIComponent(`আসসালামু আলাইকুম, আমি BD Bismillah IT এর "${courseTitle}" কোর্সটিতে ভর্তি হতে আগ্রহী। বিস্তারিত তথ্য ও শিডিউল জানতে চাই।`);
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <section id="courses" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800/80 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-950/80 via-red-950/70 to-amber-950/80 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-rose-950/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>কারিগরি শিক্ষাবোর্ড মানসম্পন্ন সিলেবাস</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            কম্পিউটার ও আইটি <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400">কোর্সসমূহ</span>
          </h2>
          
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            বিডি বিসমিল্লাহ কম্পিউটার এন্ড আইটি সেন্টারের অফিশিয়াল কোর্স তালিকা ও ফি স্ট্রাকচার। এককালীন পরিশোধে পান আকর্ষণীয় মূল্যছাড়।
          </p>

          {/* Quick Info Badges */}
          <div className="mt-4 flex items-center justify-center flex-wrap gap-2 text-xs font-medium text-slate-300">
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ১৫টি প্রফেশনাল কোর্স
            </span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              সকাল ১০:০০ - রাত ৮:০০ (৬ দিন খোলা)
            </span>
            <span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              কারিগরি শিক্ষাবোর্ড অনুমোদন
            </span>
          </div>
        </motion.div>

        {/* Controls: Search & View Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/80 p-3 sm:p-4 rounded-2xl border border-slate-800 backdrop-blur-md">
          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="কোর্সের নাম বা বিষয় লিখে খুঁজুন..."
              className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                মুছুন
              </button>
            )}
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800 self-end md:self-auto">
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'table'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>অফিশিয়াল তালিকা ভিউ</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'cards'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>কার্ড ভিউ</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 sm:gap-2.5 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-lg shadow-rose-900/40 border border-rose-400/40'
                    : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {isActive && <Check className="w-3 h-3 text-amber-300" />}
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* 1. Official Table View (Exact leaf-like representation as in image) */}
        {viewMode === 'table' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md"
          >
            {/* Table Header Banner */}
            <div className="bg-gradient-to-r from-emerald-900/80 via-emerald-800/80 to-teal-900/80 px-6 py-4 border-b border-emerald-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-700/60 border border-emerald-400/40 flex items-center justify-center text-white shadow-inner">
                  <BookOpen className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    -: কম্পিউটার কোর্স সমূহ :-
                  </h3>
                  <p className="text-xs text-emerald-200">
                    কারিগরি শিক্ষাবোর্ড মানসম্পন্ন প্রফেশনাল কারিকুলাম ও এককালীন পরিশোধ ফি
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/40 text-xs font-bold text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>এককালীন পরিশোধে সর্বোচ্চ ছাড়</span>
              </div>
            </div>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-slate-300 text-xs sm:text-sm font-bold uppercase tracking-wider border-b border-slate-800">
                    <th className="py-3.5 px-4 text-center w-16">ক্র. নং</th>
                    <th className="py-3.5 px-4">কোর্সের নাম</th>
                    <th className="py-3.5 px-4 text-center">মেয়াদ</th>
                    <th className="py-3.5 px-4 text-right">কোর্স ফি</th>
                    <th className="py-3.5 px-4 text-right">এককালীন পরিশোধ</th>
                    <th className="py-3.5 px-4 text-center">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 text-xs sm:text-sm">
                  {filteredCourses.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-10 text-slate-400">
                        কোনো কোর্স পাওয়া যায়নি। অন্য কোনো নাম বা ফিল্টার দিয়ে চেষ্টা করুন।
                      </td>
                    </tr>
                  ) : (
                    filteredCourses.map((course, index) => {
                      const discountAmount = course.regularFee - course.discountFee;
                      const isHighlighted = index % 2 === 0;

                      return (
                        <motion.tr
                          key={course.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03, duration: 0.25 }}
                          whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.7)' }}
                          className={`transition-colors group ${
                            isHighlighted ? 'bg-slate-900/40' : 'bg-slate-950/30'
                          }`}
                        >
                          {/* Serial No */}
                          <td className="py-4 px-4 text-center font-bold text-rose-400 font-mono">
                            <span className="w-7 h-7 inline-flex items-center justify-center rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 group-hover:border-rose-500/50 group-hover:text-rose-300 transition-colors">
                              {course.serialNo}
                            </span>
                          </td>

                          {/* Course Name & Details */}
                          <td className="py-4 px-4">
                            <div className="flex flex-col">
                              <span className="font-bold text-white group-hover:text-rose-400 transition-colors text-sm sm:text-base">
                                {course.title}
                              </span>
                              <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                {course.shortDescription}
                              </span>
                            </div>
                          </td>

                          {/* Duration */}
                          <td className="py-4 px-4 text-center whitespace-nowrap">
                            <span className="inline-flex items-center gap-1 bg-slate-800/80 text-sky-300 font-bold px-2.5 py-1 rounded-md border border-slate-700/80 text-xs">
                              <Clock className="w-3 h-3 text-sky-400" />
                              {course.duration}
                            </span>
                          </td>

                          {/* Regular Course Fee */}
                          <td className="py-4 px-4 text-right whitespace-nowrap">
                            <span className="font-mono text-slate-400 line-through text-xs sm:text-sm">
                              {course.regularFee.toLocaleString()}৳
                            </span>
                          </td>

                          {/* One-Time Payment Fee */}
                          <td className="py-4 px-4 text-right whitespace-nowrap">
                            <div className="flex flex-col items-end">
                              <span className="font-mono font-black text-rose-400 text-base sm:text-lg group-hover:scale-105 transition-transform inline-block">
                                {course.discountFee.toLocaleString()}৳
                              </span>
                              {discountAmount > 0 && (
                                <span className="text-[10px] text-emerald-400 font-semibold">
                                  (সাশ্রয়: {discountAmount.toLocaleString()}৳)
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Action Buttons */}
                          <td className="py-4 px-4 text-center whitespace-nowrap">
                            <div className="flex items-center justify-center gap-1.5">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCourseForSyllabus(course)}
                                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors inline-flex items-center gap-1"
                                title="সিলেবাস ও বিষয়সমূহ দেখুন"
                              >
                                <FileText className="w-3.5 h-3.5 text-slate-400" />
                                <span className="hidden md:inline">সিলেবাস</span>
                              </motion.button>

                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onOpenAdmission(course.id)}
                                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold shadow-md shadow-rose-900/30 transition-all inline-flex items-center gap-1"
                              >
                                <span>ভর্তি</span>
                                <ArrowRight className="w-3 h-3" />
                              </motion.button>
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer Notice */}
            <div className="bg-slate-950/90 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>ছুটি: শুধুমাত্র শুক্রবার সাপ্তাহিক ছুটি। সপ্তাহের বাকি ৬ দিন নিয়মিত ক্লাস ও ল্যাব প্র্যাকটিস চলে।</span>
              </div>
              <div className="font-semibold text-slate-300">
                মোট কোর্স সংখ্যা: <span className="text-rose-400 font-bold">{filteredCourses.length}</span> টি
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. Visual Card Grid View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence>
              {filteredCourses.map((course, idx) => {
                const discountPercent = Math.round(
                  ((course.regularFee - course.discountFee) / course.regularFee) * 100
                );

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                    className="bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-rose-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    <div>
                      {/* Card Thumbnail Image */}
                      <div className="relative aspect-video overflow-hidden bg-slate-950">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        
                        {/* Serial & Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="bg-slate-950/90 text-white font-mono text-[11px] font-bold px-2 py-0.5 rounded-md border border-slate-700">
                            {course.serialNo}
                          </span>
                          <span className="bg-rose-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-md">
                            {course.badge}
                          </span>
                        </div>

                        {/* Batch Type Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="bg-slate-950/80 text-slate-200 border border-slate-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-md">
                            {course.batchType}
                          </span>
                        </div>

                        {/* Next Batch Date bottom bar */}
                        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-white">
                          <span className="flex items-center gap-1 text-slate-200">
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1 text-amber-300 font-bold">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {course.rating} ({course.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Card Content Area */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                          <span className="flex items-center gap-1 font-medium text-rose-300">
                            <Clock className="w-3.5 h-3.5 text-rose-400" />
                            মেয়াদ: {course.duration}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 font-medium text-sky-300">
                            <Users className="w-3.5 h-3.5 text-sky-400" />
                            {course.enrolledStudents}+ শিক্ষার্থী
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-rose-400 transition-colors leading-snug mb-2">
                          {course.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                          {course.shortDescription}
                        </p>

                        {/* Key Highlights Bullet Checklist */}
                        <div className="space-y-1.5 mb-4 text-xs text-slate-300 border-t border-slate-800 pt-3">
                          {course.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-1">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tools pill summary */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {course.toolsLearned.slice(0, 4).map((tool, tIdx) => (
                            <span key={tIdx} className="bg-slate-950 text-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-slate-800">
                              {tool}
                            </span>
                          ))}
                          {course.toolsLearned.length > 4 && (
                            <span className="text-[10px] text-slate-400 font-bold px-1 py-0.5">
                              +{course.toolsLearned.length - 4} আরো
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom Area: Pricing & Actions */}
                    <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-800/80 bg-slate-950/60 rounded-b-3xl">
                      {/* Fee Section */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">এককালীন পরিশোধ ফি</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-rose-400 font-['Plus_Jakarta_Sans',sans-serif]">
                              ৳{course.discountFee.toLocaleString()}
                            </span>
                            <span className="text-xs text-slate-500 line-through">
                              ৳{course.regularFee.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="bg-rose-950/80 text-rose-300 text-xs font-black px-2.5 py-1 rounded-lg border border-rose-500/30">
                          {discountPercent}% OFF
                        </div>
                      </div>

                      {/* Dual Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedCourseForSyllabus(course)}
                          className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 py-2.5 rounded-xl text-xs font-bold transition-all"
                        >
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          <span>সিলেবাস</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => onOpenAdmission(course.id)}
                          className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white py-2.5 rounded-xl text-xs font-bold shadow-md shadow-rose-900/40 transition-all"
                        >
                          <span>ভর্তি হন</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Bottom Fast Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400 flex-shrink-0">
              <Zap className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                কোন কোর্সটি আপনার জন্য উপযুক্ত বুঝতে পারছেন না?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                আমাদের অভিজ্ঞ ক্যারিয়ার কাউন্সেলরের সাথে কথা বলে আপনার জন্য সেরা কোর্স ও শিফট বেছে নিন।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => openWhatsAppForCourse('ফ্রি ক্যারিয়ার কাউন্সেলিং')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/40 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে কাউন্সেলিং নিন</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpenAdmission()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-rose-900/50 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>অনলাইন ভর্তি আবেদন</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Course Benefits Bento Grid Section */}
        <div className="mt-16 bg-slate-900/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              কেন বিডি বিসমিল্লাহ আইটি সেন্টারে কোর্স করবেন?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              আমাদের প্রতিটি কোর্সে রয়েছে বিশেষ কিছু অনন্য সুবিধা যা আপনার সফল ক্যারিয়ার নিশ্চিত করবে।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-rose-500/40 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">অভিজ্ঞ মেন্টর প্যানেল</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                টপ-রেটেড ফ্রিল্যান্সার ও ইন্ডাস্ট্রি লিডারদের সরাসরি তত্ত্বাবধানে হাতে-কলমে শিক্ষা।
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">১০০% লাইভ প্রজেক্ট</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                থিওরির পাশাপাশি ক্লাসেই সরাসরি বায়ারদের টেস্ট ব্রিফিং ও লাইভ মার্কেট প্রজেক্টের কাজ।
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">লাইফটাইম সাপোর্ট সেল</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                কোর্স শেষ হলেও যেকোনো সমস্যা বা ক্লায়েন্ট সাপোর্টে আমাদের হেল্পডেস্কে সার্বক্ষণিক সহায়তা।
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">জব ও প্লেসমেন্ট সুবিধা</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                মেধাবী শিক্ষার্থীদের সফটওয়্যার ফার্ম ও মার্কেটিং এজেন্সিতে সরাসরি জব রেফারেল সুবিধা।
              </p>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Syllabus Modal */}
      {selectedCourseForSyllabus && (
        <SyllabusModal
          course={selectedCourseForSyllabus}
          onClose={() => setSelectedCourseForSyllabus(null)}
          onEnroll={(courseId) => onOpenAdmission(courseId)}
        />
      )}
    </section>
  );
};
