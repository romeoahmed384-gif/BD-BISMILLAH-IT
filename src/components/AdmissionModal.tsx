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
  Copy
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { 
  BRANCHES_DATA, 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  EIGHTH_BRANCH_PHONE,
  MAIN_BRANCH_PHONE,
  FACEBOOK_PAGE_URL,
  OFFICIAL_GOOGLE_FORM_URL
} from '../data/branchesData';
import { googleFormsService } from '../services/googleFormsService';
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
  const [activeTab, setActiveTab] = useState<'instant' | 'google_form'>('instant');
  const [preferredBranchId, setPreferredBranchId] = useState(8); // Default to 8th branch (Boyra Model)
  const [batchMode, setBatchMode] = useState<'অফলাইন ল্যাব ব্যাচ' | 'অনলাইন লাইভ ব্যাচ'>('অফলাইন ল্যাব ব্যাচ');
  const [shiftPreference, setShiftPreference] = useState('সকাল শিফট (১০:০০ - ০১:০০)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad' | 'Rocket' | 'BranchCash'>('bKash');
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedRoll, setGeneratedRoll] = useState('');
  const [googleFormUrl, setGoogleFormUrl] = useState(OFFICIAL_GOOGLE_FORM_URL);
  const [copiedFormLink, setCopiedFormLink] = useState(false);

  useEffect(() => {
    const cached = googleFormsService.getCachedForm();
    const custom = localStorage.getItem('bdbcit_custom_google_form_url');
    if (custom) {
      setGoogleFormUrl(custom);
    } else if (cached?.responderUri) {
      setGoogleFormUrl(cached.responderUri);
    } else {
      setGoogleFormUrl(OFFICIAL_GOOGLE_FORM_URL);
    }
  }, [isOpen]);

  const handleCopyGoogleFormLink = () => {
    navigator.clipboard.writeText(googleFormUrl);
    setCopiedFormLink(true);
    setTimeout(() => setCopiedFormLink(false), 2000);
  };

  if (!isOpen) return null;

  const currentCourse = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const randomRoll = `BDIT-KHL-${Math.floor(10000 + Math.random() * 90000)}`;
    setGeneratedRoll(randomRoll);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  const openWhatsAppConfirmation = () => {
    const selectedBranchName = BRANCHES_DATA.find(b => b.id === preferredBranchId)?.name || '৪র্থ ব্রাঞ্চ';
    const text = encodeURIComponent(`আসসালামু আলাইকুম, আমি ${fullName}। আমি "${currentCourse.title}" কোর্সে অনলাইন রেজিস্ট্রেশন করেছি। 
এডমিশন আইডি: ${generatedRoll}
ব্রাঞ্চ: ${selectedBranchName}
ফোন: ${phone}
শিফট: ${shiftPreference}`);
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
          {/* Tab Switcher: Website Instant Admission Form vs Google Form */}
          <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('instant')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'instant'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ওয়েবসাইট সরাসরি রেজিস্ট্রেশন</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('google_form')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'google_form'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>অফিশিয়াল গুগল ফরম (Google Form)</span>
            </button>
          </div>

          {activeTab === 'google_form' ? (
            <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-5 space-y-4 animate-in fade-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">
                    বিডি বিসমিল্লাহ আইটি সেন্টার - অফিশিয়াল গুগল ভর্তি ফরম
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    গুগল ফর্মের মাধ্যমে সরাসরি তথ্য সাবমিট করুন। সকল তথ্য গুগল ড্রাইভে ও স্প্রেডশিটে সুরক্ষিত থাকবে।
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs space-y-1.5 text-slate-300">
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                  গুগল ফরমে যা যা তথ্য সংরক্ষিত হবে:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                  <div>✓ শিক্ষার্থীর নাম ও ফোন/WhatsApp নম্বর</div>
                  <div>✓ কাঙ্ক্ষিত কোর্স ও ৫০% ছাড়ের ফি</div>
                  <div>✓ খুলনার ৪টি ক্যাম্পাসের ব্রাঞ্চ পছন্দ</div>
                  <div>✓ সকাল ১০:০০ - রাত ৮:০০ শিফট পছন্দ</div>
                  <div>✓ ক্লাসের মাধ্যম (অফলাইন/অনলাইন)</div>
                  <div>✓ পেমেন্ট মেথড (বিকাশ/নগদ/ব্রাঞ্চ)</div>
                </div>
              </div>

              {/* Shareable Link Box */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300">
                  গুগল ভর্তি ফরমের সরাসরি লিংক (Google Form Link):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={googleFormUrl}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-emerald-300 select-all"
                  />
                  <button
                    type="button"
                    onClick={handleCopyGoogleFormLink}
                    className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0 border border-slate-700"
                  >
                    {copiedFormLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormLink ? 'কপি হয়েছে' : 'কপি'}</span>
                  </button>
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 transition-colors shadow-md"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>গুগল ফরম খুলুন</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 border-t border-slate-800/80">
                <span>প্রয়োজনে সরাসরি কল: <strong className="text-sky-300 font-mono">{EIGHTH_BRANCH_PHONE}</strong></span>
                <span>WhatsApp: <strong className="text-emerald-400 font-mono">{FOURTH_BRANCH_WHATSAPP_DISPLAY}</strong></span>
              </div>
            </div>
          ) : !isSuccess ? (
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

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-rose-950/50 transition-all hover:scale-[1.01]"
              >
                আবেদন জমা দিন ও স্লিপ নিশ্চিত করুন
              </button>
            </form>
          ) : (
            /* Successful Registration Receipt Screen */
            <div className="text-center py-4 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-black text-white">
                অভিনন্দন {fullName}! আপনার কোর্স রেজিস্ট্রেশন সফল হয়েছে
              </h4>

              <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 max-w-lg mx-auto shadow-lg">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">রেজিস্ট্রেশন ট্র্যাকিং আইডি:</span>
                  <strong className="text-rose-400 font-mono text-base">{generatedRoll}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">কোর্সের নাম:</span>
                  <strong className="text-white">{currentCourse.title}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">কোর্স ফি:</span>
                  <strong className="text-emerald-400 font-bold">৳{currentCourse.discountFee.toLocaleString()} (৫০% স্পেশাল স্কলারশিপ)</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">নির্বাচিত ক্যাম্পাস:</span>
                  <strong className="text-slate-200">{BRANCHES_DATA.find(b => b.id === preferredBranchId)?.name}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">ক্লাস মাধ্যম ও শিফট:</span>
                  <strong className="text-slate-200">{batchMode} • {shiftPreference}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">মোবাইল নম্বর:</span>
                  <strong className="text-slate-200">{phone}</strong>
                </div>
              </div>

              <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/30 text-xs text-emerald-300 max-w-lg mx-auto">
                আমাদের ভর্তি টিম আপনার মোবাইলে এসএমএস বা কল করে ল্যাব সিট ও ব্যাচ ওরিয়েন্টেশনের তারিখ জানিয়ে দেবে।
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={openWhatsAppConfirmation}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg transition-colors"
                >
                  ৪র্থ ব্রাঞ্চ WhatsApp এ কনফার্ম করুন ({FOURTH_BRANCH_WHATSAPP_DISPLAY})
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold"
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
