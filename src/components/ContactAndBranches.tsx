import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Building2, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  PhoneCall, 
  Globe,
  Navigation,
  FileText,
  Copy,
  Check,
  RefreshCw,
  Share2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BRANCHES_DATA, 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY, 
  EIGHTH_BRANCH_PHONE, 
  MAIN_BRANCH_PHONE, 
  THIRD_BRANCH_PHONE, 
  FACEBOOK_PAGE_URL,
  OFFICIAL_GOOGLE_FORM_URL
} from '../data/branchesData';
import { Branch } from '../types';
import { sendRegistrationEmail } from '../services/emailService';

interface ContactAndBranchesProps {
  onOpenGoogleFormModal?: () => void;
  onOpenAdmission?: () => void;
}

export const ContactAndBranches: React.FC<ContactAndBranchesProps> = ({
  onOpenGoogleFormModal,
  onOpenAdmission
}) => {
  const [selectedBranchId, setSelectedBranchId] = useState<number>(8); // Default to 8th Branch
  const [activeTab, setActiveTab] = useState<'google-form' | 'quick-message' | 'campus-map'>('google-form');
  
  // Google Form embed & customization state
  const [googleFormUrl, setGoogleFormUrl] = useState<string>(OFFICIAL_GOOGLE_FORM_URL);
  const [isIframeLoading, setIsIframeLoading] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);

  // Quick message form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCourse, setContactCourse] = useState('বেসিক কম্পিউটার অ্যাপ্লিকেশন ও অফিস ম্যানেজমেন্ট');
  const [contactMessage, setContactMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState<{ name: string; phone: string; course: string; branch: string } | null>(null);

  const googleFormSectionRef = useRef<HTMLDivElement>(null);

  // Read saved custom Google Form URL if user has updated it
  useEffect(() => {
    const saved = localStorage.getItem('bdbcit_custom_google_form_url');
    if (saved && saved.trim()) {
      setGoogleFormUrl(saved.trim());
    }
  }, []);

  const activeBranch: Branch = BRANCHES_DATA.find(b => b.id === selectedBranchId) || BRANCHES_DATA[3];

  const handleBranchSelect = (branchId: number) => {
    setSelectedBranchId(branchId);
  };

  const handleBranchSubmitInfo = (branchId: number) => {
    setSelectedBranchId(branchId);
    setActiveTab('google-form');
    // Smooth scroll down to the Google Form section
    if (googleFormSectionRef.current) {
      googleFormSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(googleFormUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleReloadIframe = () => {
    setIsIframeLoading(true);
    setIframeKey(prev => prev + 1);
  };

  const handleSubmitQuickMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    setIsSendingMessage(true);
    setMessageError(null);

    const branchName = BRANCHES_DATA.find(b => b.id === selectedBranchId)?.name || '৪র্থ ক্যাম্পাস (বয়রা মডেল)';
    const info = {
      name: contactName,
      phone: contactPhone,
      course: contactCourse,
      branch: branchName
    };

    try {
      // Send email via EmailJS directly to user's Gmail
      await sendRegistrationEmail({
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
        course: contactCourse,
        branch: branchName,
        message: contactMessage || 'ক্যারিয়ার কাউন্সেলিং ও ভর্তি সংক্রান্ত তথ্য জানার জন্য বার্তা।'
      });

      setSubmittedInfo(info);
      setSubmitted(true);

      // Clear the form inputs after successful submission
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactMessage('');
    } catch (err) {
      console.error('EmailJS Error in Quick Message Form:', err);
      setMessageError('বার্তা পাঠাতে সাময়িক ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা আমাদের সরাসরি কল / WhatsApp করুন।');
    } finally {
      setIsSendingMessage(false);
    }
  };

  const openWhatsAppBranch = () => {
    const text = encodeURIComponent(`আসসালামু আলাইকুম, আমি ${contactName ? contactName + ' বলছি। ' : ''}বিডি বিসমিল্লাহ আইটি সেন্টারের ${activeBranch.name} সম্পর্কে জানতে ও তথ্য জমা দিতে চাই।`);
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  // Convert raw google form url into embedded format with ?embedded=true
  const getEmbeddedFormUrl = (url: string) => {
    if (!url) return '';
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('embedded', 'true');
      return urlObj.toString();
    } catch {
      return url.includes('?') ? `${url}&embedded=true` : `${url}?embedded=true`;
    }
  };

  return (
    <section id="branches" className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-inner"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>আমাদের ৪টি ক্যাম্পাস (খুলনা) • তথ্য ও যোগাযোগ</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            খুলনার ৪টি ক্যাম্পাসে সরাসরি পরিদর্শন অথবা তথ্য সাবমিট করুন
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
            খালিশপুর ফায়ার সার্ভিস মোড়, সরকারি আযম খান কমার্স কলেজ এলাকা, সরকারি বি এল কলেজ ১নং গেট এবং খুলনা বয়রা মডেল স্কুল এন্ড কলেজ মোড়ে রয়েছে আমাদের আধুনিক শীতাতপ নিয়ন্ত্রিত ল্যাব। নিচে প্রতিটি ক্যাম্পাসের বিস্তারিত ও গুগল ফর্ম দেওয়া হলো।
          </p>

          {/* Quick action badges */}
          <div className="mt-5 flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap text-xs font-bold">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600/90 hover:bg-blue-600 text-white px-3.5 py-2 rounded-xl transition-all shadow-md shadow-blue-950/40"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>fb.com/bdbcit</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <button
              onClick={openWhatsAppBranch}
              className="inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white px-3.5 py-2 rounded-xl transition-all shadow-md shadow-emerald-950/40"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>৮ম ব্রাঞ্চ WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
            </button>

            <a
              href={`tel:${EIGHTH_BRANCH_PHONE}`}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-sky-300 border border-sky-600/40 px-3.5 py-2 rounded-xl transition-all shadow-md font-mono"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
              <span>৮ম ব্রাঞ্চ কল: {EIGHTH_BRANCH_PHONE}</span>
            </a>
          </div>
        </div>

        {/* 2. Responsive Branch Cards Grid with explicit placeholders (Address, Phone, Google Maps Link, Submit Info Button) */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-2 mb-4">
            <h3 className="text-sm sm:text-base font-bold text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>খুলনার শাখা ক্যাম্পাসসমূহ (ক্লিক করে নির্বাচন ও তথ্য সাবমিট করুন):</span>
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline-block">
              মোট ৪টি ব্রাঞ্চ অ্যাক্টিভ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {BRANCHES_DATA.map((branch) => {
              const isSelected = selectedBranchId === branch.id;
              const mapsUrl = branch.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(branch.address)}`;

              return (
                <motion.div
                  key={branch.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleBranchSelect(branch.id)}
                  className={`p-4 sm:p-5 rounded-3xl border-2 transition-all flex flex-col justify-between cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'border-rose-500 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl shadow-rose-950/40 ring-2 ring-rose-500/20'
                      : 'border-slate-800/90 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  {/* Subtle top indicator if selected */}
                  {isSelected && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500" />
                  )}

                  <div className="space-y-3">
                    {/* Badge & Status Beacon */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide ${
                        branch.id === 8
                          ? 'bg-emerald-600/90 text-white font-black shadow-xs'
                          : isSelected 
                            ? 'bg-rose-600 text-white font-bold' 
                            : 'bg-slate-800 text-slate-300'
                      }`}>
                        {branch.id === 8 ? '★ ৮ম ব্রাঞ্চ (বয়রা মডেল)' : `${branch.id}নং ব্রাঞ্চ (খুলনা)`}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] text-slate-400 font-medium">খোলা আছে</span>
                      </div>
                    </div>

                    {/* Branch Name */}
                    <h4 className="text-sm sm:text-base font-black text-white group-hover:text-rose-300 transition-colors leading-snug min-h-[42px]">
                      {branch.name}
                    </h4>

                    {/* Field 1: Address Placeholder & Value */}
                    <div className="space-y-1 bg-slate-950/70 p-2.5 sm:p-3 rounded-2xl border border-slate-800/80">
                      <span className="text-[10px] font-extrabold text-rose-400 uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                        <span>ঠিকানা (Address):</span>
                      </span>
                      <p className="text-xs text-slate-300 leading-snug font-medium">
                        {branch.address}
                      </p>
                      <span className="text-[10px] text-slate-500 block">
                        মোড়/চিহ্ন: {branch.landmark}
                      </span>
                    </div>

                    {/* Field 2: Phone Number Placeholder & Clickable Call */}
                    <div className="space-y-1 bg-slate-950/70 p-2.5 sm:p-3 rounded-2xl border border-slate-800/80">
                      <span className="text-[10px] font-extrabold text-sky-400 uppercase tracking-wider flex items-center gap-1">
                        <Phone className="w-3 h-3 text-sky-400 shrink-0" />
                        <span>ফোন নম্বর (Phone):</span>
                      </span>
                      <div className="flex items-center justify-between gap-1">
                        <a
                          href={`tel:${branch.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="font-mono text-xs font-bold text-white hover:text-sky-300 transition-colors"
                        >
                          {branch.phone}
                        </a>
                        <a
                          href={`tel:${branch.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-[10px] bg-sky-950 hover:bg-sky-900 border border-sky-600/40 text-sky-300 font-bold px-2 py-0.5 rounded-lg transition-colors shrink-0 inline-flex items-center gap-1"
                        >
                          <PhoneCall className="w-2.5 h-2.5" />
                          <span>কল</span>
                        </a>
                      </div>
                    </div>

                    {/* Field 3: Google Maps Link Placeholder & Action */}
                    <div className="space-y-1 bg-slate-950/70 p-2.5 sm:p-3 rounded-2xl border border-slate-800/80">
                      <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>গুগল ম্যাপ লিংক (Google Maps):</span>
                      </span>
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 font-semibold group/link"
                      >
                        <span>গুগল ম্যাপে লোকেশন দেখুন</span>
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Field 4: 'Submit Info / Contact Us' Button that leads to Google Form */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBranchSubmitInfo(branch.id);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white border border-rose-400/40 cursor-pointer group/btn"
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span>তথ্য জমা দিন / Contact Us</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Dedicated Google Form Hub Section (#google-form-section) */}
        <div ref={googleFormSectionRef} className="scroll-mt-24 space-y-6">
          
          {/* Form Header & Tabs */}
          <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold px-3 py-1 rounded-full mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>অফিশিয়াল গুগল ফর্ম ও সাবমিশন পোর্টাল (Google Form Integration)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  অনলাইন তথ্য ও ভর্তি আবেদন ফরম
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  নির্বাচিত ক্যাম্পাস: <strong className="text-rose-400 font-bold">{activeBranch.name}</strong> • তথ্য জমা দিন সহজে ও নিরাপদে
                </p>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800 shrink-0 self-start md:self-auto">
                <button
                  onClick={() => setActiveTab('google-form')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === 'google-form'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>গুগল ফর্ম পূরণ</span>
                </button>

                <button
                  onClick={() => setActiveTab('quick-message')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === 'quick-message'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>কুইক মেসেজ</span>
                </button>

                <button
                  onClick={() => setActiveTab('campus-map')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTab === 'campus-map'
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>ক্যাম্পাস ম্যাপ</span>
                </button>
              </div>
            </div>

            {/* Google Form Controls Toolbar */}
            {activeTab === 'google-form' && (
              <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>অফিশিয়াল সাবমিশন ফর্ম</span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* Copy Link Button */}
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-xl font-semibold transition-colors"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'লিংক কপি হয়েছে' : 'ফর্ম লিংক কপি'}</span>
                  </button>

                  {/* Reload iframe */}
                  <button
                    onClick={handleReloadIframe}
                    className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-xl font-semibold transition-colors"
                    title="রিলোড ফরম"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>রিলোড</span>
                  </button>

                  {/* Open in New Tab Button */}
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-xl font-bold transition-all shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>নতুন ট্যাবে ফরম খুলুন</span>
                  </a>

                  {/* Custom link settings manager modal trigger */}
                  {onOpenGoogleFormModal && (
                    <button
                      onClick={onOpenGoogleFormModal}
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-300 transition-colors ml-1"
                      title="গুগল ফরম ম্যানেজার"
                    >
                      <span>(লিংক পরিবর্তন)</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Tab 1: Embedded Google Form Container */}
          {activeTab === 'google-form' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl p-3 sm:p-5 relative overflow-hidden"
            >
              {/* Window Header Bar */}
              <div className="bg-slate-950/80 px-4 py-2.5 rounded-t-2xl border border-slate-800 flex items-center justify-between text-xs text-slate-400 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="font-mono text-[11px] text-slate-400 ml-2 hidden sm:inline-block">
                    forms.google.com/embedded
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-emerald-400 font-semibold">SSL Secured Connection</span>
                </div>
              </div>

              {/* Iframe Loading Skeleton State */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 min-h-[640px] sm:min-h-[750px] md:min-h-[820px]">
                {isIframeLoading && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-slate-950 text-slate-300 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-600 to-amber-600 flex items-center justify-center text-white shadow-lg animate-pulse">
                      <RefreshCw className="w-6 h-6 animate-spin" />
                    </div>
                    <div className="text-center space-y-1">
                      <h4 className="font-bold text-white text-base">
                        গুগল ফরম লোড হচ্ছে...
                      </h4>
                      <p className="text-xs text-slate-400 max-w-sm">
                        কয়েক সেকেন্ডের মধ্যে ফরমটি নিচে প্রদর্শিত হবে। লোড হতে সময় নিলে সরাসরি নতুন ট্যাবে ওপেন করতে পারেন।
                      </p>
                    </div>
                    <a
                      href={googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>সরাসরি নতুন ট্যাবে ওপেন করুন</span>
                    </a>
                  </div>
                )}

                {/* Actual Embedded Responsive Google Form Iframe */}
                <iframe
                  key={iframeKey}
                  title="BD Bismillah IT Student Admission Google Form"
                  src={getEmbeddedFormUrl(googleFormUrl)}
                  width="100%"
                  height="820"
                  className="w-full h-[640px] sm:h-[750px] md:h-[820px] rounded-2xl border-0 bg-white"
                  onLoad={() => setIsIframeLoading(false)}
                  allowFullScreen
                >
                  লোড হচ্ছে...
                </iframe>
              </div>

              {/* Helpful footer note & fallback */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    কোনো কারণে ব্রাউজারে ফরম প্রদর্শনে সমস্যা হলে{' '}
                    <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-rose-400 font-bold hover:underline">
                      এখানে ক্লিক করে সরাসরি ফরমটি ওপেন করুন
                    </a>
                  </span>
                </div>
                <div className="text-slate-500 font-mono text-[11px] shrink-0">
                  হেল্পলাইন: {FOURTH_BRANCH_PHONE}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Quick Message Form (Website Instant Counseling) */}
          {activeTab === 'quick-message' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl"
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">তাৎক্ষণিক পরামর্শ</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    ক্যারিয়ার কাউন্সেলিং ও কুইক জিজ্ঞাসা
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    তথ্য লিখে পাঠালে খুলনার কাউন্সেলিং টিম অতি দ্রুত আপনার সাথে যোগাযোগ করবে।
                  </p>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmitQuickMessage} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">আপনার নাম *</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="যেমন: মোঃ সাব্বির আহমেদ"
                        className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">মোবাইল নম্বর *</label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="০১৭xxxxxxxx"
                          className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">ইমেইল (ঐচ্ছিক)</label>
                        <input
                          type="email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="example@mail.com"
                          className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">পছন্দের ক্যাম্পাস</label>
                        <select
                          value={selectedBranchId}
                          onChange={(e) => setSelectedBranchId(Number(e.target.value))}
                          className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                        >
                          {BRANCHES_DATA.map(b => (
                            <option key={b.id} value={b.id}>{b.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">আগ্রহী কোর্স</label>
                        <select
                          value={contactCourse}
                          onChange={(e) => setContactCourse(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                        >
                          <option value="প্রফেশনাল গ্রাফিক্স ডিজাইন">প্রফেশনাল গ্রাফিক্স ডিজাইন</option>
                          <option value="ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট">ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট</option>
                          <option value="ডিজিটাল মার্কেটিং ও এসইও">ডিজিটাল মার্কেটিং ও এসইও</option>
                          <option value="বেসিক কম্পিউটার ও অফিস">বেসিক কম্পিউটার ও অফিস অ্যাপ্লিকেশন</option>
                          <option value="ভিডিও এডিটিং ও মোশন">ভিডিও এডিটিং ও মোশন গ্রাফিক্স</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">আপনার প্রশ্ন বা বার্তা</label>
                      <textarea
                        rows={3}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="ভর্তি, ব্যাচ টাইম বা ৪০% অফার সংক্রান্ত প্রশ্ন লিখুন..."
                        className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                      ></textarea>
                    </div>

                    {messageError && (
                      <div className="bg-rose-950/80 border border-rose-500/50 rounded-xl p-3 text-xs text-rose-200 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold">{messageError}</p>
                          <p className="text-[11px] text-rose-300/80 mt-1">
                            সরাসরি কল করতে পারেন: <strong className="text-white font-mono">{FOURTH_BRANCH_PHONE}</strong>
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSendingMessage}
                      className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50 transition-all hover:scale-[1.01]"
                    >
                      {isSendingMessage ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>ইমেইলে পাঠানো হচ্ছে...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>বার্তা পাঠান (ফ্রি কাউন্সেলিং ও রেজিস্ট্রেশন)</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="bg-emerald-950/60 rounded-3xl p-8 border border-emerald-500/40 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Registration Successful!</span>
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      ধন্যবাদ {submittedInfo?.name || 'শিক্ষার্থী'}! আপনার রেজিস্ট্রেশন ও বার্তা সফলভাবে গ্রহণ করা হয়েছে
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-300 font-medium max-w-md mx-auto">
                      Registration Successful! We will contact you soon. (আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে)
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                      আমাদের সিনিয়র কাউন্সেলর আপনার মোবাইল নম্বরে (<strong className="text-emerald-300 font-mono">{submittedInfo?.phone}</strong>) কল বা এসএমএসের মাধ্যমে বিস্তারিত জানিয়ে দেবেন।
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSubmittedInfo(null);
                        setContactName('');
                        setContactPhone('');
                        setContactEmail('');
                        setContactMessage('');
                      }}
                      className="inline-block text-xs text-rose-400 hover:text-rose-300 font-bold underline cursor-pointer pt-2"
                    >
                      আরেকটি বার্তা বা রেজিস্ট্রেশন পাঠান
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Tab 3: Interactive Google Maps View of Selected Campus */}
          {activeTab === 'campus-map' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/90 rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">{activeBranch.branchTag}</span>
                  <h4 className="text-lg sm:text-xl font-black text-white">{activeBranch.name}</h4>
                  <p className="text-xs text-slate-400">{activeBranch.address} ({activeBranch.landmark})</p>
                </div>
                <a
                  href={activeBranch.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(activeBranch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow self-start sm:self-auto"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>গুগল ম্যাপে দিকনির্দেশনা (Directions)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="aspect-video sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-inner bg-slate-950">
                <iframe
                  title={activeBranch.name}
                  src={activeBranch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
