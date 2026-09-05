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
  GraduationCap,
  Star,
  ShieldCheck,
  MessageSquarePlus,
  ThumbsUp,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SUCCESS_STORIES } from '../data/storiesData';
import { TESTIMONIALS } from '../data/blogData';

export const SuccessStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'stories'>('reviews');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideoStory, setSelectedVideoStory] = useState<string | null>(null);
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const [newReviewSubmitted, setNewReviewSubmitted] = useState(false);

  // New review form states
  const [reviewName, setReviewName] = useState('');
  const [reviewCourse, setReviewCourse] = useState('প্রফেশনাল গ্রাফিক্স ডিজাইন');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');

  const filteredTestimonials = selectedCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((item) => item.course.includes(selectedCategory));

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewComment) return;
    setNewReviewSubmitted(true);
    setTimeout(() => {
      setIsAddReviewModalOpen(false);
      setNewReviewSubmitted(false);
      setReviewName('');
      setReviewComment('');
    }, 1500);
  };

  return (
    <section id="success" className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>শিক্ষার্থীদের মতামত ও সামাজিক গ্রহণযোগ্যতা</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            হাজারো শিক্ষার্থীর বিশ্বস্ততার প্রতীক <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400">বিডি বিসমিল্লাহ আইটি</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-base leading-relaxed">
            খুলনার ৪টি ক্যাম্পাসে হাতে-কলমে প্র্যাকটিক্যাল ট্রেনিং নিয়ে আমাদের শিক্ষার্থীরা লোকাল ও আন্তর্জাতিক মার্কেটপ্লেসে গড়ে তুলেছেন উজ্জ্বল ভবিষ্যৎ।
          </p>

          {/* Social Proof Stats Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-center shadow-lg">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div className="text-xl sm:text-2xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif]">৪.৯ / ৫.০</div>
              <div className="text-[11px] text-slate-400 mt-0.5">গুগল ও ফেসবুক রিভিউ</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-xl sm:text-2xl font-black text-rose-400 font-['Plus_Jakarta_Sans',sans-serif]">৪,৫০০+</div>
              <div className="text-xs font-bold text-slate-200 mt-1">সফল গ্র্যাজুয়েট</div>
              <div className="text-[11px] text-slate-400">গত ৮ বছরে প্রশিক্ষণপ্রাপ্ত</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-['Plus_Jakarta_Sans',sans-serif]">৮৫%+</div>
              <div className="text-xs font-bold text-slate-200 mt-1">ক্যারিয়ার প্লেসমেন্ট</div>
              <div className="text-[11px] text-slate-400">মার্কেটপ্লেস ও লোকাল জব</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl text-center shadow-lg">
              <div className="text-xl sm:text-2xl font-black text-sky-400 font-['Plus_Jakarta_Sans',sans-serif]">৪টি</div>
              <div className="text-xs font-bold text-slate-200 mt-1">খুলনা ক্যাম্পাস</div>
              <div className="text-[11px] text-slate-400">আধুনিক শীতাতপ ল্যাব</div>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'reviews'
                  ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg shadow-rose-950/50 border border-rose-400/40'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Star className="w-4 h-4 fill-current text-amber-300" />
              <span>শিক্ষার্থীদের মতামত ও রিভিউ ({TESTIMONIALS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('stories')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'stories'
                  ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg shadow-rose-950/50 border border-rose-400/40'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>সফল ক্যারিয়ার বায়োডাটা ({SUCCESS_STORIES.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Modern Student & Client Reviews Section with Star Ratings, Quotes & Profiles */}
        {activeTab === 'reviews' && (
          <div>
            {/* Filter and Action toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none pb-2 sm:pb-0">
                {[
                  { id: 'all', label: 'সকল রিভিউ' },
                  { id: 'গ্রাফিক্স', label: 'গ্রাফিক্স ডিজাইন' },
                  { id: 'ওয়েব', label: 'ওয়েব ডেভেলপমেন্ট' },
                  { id: 'ডিজিটাল', label: 'ডিজিটাল মার্কেটিং' },
                  { id: 'অফিস', label: 'বোর্ড কোর্স / অফিস' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Add Review Button */}
              <button
                onClick={() => setIsAddReviewModalOpen(true)}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
              >
                <MessageSquarePlus className="w-4 h-4 text-amber-400" />
                <span>রিভিউ লিখুন</span>
              </button>
            </div>

            {/* Testimonials Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testi) => (
                <motion.div
                  key={testi.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-2xl hover:shadow-rose-950/20 transition-all duration-300 relative group"
                >
                  {/* Glowing top badge & star ratings */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(testi.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                        ))}
                        <span className="text-xs font-bold text-amber-300 ml-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                          {testi.rating}.0
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>ভেরিফায়েড শিক্ষার্থী</span>
                      </span>
                    </div>

                    {/* Review Quote text */}
                    <div className="relative mb-5">
                      <Quote className="w-7 h-7 text-slate-800 absolute -top-2 -left-1 pointer-events-none" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic relative z-10 pl-2">
                        "{testi.comment}"
                      </p>
                    </div>
                  </div>

                  {/* Student Profile Card Footer */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-600/30 to-amber-500/30 border border-rose-500/40 flex items-center justify-center text-white font-black text-sm shrink-0 shadow-md overflow-hidden">
                        {testi.avatar ? (
                          <img
                            src={testi.avatar}
                            alt={testi.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          testi.name.charAt(0)
                        )}
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          {testi.name}
                        </h4>
                        <p className="text-xs text-rose-400 font-semibold">{testi.course}</p>
                      </div>
                    </div>

                    {testi.placedCompany && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-slate-950 text-slate-300 border border-slate-800 whitespace-nowrap text-right shrink-0">
                        {testi.placedCompany}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Stories Cards Grid - Biodata Career Profiles */}
        {activeTab === 'stories' && (
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
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-600/30 to-amber-500/30 border border-amber-500/40 flex items-center justify-center text-amber-300 font-black text-lg shadow-md">
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

                  {/* Student Quote */}
                  <div className="relative pl-3.5 py-1 border-l-2 border-amber-500/80 text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-4">
                    <Quote className="w-4 h-4 text-amber-500/30 absolute -top-1 -left-2" />
                    "{story.quote}"
                  </div>
                </div>

                {/* Bottom Video Trigger */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    বিডি বিসমিল্লাহ অ্যালামনাই
                  </span>

                  <button
                    onClick={() => setSelectedVideoStory(story.studentName)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-rose-400" />
                    ভিডিও অভিজ্ঞতা
                  </button>
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
                  className="text-slate-400 hover:text-white text-sm font-bold px-2.5 py-1 bg-slate-800 rounded-lg cursor-pointer"
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
                  <p className="text-xs text-slate-200 max-w-sm">
                    "বিডি বিসমিল্লাহ আইটি সেন্টারের প্র্যাকটিক্যাল ল্যাব ও মার্কেটপ্লেস ট্রেইনিং বদলে দিয়েছে আমার ক্যারিয়ার।"
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 text-center">
                আমাদের অফিশিয়াল ফেসবুক পেজে (fb.com/bdbcit) নিয়মিত সফল শিক্ষার্থীদের ভিডিও ইন্টারভিউ ও সাক্ষাৎকার প্রকাশিত হয়।
              </p>
            </div>
          </div>
        )}

        {/* Add Review Dialog Modal */}
        <AnimatePresence>
          {isAddReviewModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 border border-slate-800 shadow-2xl space-y-4 relative"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    আপনার রিভিউ শেয়ার করুন
                  </h4>
                  <button
                    onClick={() => setIsAddReviewModalOpen(false)}
                    className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {newReviewSubmitted ? (
                  <div className="py-8 text-center space-y-2">
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-base text-white">ধন্যবাদ! আপনার রিভিউ জমা হয়েছে</h5>
                    <p className="text-xs text-slate-400">রিভিউটি যাচাইয়ের পর ওয়েবসাইটে প্রদর্শিত হবে।</p>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="space-y-3.5 text-xs">
                    <div>
                      <label className="block text-slate-300 font-bold mb-1">আপনার নাম *</label>
                      <input
                        type="text"
                        required
                        value={reviewName}
                        onChange={(e) => setReviewName(e.target.value)}
                        placeholder="আপনার পূর্ণ নাম"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">কোর্সের নাম *</label>
                      <select
                        value={reviewCourse}
                        onChange={(e) => setReviewCourse(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                      >
                        <option value="প্রফেশনাল গ্রাফিক্স ডিজাইন">প্রফেশনাল গ্রাফিক্স ডিজাইন</option>
                        <option value="ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট">ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট</option>
                        <option value="ডিজিটাল মার্কেটিং ও এসইও">ডিজিটাল মার্কেটিং ও এসইও</option>
                        <option value="কম্পিউটার অফিস অ্যাপ্লিকেশন">কম্পিউটার অফিস অ্যাপ্লিকেশন</option>
                        <option value="অটোক্যাড ২ডি ও ৩ডি ম্যাক্স">অটোক্যাড ২ডি ও ৩ডি ম্যাক্স</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">রেটিং দিন</label>
                      <div className="flex items-center gap-1 text-amber-400 cursor-pointer">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setReviewRating(star)}
                            className="p-1 cursor-pointer"
                          >
                            <Star className={`w-5 h-5 ${star <= reviewRating ? 'fill-current text-amber-400' : 'text-slate-600'}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">আপনার অভিজ্ঞতা ও মন্তব্য *</label>
                      <textarea
                        required
                        rows={3}
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        placeholder="বিডি বিসমিল্লাহ আইটি সেন্টারের ট্রেনিং নিয়ে আপনার অনুভূতি লিখুন..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-rose-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      রিভিউ সাবমিট করুন
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
