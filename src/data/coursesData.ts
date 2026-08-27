import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  // 01. গ্রাফিক্স ডিজাইন + আউটসোর্সিং (৩ মাস)
  {
    id: 'graphic-design-3m',
    serialNo: '০১',
    title: 'গ্রাফিক্স ডিজাইন + আউটসোর্সিং',
    category: 'design',
    badge: 'এককালীন ৯,০০০৳',
    duration: '৩ মাস',
    totalClasses: 24,
    totalHours: 48,
    regularFee: 12000,
    discountFee: 9000,
    rating: 4.9,
    reviewCount: 430,
    enrolledStudents: 1950,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Adobe Photoshop, Illustrator, Canva Pro ও Fiverr/Upwork মার্কেটপ্লেসে ফ্রিল্যান্সিং। নিয়মিত ফি ১২,০০০৳, এককালীন পরিশোধে মাত্র ৯,০০০৳।',
    instructor: {
      name: 'মো: তানভীর আহমেদ',
      designation: 'সিনিয়র গ্রাফিক্স ডিজাইনার ও টপ-রেটেড ফ্রিল্যান্সার',
      experience: '৮+ বছর ইন্ডাস্ট্রি অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ১২,০০০/- টাকা (এককালীন পরিশোধে ৯,০০০/- টাকা)',
      'মেয়াদ: ৩ মাস (২৪টি লাইভ প্রজেক্ট ক্লাস + ল্যাব সাপোর্ট)',
      'Photoshop ও Illustrator টুলস মাস্টারক্লাস',
      'লোগো, ব্যানার, সোশ্যাল মিডিয়া ও প্রিন্ট ডিজাইন',
      'Fiverr ও Upwork মার্কেটপ্লেসে লাইভ অ্যাকাউন্ট ও গিগ ক্রিয়েশন',
      'সরকারি অনুমোদিত সার্টিফিকেট ও লাইফটাইম সাপোর্ট'
    ],
    toolsLearned: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro', 'Fiverr', 'Upwork', 'Behance'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: ডিজাইনের মূলনীতি ও ফটোশপ ফান্ডামেন্টালস',
        topics: [
          'ডিজাইন থিওরি, কালার সাইকোলজি ও টাইপোগ্রাফি রুলস',
          'ফটোশপ ইন্টারফেস, লেয়ার প্যানেল ও সিলেকশন টুলস',
          'ফটো রিটাচিং, ব্যাকগ্রাউন্ড রিমুভ ও ম্যানিপুলেশন',
          'কালার গ্রেডিং ও লাইটিং অ্যাডজাস্টমেন্ট'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৩',
        practicalProjects: ['প্রোডাক্ট ব্যানার ডিজাইন', 'মডেল ফটো রিটাচিং', 'সোশ্যাল পোস্টার ডিজাইন']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: ভেক্টর ইলাস্ট্রেশন ও ব্র্যান্ড আইডেন্টিটি',
        topics: [
          'ইলাস্ট্রেটর পেন টুল ও শেইপ বিল্ডার টুল মাস্টারক্লাস',
          'মডার্ন লোগো ডিজাইন কনসেপ্ট (মিনিমালিস্ট, মনোগ্রাম)',
          'বিজনেস কার্ড, লেটারহেড ও আইডি কার্ড ডিজাইন',
          'সোশ্যাল মিডিয়া অ্যাড কিট ডিজাইন'
        ],
        durationWeeks: 'সপ্তাহ ৪ - ৮',
        practicalProjects: ['ব্র্যান্ড আইডেন্টিটি কিট', 'ভেক্টর ইলাস্ট্রেশন']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: মার্কেটপ্লেস ও ফ্রিল্যান্সিং ক্যারিয়ার',
        topics: [
          'Fiverr একাউন্ট সেটআপ, কীওয়ার্ড রিসার্চ ও গিগ র‍্যাংকিং',
          'Upwork প্রোফাইল অপটিমাইজেশন ও উইনিং প্রপোজাল রাইটিং',
          'ক্লায়েন্ট কমিউনিকেশন ও রেভিনিউ উত্তোলন (Payoneer / Bank)'
        ],
        durationWeeks: 'সপ্তাহ ৯ - ১২',
        practicalProjects: ['লাইভ গিগ পাবলিশিং', 'Behance পোর্টফোলিও সেটআপ']
      }
    ]
  },

  // 02. ডিপ্লোমা ইন গ্রাফিক্স ডিজাইন + আউটসোর্সিং (৬ মাস)
  {
    id: 'diploma-graphic-design-6m',
    serialNo: '০২',
    title: 'ডিপ্লোমা ইন গ্রাফিক্স ডিজাইন + আউটসোর্সিং',
    category: 'design',
    badge: 'এককালীন ১৮,০০০৳',
    duration: '৬ মাস',
    totalClasses: 48,
    totalHours: 96,
    regularFee: 22000,
    discountFee: 18000,
    rating: 5.0,
    reviewCount: 320,
    enrolledStudents: 1200,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Photoshop, Illustrator, InDesign, UI/UX ও আন্তর্জাতিক ফ্রিল্যান্সিং। নিয়মিত ফি ২২,০০০৳, এককালীন পরিশোধে মাত্র ১৮,০০০৳।',
    instructor: {
      name: 'মো: তানভীর আহমেদ',
      designation: 'সিনিয়র ইউআই/গ্রাফিক ডিজাইনার ও টপ-রেটেড ফ্রিল্যান্সার',
      experience: '৮+ বছর ইন্ডাস্ট্রি অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ২২,০০০/- টাকা (এককালীন পরিশোধে ১৮,০০০/- টাকা)',
      'মেয়াদ: ৬ মাস ডিপ্লোমা কারিকুলাম (৪৮টি ক্লাস + মেগা প্রজেক্ট)',
      'অ্যাডভান্সড ভেক্টর আর্ট, ৩D প্যাকেজিং ও কমার্শিয়াল ডিজাইন',
      'InDesign দিয়ে বুক কভার ও ম্যাগাজিন পাবলিকেশন',
      'Upwork টপ-রেটেড ও ডিরেক্ট ক্লায়েন্ট হান্টিং মেথড',
      'সরাসরি সফটওয়্যার ফার্ম/এজেন্সিতে ইন্টার্নশিপ সুবিধা'
    ],
    toolsLearned: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Canva Pro', 'Fiverr', 'Upwork'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: অ্যাডভান্সড ফটোশপ ও ডিজিটাল আর্ট',
        topics: [
          'কালার থিওরি, গোল্ডেন রেশিও ও গ্রিড সিস্টেম',
          'কমপ্লেক্স মাস্কিং, কম্পোজিটিং ও ম্যাট পেইন্টিং',
          'কমার্শিয়াল প্রোডাক্ট ফটো ম্যানিপুলেশন'
        ],
        durationWeeks: 'মাস ১ - ২',
        practicalProjects: ['লাক্সারি ব্র্যান্ড প্রোডাক্ট আর্টওয়ার্ক']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: ভেক্টর আর্ট, প্যাকেজিং ও পাবলিকেশন',
        topics: [
          'কাস্টম টাইপোগ্রাফি ও লেটারিং ডিজাইন',
          'প্যাকেজিং বক্স, লেবেল ও ডাই-কাট ফাইল মেকিং',
          'InDesign দিয়ে মাল্টি-পেজ ম্যাগাজিন ও ব্রোশিওর'
        ],
        durationWeeks: 'মাস ৩ - ৪',
        practicalProjects: ['৩০ পাতার কর্পোরেট ম্যাগাজিন ও প্রোডাক্ট প্যাকেজিং']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: ইউআই ও হাই-ভ্যালু ফ্রিল্যান্সিং',
        topics: [
          'Figma অ্যাপ ও ওয়েবসাইট ইউআই ডিজাইন',
          'Upwork প্রজেক্ট ক্যাটালগ ও এন্টারপ্রাইজ ক্লায়েন্ট পিচিং',
          'LinkedIn ও Cold Emailing দিয়ে ডিরেক্ট বায়ার হান্টিং'
        ],
        durationWeeks: 'মাস ৫ - ৬',
        practicalProjects: ['হাই-টিকিট বায়ার প্রপোজাল ও লাইভ ইন্টার্নশিপ']
      }
    ]
  },

  // 03. ডিপ্লোমা ইন গ্রাফিক্স ডিজাইন + আউটসোর্সিং (স্পেশাল) (৬/৯ মাস)
  {
    id: 'diploma-graphic-design-special',
    serialNo: '০৩',
    title: 'ডিপ্লোমা ইন গ্রাফিক্স ডিজাইন + আউটসোর্সিং (স্পেশাল)',
    category: 'design',
    badge: 'এককালীন ৩০,০০০৳',
    duration: '৬/৯ মাস',
    totalClasses: 72,
    totalHours: 144,
    regularFee: 35000,
    discountFee: 30000,
    rating: 5.0,
    reviewCount: 180,
    enrolledStudents: 620,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'মাস্টার গ্রাফিক্স, ৩D ভিজ্যুয়ালাইজেশন, মোশন গ্রাফিক্স, প্রজেক্ট পোর্টফোলিও ও ডিরেক্ট ক্লায়েন্ট কন্ট্রাক্ট। নিয়মিত ফি ৩৫,০০০৳, এককালীন ৩০,০০০৳।',
    instructor: {
      name: 'মো: তানভীর আহমেদ ও সিনিয়র প্যানেল',
      designation: 'চিফ ক্রিয়েটিভ ডিরেক্টর ও গ্লোবাল ফ্রিল্যান্স কনসালট্যান্ট',
      experience: '১০+ বছর অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৩৫,০০০/- টাকা (এককালীন পরিশোধে ৩০,০০০/- টাকা)',
      'মেয়াদ: ৬ থেকে ৯ মাস মেয়াদী স্পেশাল এক্সিকিউটিভ ব্যাচ',
      'ফটোশপ, ইলাস্ট্রেটর, ইনডিজাইন, আফটার ইফেক্টস ও ৩D মকআপ',
      'ওয়ান-অন-ওয়ান পারসোনাল মেন্টরশিপ ও আর্নিং গ্যারান্টি সাপোর্ট',
      'ইন্টারন্যাশনাল এজেন্সির সাথে প্রজেক্ট কলাবোরেশন',
      'প্রিমিয়াম পোর্টফোলিও ও সিনিয়র ডিজাইনার সার্টিফিকেশন'
    ],
    toolsLearned: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Figma', 'Blender Mockup', 'Upwork Agency'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: প্রো লেভেল ডিজাইন ও ভিজ্যুয়াল আর্ট',
        topics: ['অ্যাডভান্সড ব্র্যান্ডিং', 'সিনেমাটিক আর্টওয়ার্ক', 'ভেক্টর মাস্টারপিস'],
        durationWeeks: 'মাস ১ - ৩',
        practicalProjects: ['আন্তর্জাতিক ব্র্যান্ড ম্যানুয়াল বুক']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: মোশন ও ৩D ইন্টিগ্রেশন',
        topics: ['লোগো অ্যানিমেশন', 'সোশ্যাল মোশন অ্যাডস', '৩D প্রোডাক্ট রেন্ডারিং'],
        durationWeeks: 'মাস ৪ - ৬',
        practicalProjects: ['সোশ্যাল মিডিয়া মোশন ক্যাম্পেইন']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: এজেন্সি সেটআপ ও হাই-টিকিট কন্ট্রাক্ট',
        topics: ['এজেন্সি প্রোফাইল সেটআপ', 'কন্ট্রাক্ট ও লিগ্যাল এগ্রিমেন্ট', 'লং-টার্ম রিমোট জব ক্র্যাকিং'],
        durationWeeks: 'মাস ৭ - ৯',
        practicalProjects: ['ডিরেক্ট বায়ার কন্ট্রাক্ট ক্লোজিং']
      }
    ]
  },

  // 04. ডিজিটাল মার্কেটিং + আউটসোর্সিং (৩ মাস)
  {
    id: 'digital-marketing-3m',
    serialNo: '০৪',
    title: 'ডিজিটাল মার্কেটিং + আউটসোর্সিং',
    category: 'marketing',
    badge: 'এককালীন ৭,০০০৳',
    duration: '৩ মাস',
    totalClasses: 24,
    totalHours: 48,
    regularFee: 10000,
    discountFee: 7000,
    rating: 4.8,
    reviewCount: 310,
    enrolledStudents: 1450,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Facebook Ads, Google Ads, SEO, Content Marketing, Email Campaign ও মার্কেটপ্লেস আর্নিং। নিয়মিত ফি ১০,০০০৳, এককালীন পরিশোধে মাত্র ৭,০০০৳।',
    instructor: {
      name: 'আহমেদ জুবায়ের',
      designation: 'ডিজিটাল গ্রোথ স্ট্র্যাটেজিস্ট ও সার্টিফাইড গুগল মার্কেটার',
      experience: '৭+ বছর ইন্ডাস্ট্রি অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ১০,০০০/- টাকা (এককালীন পরিশোধে ৭,০০০/- টাকা)',
      'মেয়াদ: ৩ মাস (২৪টি ক্লাস + লাইভ ক্যাম্পেইন ম্যানেজমেন্ট)',
      'Facebook & Instagram Meta Ads ও Pixel ট্র্যাকিং',
      'Google Search, Display ও YouTube Video Ads',
      'Search Engine Optimization (On-page, Off-page, Technical SEO)',
      'Fiverr, Upwork ও লোকাল বিজনেসে মার্কেটিং সার্ভিস'
    ],
    toolsLearned: ['Meta Business Suite', 'Google Ads Manager', 'Google Analytics 4', 'Ahrefs', 'Mailchimp', 'Canva'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: সোশ্যাল মিডিয়া মার্কেটিং ও পেইড অ্যাডস',
        topics: ['ফেসবুক পেজ অপটিমাইজেশন', 'টার্গেটেড অডিয়েন্স বিল্ডিং', 'মেটা পিক্সেল ও কনভার্সন এপিআই', 'ইনস্টাগ্রাম গ্রোথ'],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['লাইভ বাজেট দিয়ে ফেসবুক অ্যাড ক্যাম্পেইন রান']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: এসইও ও গুগল অ্যাডস মাস্টারক্লাস',
        topics: ['কীওয়ার্ড রিসার্চ', 'অন-পেজ এসইও', 'গুগল সার্চ ও ডিসপ্লে অ্যাডস', 'গুগল অ্যানালিটিক্স ৪'],
        durationWeeks: 'সপ্তাহ ৫ - ৮',
        practicalProjects: ['ওয়েবসাইট এসইও অডিট ও র‍্যাংকিং রিপোর্ট']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: ইমেইল মার্কেটিং ও ফ্রিল্যান্সিং',
        topics: ['ইমেইল অটোমেশন', 'Fiverr এ ডিজিটাল মার্কেটিং গিগ', 'লোকাল বিজনেস ক্লায়েন্ট হ্যান্ডলিং'],
        durationWeeks: 'সপ্তাহ ৯ - ১২',
        practicalProjects: ['মার্কেটিং গিগ পাবলিশিং ও ড্রপশিপিং ফানেল']
      }
    ]
  },

  // 05. ভিডিও এডিটিং + আউটসোর্সিং (৩ মাস)
  {
    id: 'video-editing-3m',
    serialNo: '০৫',
    title: 'ভিডিও এডিটিং + আউটসোর্সিং',
    category: 'multimedia',
    badge: 'এককালীন ১০,০০০৳',
    duration: '৩ মাস',
    totalClasses: 24,
    totalHours: 48,
    regularFee: 12000,
    discountFee: 10000,
    rating: 4.9,
    reviewCount: 280,
    enrolledStudents: 980,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Adobe Premiere Pro, After Effects, CapCut Pro, কালার গ্রেডিং ও YouTube/Reels কনটেন্ট ফ্রিল্যান্সিং। নিয়মিত ফি ১২,০০০৳, এককালীন ১০,০০০৳।',
    instructor: {
      name: 'সৌরভ কুমার দে',
      designation: 'ভিডিও প্রডিউসার ও সিনেমাটোগ্রাফি ট্রেইনার',
      experience: '৬+ বছর মিডিয়া অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ১২,০০০/- টাকা (এককালীন পরিশোধে ১০,০০০/- টাকা)',
      'মেয়াদ: ৩ মাস (২৪টি ক্লাস + ল্যাব এডিটিং প্র্যাকটিস)',
      'Adobe Premiere Pro টাইমলাইন ও মাল্টিক্যাম এডিটিং',
      'Adobe After Effects ভিজ্যুয়াল এফেক্টস ও টাইটেল অ্যানিমেশন',
      'YouTube লং ফর্ম ও Shorts / Reels ভাইরাল কনটেন্ট মেকিং',
      'Fiverr, Upwork ও ইউটিউবারদের সাথে রিমোট কাজ'
    ],
    toolsLearned: ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut Pro', 'Audition', 'DaVinci Resolve'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: প্রিমিয়ার প্রো ফান্ডামেন্টালস ও কাটিং',
        topics: ['টাইমলাইন টুলস', 'ট্রানজিশন ও জাম্প কাট', 'অডিও ক্লিনআপ ও সাউন্ড ডিজাইন', 'কালার কারেকশন'],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['সিনেমাটিক ট্রাভেল ভ্লগ এডিটিং']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: মোশন গ্রাফিক্স ও স্পেশাল এফেক্টস',
        topics: ['আফটার ইফেক্টস কি-ফ্রেম', 'লোয়ার থার্ড ও টাইপোগ্রাফি অ্যানিমেশন', 'গ্রিন স্ক্রিন রিমুভাল', 'মাস্কিং'],
        durationWeeks: 'সপ্তাহ ৫ - ৮',
        practicalProjects: ['ইউটিউব ইন্ট্রো ও প্রোডাক্ট প্রোমোশনাল ভিডিও']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: শর্ট ফর্ম ভিডিও ও ফ্রিল্যান্সিং ক্যারিয়ার',
        topics: ['TikTok/Reels ভাইরাল এডিটিং স্টাইল', 'ক্যাপশন স্টাইলিং', 'মার্কেটপ্লেসে পোর্টফোলিও ভিডিও'],
        durationWeeks: 'সপ্তাহ ৯ - ১২',
        practicalProjects: ['৩টি ভাইরাল রিলস ও ফাইবার গিগ ভিডিও']
      }
    ]
  },

  // 06. ওয়েব ডেভেলপমেন্ট + আউটসোর্সিং (৬ মাস)
  {
    id: 'web-development-6m',
    serialNo: '০৬',
    title: 'ওয়েব ডেভেলপমেন্ট + আউটসোর্সিং',
    category: 'web',
    badge: 'এককালীন ১৮,০০০৳',
    duration: '৬ মাস',
    totalClasses: 48,
    totalHours: 96,
    regularFee: 22000,
    discountFee: 18000,
    rating: 5.0,
    reviewCount: 410,
    enrolledStudents: 1350,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'HTML5, CSS3, JavaScript, React.js, Tailwind, WordPress, Node.js ও আন্তর্জাতিক ফ্রিল্যান্সিং। নিয়মিত ফি ২২,০০০৳, এককালীন পরিশোধে মাত্র ১৮,০০০৳।',
    instructor: {
      name: 'ইঞ্জিনিয়ার নাহিদ হাসান',
      designation: 'ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার ও টেক লিড',
      experience: '৯+ বছর ডেভেলপমেন্ট অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ২২,০০০/- টাকা (এককালীন পরিশোধে ১৮,০০০/- টাকা)',
      'মেয়াদ: ৬ মাস ডিপ্লোমা কারিকুলাম (৪৮টি ক্লাস + ৫টি মেগা প্রজেক্ট)',
      'আধুনিক ফ্রন্টএন্ড ও ফুলস্ট্যাক ওয়েব আর্কিটেকচার',
      'WordPress থিম কাস্টমাইজেশন ও Elementor Pro ই-কমার্স সাইট',
      'গিটহাব কোড রিপোজিটরি ও লাইভ সার্ভার ডেপ্লয়মেন্ট',
      'Upwork, Fiverr ও লোকাল আইটি কোম্পানিতে জব প্লেসমেন্ট'
    ],
    toolsLearned: ['HTML5/CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'WordPress', 'Node.js', 'GitHub'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: রেসপনসিভ ওয়েব ডিজাইন ও ফ্রন্টএন্ড',
        topics: ['HTML5 সিমান্টিক স্ট্রাকচার', 'CSS3 ফ্লেক্সবক্স ও গ্রিড', 'Tailwind CSS ফ্রেমওয়ার্ক', 'বুটস্ট্র্যাপ'],
        durationWeeks: 'মাস ১ - ২',
        practicalProjects: ['সম্পূর্ণ রেসপনসিভ এজেন্সি ওয়েবসাইট']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: জাভাস্ক্রিপ্ট ও রিঅ্যাক্ট অ্যাপ্লিকেশন',
        topics: ['মডার্ন জাভাস্ক্রিপ্ট ফান্ডামেন্টালস', 'ডম ম্যানিপুলেশন', 'React.js কম্পোনেন্টস ও হুকস', 'রেস্ট এপিআই ইন্টিগ্রেশন'],
        durationWeeks: 'মাস ৩ - ৪',
        practicalProjects: ['ইন্টারেক্টিভ রিয়েল-টাইম ওয়েব অ্যাপ']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: ওয়ার্ডপ্রেস, ব্যাকএন্ড ও মার্কেটপ্লেস আর্নিং',
        topics: ['WordPress ও WooCommerce', 'পেমেন্ট গেটওয়ে সেটআপ', 'Upwork ও Fiverr এ ওয়েব ডেভেলপমেন্ট গিগ'],
        durationWeeks: 'মাস ৫ - ৬',
        practicalProjects: ['পূর্ণাঙ্গ মাল্টিভেন্ডর ই-কমার্স প্ল্যাটফর্ম']
      }
    ]
  },

  // 07. ফটোগ্রাফি ফ্রিল্যান্সিং (ভালো ক্যামেরা/ফোন থাকলে হবে) (২/৩ মাস)
  {
    id: 'photography-freelancing',
    serialNo: '০৭',
    title: 'ফটোগ্রাফি ফ্রিল্যান্সিং (ভালো ক্যামেরা/ফোন থাকলে হবে)',
    category: 'multimedia',
    badge: 'এককালীন ১০,০০০৳',
    duration: '২/৩ মাস',
    totalClasses: 20,
    totalHours: 40,
    regularFee: 12000,
    discountFee: 10000,
    rating: 4.9,
    reviewCount: 160,
    enrolledStudents: 530,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'ক্যামেরা ও স্মার্টফোন ফটোগ্রাফি, লাইটিং, প্রোডাক্ট শ্যুট, লাইটরুম কালার গ্রেডিং ও স্টক ইমেজ সাইটে ডলার আয়। নিয়মিত ফি ১২,০০০৳, এককালীন ১০,০০০৳।',
    instructor: {
      name: 'রাশেদুল আলম',
      designation: 'প্রফেশনাল কমার্শিয়াল ফটোগ্রাফার',
      experience: '৮+ বছর ফটোগ্রাফি অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ১২,০০০/- টাকা (এককালীন পরিশোধে ১০,০০০/- টাকা)',
      'মেয়াদ: ২ থেকে ৩ মাস মেয়াদী হ্যান্ডস-অন প্র্যাকটিক্যাল কোর্স',
      'ডিএসএলআর/মিররলেস ক্যামেরা অথবা ভালো স্মার্টফোন থাকলেই চলবে',
      'প্রোডাক্ট ফটোগ্রাফি, মডেল শুট, ইভেন্ট ও ল্যান্ডস্কেপ কম্পোজিশন',
      'Adobe Lightroom দিয়ে প্রো লেভেল কালার গ্রেডিং',
      'Shutterstock, Adobe Stock ও Freepik এ ছবি বিক্রি করে প্যাসিভ ইনকাম'
    ],
    toolsLearned: ['DSLR / Smartphone', 'Adobe Lightroom', 'Adobe Photoshop', 'Shutterstock', 'Adobe Stock', 'Freepik'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: ক্যামেরা কন্ট্রোল ও লাইটিং সেটআপ',
        topics: ['অ্যাপারচার, শাটার স্পিড ও আইএসও', 'ন্যাচারাল ও আর্টিফিশিয়াল লাইটিং', 'কম্পোজিশন রুলস (রুল অব থার্ডস)'],
        durationWeeks: 'সপ্তাহ ১ - ৩',
        practicalProjects: ['ইনডোর প্রোডাক্ট শ্যুট ও আউটডোর পোর্ট্রেট']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: লাইটরুম কালার গ্রেডিং ও রিটাচ',
        topics: ['র’ ফাইল প্রসেসিং', 'কালার কার্ভস ও প্রিসেট তৈরি', 'স্কিন টোন রিটাচিং'],
        durationWeeks: 'সপ্তাহ ৪ - ৭',
        practicalProjects: ['কমার্শিয়াল ফুড ও জুয়েলারি ফটোগ্রাফি প্রজেক্ট']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: স্টক ফটোগ্রাফি ও ক্লায়েন্ট ফ্রিল্যান্সিং',
        topics: ['স্টক প্ল্যাটফর্ম একাউন্ট অ্যাপ্রুভাল', 'মেটাডাটা ও কি-ওয়ার্ডিং', 'ইভেন্ট ও ওয়েডিং ফটোগ্রাফি কন্ট্রাক্ট'],
        durationWeeks: 'সপ্তাহ ৮ - ১০',
        practicalProjects: ['স্টক সাইটে ৫০+ ছবি আপলোড ও আর্নিং সেটআপ']
      }
    ]
  },

  // 08. ফ্রিল্যান্সিং ১ বছর মেয়াদী কোর্স (১ বছর)
  {
    id: 'freelancing-1year-mastery',
    serialNo: '০৮',
    title: 'ফ্রিল্যান্সিং ১ বছর মেয়াদী কোর্স',
    category: 'special',
    badge: 'এককালীন ৬৫,০০০৳',
    duration: '১ বছর',
    totalClasses: 96,
    totalHours: 200,
    regularFee: 70000,
    discountFee: 65000,
    rating: 5.0,
    reviewCount: 140,
    enrolledStudents: 410,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'কমপ্লিট আইটি মাস্টারপ্রোগ্রাম: গ্রাফিক্স, ওয়েব, মার্কেটিং, ভিডিও এডিটিং, স্পোকেন ইংলিশ ও পারসোনাল মেন্টরশিপ। নিয়মিত ফি ৭০,০০০৳, এককালীন ৬৫,০০০৳।',
    instructor: {
      name: 'প্রধান মেন্টর প্যানেল (৫ জন বিশেষজ্ঞ)',
      designation: 'বিডি বিসমিল্লাহ আইটি সেন্টারের এক্সিকিউটিভ ডিরেক্টরস',
      experience: '১২+ বছর গ্লোবাল ইন্ডাস্ট্রি লিডারশিপ',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৭০,০০০/- টাকা (এককালীন পরিশোধে ৬৫,০০০/- টাকা)',
      'মেয়াদ: ১ বছর মেয়াদী ফ্ল্যাগশিপ আইটি মাস্টার কোর্স',
      'গ্রাফিক্স + ওয়েব ডেভেলপমেন্ট + ডিজিটাল মার্কেটিং + ভিডিও এডিটিং + স্পোকেন ইংলিশ',
      'প্রতিদিন ডেডিকেটেড ল্যাব অ্যাক্সেস ও পারসোনাল মেন্টর মনিটরিং',
      'ইনস্টিটিউট থেকে লাইভ ক্লায়েন্ট প্রজেক্ট ও ইন-হাউজ ইন্টার্নশিপ',
      '১০০% ক্যারিয়ার প্রতিষ্ঠা ও লাইফটাইম এক্সক্লুসিভ ফ্রিল্যান্সিং সাপোর্ট'
    ],
    toolsLearned: ['Photoshop', 'Illustrator', 'Premiere Pro', 'React/Web', 'Meta Ads', 'Fiverr Pro', 'Upwork Enterprise'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'কোয়ার্টার ১: ফাউন্ডেশন ও মাল্টিমিডিয়া ডিজাইন',
        topics: ['গ্রাফিক্স ডিজাইন মাস্টারক্লাস', 'ভিডিও এডিটিং ও মোশন আর্ট', 'ব্র্যান্ডিং প্রজেক্টস'],
        durationWeeks: 'মাস ১ - ৩',
        practicalProjects: ['ফুল মাল্টিমিডিয়া ব্র্যান্ড ক্যাম্পেইন']
      },
      {
        moduleNumber: 2,
        title: 'কোয়ার্টার ২: ওয়েব টেকনোলজি ও ডিজিটাল মার্কেটিং',
        topics: ['ওয়েবসাইট ডেভেলপমেন্ট ও ওয়ার্ডপ্রেস', 'গুগল ও ফেসবুক মেগা ক্যাম্পেইন', 'এসইও'],
        durationWeeks: 'মাস ৪ - ৬',
        practicalProjects: ['রিয়েল বিজনেস ই-কমার্স ও ফানেল']
      },
      {
        moduleNumber: 3,
        title: 'কোয়ার্টার ৩: স্পোকেন ইংলিশ ও ক্লায়েন্ট কমিউনিকেশন',
        topics: ['ইন্টারন্যাশনাল ক্লায়েন্ট ভিডিও মিটিং', 'কন্ট্রাক্ট নেগোসিয়েশন', 'এজেন্সি বিল্ডিং'],
        durationWeeks: 'মাস ৭ - ৯',
        practicalProjects: ['লাইভ ফরেন বায়ার ইন্টারভিউ সিমুলেশন']
      },
      {
        moduleNumber: 4,
        title: 'কোয়ার্টার ৪: ইন-হাউজ ইন্টার্নশিপ ও আর্নিং এক্সেলারেশন',
        topics: ['ফুল-টাইম রিমোট জব অ্যাপ্লিকেশন', 'মার্কেটপ্লেস টপ-রেটেড ব্যাজিং', 'টিম ম্যানেজমেন্ট'],
        durationWeeks: 'মাস ১০ - ১২',
        practicalProjects: ['স্বাধীন ফ্রিল্যান্স এজেন্সি লঞ্চিং']
      }
    ]
  },

  // 09. অফিস অ্যাপ্লিকেশন (৩ মাস)
  {
    id: 'office-application-3m',
    serialNo: '০৯',
    title: 'অফিস অ্যাপ্লিকেশন',
    category: 'office',
    badge: 'এককালীন ২,৫০০৳',
    duration: '৩ মাস',
    totalClasses: 24,
    totalHours: 48,
    regularFee: 3000,
    discountFee: 2500,
    rating: 4.9,
    reviewCount: 680,
    enrolledStudents: 4100,
    nextBatchDate: 'শুক্রবার ব্যতীত প্রতিদিন নিয়মিত ক্লাস চলছে',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'MS Word, Excel, PowerPoint, বাংলা ও ইংরেজি দ্রুত টাইপিং এবং ইন্টারনেট ব্রাউজিং। নিয়মিত ফি ৩,০০০৳, এককালীন পরিশোধে মাত্র ২,৫০০৳।',
    instructor: {
      name: 'মো: রফিকুল ইসলাম',
      designation: 'সার্টিফাইড অফিস স্পেশালিস্ট ও একাডেমি মেন্টর',
      experience: '১২+ বছর ট্রেনিং অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৩,০০০/- টাকা (এককালীন পরিশোধে ২,৫০০/- টাকা)',
      'মেয়াদ: ৩ মাস (সপ্তাহে ৬ দিন ক্লাস, শুধু শুক্রবার ছুটি)',
      'ক্লাস সময়সূচি: সকাল ১০:০০ টা - রাত ৮:০০ টা (ফ্লেক্সিবল ল্যাব সুবিধা)',
      'মাইক্রোসফট ওয়ার্ড, এক্সেল, পাওয়ারপয়েন্ট ও ইন্টারনেট ব্রাউজিং',
      'বাংলা (বিজয়/অভ্র) ও ইংরেজি স্পর্শ টাইপিং দক্ষতা',
      'কারিগরি শিক্ষাবোর্ড অনুমোদন মানসম্পন্ন সার্টিফিকেট'
    ],
    toolsLearned: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Bijoy 52', 'Avro Keyboard', 'Internet & Email'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: কম্পিউটার পরিচিতি ও দ্রুত টাইপিং',
        topics: ['উইন্ডোজ ও হার্ডওয়্যার বেসিক', 'ইংরেজি টাইপিং ফিঙ্গার পজিশন', 'বিজয় ও অভ্র কিবোর্ড বাংলা টাইপিং'],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['স্পিড টাইপিং পরীক্ষা ও সনদ']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: মাইক্রোসফট ওয়ার্ড ও ডকুমেন্টেশন',
        topics: ['অফিস চিঠি, দরখাস্ত ও রেজুমে তৈরি', 'টেবিল ও পেজ লেআউট ফরম্যাটিং', 'মেইল মার্জ অটোমেশন'],
        durationWeeks: 'সপ্তাহ ৫ - ৮',
        practicalProjects: ['প্রফেশনাল বায়োডাটা ও অফিসিয়াল লেটার']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: মাইক্রোসফট এক্সেল ও পাওয়ারপয়েন্ট',
        topics: ['এক্সেল বেসিক ফর্মুলা (Sum, If, Average)', 'স্যালারি ও ইনভয়েস শিট', 'পাওয়ারপয়েন্ট প্রেজেন্টেশন স্লাইড'],
        durationWeeks: 'সপ্তাহ ৯ - ১২',
        practicalProjects: ['অফিস ক্যাশ শিট ও স্লাইড প্রেজেন্টেশন']
      }
    ]
  },

  // 10. অফিস অ্যাপ্লিকেশন (৬ মাস)
  {
    id: 'office-application-6m',
    serialNo: '১০',
    title: 'অফিস অ্যাপ্লিকেশন',
    category: 'office',
    badge: 'এককালীন ৫,০০০৳',
    duration: '৬ মাস',
    totalClasses: 48,
    totalHours: 96,
    regularFee: 7000,
    discountFee: 5000,
    rating: 5.0,
    reviewCount: 390,
    enrolledStudents: 2450,
    nextBatchDate: 'শুক্রবার ব্যতীত প্রতিদিন নিয়মিত ক্লাস চলছে',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'MS Office ডিপ্লোমা, অ্যাডভান্সড এক্সেল, অ্যাক্সেস ডেটাবেস, সরকারি ফরম্যাটিং ও কারিগরি বোর্ড সার্টিফিকেট। নিয়মিত ফি ৭,০০০৳, এককালীন ৫,০০০৳।',
    instructor: {
      name: 'মো: রফিকুল ইসলাম',
      designation: 'সার্টিফাইড অফিস স্পেশালিস্ট ও একাডেমি মেন্টর',
      experience: '১২+ বছর ট্রেনিং অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৭,০০০/- টাকা (এককালীন পরিশোধে ৫,০০০/- টাকা)',
      'মেয়াদ: ৬ মাস ডিপ্লোমা কারিকুলাম (সপ্তাহে ৬ দিন খোলা)',
      'ক্লাস সময়: সকাল ১০:০০ - রাত ৮:০০ (পছন্দমতো শিফট নির্বাচন)',
      'অ্যাডভান্সড এক্সেল (VLOOKUP, HLOOKUP, Pivot Table, Macros)',
      'MS Access ডেটাবেস ম্যানেজমেন্ট ও সরকারি চাকরির প্রস্তুতি',
      'বাংলাদেশ কারিগরি শিক্ষা বোর্ড সার্টিফিকেট চূড়ান্ত প্রস্তুতি'
    ],
    toolsLearned: ['MS Word Pro', 'MS Excel Advanced', 'MS PowerPoint', 'MS Access Database', 'Google Workspace'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: অ্যাডভান্সড ডকুমেন্টেশন ও প্রজেক্ট ড্রাফটিং',
        topics: ['কমপ্লেক্স বুকলেটিং', 'ইন্ডেক্সিং ও রেফারেন্সিং', 'গভর্নমেন্ট নোটিশ ফরম্যাট'],
        durationWeeks: 'মাস ১ - ২',
        practicalProjects: ['পূর্ণাঙ্গ অফিসিয়াল ম্যানুয়াল বই ড্রাফটিং']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: অ্যাডভান্সড এক্সেল ও ফিন্যান্সিয়াল অ্যাকাউন্টিং',
        topics: ['নেস্টেড ফর্মুলা', 'লুকআপ ফাংশনস', 'পিভট টেবিল ও ডেটা অ্যানালাইসিস', 'অ্যাকাউন্টিং ড্যাশবোর্ড'],
        durationWeeks: 'মাস ৩ - ৪',
        practicalProjects: ['অটোমেটেড ইনভেন্টরি ও স্যালারি সিস্টেম']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: ডেটাবেস ম্যানেজমেন্ট ও বোর্ড প্রিপারেশন',
        topics: ['MS Access ডেটাবেস ডিজাইন', 'কোয়েরি ও রিপোর্ট মেকিং', 'কারিগরি শিক্ষাবোর্ড মডেল টেস্ট'],
        durationWeeks: 'মাস ৫ - ৬',
        practicalProjects: ['বোর্ড ফাইনাল ল্যাব এক্সাম ও সার্টিফিকেশন']
      }
    ]
  },

  // 11. অফিস অ্যাপ্লিকেশন (৯ মাস)
  {
    id: 'office-application-9m',
    serialNo: '১১',
    title: 'অফিস অ্যাপ্লিকেশন',
    category: 'office',
    badge: 'এককালীন ৬,০০০৳',
    duration: '৯ মাস',
    totalClasses: 72,
    totalHours: 144,
    regularFee: 9000,
    discountFee: 6000,
    rating: 5.0,
    reviewCount: 210,
    enrolledStudents: 1100,
    nextBatchDate: 'শুক্রবার ব্যতীত প্রতিদিন নিয়মিত ক্লাস চলছে',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'এক্সক্লুসিভ ৯ মাস মেয়াদী মাস্টার অফিস অ্যাপ্লিকেশন, হার্ডওয়্যার ট্রাবলশুটিং ও অফিস আইটি অ্যাডমিনিস্ট্রেশন। নিয়মিত ফি ৯,০০০৳, এককালীন ৬,০০০৳।',
    instructor: {
      name: 'মো: রফিকুল ইসলাম',
      designation: 'সার্টিফাইড অফিস স্পেশালিস্ট ও একাডেমি মেন্টর',
      experience: '১২+ বছর ট্রেনিং অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৯,০০০/- টাকা (এককালীন পরিশোধে ৬,০০০/- টাকা)',
      'মেয়াদ: ৯ মাস মেয়াদী এক্সটেন্ডেড মাস্টার ডিপ্লোমা',
      'মাইক্রোসফট অফিস ৩৬৫, গুগল ক্লাউড ও আইটি অ্যাডমিনিস্ট্রেশন',
      'প্রিন্টার, স্ক্যানার ও নেটওয়ার্ক ট্রাবলশুটিং ল্যাব',
      'সরকারি ও করপোরেট চাকরির জন্য স্পেশাল প্রিপারেশন',
      'কারিগরি শিক্ষা বোর্ড ও ইনস্টিটিউট লাইফটাইম ভেরিফাইড সনদ'
    ],
    toolsLearned: ['MS 365 Pro', 'Excel VBA Basics', 'MS Access', 'Hardware & Network', 'Office Cloud Suite'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: সম্পূর্ণ অফিস প্যাকেজ ও টাইপিং এক্সপার্টিজ',
        topics: ['ওয়ার্ড, এক্সেল, পাওয়ারপয়েন্ট গভীর শিক্ষা', 'উচ্চগতির নির্ভুল টাইপিং'],
        durationWeeks: 'মাস ১ - ৩',
        practicalProjects: ['টাইপিং সার্টিফিকেট ও অফিসিয়াল কেস স্টাডি']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: ডেটাবেস, ক্লাউড ও অটোমেশন',
        topics: ['MS Access ও SQL কোয়েরি বেসিক', 'Google Docs/Sheets ক্লাউড অটোমেশন'],
        durationWeeks: 'মাস ৪ - ৬',
        practicalProjects: ['ক্লাউড ভিত্তিক অফিস ফাইল সিস্টেম']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: হার্ডওয়্যার ও আইটি অফিস সাপোর্ট',
        topics: ['উইন্ডোজ সেটআপ', 'ড্রাইভার ইনস্টলেশন', 'প্রিন্টার ও ল্যান নেটওয়ার্কিং'],
        durationWeeks: 'মাস ৭ - ৯',
        practicalProjects: ['সম্পূর্ণ অফিস আইটি ল্যাব ট্রাবলশুটিং']
      }
    ]
  },

  // 12. অফিস অ্যাপ্লিকেশন + আউটসোর্সিং (৩ মাস)
  {
    id: 'office-application-outsourcing-3m',
    serialNo: '১২',
    title: 'অফিস অ্যাপ্লিকেশন + আউটসোর্সিং',
    category: 'office',
    badge: 'এককালীন ৫,০০০৳',
    duration: '৩ মাস',
    totalClasses: 24,
    totalHours: 48,
    regularFee: 6000,
    discountFee: 5000,
    rating: 4.9,
    reviewCount: 340,
    enrolledStudents: 1650,
    nextBatchDate: 'শুক্রবার ব্যতীত প্রতিদিন নিয়মিত ক্লাস চলছে',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'MS Office, ডেটা এন্ট্রি (Data Entry), ওয়েব রিসার্চ, ভার্চুয়াল অ্যাসিস্ট্যান্ট ও Fiverr/Upwork আউটসোর্সিং। নিয়মিত ফি ৬,০০০৳, এককালীন ৫,০০০৳।',
    instructor: {
      name: 'মো: রফিকুল ইসলাম ও আউটসোর্সিং টিম',
      designation: 'ডেটা অ্যানালিস্ট ও ফ্রিল্যান্স কনসালট্যান্ট',
      experience: '৯+ বছর অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৬,০০০/- টাকা (এককালীন পরিশোধে ৫,০০০/- টাকা)',
      'মেয়াদ: ৩ মাস (২৪টি ক্লাস + ফ্রিল্যান্সিং ল্যাব প্র্যাকটিস)',
      'অফিস অ্যাপ্লিকেশন + প্রফেশনাল ডেটা এন্ট্রি স্পেশালাইজেশন',
      'ওয়েব রিসার্চ, লিড জেনারেশন ও গুগল ডক্স/শিট এক্সপার্টিজ',
      'Fiverr ও Upwork-এ Data Entry ও Virtual Assistant গিগ',
      'প্রথম কাজ পাওয়া পর্যন্ত সার্বক্ষণিক সাপোর্ট'
    ],
    toolsLearned: ['MS Word & Excel', 'Google Sheets', 'LinkedIn Lead Gen', 'Fiverr', 'Upwork', 'PDF Tools'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: অফিস অ্যাপ্লিকেশন ও অ্যাডভান্সড এক্সেল',
        topics: ['এক্সেল ফর্মুলা ও ফাংশন', 'পিডিএফ টু ওয়ার্ড/এক্সেল কনভার্সন', 'ক্লিন ডেটা ফরম্যাটিং'],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['১০০০+ রো সমৃদ্ধ ডেটা ক্লিনিং প্রজেক্ট']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: ভার্চুয়াল অ্যাসিস্ট্যান্ট ও লিড জেনারেশন',
        topics: ['ওয়েব রিসার্চ টেকনিকস', 'ইন্টারনেট স্ক্র্যাপিং', 'লিংকডইন লিড রিসার্চ', 'ইমেইল ফাইন্ডিং'],
        durationWeeks: 'সপ্তাহ ৫ - ৮',
        practicalProjects: ['ইউএসএ কোম্পানির ৫০০ ভেরিফাইড বিটুবি লিড তালিকা']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: মার্কেটপ্লেস আর্নিং ও আউটসোর্সিং',
        topics: ['Fiverr ডেটা এন্ট্রি গিগ সেটআপ', 'Upwork বিডিং স্ট্র্যাটেজি', 'পেমেন্ট উইথড্রয়াল'],
        durationWeeks: 'সপ্তাহ ৯ - ১২',
        practicalProjects: ['লাইভ ফাইভার গিগ পাবলিশিং ও টেস্ট ব্রিফ']
      }
    ]
  },

  // 13. স্পোকেন ইংলিশ (২/৩ মাস)
  {
    id: 'spoken-english-2-3m',
    serialNo: '১৩',
    title: 'স্পোকেন ইংলিশ',
    category: 'language',
    badge: 'এককালীন ৫,০০০৳',
    duration: '২/৩ মাস',
    totalClasses: 24,
    totalHours: 48,
    regularFee: 6000,
    discountFee: 5000,
    rating: 4.9,
    reviewCount: 290,
    enrolledStudents: 1380,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'ফ্লুয়েন্ট স্পোকেন ইংলিশ, ব্রিটিশ/আমেরিকান প্রোনাউন্সিয়েশন, ফরেন ক্লায়েন্ট কমিউনিকেশন ও ইন্টারভিউ প্রস্তুতি। নিয়মিত ফি ৬,০০০৳, এককালীন ৫,০০০৳।',
    instructor: {
      name: 'ফারহানা ইসলাম',
      designation: 'আইইএলটিএস ৮.০ ট্রেইনার ও কর্পোরেট ইংলিশ স্পিকার',
      experience: '৮+ বছর শিক্ষকতা অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৬,০০০/- টাকা (এককালীন পরিশোধে ৫,০০০/- টাকা)',
      'মেয়াদ: ২ থেকে ৩ মাস মেয়াদী ফ্লুয়েন্সি স্পেশাল ব্যাচ',
      'দৈনন্দিন কথোপকথন ও ফ্লুয়েন্টলি ইংরেজিতে কথা বলার কৌশল',
      'মার্কেটপ্লেসে বিদেশি বায়ারদের সাথে ভিডিও/অডিও কল মিটিং গাইড',
      'প্রফেশনাল ইমেইল রাইটিং ও কর্পোরেট জব ইন্টারভিউ প্রস্তুতি',
      'লাইভ প্রেজেন্টেশন ও স্পিকিং ক্লাব সেশন'
    ],
    toolsLearned: ['Phonetics', 'Fluency Drills', 'Client Zoom Call Simulation', 'Email Writing', 'Interview Prep'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: স্পিকিং ফাউন্ডেশন ও জড়তা দূরীকরণ',
        topics: ['ডেইলি কনভারসেশন রুলস', 'ভোকাবুলারি ও স্ট্রাকচারাল প্যাটার্ন', 'শাইনেস কাটানোর টেকনিক'],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['ডেইলি লাইফ সিচুয়েশনাল স্পিকিং ড্রিল']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: প্রোনাউন্সিয়েশন ও লিসেনিং স্কিল',
        topics: ['সঠিক উচ্চারণ ও কানেক্টেড স্পিচ', 'লিসেনিং অ্যান্ড রিপিটিং এক্সারসাইজ', 'স্মার্ট প্রেজেন্টেশন স্কিল'],
        durationWeeks: 'সপ্তাহ ৫ - ৮',
        practicalProjects: ['৩ মিনিটের পাবলিক স্পিকিং প্রেজেন্টেশন']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: ক্লায়েন্ট মিটিং ও ইন্টারভিউ ক্র্যাকিং',
        topics: ['Zoom/Google Meet বায়ার কল রিহার্সাল', 'প্রফেশনাল ইমেইল ও চ্যাট রাইটিং', 'জব ইন্টারভিউ কিউ অ্যান্ড এ'],
        durationWeeks: 'সপ্তাহ ৯ - ১২',
        practicalProjects: ['মক বায়ার ভিডিও ইন্টারভিউ টেস্ট']
      }
    ]
  },

  // 14. অটোক্যাড (৩/৬ মাস)
  {
    id: 'autocad-2d-3d',
    serialNo: '১৪',
    title: 'অটোক্যাড',
    category: 'engineering',
    badge: 'এককালীন ৭,০০০৳',
    duration: '৩/৬ মাস',
    totalClasses: 32,
    totalHours: 64,
    regularFee: 8000,
    discountFee: 7000,
    rating: 4.9,
    reviewCount: 190,
    enrolledStudents: 720,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'AutoCAD 2D & 3D আর্কিটেকচারাল ড্রয়িং, সিভিল ফ্লোর প্ল্যান, ইলেকট্রিক্যাল লেআউট ও ডিজাইন প্রজেক্ট। নিয়মিত ফি ৮,০০০৳, এককালীন ৭,০০০৳।',
    instructor: {
      name: 'ইঞ্জিনিয়ার সাজ্জাদ হোসেন',
      designation: 'আর্কিটেকচারাল ডিজাইনার ও ক্যাড স্পেশালিস্ট',
      experience: '৭+ বছর ড্রাফটিং অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৮,০০০/- টাকা (এককালীন পরিশোধে ৭,০০০/- টাকা)',
      'মেয়াদ: ৩ থেকে ৬ মাস মেয়াদী প্র্যাকটিক্যাল ড্রয়িং কোর্স',
      'AutoCAD 2D ফ্লোর প্ল্যান, এলিভেশন ও সেকশন ড্রয়িং',
      'AutoCAD 3D মডেলিং ও আর্কিটেকচারাল ভিজ্যুয়ালাইজেশন',
      'সিভিল, আর্কিটেকচার ও ইঞ্জিনিয়ারিং শিক্ষার্থীদের জন্য আবশ্যক',
      'রিয়েল এস্টেট ও কনস্ট্রাকশন ফার্ম জব সাপোর্ট'
    ],
    toolsLearned: ['AutoCAD 2D', 'AutoCAD 3D', 'Plotting & Layering', 'Civil Floor Plans', 'Elevation Specs'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: অটোক্যাড ২D ফান্ডামেন্টালস ও লেয়ারস',
        topics: ['ইন্টারফেস ও ড্রয়িং কমান্ডস', 'লেয়ার ম্যানেজমেন্ট ও ডাইমেনশন', 'টেক্সট ও হ্যাচ কমান্ড'],
        durationWeeks: 'মাস ১',
        practicalProjects: ['রেসিডেন্সিয়াল ফ্লোর প্ল্যান ড্রাফটিং']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: আর্কিটেকচারাল এলিভেশন ও সেকশন',
        topics: ['বিল্ডিং ফ্রন্ট ও সাইড এলিভেশন', 'ক্রস সেকশন ডিটেইলিং', 'ইলেকট্রিক্যাল ও প্লাম্বিং লেআউট'],
        durationWeeks: 'মাস ২',
        practicalProjects: ['বহুতল ভবনের পূর্ণাঙ্গ আর্কিটেকচারাল ব্লুপ্রিন্ট']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: ৩D মডেলিং ও প্রিন্ট ড্রাফট রেডি',
        topics: ['৩D সলিড মডেলিং', 'রেন্ডারিং ও ক্যামেরা ভিউ', 'লেআউট পেপার স্পেস ও প্লট/প্রিন্ট (PDF/DWG)'],
        durationWeeks: 'মাস ৩',
        practicalProjects: ['৩D হাউজ এক্সটেরিয়র ড্রয়িং ও প্রিন্ট শিট']
      }
    ]
  },

  // 15. টাইপ ও শর্টহ্যান্ড (৩/৬ মাস)
  {
    id: 'type-shorthand-3-6m',
    serialNo: '১৫',
    title: 'টাইপ ও শর্টহ্যান্ড',
    category: 'office',
    badge: 'এককালীন ৭,০০০৳',
    duration: '৩/৬ মাস',
    totalClasses: 36,
    totalHours: 72,
    regularFee: 8000,
    discountFee: 7000,
    rating: 5.0,
    reviewCount: 230,
    enrolledStudents: 890,
    nextBatchDate: 'শুক্রবার ব্যতীত প্রতিদিন নিয়মিত ক্লাস চলছে',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'বাংলা ও ইংরেজি উচ্চগতির টাইপিং, সাঁটলিপি (Shorthand) ডিকটেশন ও সরকারি চাকরির স্টেনোগ্রাফার পরীক্ষা প্রস্তুতি। নিয়মিত ফি ৮,০০০৳, এককালীন ৭,০০০৳।',
    instructor: {
      name: 'মো: আল-আমিন হোসেন',
      designation: 'সরকারি সার্টিফাইড শর্টহ্যান্ড ও টাইপিং ট্রেইনার',
      experience: '১৫+ বছর শিক্ষকতা অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'কোর্স ফি: ৮,০০০/- টাকা (এককালীন পরিশোধে ৭,০০০/- টাকা)',
      'মেয়াদ: ৩ থেকে ৬ মাস মেয়াদী বিশেষ সরকারি জব প্রস্তুতি',
      'বাংলা ও ইংরেজি উভয় ভাষায় সাঁটলিপি (শর্টহ্যান্ড) স্ট্রোক ও স্পিড',
      'মিনিটে ৮০+ শব্দ শর্টহ্যান্ড ডিকটেশন ও ট্রান্সক্রিপশন প্র্যাকটিস',
      'মন্ত্রণালয়, আদালত ও স্বায়ত্তশাসিত প্রতিষ্ঠানে স্টেনো-টাইপিস্ট পদের প্রস্তুতি',
      'দৈনিক মক টেস্ট ও সরকারি প্রশ্ন সমাধানের সুবিধা'
    ],
    toolsLearned: ['Bangla Shorthand', 'English Shorthand', 'High Speed Bijoy Typing', 'Steno-Typist Mock Tests'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: শর্টহ্যান্ড বর্ণমালা ও বেসিক স্ট্রোকস',
        topics: ['স্বরবর্ণ ও ব্যঞ্জনবর্ণের শর্টহ্যান্ড রূপ', 'যুক্তবর্ণ ও অবস্থানগত নিয়ম', 'শব্দ সংক্ষেপ (Grammalogues)'],
        durationWeeks: 'মাস ১ - ২',
        practicalProjects: ['প্রতিদিন ১০০+ শর্টহ্যান্ড বাক্য ডিকটেশন ও অনুবাদ']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: স্পিড বিল্ডিং ও ডিকটেশন অনুশীলন',
        topics: ['মিনিটে ৬০-৮০ শব্দ স্পিড ডিকটেশন', 'সরকারি বিজ্ঞপ্তি ও আদালতের আদেশ লিপিবদ্ধকরণ', 'দ্রুত কম্পিউটার ট্রান্সলেশন'],
        durationWeeks: 'মাস ৩ - ৪',
        practicalProjects: ['মিনিটে ৮০ শব্দ ডিকটেশন ড্রাফট ট্রান্সক্রিপ্ট']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: সরকারি পরীক্ষার মক টেস্ট ও চূড়ান্ত প্রস্তুতি',
        topics: ['বিগত বছরের মন্ত্রণালয় পরীক্ষার প্রশ্ন সমাধান', 'টাইপ স্পিড টেস্ট (বাংলা ৩০+ ও ইংরেজি ৪০+ WPM)', 'ভাইভা ও ব্যবহারিক টিপস'],
        durationWeeks: 'মাস ৫ - ৬',
        practicalProjects: ['ফুল-লেন্থ স্টেনোগ্রাফার নিয়োগ মডেল টেস্ট']
      }
    ]
  }
];
