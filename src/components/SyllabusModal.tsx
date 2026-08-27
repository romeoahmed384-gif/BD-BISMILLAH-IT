import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Download, 
  Users, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  Calendar,
  ChevronDown,
  ChevronUp,
  MessageSquare
} from 'lucide-react';
import { Course } from '../types';
import { FOURTH_BRANCH_WHATSAPP } from '../data/branchesData';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ course, onClose, onEnroll }) => {
  const [openModuleIndex, setOpenModuleIndex] = useState<number>(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!course) return null;

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? -1 : index);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`আসসালামু আলাইকুম, আমি "${course.title}" কোর্সের সিলেবাস ও ৪র্থ ব্রাঞ্চের ব্যাচ সম্পর্কে জানতে চাই।`);
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-slate-950 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-rose-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
              {course.badge}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {course.duration}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white pr-8">
            {course.title} - অফিশিয়াল সিলেবাস
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            হাতে-কলমে প্র্যাকটিক্যাল ল্যাব ও মার্কেটপ্লেস প্রজেক্ট ভিত্তিক স্টেপ-বাই-স্টেপ কারিকুলাম
          </p>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          
          {/* Key Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block">মোট ক্লাস</span>
              <strong className="text-sm font-bold text-white">{course.totalClasses}টি ক্লাস</strong>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">কোর্স ফি</span>
              <div className="flex items-center gap-1.5">
                <strong className="text-base font-bold text-rose-400">৳{course.discountFee.toLocaleString()}</strong>
                <span className="text-xs text-slate-500 line-through">৳{course.regularFee.toLocaleString()}</span>
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">ক্লাস মোড</span>
              <strong className="text-sm font-bold text-emerald-400">{course.batchType}</strong>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">পরবর্তী ব্যাচ</span>
              <strong className="text-sm font-bold text-indigo-400">{course.nextBatchDate}</strong>
            </div>
          </div>

          {/* Tools You Will Learn */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-rose-400" />
              যেসব টুলস ও সফটওয়্যার শেখানো হবে:
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.toolsLearned.map((tool, idx) => (
                <span key={idx} className="bg-slate-950 border border-slate-700 text-slate-300 text-xs font-semibold px-3 py-1 rounded-xl">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Modules Accordion */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-rose-400" />
                মডিউল ভিত্তিক পূর্ণাঙ্গ সিলেবাস ({course.syllabus.length}টি মডিউল):
              </h4>
              <span className="text-xs text-slate-400">ক্লিক করে মডিউলের বিস্তারিত দেখুন</span>
            </div>

            <div className="space-y-3">
              {course.syllabus.map((mod, idx) => {
                const isOpen = openModuleIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/60 shadow-xs transition-all"
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      className={`w-full text-left p-4 flex items-center justify-between transition-colors ${
                        isOpen ? 'bg-slate-800/80 border-b border-slate-700' : 'hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                          isOpen ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300'
                        }`}>
                          {mod.moduleNumber}
                        </span>
                        <div>
                          <h5 className="text-sm sm:text-base font-bold text-white">
                            {mod.title}
                          </h5>
                          <span className="text-xs text-slate-400">{mod.durationWeeks}</span>
                        </div>
                      </div>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-rose-400" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                    </button>

                    {isOpen && (
                      <div className="p-4 sm:p-5 bg-slate-950/90 space-y-3 text-xs sm:text-sm animate-in fade-in duration-150">
                        <div>
                          <strong className="text-white font-bold block mb-2">আলোচিত বিষয়সমূহ:</strong>
                          <ul className="space-y-1.5 pl-2">
                            {mod.topics.map((t, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-300">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {mod.practicalProjects && mod.practicalProjects.length > 0 && (
                          <div className="pt-2 border-t border-slate-800">
                            <strong className="text-white font-bold block mb-1.5 text-rose-400">
                              হ্যান্ডস-অন প্র্যাকটিক্যাল প্রজেক্ট:
                            </strong>
                            <div className="flex flex-wrap gap-2">
                              {mod.practicalProjects.map((p, pIdx) => (
                                <span key={pIdx} className="bg-amber-950/60 text-amber-300 text-xs font-medium px-2.5 py-1 rounded-lg border border-amber-800/60">
                                  ✓ {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructor Snapshot */}
          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 flex items-center gap-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-14 h-14 rounded-2xl object-cover border border-slate-700 shadow-md"
            />
            <div>
              <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wide">কোর্স ইন্সট্রাক্টর</span>
              <h5 className="text-sm font-bold text-white">{course.instructor.name}</h5>
              <p className="text-xs text-slate-400">{course.instructor.designation} • {course.instructor.experience}</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>{downloadSuccess ? 'সিলেবাস ডাউনলোডেড!' : 'সিলেবাস PDF সংরক্ষণ'}</span>
            </button>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors"
              title="৪র্থ ব্রাঞ্চের হোয়াটসঅ্যাপে কথা বলুন"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">৪র্থ ব্রাঞ্চ WhatsApp</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnroll(course.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-rose-950/50 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>ভর্তি আবেদন ও সিট বুকিং</span>
          </button>
        </div>

      </div>
    </div>
  );
};
