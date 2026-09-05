import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  ShieldCheck, 
  Facebook, 
  Youtube, 
  Linkedin, 
  MessageCircle,
  Clock,
  Sparkles,
  ExternalLink,
  Globe
} from 'lucide-react';
import { 
  BRANCHES_DATA, 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  EIGHTH_BRANCH_PHONE,
  FACEBOOK_PAGE_URL
} from '../data/branchesData';

interface FooterProps {
  onOpenAdmission: () => void;
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmission, onOpenChat }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent('আসসালামু আলাইকুম, আমি বিডি বিসমিল্লাহ আইটি সেন্টারের ৮ম ব্রাঞ্চে (বয়রা মডেল) যোগাযোগ করতে চাই।');
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Institute Identity & About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-lg border border-rose-400/30">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  BD Bismillah <span className="text-rose-400">IT</span>
                </span>
                <p className="text-xs text-slate-400 font-medium">
                  স্কিল ডেভেলপমেন্ট ও ক্যারিয়ার মেকিং সেন্টার (খুলনা)
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              বিডি বিসমিল্লাহ কম্পিউটার এন্ড আইটি সেন্টার খুলনার একটি অগ্রণী প্রযুক্তি প্রশিক্ষণ প্রতিষ্ঠান। দক্ষ মেন্টর, মাল্টিমিডিয়া কম্পিউটার ল্যাব এবং লাইফটাইম ক্যারিয়ার সাপোর্টের মাধ্যমে দক্ষ জনশক্তি তৈরিতে আমরা অগ্রণী।
            </p>

            <div className="space-y-2">
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <Facebook className="w-4 h-4" />
                <span>অফিশিয়াল পেজ: fb.com/bdbcit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত (Govt Code: 35227, 35236, 35256)</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  কারিগরি শিক্ষা বোর্ড ও ইন্ডাস্ট্রি স্ট্যান্ডার্ড সার্টিফাইড আইটি প্রতিষ্ঠান
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Popular Courses Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-rose-400">
              কোর্সসমূহ
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#courses" className="hover:text-rose-400 transition-colors">গ্রাফিক্স ডিজাইন ও মাল্টিমিডিয়া</a></li>
              <li><a href="#courses" className="hover:text-rose-400 transition-colors">ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট</a></li>
              <li><a href="#courses" className="hover:text-rose-400 transition-colors">ডিজিটাল মার্কেটিং ও এসইও</a></li>
              <li><a href="#courses" className="hover:text-rose-400 transition-colors">বেসিক কম্পিউটার ও অফিস</a></li>
              <li><a href="#courses" className="hover:text-rose-400 transition-colors">ভিডিও এডিটিং ও মোশন</a></li>
              <li><a href="#courses" className="hover:text-rose-400 transition-colors">ডাটা এন্ট্রি ও এক্সেল</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              প্রয়োজনীয় লিংক
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#success" className="hover:text-amber-400 transition-colors">সফলতার গল্প</a></li>
              <li><a href="#events" className="hover:text-amber-400 transition-colors">ফ্রি সেমিনার ও ওয়ার্কশপ</a></li>
              <li><a href="#branches" className="hover:text-amber-400 transition-colors">খুলনার ৪টি ক্যাম্পাস</a></li>
              <li>
                <button 
                  onClick={onOpenAdmission}
                  className="text-emerald-400 font-semibold hover:underline flex items-center gap-1 text-left"
                >
                  <span>অনলাইন ভর্তি আবেদন</span>
                </button>
              </li>
              <li><a href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">ফেসবুক পেজ (bdbcit)</a></li>
              <li><button onClick={onOpenChat} className="text-sky-400 hover:underline">বাংলা এআই চ্যাটবট</button></li>
            </ul>
          </div>

          {/* Col 4: 4 Khulna Branches Hotlines & 8th Branch Spotlight */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
              খুলনার ৪টি ক্যাম্পাস হেল্পলাইন
            </h4>

            <div className="space-y-2 text-xs text-slate-300">
              {BRANCHES_DATA.map((b) => (
                <div key={b.id} className={`p-2.5 rounded-xl border ${b.id === 8 ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200' : 'bg-slate-900 border-slate-800'}`}>
                  <div className="flex items-center justify-between font-bold text-slate-200 mb-0.5">
                    <span>{b.name}</span>
                    {b.id === 8 && <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded-full font-mono">কল: {b.phone}</span>}
                  </div>
                  <div className="text-[11px] text-slate-400">{b.address}</div>
                  <div className="text-[11px] text-sky-400 mt-1 font-mono font-bold">ফোন: {b.phone}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={openWhatsApp}
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>৮ম ব্রাঞ্চ WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © ২০২৫-২০২৬ <strong>বিডি বিসমিল্লাহ কম্পিউটার এন্ড আইটি সেন্টার</strong> (BD Bismillah IT - Khulna)। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              স্কিল ডেভেলপমেন্ট ও ক্যারিয়ার মেকিং (খুলনা)
            </span>
            <button
              onClick={onOpenAdmission}
              className="text-rose-400 font-bold hover:underline"
            >
              অনলাইনে ভর্তি হন
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
