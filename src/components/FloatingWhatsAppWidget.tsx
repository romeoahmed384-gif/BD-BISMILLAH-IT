import React, { useState } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  ExternalLink, 
  Sparkles, 
  Phone, 
  Building2,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY, 
  FOURTH_BRANCH_PHONE, 
  EIGHTH_BRANCH_PHONE 
} from '../data/branchesData';

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('কোর্স ভর্তি ও ৪০% ডিসকাউন্ট সম্পর্কে জানতে চাই');

  const handleOpenWhatsApp = (customText?: string) => {
    const text = encodeURIComponent(customText || selectedTopic || 'আসসালামু আলাইকুম! বিডি বিসমিল্লাহ আইটি সেন্টারের কোর্স ও ভর্তি সম্পর্কে জানতে চাই।');
    window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 select-none">
      
      {/* Quick WhatsApp Chat Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 sm:w-88 bg-slate-900 border border-emerald-500/40 rounded-3xl shadow-2xl shadow-emerald-950/50 overflow-hidden text-white"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-md font-bold">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-black">বিডি বিসমিল্লাহ WhatsApp</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span>সরাসরি অনলাইনে আছি</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-emerald-700/50 text-emerald-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3 bg-slate-950/90 text-xs">
              <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-slate-300 space-y-1">
                <p className="font-semibold text-white">
                  আসসালামু আলাইকুম! 👋
                </p>
                <p className="text-[11px] leading-relaxed text-slate-400">
                  খুলনার ৪টি ক্যাম্পাসে ভর্তি ও স্কলারশিপের বিষয়ে আমাদের প্রতিনিধির সাথে এখনই সরাসরি হোয়াটসঅ্যাপে কথা বলুন।
                </p>
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 block">কী বিষয়ে জানতে চান?</span>
                <div className="space-y-1">
                  {[
                    'কোর্স ভর্তি ও ৪০% ডিসকাউন্ট সম্পর্কে জানতে চাই',
                    '৮ম ব্রাঞ্চ (বয়রা মডেল) ও ল্যাব ভিজিট করতে চাই',
                    'ফ্রি ক্যারিয়ার কাউন্সেলিং নিতে চাই'
                  ].map((topic, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleOpenWhatsApp(topic)}
                      className="w-full text-left p-2 rounded-xl bg-slate-900 hover:bg-emerald-950/60 hover:border-emerald-500/50 border border-slate-800 text-slate-300 hover:text-white transition-all text-[11px] flex items-center justify-between group cursor-pointer"
                    >
                      <span>{topic}</span>
                      <Send className="w-3 h-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Campus Helpline Numbers */}
              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center justify-between">
                  <span>৮ম ব্রাঞ্চ (বয়রা মডেল):</span>
                  <a href={`tel:${EIGHTH_BRANCH_PHONE}`} className="font-mono text-sky-400 hover:underline">{EIGHTH_BRANCH_PHONE}</a>
                </div>
                <div className="flex items-center justify-between">
                  <span>৪র্থ ব্রাঞ্চ WhatsApp:</span>
                  <span className="font-mono text-emerald-400">{FOURTH_BRANCH_WHATSAPP_DISPLAY}</span>
                </div>
              </div>

              {/* Start Chat Button */}
              <button
                type="button"
                onClick={() => handleOpenWhatsApp()}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all cursor-pointer mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp এ চ্যাট শুরু করুন</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp এ সরাসরি চ্যাট করুন"
        className="relative group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/70 border-2 border-emerald-400/40 cursor-pointer"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 border-2 border-slate-900 rounded-full" />
        </div>

        <span className="hidden sm:inline-block font-bold text-xs tracking-tight">
          WhatsApp চ্যাট
        </span>
      </motion.button>

    </div>
  );
};
