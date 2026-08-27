import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Share2,
  X
} from 'lucide-react';
import { BLOG_POSTS, UPCOMING_EVENTS } from '../data/blogData';
import { BlogPost, EventSeminar } from '../types';
import confetti from 'canvas-confetti';

export const EventsAndBlog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [registeredEvent, setRegisteredEvent] = useState<EventSeminar | null>(null);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookSeminar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeePhone) return;

    setBookingSuccess(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="events" className="py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= SECTION A: UPCOMING SEMINARS & EVENTS ================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>ফ্রি সেমিনার ও স্কিল ওয়ার্কশপ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              আসন্ন আইটি ইভেন্ট ও ক্যারিয়ার সেমিনার
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              আইটিতে ভবিষ্যৎ গড়ার সঠিক পথনির্দেশনা পেতে আমাদের ফ্রি সেমিনার ও প্র্যাকটিক্যাল কর্মশালায় অংশ নিন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {UPCOMING_EVENTS.map((event) => {
              const seatsLeft = event.seatsTotal - event.seatsBooked;
              return (
                <div
                  key={event.id}
                  className="bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-sky-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-video sm:aspect-[21/9] bg-slate-950 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-sky-600 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 font-semibold text-amber-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-sky-300">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="space-y-2 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 text-xs text-slate-300 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                          <span><strong>ভেন্যু:</strong> {event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-sky-400 flex-shrink-0" />
                          <span><strong>প্রধান স্পিকার:</strong> {event.speaker} ({event.speakerRole})</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                      <div>
                        <span className="text-[11px] text-slate-400 block">সিট বাকি আছে:</span>
                        <strong className="text-sm font-bold text-rose-400">{seatsLeft}টি মাত্র</strong>
                      </div>

                      <button
                        onClick={() => {
                          setRegisteredEvent(event);
                          setBookingSuccess(false);
                        }}
                        className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-sky-900/40 transition-all hover:scale-105"
                      >
                        ফ্রি সিট বুক করুন
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= SECTION B: BLOG & TECH TIPS ================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>আইটি ব্লগ ও ক্যারিয়ার টিপস</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              সাম্প্রতিক টেক আর্টিকেল ও ফ্রিল্যান্সিং গাইড
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              নতুনদের ফ্রিল্যান্সিং কৌশল, ক্যারিয়ার পরিকল্পনা ও আধুনিক টেকনোলজি সম্পর্কিত গুরুত্বপূর্ণ পরামর্শ।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {BLOG_POSTS.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-rose-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-950">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-slate-950/90 border border-slate-700 text-slate-200 text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-medium">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors leading-snug mb-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-rose-400">
                  <span>লেখক: {blog.author}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    সম্পূর্ণ পড়ুন
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Blog Detail Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden">
            <div className="relative aspect-video sm:aspect-[21/9] bg-slate-950">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="bg-rose-950/80 border border-rose-500/30 text-rose-300 px-2.5 py-0.5 rounded font-bold">{selectedBlog.category}</span>
                <span>•</span>
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span>লেখক: {selectedBlog.author}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedBlog.title}
              </h3>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                {selectedBlog.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedBlog(null)}
                className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seminar Booking Modal */}
      {registeredEvent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-800 space-y-4 text-white">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">ফ্রি সেমিনার সিট রেজিস্ট্রেশন</h4>
              <button
                onClick={() => setRegisteredEvent(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!bookingSuccess ? (
              <form onSubmit={handleBookSeminar} className="space-y-3">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <strong className="text-white block font-bold mb-1">{registeredEvent.title}</strong>
                  <span className="text-sky-400">{registeredEvent.date} • {registeredEvent.time}</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">আপনার পূর্ণ নাম:</label>
                  <input
                    type="text"
                    required
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    placeholder="আপনার নাম লিখুন"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-sky-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">মোবাইল নম্বর (হোয়াটসঅ্যাপ সহ):</label>
                  <input
                    type="tel"
                    required
                    value={attendeePhone}
                    onChange={(e) => setAttendeePhone(e.target.value)}
                    placeholder="০১৭xxxxxxxx"
                    className="w-full bg-slate-950 border border-slate-700 focus:border-sky-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white py-3 rounded-xl text-xs font-bold shadow-md shadow-sky-900/40 transition-colors"
                >
                  সিট নিশ্চিত করুন (১০০% ফ্রি)
                </button>
              </form>
            ) : (
              <div className="text-center py-4 space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-white">অভিনন্দন! আপনার সিট নিশ্চিত হয়েছে</h5>
                <p className="text-xs text-slate-300">
                  {attendeeName}, আপনার মোবাইল নম্বরে ({attendeePhone}) সেমিনারের আমন্ত্রণ ও জুম লিঙ্ক এসএমএস করা হয়েছে।
                </p>
                <button
                  onClick={() => setRegisteredEvent(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-xl text-xs font-bold"
                >
                  ঠিক আছে
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
