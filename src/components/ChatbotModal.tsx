import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  MessageSquare, 
  HelpCircle, 
  PhoneCall, 
  RotateCcw,
  CheckCircle2,
  BookOpen,
  Compass,
  Building2,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';
import { 
  FOURTH_BRANCH_WHATSAPP, 
  FOURTH_BRANCH_PHONE, 
  FOURTH_BRANCH_WHATSAPP_DISPLAY,
  EIGHTH_BRANCH_PHONE,
  MAIN_BRANCH_PHONE,
  THIRD_BRANCH_PHONE,
  FACEBOOK_PAGE_URL
} from '../data/branchesData';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmission: (courseId?: string) => void;
  onToggle?: () => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenAdmission,
  onToggle 
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: `আসসালামু আলাইকুম! আমি বিডি বিসমিল্লাহ আইটি সেন্টারের স্মার্ট এআই ক্যারিয়ার কনসালটেন্ট।

আমাদের খুলনার ৪টি ক্যাম্পাসের যেকোনো কোর্স, নতুন ব্যাচের সময়সূচি, ৪০% ডিসকাউন্ট অফার ও ফ্রিল্যান্সিং ক্যারিয়ার সংক্রান্ত যেকোনো বিষয়ে আমি আপনাকে সহযোগিতা করতে প্রস্তুত।`,
      timestamp: 'এইমাত্র',
      suggestions: [
        'ক্যারিয়ার গাইডলাইন দিন',
        'কোর্স ফি ও ৪০% ছাড়ের অফার',
        'খুলনার ৪টি ব্রাঞ্চের ঠিকানা ও ফোন',
        'অনলাইন ভর্তি ফর্ম পূরণ'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-5).map(m => ({ role: m.sender === 'bot' ? 'model' : 'user', text: m.text }))
        }),
      });

      const data = await response.json();
      const botReply = data.reply || `আসসালামু আলাইকুম! আপনার তথ্যের জন্য ধন্যবাদ। বিডি বিসমিল্লাহ আইটি সেন্টারের যেকোনো কোর্স বা ভর্তির বিষয়ে সরাসরি কথা বলতে আমাদের ৪র্থ ব্রাঞ্চে কল করতে পারেন: ${FOURTH_BRANCH_PHONE} (WhatsApp: ${FOURTH_BRANCH_WHATSAPP_DISPLAY}) অথবা ৮ম ব্রাঞ্চে: ${EIGHTH_BRANCH_PHONE}।`;

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          'অনলাইন ভর্তি আবেদন ফর্ম',
          '৪র্থ ব্রাঞ্চে WhatsApp',
          '৮ম ব্রাঞ্চে কল করুন'
        ]
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `আসসালামু আলাইকুম! সাময়িক নেটওয়ার্ক কারণে লাইভ এআই রেজাল্ট পেতে সমস্যা হয়েছে।\n\nসরাসরি যোগাযোগের জন্য:\n• ৪র্থ ব্রাঞ্চ (বিএল কলেজ ১নং গেট): ${FOURTH_BRANCH_PHONE} (WhatsApp: ${FOURTH_BRANCH_WHATSAPP_DISPLAY})\n• ৮ম ব্রাঞ্চ (বয়রা মডেল): ${EIGHTH_BRANCH_PHONE}\n• ফেসবুক পেজ: fb.com/bdbcit`,
        timestamp: 'এইমাত্র'
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (actionType: 'career' | 'courses' | 'branches') => {
    if (actionType === 'career') {
      handleSendMessage('আইটিতে নতুনদের জন্য ক্যারিয়ার গাইডলাইন এবং কোন কোর্সটি দিয়ে শুরু করা উচিত?');
    } else if (actionType === 'courses') {
      handleSendMessage('বিডি বিসমিল্লাহ আইটি সেন্টারের সকল কোর্স বিবরণী, সময়কাল ও ৪০% ডিসকাউন্ট ফি জানান।');
    } else if (actionType === 'branches') {
      handleSendMessage('খুলনার ৪টি ক্যাম্পাসের সুনির্দিষ্ট ঠিকানা, ফোন নম্বর ও যোগাযোগের সময়সূচি দিন।');
    }
  };

  const handleSuggestionClick = (sug: string) => {
    if (sug.includes('ভর্তি আবেদন') || sug.includes('ভর্তি ফর্ম') || sug.includes('রেজিস্ট্রেশন')) {
      onClose();
      onOpenAdmission();
    } else if (sug.includes('WhatsApp') || sug.includes('হোয়াটসঅ্যাপ')) {
      const text = encodeURIComponent('আসসালামু আলাইকুম, আমি বিডি বিসমিল্লাহ আইটি সেন্টারে যোগাযোগ করতে চাই।');
      window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
    } else if (sug.includes('৮ম ব্রাঞ্চে কল')) {
      window.open(`tel:${EIGHTH_BRANCH_PHONE}`, '_self');
    } else {
      handleSendMessage(sug);
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'reset-msg',
        sender: 'bot',
        text: `চ্যাট নতুন করে শুরু করা হয়েছে। ক্যারিয়ার গাইডলাইন, কোর্স সিলেবাস কিংবা খুলনা ব্রাঞ্চ সংক্রান্ত প্রশ্ন করুন।\n\n• ৪র্থ ব্রাঞ্চ হেল্পলাইন: ${FOURTH_BRANCH_PHONE}\n• ৮ম ব্রাঞ্চ হেল্পলাইন: ${EIGHTH_BRANCH_PHONE}`,
        timestamp: 'এইমাত্র',
        suggestions: [
          'কোর্স ফি ও ৪০% ছাড়',
          'ক্যারিয়ার পরামর্শ',
          'ক্যাম্পাস লোকেশন'
        ]
      }
    ]);
  };

  return (
    <>
      {/* 1. Floating Chatbot Trigger Icon at Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40 select-none">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={onToggle || (isOpen ? onClose : () => {})}
          aria-label="স্মার্ট এআই চ্যাটবট ওপেন করুন"
          className="relative group flex items-center gap-2.5 bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl shadow-rose-950/70 border-2 border-rose-400/40 cursor-pointer"
        >
          {/* Pulsing ring animation */}
          <span className="absolute -inset-1 rounded-full bg-rose-500/40 animate-ping pointer-events-none" />

          <div className="relative">
            <Bot className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
          </div>

          <span className="hidden sm:inline-block font-bold text-xs tracking-tight">
            AI চ্যাটবট
          </span>
        </motion.button>
      </div>

      {/* 2. Chat Window (Dynamic User & Bot message interface) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 sm:inset-auto sm:bottom-22 sm:right-6 z-50 flex items-end sm:items-start justify-center p-2 sm:p-0">
            {/* Backdrop on mobile */}
            <div 
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs sm:hidden" 
              onClick={onClose} 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full sm:w-[460px] md:w-[500px] h-[85vh] sm:h-[620px] max-h-[700px] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white z-10"
            >
              
              {/* Header */}
              <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        বিসমিল্লাহ আইটি এআই অ্যাসিস্ট্যান্ট
                      </h3>
                      <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2 py-0.2 rounded-full font-bold">
                        বাংলা এআই
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      ২৪/৭ স্মার্ট ক্যারিয়ার ও কোর্স বিষয়ক পরামর্শক
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleClearChat}
                    className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="চ্যাট ক্লিয়ার করুন"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 3 Quick-Action Buttons for "Career Guidelines", "Course Details", and "Branch Information" */}
              <div className="bg-slate-950/80 p-2.5 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
                <button
                  type="button"
                  onClick={() => handleQuickAction('career')}
                  disabled={isLoading}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-rose-950/80 border border-slate-700 hover:border-rose-500/50 text-slate-200 hover:text-rose-300 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-95 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-rose-400" />
                  <span>Career Guidelines</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickAction('courses')}
                  disabled={isLoading}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-amber-950/80 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-95 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Course Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickAction('branches')}
                  disabled={isLoading}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-emerald-950/80 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-95 cursor-pointer"
                >
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Branch Information</span>
                </button>
              </div>

              {/* Message Thread Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/60 scroll-smooth">
                {messages.map((msg) => {
                  const isBot = msg.sender === 'bot';
                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      {isBot && (
                        <div className="w-8 h-8 rounded-xl bg-rose-600/30 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}

                      <div className={`max-w-[85%] sm:max-w-[80%] space-y-1.5`}>
                        <div
                          className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap relative group ${
                            isBot
                              ? 'bg-slate-800 text-slate-100 border border-slate-700/80 rounded-tl-xs shadow-md'
                              : 'bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white rounded-tr-xs shadow-lg font-medium'
                          }`}
                        >
                          {msg.text}

                          {/* Quick copy text button on bot messages */}
                          {isBot && (
                            <button
                              onClick={() => handleCopyText(msg.id, msg.text)}
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-white p-1 rounded transition-opacity"
                              title="মেসেজ কপি করুন"
                            >
                              {copiedId === msg.id ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>

                        {/* Suggestion Chips */}
                        {isBot && msg.suggestions && msg.suggestions.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {msg.suggestions.map((sug, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSuggestionClick(sug)}
                                className="text-[11px] bg-slate-800/90 hover:bg-rose-950/80 text-slate-300 hover:text-rose-300 border border-slate-700 hover:border-rose-500/40 px-2.5 py-1 rounded-xl transition-all cursor-pointer"
                              >
                                💬 {sug}
                              </button>
                            ))}
                          </div>
                        )}

                        <span className={`text-[10px] text-slate-500 block ${isBot ? 'text-left' : 'text-right'}`}>
                          {msg.timestamp}
                        </span>
                      </div>

                      {!isBot && (
                        <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex gap-2.5 items-center text-xs text-slate-400">
                    <div className="w-8 h-8 rounded-xl bg-rose-600/30 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-slate-800 px-4 py-2.5 rounded-2xl border border-slate-700 flex items-center gap-2 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                      <span>বিডি বিসমিল্লাহ এআই টাইপ করছে...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="কোর্স, ব্যাচ বা ভর্তি নিয়ে প্রশ্ন লিখুন..."
                    disabled={isLoading}
                    className="flex-1 bg-slate-900 border border-slate-700 focus:border-rose-500 rounded-2xl px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none disabled:opacity-50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 disabled:opacity-50 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>পাঠান</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1 flex-wrap gap-2">
                  <span>৮ম ব্রাঞ্চ: <strong className="text-sky-400 font-mono">{EIGHTH_BRANCH_PHONE}</strong></span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenAdmission();
                    }}
                    className="text-rose-400 hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>অনলাইন ভর্তি ফর্ম</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
