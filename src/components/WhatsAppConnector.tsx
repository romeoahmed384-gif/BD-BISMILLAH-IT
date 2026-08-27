import React, { useState, useEffect } from 'react';
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
  Headphones,
  Settings,
  Bell,
  BellRing,
  BellOff,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Smartphone
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
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'settings'>('chat');

  // Automatic Event Updates Opt-in / Opt-out State with LocalStorage
  const [isEventUpdatesEnabled, setIsEventUpdatesEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('bdbcit_wa_event_updates');
    return saved !== null ? saved === 'true' : true; // Default opt-in
  });

  const [studentPhone, setStudentPhone] = useState<string>(() => {
    return localStorage.getItem('bdbcit_wa_user_phone') || '';
  });

  const [notificationCategories, setNotificationCategories] = useState<{
    freeSeminars: boolean;
    batchAlerts: boolean;
    scholarshipOffers: boolean;
  }>(() => {
    const saved = localStorage.getItem('bdbcit_wa_categories');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback default
      }
    }
    return {
      freeSeminars: true,
      batchAlerts: true,
      scholarshipOffers: true
    };
  });

  const [saveSuccessMessage, setSaveSuccessMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('bdbcit_wa_event_updates', String(isEventUpdatesEnabled));
  }, [isEventUpdatesEnabled]);

  useEffect(() => {
    localStorage.setItem('bdbcit_wa_categories', JSON.stringify(notificationCategories));
  }, [notificationCategories]);

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

  const handleToggleOptIn = (enabled: boolean) => {
    setIsEventUpdatesEnabled(enabled);
    setSaveSuccessMessage(
      enabled 
        ? 'হোয়াটসঅ্যাপে স্বয়ংক্রিয় ইভেন্ট ও সেমিনার আপডেট সফলভাবে চালু (Opt-in) করা হয়েছে!' 
        : 'হোয়াটসঅ্যাপ ইভেন্ট আপডেট সেবা বন্ধ (Opt-out) করা হয়েছে।'
    );
    setTimeout(() => {
      setSaveSuccessMessage('');
    }, 4000);
  };

  const handleSavePhonePreference = () => {
    if (studentPhone.trim()) {
      localStorage.setItem('bdbcit_wa_user_phone', studentPhone.trim());
    }
    setSaveSuccessMessage(
      isEventUpdatesEnabled
        ? 'আপনার হোয়াটসঅ্যাপ আপডেট সেটিংস সফলভাবে সংরক্ষিত হয়েছে!'
        : 'আপনার অপ্ট-আউট সেটিংস সংরক্ষিত হয়েছে।'
    );
    setTimeout(() => {
      setSaveSuccessMessage('');
    }, 4000);
  };

  const handleConfirmViaWhatsApp = () => {
    const statusText = isEventUpdatesEnabled ? 'চালু (Opt-in)' : 'বন্ধ (Opt-out)';
    const text = isEventUpdatesEnabled
      ? `আসসালামু আলাইকুম, আমি বিডি বিসমিল্লাহ আইটি সেন্টারের সকল ফ্রি সেমিনার, ওয়ার্কশপ ও স্পেশাল ইভেন্ট আপডেট হোয়াটসঅ্যাপে গ্রহণ করতে আগ্রহী (Opt-in)। ${studentPhone ? `আমার নম্বর: ${studentPhone}` : ''}`
      : `আসসালামু আলাইকুম, আমি সাময়িকভাবে হোয়াটসঅ্যাপে স্বয়ংক্রিয় ইভেন্ট আপডেট পাওয়া বন্ধ রাখতে চাই (Opt-out)।`;
    
    handleSendWhatsApp(text);
  };

  return (
    <>
      {/* 1. Main In-Page WhatsApp Section (সেকশন ৩: হোয়াটসঅ্যাপ কানেকশন) */}
      <section className="py-14 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white border-y border-emerald-800/40 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-4">
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

              {/* Notification Status Badge in Main Section */}
              <div className="pt-2">
                <div className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs transition-colors ${
                  isEventUpdatesEnabled 
                    ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200' 
                    : 'bg-slate-900/80 border-slate-700 text-slate-300'
                }`}>
                  <div className="flex items-center gap-2.5">
                    {isEventUpdatesEnabled ? (
                      <div className="w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center">
                        <BellRing className="w-4 h-4 animate-bounce" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center">
                        <BellOff className="w-4 h-4" />
                      </div>
                    )}
                    <div>
                      <div className="font-bold flex items-center gap-1.5">
                        <span>হোয়াটসঅ্যাপ ইভেন্ট আপডেট:</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isEventUpdatesEnabled ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                        }`}>
                          {isEventUpdatesEnabled ? 'চালু (Opted In)' : 'বন্ধ (Opted Out)'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {isEventUpdatesEnabled 
                          ? 'ফ্রি সেমিনার ও নতুন ব্যাচ ঘোষণার বার্তা হোয়াটসঅ্যাপে পাঠানো হবে।' 
                          : 'কোনো স্বয়ংক্রিয় নোটিফিকেশন পাঠানো হবে না।'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab(activeTab === 'settings' ? 'chat' : 'settings')}
                    className="flex items-center gap-1 text-[11px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1.5 rounded-lg border border-slate-600 transition-colors"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>{activeTab === 'settings' ? 'চ্যাটে ফিরুন' : 'সেটিংস পরিবর্তন'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Interactive Messenger Box with Tabbed Settings (Chat & Notification Settings) */}
            <div className="lg:col-span-6 bg-slate-900/95 p-6 rounded-3xl border border-emerald-600/40 shadow-2xl backdrop-blur-md">
              
              {/* Header with Navigation Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                    {activeTab === 'chat' ? (
                      <MessageCircle className="w-6 h-6 fill-current" />
                    ) : (
                      <Sliders className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      {activeTab === 'chat' ? '৮ম ব্রাঞ্চ লাইভ হেল্পডেস্ক' : 'হোয়াটসঅ্যাপ আপডেট সেটিংস'}
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </h4>
                    <span className="text-xs text-emerald-400">
                      {activeTab === 'chat' ? `কল: ${EIGHTH_BRANCH_PHONE} | WhatsApp` : 'ইভেন্ট ও সেমিনার নোটিফিকেশন প্রিফারেন্স'}
                    </span>
                  </div>
                </div>

                {/* Tab Switcher Buttons */}
                <div className="flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1 ${
                      activeTab === 'chat' 
                        ? 'bg-emerald-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>মেসেজ</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1 ${
                      activeTab === 'settings' 
                        ? 'bg-emerald-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>সেটিংস</span>
                  </button>
                </div>
              </div>

              {/* Feedback Alert if settings changed */}
              {saveSuccessMessage && (
                <div className="mt-3 p-3 bg-emerald-950/90 border border-emerald-500/50 rounded-xl text-xs text-emerald-200 flex items-center gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{saveSuccessMessage}</span>
                </div>
              )}

              {/* TAB 1: Live Chat & Preset Messages */}
              {activeTab === 'chat' && (
                <div className="mt-4 space-y-4">
                  {/* Preset Inquiry Chips */}
                  <div className="space-y-2">
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
              )}

              {/* TAB 2: WhatsApp Event Updates Opt-in / Opt-out Settings */}
              {activeTab === 'settings' && (
                <div className="mt-4 space-y-4 text-xs text-slate-200">
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="font-bold text-sm text-white flex items-center gap-1.5">
                          <Bell className="w-4 h-4 text-emerald-400" />
                          <span>স্বয়ংক্রিয় ইভেন্ট ও সেমিনার আপডেট</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          ফ্রি আইটি সেমিনার, ওয়ার্কশপ ও স্কলারশিপ নোটিফিকেশন হোয়াটসঅ্যাপে পেতে চালু রাখুন।
                        </p>
                      </div>

                      {/* Main Opt-In / Opt-Out Toggle Switch */}
                      <button
                        onClick={() => handleToggleOptIn(!isEventUpdatesEnabled)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                          isEventUpdatesEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                        }`}
                        aria-label="Toggle Event Updates"
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                            isEventUpdatesEnabled ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="pt-2 border-t border-slate-700/60">
                      <span className={`text-[11px] font-semibold flex items-center gap-1 ${
                        isEventUpdatesEnabled ? 'text-emerald-300' : 'text-amber-400'
                      }`}>
                        {isEventUpdatesEnabled ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>বর্তমানে আপনি সকল স্বয়ংক্রিয় ইভেন্ট আপডেটে অন্তর্ভুক্ত (Opted In) আছেন।</span>
                          </>
                        ) : (
                          <>
                            <BellOff className="w-3.5 h-3.5 text-amber-400" />
                            <span>আপনি স্বয়ংক্রিয় আপডেট থেকে অপ্ট-আউট (Opt-out) করেছেন। কোনো বার্তা যাবে না।</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Sub categories when enabled */}
                  {isEventUpdatesEnabled && (
                    <div className="bg-slate-800/50 p-3.5 rounded-2xl border border-slate-700/80 space-y-2.5">
                      <span className="font-bold text-slate-300 text-[11px] block">কোন ধরণের আপডেট পেতে চান:</span>
                      
                      <label className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={notificationCategories.freeSeminars}
                          onChange={(e) => setNotificationCategories({
                            ...notificationCategories,
                            freeSeminars: e.target.checked
                          })}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-900 border-slate-700"
                        />
                        <span>ফ্রি আইটি ওয়ার্কশপ ও সেমিনার শিডিউল</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={notificationCategories.batchAlerts}
                          onChange={(e) => setNotificationCategories({
                            ...notificationCategories,
                            batchAlerts: e.target.checked
                          })}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-900 border-slate-700"
                        />
                        <span>নতুন কোর্স ও সকাল/বিকাল ব্যাচ শুরু সংক্রান্ত নোটিশ</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={notificationCategories.scholarshipOffers}
                          onChange={(e) => setNotificationCategories({
                            ...notificationCategories,
                            scholarshipOffers: e.target.checked
                          })}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-slate-900 border-slate-700"
                        />
                        <span>বিশেষ স্কলারশিপ পরীক্ষা ও মেগা ডিসকাউন্ট অফার</span>
                      </label>
                    </div>
                  )}

                  {/* Optional WhatsApp Number input for personal tracking */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-slate-300 flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>আপনার হোয়াটসঅ্যাপ নম্বর (ঐচ্ছিক):</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        placeholder="যেমন: 017XXXXXXXX"
                        className="flex-1 bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                      />
                      <button
                        onClick={handleSavePhonePreference}
                        className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-xl text-xs font-bold transition-colors"
                      >
                        সংরক্ষণ
                      </button>
                    </div>
                  </div>

                  {/* Quick Action Button to WhatsApp */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={handleConfirmViaWhatsApp}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>হোয়াটসঅ্যাপে সেটিংস কনফার্ম করুন</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>আপনার তথ্য সুরক্ষিত থাকবে এবং কোনো প্রকার অপ্রয়োজনীয় স্প্যাম বার্তা পাঠানো হয় না।</span>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 2. Persistent Floating WhatsApp Button & Quick Settings on ALL Pages */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        
        {/* Floating Quick Dialog Widget */}
        {isWidgetOpen && (
          <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-2xl border border-emerald-600/50 w-84 sm:w-96 mb-2 animate-in slide-in-from-bottom-5 duration-200">
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
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowSettingsModal(!showSettingsModal)}
                  className={`p-1.5 rounded-lg border text-xs transition-colors ${
                    showSettingsModal 
                      ? 'bg-emerald-600 border-emerald-500 text-white' 
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                  }`}
                  title="হোয়াটসঅ্যাপ নোটিফিকেশন সেটিংস (Opt-in / Opt-out)"
                  aria-label="WhatsApp Settings"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    setIsWidgetOpen(false);
                    setShowSettingsModal(false);
                  }}
                  className="text-slate-400 hover:text-white p-1"
                  aria-label="Close widget"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Floating Settings View */}
            {showSettingsModal ? (
              <div className="py-3 text-xs space-y-3">
                <div className="bg-slate-800/90 p-3 rounded-2xl border border-slate-700 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">ইভেন্ট নোটিফিকেশন</span>
                    <button
                      onClick={() => handleToggleOptIn(!isEventUpdatesEnabled)}
                      className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors ${
                        isEventUpdatesEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                          isEventUpdatesEnabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {isEventUpdatesEnabled
                      ? '✅ স্বয়ংক্রিয় ফ্রি সেমিনার ও নতুন ব্যাচ আপডেট চালু রয়েছে (Opted In)।'
                      : '❌ স্বয়ংক্রিয় ইভেন্ট আপডেট বন্ধ রয়েছে (Opted Out)।'}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setShowSettingsModal(false)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 rounded-xl text-xs font-semibold"
                  >
                    চ্যাটে ফিরুন
                  </button>
                  <button
                    onClick={handleConfirmViaWhatsApp}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3 h-3" />
                    <span>WhatsApp কনফার্ম</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Standard Quick Floating Chat View */
              <div className="py-3 text-xs text-slate-300 space-y-3">
                <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 text-slate-200 leading-relaxed">
                  আসসালামু আলাইকুম! বিডি বিসমিল্লাহ আইটি সেন্টারের ৮ম ব্রাঞ্চে (বয়রা মডেল স্কুল এন্ড কলেজ এলাকা) আপনাকে স্বাগতম। আপনি কোন কোর্সে ভর্তি হতে চান বা কি জানতে চান?
                </div>

                {/* Status Indicator inside floating widget */}
                <div className="flex items-center justify-between text-[11px] px-1 text-slate-400">
                  <span className="flex items-center gap-1">
                    {isEventUpdatesEnabled ? (
                      <BellRing className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <BellOff className="w-3 h-3 text-slate-500" />
                    )}
                    <span>ইভেন্ট আপডেট: {isEventUpdatesEnabled ? 'চালু' : 'বন্ধ'}</span>
                  </span>
                  <button
                    onClick={() => setShowSettingsModal(true)}
                    className="text-emerald-400 hover:underline flex items-center gap-0.5"
                  >
                    <span>সেটিংস</span>
                  </button>
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

