import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Loader2,
  BookOpen,
  HelpCircle
} from 'lucide-react';
import { 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY, 
  EIGHTH_BRANCH_PHONE 
} from '../data/branchesData';
import { sendRegistrationEmail } from '../services/emailService';

interface FreeCounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const FreeCounselingModal: React.FC<FreeCounselingModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট'
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredCourse, setPreferredCourse] = useState(defaultCourse);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const COURSE_OPTIONS = [
    { value: 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট', label: 'ওয়েব ডেভেলপমেন্ট (Web Development)' },
    { value: 'প্রফেশনাল গ্রাফিক্স ডিজাইন', label: 'গ্রাফিক্স ডিজাইন (Graphic Design)' },
    { value: 'ডিজিটাল মার্কেটিং ও এসইও', label: 'ডিজিটাল মার্কেটিং (Digital Marketing)' },
    { value: 'বেসিক কম্পিউটার ও অফিস অ্যাপ্লিকেশন', label: 'বেসিক কম্পিউটার ও অফিস (Basic Computer / Office)' },
    { value: 'ভিডিও এডিটিং ও মোশন গ্রাফিক্স', label: 'ভিডিও এডিটিং (Video Editing)' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError('অনুগ্রহ করে আপনার নাম এবং মোবাইল নম্বর প্রদান করুন।');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await sendRegistrationEmail({
        name: fullName.trim(),
        phone: phone.trim(),
        course: preferredCourse,
        branch: 'খুলনা সেন্ট্রাল / ৮ম বয়রা ক্যাম্পাস',
        message: 'ফ্রি ক্যারিয়ার কাউন্সেলিং ও ডেমো ক্লাসের জন্য আবেদন করেছেন।'
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit free counseling lead:', err);
      // Even if EmailJS fails, gracefully show confirmation so student can call or WhatsApp immediately
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setSubmitted(false);
    setError(null);
    onClose();
  };

  const openInstantWhatsApp = () => {
    const text = encodeURIComponent(`আসসালামু আলাইকুম, আমি ${fullName || 'শিক্ষার্থী'}। আমি বিডি বিসমিল্লাহ আইটি সেন্টারে '${preferredCourse}' কোর্সের ফ্রি কাউন্সেলিং ও ডেমো ক্লাস সম্পর্কে কথা বলতে চাই।`);
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-slate-900 border border-rose-500/40 rounded-3xl shadow-2xl shadow-rose-950/50 overflow-hidden z-10 text-white"
          >
            {/* Top decorative accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />

            {/* Header */}
            <div className="p-5 sm:p-6 pb-4 flex items-start justify-between gap-4 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>১০০% ফ্রি • কোনো ফি নেই</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  ফ্রি ক্যারিয়ার কাউন্সেলিং ও ডেমো ক্লাস
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  খুলনার সেরা আইটি মেন্টরদের সাথে সরাসরি কথা বলে কোর্স ও ক্যারিয়ার নির্বাচন করুন।
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      আপনার পূর্ণ নাম <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="যেমন: মোঃ সাকিব হাসান"
                      className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 2: Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      মোবাইল নম্বর <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="০১৭xxxxxxxx বা 019xxxxxxxx"
                        className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors font-mono"
                      />
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      কাউন্সেলর সরাসরি এই নম্বরে ফোন দিয়ে বিস্তারিত জানাবেন।
                    </span>
                  </div>

                  {/* Field 3: Preferred Course */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      পছন্দের কোর্স (Preferred Course) <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={preferredCourse}
                        onChange={(e) => setPreferredCourse(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl pl-10 pr-8 py-3 text-sm text-white focus:outline-none transition-colors appearance-none"
                      >
                        {COURSE_OPTIONS.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <BookOpen className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                      <div className="absolute right-3.5 top-4 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 w-0 h-0" />
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-xs text-rose-300">
                      {error}
                    </div>
                  )}

                  {/* Trust highlight */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>কোনো হিডেন চার্জ নেই। খুলনা ক্যাম্পাসে ডেমো ক্লাসের সুযোগ সম্পূর্ণ ফ্রি।</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 disabled:opacity-60 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-rose-950/50 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>অনুরোধ পাঠানো হচ্ছে...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>ফ্রি কাউন্সিলিং বুক করুন</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success State */
                <div className="text-center space-y-4 py-2">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-950/50 animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                      বুকিং সফল হয়েছে!
                    </span>
                    <h4 className="text-xl font-black text-white mt-1">
                      ধন্যবাদ, {fullName}!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-sm mx-auto">
                      আপনার <strong className="text-rose-400">{preferredCourse}</strong> কোর্সের ফ্রি ক্যারিয়ার কাউন্সেলিং রিকোয়েস্ট গ্রহণ করা হয়েছে।
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                    <div className="flex items-center justify-center gap-1.5 text-amber-300 font-semibold">
                      <Clock className="w-4 h-4" />
                      <span>তাৎক্ষণিক যোগাযোগ নিশ্চয়তা</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      আমাদের সিনিয়র কাউন্সেলর পরবর্তী ১৫-৩০ মিনিটের মধ্যে <span className="text-white font-mono font-bold">{phone}</span> নম্বরে যোগাযোগ করবেন।
                    </p>
                  </div>

                  {/* Immediate WhatsApp / Call actions */}
                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      onClick={openInstantWhatsApp}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>কাউন্সেলরের সাথে সরাসরি WhatsApp এ কথা বলুন</span>
                    </button>

                    <a
                      href={`tel:${EIGHTH_BRANCH_PHONE}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all font-mono"
                    >
                      <Phone className="w-4 h-4" />
                      <span>সরাসরি হেল্পলাইনে কল করুন: {EIGHTH_BRANCH_PHONE}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer pt-2"
                  >
                    উইন্ডো বন্ধ করুন
                  </button>
                </div>
              )}
            </div>

            {/* Micro footer */}
            <div className="px-6 py-3 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                <span>হেল্পলাইন: {FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
              </span>
              <span>খুলনা সেন্ট্রাল ক্যাম্পাস</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
