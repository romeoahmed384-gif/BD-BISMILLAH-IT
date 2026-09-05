import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  RefreshCw, 
  AlertCircle, 
  Share2, 
  Database,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  PhoneCall
} from 'lucide-react';
import { googleFormsService, GoogleFormCreationResult } from '../services/googleFormsService';
import { 
  FOURTH_BRANCH_WHATSAPP_DISPLAY, 
  EIGHTH_BRANCH_PHONE, 
  FOURTH_BRANCH_PHONE,
  FACEBOOK_PAGE_URL,
  OFFICIAL_GOOGLE_FORM_URL
} from '../data/branchesData';

interface GoogleFormManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleFormManagerModal: React.FC<GoogleFormManagerModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formInfo, setFormInfo] = useState<GoogleFormCreationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [customFormUrl, setCustomFormUrl] = useState('');
  const [isEditingCustomUrl, setIsEditingCustomUrl] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const cached = googleFormsService.getCachedForm();
      const savedCustom = localStorage.getItem('bdbcit_custom_google_form_url');
      if (savedCustom) {
        setCustomFormUrl(savedCustom);
      }
      if (cached) {
        setFormInfo(cached);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCreateNewForm = async () => {
    setLoading(true);
    setError(null);
    try {
      const created = await googleFormsService.createAdmissionGoogleForm();
      setFormInfo(created);
    } catch (err: any) {
      console.error('Failed to create form:', err);
      setError(err.message || 'গুগল ফরম তৈরি করার সময় সমস্যা দেখা দিয়েছে। দয়া করে গুগল একাউন্ট পারমিশন চেক করুন।');
    } finally {
      setLoading(false);
    }
  };

  const currentFormUrl = customFormUrl || formInfo?.responderUri || OFFICIAL_GOOGLE_FORM_URL;

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSaveCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customFormUrl.trim()) {
      localStorage.setItem('bdbcit_custom_google_form_url', customFormUrl.trim());
      setIsEditingCustomUrl(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden my-auto text-white">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-900 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-0.5 rounded-full mb-2">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>Google Forms স্টুডেন্ট এডমিশন সিস্টেম</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            অফিশিয়াল গুগল এডমিশন ফরম ও লিংক ম্যানেজার
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            শিক্ষার্থীদের সমস্ত তথ্য সরাসরি আপনার গুগল ড্রাইভ ও গুগল স্প্রেডশিটে স্বয়ংক্রিয়ভাবে জমা হবে।
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 text-sm">
          
          {error && (
            <div className="bg-rose-950/60 border border-rose-500/50 rounded-2xl p-4 flex items-start gap-3 text-rose-200 text-xs">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-1">গুগল এক্সেস বা ফরম তৈরিতে সমস্যা:</strong>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Form Overview Card */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {formInfo ? formInfo.title : 'বিডি বিসমিল্লাহ আইটি সেন্টার - ভর্তি ফরম (Google Form)'}
                  </h4>
                  <span className="text-xs text-emerald-400 font-medium">
                    {formInfo ? '✓ গুগল ড্রাইভে সক্রিয় আছে' : 'স্টুডেন্টদের জন্য তৈরি প্রস্তুত'}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCreateNewForm}
                disabled={loading}
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span>{loading ? 'তৈরি হচ্ছে...' : (formInfo ? 'পুনরায় নতুন ফরম বানান' : '১ ক্লিকে নতুন ফরম বানান')}</span>
              </button>
            </div>

            {/* Questions Included Checklist */}
            <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs space-y-1.5">
              <span className="font-bold text-slate-300 block mb-1 text-[11px] uppercase tracking-wider text-teal-400">
                এই ফরমের অন্তর্ভুক্ত গুরুত্বপূর্ণ ফিল্ডসমূহ:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>১. শিক্ষার্থীর পূর্ণ নাম (Full Name)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>২. সচল মোবাইল ও WhatsApp নম্বর</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>৩. কাঙ্ক্ষিত কোর্স (৫০% ছাড় সহ)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>৪. খুলনার ৪টি ক্যাম্পাসের ব্রাঞ্চ নির্বাচন</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>৫. ক্লাস শিফট (সকাল ১০টা - রাত ৮টা)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>৬. পেমেন্ট মেথড (বিকাশ/নগদ/ব্রাঞ্চ)</span>
                </div>
              </div>
            </div>

            {/* Action Links Box */}
            {(formInfo || customFormUrl) && (
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    শিক্ষার্থীদের জন্য সরাসরি শেয়ারযোগ্য ফর্ম লিংক (Shareable Student Form Link):
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={formInfo?.responderUri || customFormUrl}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-emerald-300 select-all"
                    />
                    <button
                      onClick={() => handleCopyLink(formInfo?.responderUri || customFormUrl)}
                      className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0 border border-slate-700 transition-colors"
                      title="লিংক কপি করুন"
                    >
                      {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedLink ? 'কপি হয়েছে' : 'কপি'}</span>
                    </button>
                    <a
                      href={formInfo?.responderUri || customFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>ফরম দেখুন</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Option to attach an existing custom Google Form URL */}
          <div className="bg-slate-950/60 rounded-2xl border border-slate-800/80 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">
                আপনার আগে থেকেই তৈরি করা কোনো নির্দিষ্ট গুগল ফরমের লিংক যুক্ত করতে চান?
              </span>
              <button
                onClick={() => setIsEditingCustomUrl(!isEditingCustomUrl)}
                className="text-xs text-rose-400 hover:underline font-semibold"
              >
                {isEditingCustomUrl ? 'বাতিল' : 'কাস্টম লিংক এডিট করুন'}
              </button>
            </div>

            {isEditingCustomUrl && (
              <form onSubmit={handleSaveCustomUrl} className="space-y-2 pt-1 animate-in fade-in">
                <input
                  type="url"
                  placeholder="https://docs.google.com/forms/d/e/.../viewform"
                  value={customFormUrl}
                  onChange={(e) => setCustomFormUrl(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500"
                />
                <button
                  type="submit"
                  className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-1.5 rounded-lg text-xs font-bold border border-slate-700"
                >
                  কাস্টম লিংক সেভ করুন
                </button>
              </form>
            )}
          </div>

          {/* Direct Support & Info */}
          <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 text-xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>বিডি বিসমিল্লাহ আইটি সেন্টারের অফিশিয়াল তথ্যাবলি</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              যেকোনো শিক্ষার্থী সরাসরি গুগল ফর্মের মাধ্যমে আবেদন করতে পারবেন। তাছাড়া আমাদের ওয়েবসাইট থেকে সরাসরি রেজিস্ট্রেশন করলেও শিক্ষার্থীর রসিদ জেনারেট হয়ে যায়।
            </p>
            <div className="flex items-center justify-between pt-1 text-[11px] text-slate-300 font-mono">
              <span>৮ম ব্রাঞ্চ (বয়রা মডেল): {EIGHTH_BRANCH_PHONE}</span>
              <span>৪র্থ ব্রাঞ্চ WhatsApp: {FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            অফিশিয়াল পেজ: <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">fb.com/bdbcit</a>
          </span>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
