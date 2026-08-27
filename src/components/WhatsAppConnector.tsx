import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Sparkles, 
  MapPin, 
  Clock, 
  PhoneCall, 
  Check, 
  X,
  Building,
  Headphones
} from 'lucide-react';
import { 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  EIGHTH_BRANCH_PHONE,
  MAIN_BRANCH_PHONE,
  THIRD_BRANCH_PHONE,
  FACEBOOK_PAGE_URL 
} from '../data/branchesData';

export const WhatsAppConnector: React.FC = () => {
  const [customMsg, setCustomMsg] = useState('');
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const presetMessages = [
    'আসসালামু আলাইকুম, আমি ৮ম ব্রাঞ্চের কোর্স ফি ও অফার সম্পর্কে জানতে চাই।',
    'আমি বেসিক কম্পিউটার ও অফিস অ্যাপ্লিকেশন কোর্সের ক্লাস শিডিউল জানতে চাই।',
    'আমি গ্রাফিক্স ডিজাইন কোর্সে নতুন ব্যাচে ভর্তি হতে আগ্রহী।',
    'আমি খুলনা বয়রা মডেল স্কুল এন্ড কলেজ এলাকা ৮ম ব্রাঞ্চে সরাসরি এসে কথা বলতে চাই।'
  ];

  const handleSendWhatsApp = (msg: string) => {
    const textToSend = msg || 'আসসালামু আলাইকুম, আমি বিডি বিসমিল্লাহ আইটি সেন্টারের ৮ম ব্রাঞ্চে যোগাযোগ করতে চাই।';
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* 1. Main In-Page WhatsApp Section (সেকশন ৩: হোয়াটসঅ্যাপ কানেকশন) */}
      <section className="py-14 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-y border-emerald-800/40 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>৮ম ব্রাঞ্চ ডেডিকেটেড হেল্পডেস্ক ও হোয়াটসঅ্যাপ সাপোর্ট</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                ১-ক্লিকে সরাসরি কথা বলুন আমাদের{' '}
                <span className="text-emerald-400">৮ম ব্রাঞ্চের সাথে</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                আমাদের ৮ম ব্রাঞ্চ (খুলনা বয়রা মডেল স্কুল এন্ড কলেজ এলাকা, খুলনা) এবং কেন্দ্রীয় হোয়াটসঅ্যাপ সাপোর্ট সার্বক্ষণিক সক্রিয় রয়েছে। কোর্স ভর্তি, ফি ডিসকাউন্ট, ব্যাচ শিডিউল বা ক্যারিয়ার পরামর্শের জন্য সরাসরি কল বা হোয়াটসঅ্যাপে যোগাযোগ করুন।
              </p>

              {/* Branch 8 & Helpline details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-800/40 flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">৮ম ব্রাঞ্চ সরাসরি কল:</span>
                    <strong className="text-emerald-300 font-mono text-sm">{EIGHTH_BRANCH_PHONE}</strong>
                  </div>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-800/40 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">৮ম ব্রাঞ্চ লোকেশন:</span>
                    <span>খুলনা বয়রা মডেল স্কুল এন্ড কলেজ এলাকা, খুলনা</span>
                  </div>
                </div>
              </div>

              {/* Class Timings Notice */}
              <div className="p-3 bg-slate-950/80 rounded-xl border border-emerald-700/40 text-xs text-slate-300 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-amber-300 font-bold block">ক্লাস ও অফিস সময়সূচি:</span>
                  <span>সকল কোর্স ও অফিস অ্যাপ্লিকেশন ক্লাস: <strong>সকাল ১০:০০ টা - রাত ৮:০০ টা</strong>। <strong>শুক্রবার ব্যতীত সপ্তাহের বাকি সব দিন খোলা।</strong></span>
                </div>
              </div>
            </div>

            {/* Right Interactive WhatsApp Messenger Box */}
            <div className="lg:col-span-5 bg-slate-900/95 p-6 rounded-3xl border border-emerald-600/40 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-7 h-7 fill-current" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    ৮ম ব্রাঞ্চ লাইভ হেল্পডেস্ক (খুলনা)
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </h4>
                  <span className="text-xs text-emerald-400">কল: {EIGHTH_BRANCH_PHONE} | WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
                </div>
              </div>

              {/* Preset Inquiry Chips */}
              <div className="my-4 space-y-2">
                <span className="text-xs text-slate-400 font-medium block">দ্রুত প্রশ্ন নির্বাচন করুন:</span>
                <div className="flex flex-col gap-1.5">
                  {presetMessages.map((msg, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendWhatsApp(msg)}
                      className="text-left text-xs bg-slate-800 hover:bg-emerald-950/70 hover:border-emerald-500/50 border border-slate-700/80 p-2.5 rounded-xl text-slate-200 hover:text-emerald-300 transition-all flex items-center justify-between group"
                    >
                      <span className="line-clamp-1">{msg}</span>
                      <Send className="w-3.5 h-3.5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity ml-1 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Message Field */}
              <div className="space-y-3 pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder="আপনার প্রশ্নটি বাংলায় লিখুন..."
                    className="flex-1 bg-slate-800/90 border border-slate-700 focus:border-emerald-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendWhatsApp(customMsg);
                    }}
                  />
                  <button
                    onClick={() => handleSendWhatsApp(customMsg)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
                  >
                    <span>পাঠান</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 text-center">
                  কল করুন: <strong className="text-sky-300 font-mono">{EIGHTH_BRANCH_PHONE}</strong> অথবা WhatsApp ({FOURTH_BRANCH_WHATSAPP_DISPLAY})
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Persistent Floating WhatsApp Button on ALL Pages */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {isWidgetOpen && (
          <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-2xl border border-emerald-600/50 w-80 mb-2 animate-in slide-in-from-bottom-5 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">৮ম ব্রাঞ্চ হেল্পডেস্ক</h5>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    সরাসরি অনলাইন আছেন
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsWidgetOpen(false)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Close widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 text-xs text-slate-300 space-y-2">
              <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 text-slate-200">
                আসসালামু আলাইকুম! বিডি বিসমিল্লাহ আইটি সেন্টারের ৮ম ব্রাঞ্চে (বয়রা মডেল স্কুল এন্ড কলেজ এলাকা) আপনাকে স্বাগতম। আপনি কোন কোর্সে ভর্তি হতে চান বা কি জানতে চান?
              </div>
            </div>

            <button
              onClick={() => {
                setIsWidgetOpen(false);
                handleSendWhatsApp('আসসালামু আলাইকুম, আমি ৮ নম্বর ব্রাঞ্চের কোর্স সম্পর্কে বিস্তারিত জানতে চাই।');
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>হোয়াটসঅ্যাপে চ্যাট করুন ({FOURTH_BRANCH_WHATSAPP_DISPLAY})</span>
            </button>
          </div>
        )}

        {/* Floating Trigger Button */}
        <button
          onClick={() => setIsWidgetOpen(!isWidgetOpen)}
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-emerald-400/50"
          title="৮ম ব্রাঞ্চের সাথে হোয়াটসঅ্যাপ ও হেল্পলাইনে যোগাযোগ করুন"
          aria-label="WhatsApp with Branch 8"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-200 rounded-full animate-ping"></span>
          </div>
          <span className="text-xs font-bold pr-1 hidden sm:inline">
            ৮ম ব্রাঞ্চ হেল্পলাইন ({EIGHTH_BRANCH_PHONE})
          </span>
        </button>
      </div>
    </>
  );
};
