import React, { useState } from 'react';
import { 
  Award, 
  DollarSign, 
  Quote, 
  Play, 
  ExternalLink, 
  Briefcase, 
  Sparkles,
  CheckCircle2, 
  TrendingUp,
  UserCheck,
  Building,
  GraduationCap
} from 'lucide-react';
import { SUCCESS_STORIES } from '../data/storiesData';
import { TESTIMONIALS } from '../data/blogData';

export const SuccessStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stories' | 'reviews'>('stories');
  const [selectedVideoStory, setSelectedVideoStory] = useState<string | null>(null);

  return (
    <section id="success" className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>সফলতার গল্প ও অনুপ্রেরণা</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            আমাদের শিক্ষার্থীদের চোখ ধাঁধানো সাফল্য
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            বিডি বিসমিল্লাহ আইটি সেন্টার থেকে ট্রেনিং নিয়ে হাজারো শিক্ষার্থী আজ ফাইভার, আপওয়ার্ক এবং স্বনামধন্য প্রতিষ্ঠানে সাফল্যের সাথে ক্যারিয়ার গড়েছেন।
          </p>

          {/* Tab Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'stories'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/40 border border-rose-400/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              সফল ক্যারিয়ার বায়োডাটা
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'reviews'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/40 border border-rose-400/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              শিক্ষার্থীদের মতামত ও রিভিউ
            </button>
          </div>
        </div>

        {activeTab === 'stories' ? (
          /* Stories Cards Grid - Biodata only without student photos */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SUCCESS_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 hover:border-amber-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Student Biodata Header */}
                  <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-600/30 to-amber-500/30 border border-amber-500/40 flex items-center justify-center text-amber-300 font-black text-lg">
                        <GraduationCap className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-base font-bold text-white">
                            {story.studentName}
                          </h4>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-xs text-rose-400 font-semibold">{story.courseTaken}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                      {story.badge}
                    </span>
                  </div>

                  {/* Biodata Summary Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800/80">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                        শিক্ষার্থীর ব্যাচ:
                      </span>
                      <span className="text-slate-200 font-mono font-bold">{story.batchNo}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800/80">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-indigo-400" />
                        বর্তমান পদবি:
                      </span>
                      <strong className="text-indigo-300 font-bold">{story.currentRole}</strong>
                    </div>

                    <div className="flex items-center justify-between text-xs bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800/80">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        কর্মক্ষেত্র / মার্কেটপ্লেস:
                      </span>
                      <strong className="text-slate-200 font-semibold">{story.workplaceOrPlatform}</strong>
                    </div>

                    <div className="flex items-center justify-between text-xs bg-emerald-950/40 px-3 py-2.5 rounded-xl border border-emerald-500/30">
                      <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        মাসিক আয় / উপার্জন:
                      </span>
                      <strong className="text-emerald-400 font-black font-['Plus_Jakarta_Sans',sans-serif] text-sm">
                        {story.monthlyEarnings}
                      </strong>
                    </div>
                  </div>

                  {/* Student Quote / Experience */}
                  <div className="relative pl-3.5 py-1 border-l-2 border-amber-500/80 text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-4">
                    <Quote className="w-4 h-4 text-amber-500/30 absolute -top-1 -left-2" />
                    "{story.quote}"
                  </div>
                </div>

                {/* Bottom Story Video / Portfolio Action */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    বিডি বিসমিল্লাহ অ্যালামনাই
                  </span>

                  <button
                    onClick={() => setSelectedVideoStory(story.studentName)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-rose-400" />
                    ভিডিও অভিজ্ঞতা
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Student Testimonials Grid - No external photo dependencies */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi) => (
              <div
                key={testi.id}
                className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(testi.rating)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-4">
                    "{testi.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-rose-400 font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{testi.name}</h5>
                    <p className="text-xs text-rose-400">{testi.course}</p>
                    {testi.placedCompany && (
                      <p className="text-[11px] text-slate-400 font-semibold">{testi.placedCompany}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Story Modal Simulator */}
        {selectedVideoStory && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 text-white rounded-3xl max-w-lg w-full p-6 border border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Play className="w-4 h-4 text-rose-500 fill-current" />
                  {selectedVideoStory} এর সফলতার গল্প
                </h4>
                <button
                  onClick={() => setSelectedVideoStory(null)}
                  className="text-slate-400 hover:text-white text-sm font-bold px-2 py-1 bg-slate-800 rounded-lg"
                >
                  ✕ বন্ধ করুন
                </button>
              </div>

              {/* Video Mockup Frame */}
              <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden relative flex items-center justify-center border border-slate-800">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-slate-950/90">
                  <div className="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xl mb-3 animate-pulse">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <p className="text-xs text-slate-200">
                    "বিডি বিসমিল্লাহ আইটি সেন্টারের প্র্যাকটিক্যাল ল্যাব ও মার্কেটপ্লেস ট্রেইনিং বদলে দিয়েছে আমার ক্যারিয়ার।"
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 text-center">
                আমাদের অফিশিয়াল ফেসবুক পেজে (fb.com/bdbcit) নিয়মিত সফল শিক্ষার্থীদের সাক্ষাৎকার প্রকাশিত হয়।
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
