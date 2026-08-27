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
  BookOpen
} from 'lucide-react';
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
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenAdmission 
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: `আসসালামু আলাইকুম! আমি বিডি বিসমিল্লাহ আইটি সেন্টারের স্মার্ট এআই ক্যারিয়ার কনসালটেন্ট। আমাদের খুলনার ৪টি ক্যাম্পাস (খালিশপুর মেইন ব্রাঞ্চ, আযম খান কমার্স কলেজ ব্রাঞ্চ, বিএল কলেজ ১নং গেট ৪র্থ ব্রাঞ্চ এবং বয়রা মডেল ৮ম ব্রাঞ্চ) এর কোর্স, ফি ও ভর্তি সম্পর্কিত যেকোনো প্রশ্ন করতে পারেন।

📞 দ্রুত যোগাযোগের জন্য:
• ৪র্থ ব্রাঞ্চ (বিএল কলেজ ১নং গেট): ${FOURTH_BRANCH_PHONE} (WhatsApp: ${FOURTH_BRANCH_WHATSAPP_DISPLAY})
• ৮ম ব্রাঞ্চ (বয়রা মডেল স্কুল এন্ড কলেজ): ${EIGHTH_BRANCH_PHONE}`,
      timestamp: 'এইমাত্র',
      suggestions: [
        '৪র্থ ব্রাঞ্চের ফোন ও WhatsApp নম্বর?',
        '৮ম ব্রাঞ্চের ফোন নম্বর কত?',
        'কোর্স ফি ও ৫০% ডিসকাউন্ট?',
        'অনলাইন কোর্স রেজিস্ট্রেশন ফরম',
        'খুলনার ৪টি ব্রাঞ্চের ঠিকানা'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

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
          history: messages.slice(-4).map(m => ({ role: m.sender === 'bot' ? 'model' : 'user', text: m.text }))
        }),
      });

      const data = await response.json();
      const botReply = data.reply || `আসসালামু আলাইকুম! কোনো কারণে মেসেজটি প্রসেস হতে দেরি হচ্ছে। সরাসরি আমাদের ৪র্থ ব্রাঞ্চে কল করুন: ${FOURTH_BRANCH_PHONE} (WhatsApp: ${FOURTH_BRANCH_WHATSAPP_DISPLAY}) অথবা ৮ম ব্রাঞ্চে: ${EIGHTH_BRANCH_PHONE}`;

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          'অনলাইন ভর্তি ফর্ম খুলুন',
          '৪র্থ ব্রাঞ্চে WhatsApp করুন',
          '৮ম ব্রাঞ্চে কল করুন'
        ]
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `আসসালামু আলাইকুম! সার্ভার সংযোগে সাময়িক সমস্যা হয়েছে। আপনি সরাসরি আমাদের ৪র্থ ব্রাঞ্চে (${FOURTH_BRANCH_PHONE} / WhatsApp: ${FOURTH_BRANCH_WHATSAPP_DISPLAY}) অথবা ৮ম ব্রাঞ্চে (${EIGHTH_BRANCH_PHONE}) যোগাযোগ করতে পারেন। ফেসবুক পেজ: www.facebook.com/bdbcit`,
        timestamp: 'এইমাত্র'
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (sug: string) => {
    if (sug.includes('ভর্তি ফর্ম') || sug.includes('রেজিস্ট্রেশন ফরম')) {
      onClose();
      onOpenAdmission();
    } else if (sug.includes('WhatsApp') || sug.includes('হোয়াটসঅ্যাপ')) {
      const text = encodeURIComponent('আসসালামু আলাইকুম, আমি বিডি বিসমিল্লাহ আইটি ৪র্থ ব্রাঞ্চে যোগাযোগ করতে চাই।');
      window.open(`https://wa.me/${FOURTH_BRANCH_WHATSAPP}?text=${text}`, '_blank');
    } else if (sug.includes('৮ম ব্রাঞ্চে কল')) {
      window.open(`tel:01969802385`, '_self');
    } else {
      handleSendMessage(sug);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'reset-msg',
        sender: 'bot',
        text: `চ্যাট রিসেট করা হয়েছে। কোর্স বা খুলনার ৪টি ব্রাঞ্চের তথ্য জানতে যেকোনো প্রশ্ন করুন।

• ৪র্থ ব্রাঞ্চ হেল্পলাইন: ${FOURTH_BRANCH_PHONE} (WhatsApp: ${FOURTH_BRANCH_WHATSAPP_DISPLAY})
• ৮ম ব্রাঞ্চ হেল্পলাইন: ${EIGHTH_BRANCH_PHONE}`,
        timestamp: 'এইমাত্র',
        suggestions: [
          '৪র্থ ব্রাঞ্চের নম্বর?',
          '৮ম ব্রাঞ্চের নম্বর?',
          'কোর্স ফি ও ভর্তি?'
        ]
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full h-[85vh] max-h-[700px] flex flex-col shadow-2xl border border-slate-700/80 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-950 p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg">
                <Bot className="w-6 h-6" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  বিসমিল্লাহ আইটি বাংলা চ্যাটবট
                </h3>
                <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full font-semibold">
                  AI Powered
                </span>
              </div>
              <p className="text-xs text-slate-400">
                ২৪/৭ স্মার্ট ক্যারিয়ার ও কোর্স বিষয়ক পরামর্শক
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClearChat}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              title="চ্যাট ক্লিয়ার করুন"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Thread Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-900/60">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}
              >
                {isBot && (
                  <div className="w-8 h-8 rounded-xl bg-rose-600/30 border border-rose-500/40 text-rose-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[78%] space-y-2`}>
                  <div
                    className={`p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                      isBot
                        ? 'bg-slate-800 text-slate-100 border border-slate-700/80 rounded-tl-xs shadow-md'
                        : 'bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-tr-xs shadow-lg font-medium'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Suggestion Chips */}
                  {isBot && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestions.map((sug, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(sug)}
                          className="text-[11px] bg-slate-800/90 hover:bg-rose-950/80 text-slate-300 hover:text-rose-300 border border-slate-700 hover:border-rose-500/40 px-2.5 py-1 rounded-lg transition-all"
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
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 items-center text-xs text-slate-400">
              <div className="w-8 h-8 rounded-xl bg-rose-600/30 border border-rose-500/40 text-rose-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-800 px-4 py-2.5 rounded-2xl border border-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                <span>এআই উত্তর টাইপ করছে...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
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
              placeholder="বাংলায় কোর্স বা ভর্তি নিয়ে যা জানতে চান লিখুন..."
              disabled={isLoading}
              className="flex-1 bg-slate-900 border border-slate-700 focus:border-rose-500 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 disabled:opacity-50 text-white px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-md"
            >
              <span>পাঠান</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1 flex-wrap gap-2">
            <span>৮ম ব্রাঞ্চ: <strong className="text-sky-400 font-mono">{EIGHTH_BRANCH_PHONE}</strong> | ৪র্থ ব্রাঞ্চ WhatsApp: <strong className="text-emerald-400 font-mono">{FOURTH_BRANCH_WHATSAPP_DISPLAY}</strong></span>
            <button
              onClick={() => {
                onClose();
                onOpenAdmission();
              }}
              className="text-rose-400 hover:underline font-bold"
            >
              অনলাইন কোর্স রেজিস্ট্রেশন →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
