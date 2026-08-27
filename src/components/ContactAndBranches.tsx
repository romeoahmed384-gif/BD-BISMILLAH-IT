import React, { useState } from 'react';
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
  Globe
} from 'lucide-react';
import { 
  BRANCHES_DATA, 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  EIGHTH_BRANCH_PHONE,
  MAIN_BRANCH_PHONE,
  THIRD_BRANCH_PHONE,
  FACEBOOK_PAGE_URL 
} from '../data/branchesData';

export const ContactAndBranches: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<number>(8); // Default to 8th Branch
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCourse, setContactCourse] = useState('বেসিক কম্পিউটার অ্যাপ্লিকেশন ও অফিস ম্যানেজমেন্ট');
  const [contactMessage, setContactMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const activeBranch = BRANCHES_DATA.find(b => b.id === selectedBranchId) || BRANCHES_DATA[3];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setSubmitted(true);
  };

  const openWhatsAppBranch = () => {
    const text = encodeURIComponent(`আসসালামু আলাইকুম, আমি ${contactName ? contactName + ' বলছি। ' : ''}বিডি বিসমিল্লাহ আইটি সেন্টারের ৮ম ব্রাঞ্চে (বয়রা মডেল স্কুল এন্ড কলেজ এলাকা) যোগাযোগ করতে চাই।`);
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <section id="branches" className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>আমাদের ৪টি ক্যাম্পাস (খুলনা) ও হেল্পলাইন</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            খুলনার ৪টি ক্যাম্পাসে সরাসরি পরিদর্শন করুন অথবা যোগাযোগ করুন
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            খালিশপুর ফায়ার সার্ভিস, সরকারি আযম খান কমার্স কলেজ, সরকারি বি এল কলেজ ১নং গেট এবং খুলনা বয়রা মডেল স্কুল এন্ড কলেজ এলাকায় রয়েছে আমাদের আধুনিক মাল্টিমিডিয়া কম্পিউটার ল্যাব।
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md"
            >
              <Globe className="w-4 h-4" />
              <span>অফিশিয়াল ফেসবুক পেজ: fb.com/bdbcit</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={openWhatsAppBranch}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>৮ম ব্রাঞ্চ WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
            </button>
            <a
              href={`tel:${EIGHTH_BRANCH_PHONE}`}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-600/40 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md font-mono"
            >
              <PhoneCall className="w-4 h-4 text-sky-400" />
              <span>৮ম ব্রাঞ্চ কল: {EIGHTH_BRANCH_PHONE}</span>
            </a>
          </div>
        </div>

        {/* 4 Branches Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {BRANCHES_DATA.map((branch) => {
            const isSelected = selectedBranchId === branch.id;
            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-rose-500 bg-slate-900/95 shadow-xl shadow-rose-950/30 scale-[1.02]'
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      branch.id === 8
                        ? 'bg-emerald-600 text-white font-black shadow-xs'
                        : isSelected ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {branch.id === 8 ? '★ ৮ম ব্রাঞ্চ (বয়রা মডেল)' : `${branch.id}নং ব্রাঞ্চ (খুলনা)`}
                    </span>
                    {branch.id === 8 && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {branch.address}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-300 font-mono font-bold">{branch.phone}</span>
                  <span className={`font-bold ${isSelected ? 'text-rose-400' : 'text-slate-500'}`}>
                    {isSelected ? 'ম্যাপ ও বিবরণ ✓' : 'দেখুন →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Branch Detail Grid + Interactive Map + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Active Branch Info & Map Embed */}
          <div className="lg:col-span-7 bg-slate-900/90 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 shadow-2xl space-y-6">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">
                    {activeBranch.branchTag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {activeBranch.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {activeBranch.id === 8 ? (
                    <button
                      onClick={openWhatsAppBranch}
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-emerald-950/40"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>৮ম ব্রাঞ্চ WhatsApp ({FOURTH_BRANCH_WHATSAPP_DISPLAY})</span>
                    </button>
                  ) : (
                    <a
                      href={`tel:${activeBranch.phone}`}
                      className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>কল করুন: {activeBranch.phone}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Branch Attributes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 mb-6">
                <div className="flex items-start gap-2.5 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                  <MapPin className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">ঠিকানা:</strong>
                    <span>{activeBranch.address}</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">({activeBranch.landmark})</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                  <Phone className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">ফোন ও হেল্পলাইন:</strong>
                    <span className="font-mono font-bold text-white">{activeBranch.phone}</span>
                    {activeBranch.id === 8 && (
                      <span className="text-[11px] text-emerald-400 block mt-0.5 font-bold">WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                  <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">সময়সূচি:</strong>
                    <span>{activeBranch.timing}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                  <Globe className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold">ফেসবুক পেজ:</strong>
                    <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                      fb.com/bdbcit
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{activeBranch.email}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Location Map Box */}
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-2">গুগল ম্যাপে লোকেশন:</span>
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
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Free Consultation Form */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-between text-white">
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">সরাসরি বার্তা পাঠান</span>
                <h3 className="text-xl font-bold text-white">
                  ক্যারিয়ার কাউন্সেলিং ও জিজ্ঞাসা ফর্ম
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  আপনার তথ্য লিখে পাঠালে খুলনার সেন্ট্রাল কাউন্সেলিং টিম অতি দ্রুত কল করবেন।
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">আপনার নাম *</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="যেমন: মোঃ সাব্বির আহমেদ"
                      className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">মোবাইল নম্বর *</label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="০১৭xxxxxxxx"
                        className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">ইমেইল (ঐচ্ছিক)</label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="example@mail.com"
                        className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">আগ্রহী কোর্স</label>
                    <select
                      value={contactCourse}
                      onChange={(e) => setContactCourse(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    >
                      <option value="প্রফেশনাল গ্রাফিক্স ডিজাইন">প্রফেশনাল গ্রাফিক্স ডিজাইন</option>
                      <option value="ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট">ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট</option>
                      <option value="ডিজিটাল মার্কেটিং ও এসইও">ডিজিটাল মার্কেটিং ও এসইও</option>
                      <option value="বেসিক কম্পিউটার ও অফিস">বেসিক কম্পিউটার ও অফিস অ্যাপ্লিকেশন</option>
                      <option value="ভিডিও এডিটিং ও মোশন">ভিডিও এডিটিং ও মোশন গ্রাফিক্স</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">আপনার প্রশ্ন বা বার্তা</label>
                    <textarea
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="ভর্তি, ব্যাচ টাইম বা ফি সংক্রান্ত প্রশ্ন লিখুন..."
                      className="w-full bg-slate-950 border border-slate-700 focus:border-rose-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50 transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    <span>বার্তা পাঠান (ফ্রি কাউন্সেলিং)</span>
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-950/60 rounded-2xl p-6 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    ধন্যবাদ {contactName}! আপনার বার্তা গৃহীত হয়েছে
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    আমাদের সিনিয়র কাউন্সেলর আপনার মোবাইল নম্বরে ({contactPhone}) খুব শীঘ্রই যোগাযোগ করবেন।
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setContactName('');
                      setContactPhone('');
                      setContactMessage('');
                    }}
                    className="text-xs text-rose-400 font-bold underline"
                  >
                    আরেকটি বার্তা পাঠান
                  </button>
                </div>
              )}
            </div>

            {/* Quick 4th branch note at bottom of card */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 text-center space-y-1">
              <div>
                তাৎক্ষণিক উত্তর পেতে আমাদের ৪র্থ ব্রাঞ্চে কল করুন: <strong className="text-emerald-400 font-mono font-bold">{FOURTH_BRANCH_PHONE}</strong>
              </div>
              <div className="text-[11px] text-slate-500">
                ৮ম ব্রাঞ্চ (বয়রা মডেল): <strong className="text-sky-400 font-mono">{EIGHTH_BRANCH_PHONE}</strong> | পেজ: <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">fb.com/bdbcit</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
