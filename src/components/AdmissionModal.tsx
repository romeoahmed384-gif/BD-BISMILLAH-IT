import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  CreditCard, 
  Phone, 
  User, 
  MapPin, 
  BookOpen, 
  Calendar,
  Layers,
  ArrowRight,
  Download,
  Check,
  ExternalLink,
  Copy,
  AlertCircle,
  Loader2,
  Mail,
  Send
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { 
  BRANCHES_DATA, 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  EIGHTH_BRANCH_PHONE,
  MAIN_BRANCH_PHONE,
  FACEBOOK_PAGE_URL
} from '../data/branchesData';
import { sendRegistrationEmail } from '../services/emailService';
import confetti from 'canvas-confetti';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ 
  isOpen, 
  onClose, 
  initialCourseId 
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState(
    initialCourseId || COURSES_DATA[0].id
  );
  const [preferredBranchId, setPreferredBranchId] = useState(8); // Default to 8th branch (Boyra Model)
  const [batchMode, setBatchMode] = useState<'অফলাইন ল্যাব ব্যাচ' | 'অনলাইন লাইভ ব্যাচ'>('অফলাইন ল্যাব ব্যাচ');
  const [shiftPreference, setShiftPreference] = useState('সকাল শিফট (১০:০০ - ০১:০০)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [studentMessage, setStudentMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad' | 'Rocket' | 'BranchCash'>('bKash');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedRoll, setGeneratedRoll] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState<{
    name: string;
    phone: string;
    email: string;
    courseTitle: string;
    discountFee: number;
    branchName: string;
    batchMode: string;
    shiftPreference: string;
    roll: string;
  } | null>(null);

  if (!isOpen) return null;

  const currentCourse = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const randomRoll = `BDIT-KHL-${Math.floor(10000 + Math.random() * 90000)}`;
    const selectedBranch = BRANCHES_DATA.find(b => b.id === preferredBranchId);
    const branchName = selectedBranch?.name || '৪র্থ ক্যাম্পাস (বয়রা মডেল)';

    const summary = {
      name: fullName,
      phone: phone,
      email: email,
      courseTitle: currentCourse.title,
      discountFee: currentCourse.discountFee,
      branchName: branchName,
      batchMode: batchMode,
      shiftPreference: shiftPreference,
      roll: randomRoll,
    };

    try {
      // 1. Send all registration fields to Gmail via EmailJS
      await sendRegistrationEmail({
        name: fullName,
        phone: phone,
        email: email,
        course: currentCourse.title,
        branch: branchName,
        message: studentMessage,
        shift: shiftPreference,
        batchMode: batchMode,
        paymentMethod: paymentMethod,
        trackingRoll: randomRoll,
        address: address,
      });

      // 2. Save summary for success screen before clearing
      setSubmittedSummary(summary);
      setGeneratedRoll(randomRoll);
      setIsSuccess(true);

      // 3. Clear the form inputs after successful submission
      setFullName('');
      setPhone('');
      setEmail('');
      setAddress('');
      setStudentMessage('');

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // safe fallback
      }
    } catch (err: any) {
      console.error('EmailJS Submission Error:', err);
      // Even if email service faces network issue, provide clear error message and options
      setErrorMessage(
        'ইমেইলে আবেদন পাঠাতে সাময়িক সমস্যা হয়েছে। আপনি অনুগ্রহ করে পুনরায় চেষ্টা করুন অথবা সরাসরি আমাদের WhatsApp নম্বরে যোগাযোগ করুন।'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsAppConfirmation = () => {
    const studentName = submittedSummary?.name || fullName || 'শিক্ষার্থী';
    const studentCourse = submittedSummary?.courseTitle || currentCourse.title;
    const rollId = submittedSummary?.roll || generatedRoll;
    const branch = submittedSummary?.branchName || '৪র্থ ব্রাঞ্চ';
    const studentPhone = submittedSummary?.phone || phone;
    const shift = submittedSummary?.shiftPreference || shiftPreference;

    const text = encodeURIComponent(`আসসালামু আলাইকুম, আমি ${studentName}। আমি "${studentCourse}" কোর্সে অনলাইন রেজিস্ট্রেশন করেছি। 
এডমিশন আইডি: ${rollId}
ব্রাঞ্চ: ${branch}
ফোন: ${studentPhone}
শিফট: ${shift}`);
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden my-auto text-white">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-rose-900 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>🔥 বিশেষ অফার: যেকোনো কোর্সে ৪০% ছাড় + বোর্ড রেজিস্ট্রেশন ফি সম্পূর্ণ ফ্রি (১০ তারিখ পর্যন্ত)</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            অনলাইন কোর্স রেজিস্ট্রেশন ও ভর্তি ফরম
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            বিডি বিসমিল্লাহ কম্পিউটার এন্ড আইটি সেন্টার (খুলনা শাখা)
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-slate-200">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  যে কোর্সে রেজিস্ট্রেশন করতে চান: *
                </label>
                <select
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-rose-500 shadow-xs"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.serialNo}. {c.title} ({c.duration}) — এককালীন: ৳{c.discountFee.toLocaleString()} (নিয়মিত: ৳{c.regularFee.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Fee Summary Pill */}
              <div className="bg-slate-950/80 border border-rose-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-rose-400 block font-medium">অফার অনুযায়ী কোর্স ফি:</span>
                  <div className="flex items-baseline gap-2">
                    <strong className="text-xl font-black text-rose-400 font-['Plus_Jakarta_Sans',sans-serif]">
                      ৳{currentCourse.discountFee.toLocaleString()}
                    </strong>
                    <span className="text-xs text-slate-500 line-through">৳{currentCourse.regularFee.toLocaleString()}</span>
                    <span className="bg-rose-600/30 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-500/30">৪০% অফ</span>
                  </div>
                </div>
                <div className="sm:text-right space-y-0.5">
                  <span className="text-[11px] text-emerald-400 font-bold block bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-md">
                    ✓ বোর্ড রেজিস্ট্রেশন ফি সম্পূর্ণ ফ্রি!
                  </span>
                  <span className="text-[11px] text-slate-400 block">সময়কাল: {currentCourse.duration} • মেয়াদ: ১০ তারিখ পর্যন্ত</span>
                </div>
              </div>

              {/* Branch & Mode Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    পছন্দের ক্যাম্পাস (খুলনা): *
                  </label>
                  <select
                    value={preferredBranchId}
                    onChange={(e) => setPreferredBranchId(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    {BRANCHES_DATA.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    ক্লাস মাধ্যম: *
                  </label>
                  <select
                    value={batchMode}
                    onChange={(e) => setBatchMode(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="অফলাইন ল্যাব ব্যাচ">অফলাইন ল্যাব ব্যাচ (সরাসরি ব্রাঞ্চে)</option>
                    <option value="অনলাইন লাইভ ব্যাচ">অনলাইন লাইভ ব্যাচ (Zoom / Google Meet)</option>
                  </select>
                </div>
              </div>

              {/* Shift Preference */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-300">পছন্দের ব্যাচ শিফট ও সময়সূচি:</label>
                  <span className="text-[10px] text-amber-400 font-semibold">শুক্রবার ব্যতীত ৬ দিন খোলা</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    'সকাল শিফট (১০:০০ - ০১:০০)',
                    'বিকাল শিফট (০২:০০ - ০৫:০০)',
                    'সন্ধ্যা শিফট (০৫:০০ - ০৮:০০)'
                  ].map((shift) => (
                    <button
                      key={shift}
                      type="button"
                      onClick={() => setShiftPreference(shift)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        shiftPreference === shift
                          ? 'bg-rose-600 text-white border-rose-500 font-bold shadow-md'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {shift}
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">শিক্ষার্থীর পূর্ণ নাম: *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="যেমন: মোঃ সাব্বির আহমেদ"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">মোবাইল নম্বর (হোয়াটসঅ্যাপ সহ): *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="০১৭xxxxxxxx"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">ইমেইল এড্রেস (ঐচ্ছিক):</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@gmail.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">বর্তমান ঠিকানা / খুলনা এলাকা:</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="যেমন: খালিশপুর / দৌলতপুর / বয়রা, খুলনা"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              {/* Optional Message Field */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  বার্তা বা কোনো বিশেষ প্রশ্ন (Message / Notes - ঐচ্ছিক):
                </label>
                <textarea
                  rows={2}
                  value={studentMessage}
                  onChange={(e) => setStudentMessage(e.target.value)}
                  placeholder="ভর্তি, ল্যাব সিট বা সময়সূচি সংক্রান্ত কোনো প্রশ্ন থাকলে লিখুন..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                ></textarea>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">পেমেন্ট মেথড নির্বাচন করুন:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'bKash', label: 'বিকাশ (bKash)', num: '01730880560' },
                    { id: 'Nagad', label: 'নগদ (Nagad)', num: '01730880560' },
                    { id: 'Rocket', label: 'রকেট (Rocket)', num: '01730880560' },
                    { id: 'BranchCash', label: 'সরাসরি ব্রাঞ্চে', num: 'ক্যাশ কাউন্টার' },
                  ].map((pm) => (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPaymentMethod(pm.id as any)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        paymentMethod === pm.id
                          ? 'bg-rose-600 text-white border-rose-500 shadow-md'
                          : 'bg-slate-950 text-slate-300 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      {pm.label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  ফি সংক্রান্ত সহায়তার জন্য আমাদের ৪র্থ ব্রাঞ্চ হেল্পডেস্ক: <strong className="text-emerald-400 font-mono">{FOURTH_BRANCH_PHONE}</strong> (WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY})
                </p>
              </div>

              {/* Error Alert Box */}
              {errorMessage && (
                <div className="bg-rose-950/80 border border-rose-500/50 rounded-xl p-3 text-xs text-rose-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">{errorMessage}</p>
                    <p className="text-[11px] text-rose-300/80 mt-1">
                      হটলাইনে কল করুন: <strong className="text-white font-mono">{FOURTH_BRANCH_PHONE}</strong> অথবা WhatsApp এ যোগাযোগ করুন।
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-rose-950/50 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>জমা হচ্ছে ও ইমেইল পাঠানো হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>আবেদন জমা দিন ও স্লিপ নিশ্চিত করুন</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Successful Registration Receipt Screen */
            <div className="text-center py-4 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              {/* Prominent Success Message */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Registration Successful!</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                  We will contact you soon. (আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে)
                </p>
              </div>

              <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 max-w-lg mx-auto shadow-lg">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">রেজিস্ট্রেশন ট্র্যাকিং আইডি:</span>
                  <strong className="text-rose-400 font-mono text-base">{submittedSummary?.roll || generatedRoll}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">শিক্ষার্থীর নাম:</span>
                  <strong className="text-white">{submittedSummary?.name}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">কোর্সের নাম:</span>
                  <strong className="text-white">{submittedSummary?.courseTitle}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">কোর্স ফি:</span>
                  <strong className="text-emerald-400 font-bold">৳{submittedSummary?.discountFee?.toLocaleString()} (৪০% বিশেষ ডিসকাউন্ট)</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">নির্বাচিত ক্যাম্পাস:</span>
                  <strong className="text-slate-200">{submittedSummary?.branchName}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">ক্লাস মাধ্যম ও শিফট:</span>
                  <strong className="text-slate-200">{submittedSummary?.batchMode} • {submittedSummary?.shiftPreference}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">মোবাইল নম্বর:</span>
                  <strong className="text-slate-200 font-mono">{submittedSummary?.phone}</strong>
                </div>
              </div>

              <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/30 text-xs text-emerald-300 max-w-lg mx-auto">
                তথ্যগুলো সরাসরি আমাদের ইমেইল ও ডাটাবেজে পাঠানো হয়েছে। আমাদের সিনিয়র কাউন্সেলর আপনার নম্বরে এসএমএস বা কলের মাধ্যমে ল্যাব সিট ও ব্যাচ ওরিয়েন্টেশনের তারিখ জানিয়ে দেবেন।
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={openWhatsAppConfirmation}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>৪র্থ ব্রাঞ্চ WhatsApp এ বার্তা দিন</span>
                </button>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setSubmittedSummary(null);
                  }}
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
                >
                  নতুন আরেকটি আবেদন
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold border border-slate-700"
                >
                  সমাপ্ত করুন
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
