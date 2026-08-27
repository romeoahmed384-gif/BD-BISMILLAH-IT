import React, { useState } from 'react';
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
  Award
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { Course } from '../types';
import { SyllabusModal } from './SyllabusModal';

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

  const categories = [
    { id: 'all', label: 'সকল কোর্স' },
    { id: 'design', label: 'গ্রাফিক্স ও ইউআই' },
    { id: 'web', label: 'ওয়েব ডেভেলপমেন্ট' },
    { id: 'marketing', label: 'ডিজিটাল মার্কেটিং' },
    { id: 'office', label: 'বেসিক কম্পিউটার ও অফিস' },
    { id: 'multimedia', label: 'ভিডিও এডিটিং' }
  ];

  const filteredCourses = selectedCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter(c => c.category === selectedCategory);

  return (
    <section id="courses" className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>প্রফেশনাল স্কিল ডেভেলপমেন্ট কারিকুলাম</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            আমাদের জনপ্রিয় আইটি কোর্সসমূহ
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            প্রতিটি কোর্সের সাথে পাবেন লাইভ প্রজেক্ট, মার্কেটপ্লেস সিক্রেটস, সরকারি ও প্রতিষ্ঠান অনুমোদিত সার্টিফিকেট এবং লাইফটাইম ক্যারিয়ার সাপোর্ট।
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-lg shadow-rose-900/40 scale-105 border border-rose-400/30'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => {
            const discountPercent = Math.round(
              ((course.regularFee - course.discountFee) / course.regularFee) * 100
            );

            return (
              <div
                key={course.id}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-rose-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                        {course.badge}
                      </span>
                    </div>

                    {/* Batch Type Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-slate-950/80 text-slate-200 border border-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md">
                        {course.batchType}
                      </span>
                    </div>

                    {/* Next Batch Date bottom bar */}
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 text-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        পরবর্তী ব্যাচ: {course.nextBatchDate}
                      </span>
                      <span className="flex items-center gap-1 text-amber-300 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {course.rating} ({course.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span className="flex items-center gap-1 font-medium text-rose-300">
                        <Clock className="w-3.5 h-3.5 text-rose-400" />
                        {course.duration}
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
                    <div className="flex flex-wrap gap-1.5 mb-4">
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
                <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 bg-slate-950/60 rounded-b-3xl">
                  {/* Fee Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">কোর্স ফি (৫০% ছাড়ে)</span>
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
                    <button
                      onClick={() => setSelectedCourseForSyllabus(course)}
                      className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 py-2.5 rounded-xl text-xs font-bold transition-all"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>সিলেবাস দেখুন</span>
                    </button>

                    <button
                      onClick={() => onOpenAdmission(course.id)}
                      className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white py-2.5 rounded-xl text-xs font-bold shadow-md shadow-rose-900/40 transition-all hover:scale-[1.02]"
                    >
                      <span>ভর্তি হন</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Benefits Bento Grid Section (কোর্সের সুবিধা) */}
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
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-rose-500/40 transition-all group">
              <div className="w-11 h-11 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">অভিজ্ঞ মেন্টর প্যানেল</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                টপ-রেটেড ফ্রিল্যান্সার ও ইন্ডাস্ট্রি লিডারদের সরাসরি তত্ত্বাবধানে হাতে-কলমে শিক্ষা।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">১০০% লাইভ প্রজেক্ট</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                থিওরির পাশাপাশি ক্লাসেই সরাসরি বায়ারদের টেস্ট ব্রিফিং ও লাইভ মার্কেট প্রজেক্টের কাজ।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all group">
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">লাইফটাইম সাপোর্ট সেল</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                কোর্স শেষ হলেও যেকোনো সমস্যা বা ক্লায়েন্ট সাপোর্টে আমাদের হেল্পডেস্কে সার্বক্ষণিক সহায়তা।
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 transition-all group">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">জব ও প্লেসমেন্ট সুবিধা</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                মেধাবী শিক্ষার্থীদের সফটওয়্যার ফার্ম ও মার্কেটিং এজেন্সিতে সরাসরি জব রেফারেল সুবিধা।
              </p>
            </div>
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
