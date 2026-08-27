import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'graphic-design-3m',
    title: 'প্রফেশনাল গ্রাফিক্স ডিজাইন ও ফ্রিল্যান্সিং (৩ মাস)',
    category: 'design',
    badge: 'এককালীন ৯,০০০৳',
    duration: '৩ মাস (২৪টি ক্লাস + লাইভ সাপোর্ট)',
    totalClasses: 24,
    totalHours: 48,
    regularFee: 14000,
    discountFee: 9000,
    rating: 4.9,
    reviewCount: 420,
    enrolledStudents: 1850,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Adobe Photoshop, Illustrator, InDesign, Canva Pro ও ফাইবার/আপওয়ার্ক ফ্রিল্যান্সিং। এককালীন পরিশোধে বিশেষ কোর্স ফি মাত্র ৯,০০০ টাকা।',
    instructor: {
      name: 'মো: তানভীর আহমেদ',
      designation: 'সিনিয়র ইউআই/গ্রাফিক ডিজাইনার ও টপ-রেটেড ফ্রিল্যান্সার',
      experience: '৮+ বছরের ইন্ডাস্ট্রি অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'এককালীন পরিশোধ ফি: মাত্র ৯,০০০ টাকা (৩ মাস মেয়াদী)',
      'লাইভ প্রজেক্ট ভিত্তিক ক্লাস ও প্র্যাকটিক্যাল ল্যাব সাপোর্ট',
      'Fiverr ও Upwork মার্কেটপ্লেস স্পেশাল একাউন্ট ও গিগ গাইড',
      'প্রিন্ট ও সোশ্যাল মিডিয়া ব্র্যান্ড ডিজাইন প্রোটোকল',
      'ভেরিফায়েড সার্টিফিকেট ও লাইফটাইম সাপোর্ট'
    ],
    toolsLearned: ['Adobe Photoshop', 'Adobe Illustrator', 'InDesign', 'Canva Pro', 'Fiverr', 'Upwork'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: ডিজাইনের মূলনীতি ও ফটোশপ ফান্ডামেন্টালস',
        topics: [
          'ডিজাইন থিওরি, কালার সাইকোলজি ও টাইপোগ্রাফি রুলস',
          'ফটোশপ ইন্টারফেস, লেয়ার প্যানেল ও সিলেকশন টুলস',
          'ফটো রিটাচিং, ব্যাকগ্রাউন্ড রিমুভ ও ম্যানিপুলেশন',
          'কালার গ্রেডিং ও লাইটিং অ্যাডজাস্টমেন্ট টেকনিক'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৩',
        practicalProjects: ['প্রফেশনাল প্রোডাক্ট ব্যানারিং', 'মডেল ফটো রিটাচিং', 'সিনেমাটিক পোস্টার ডিজাইন']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: ভেক্টর ইলাস্ট্রেশন ও ব্র্যান্ড আইডেন্টিটি',
        topics: [
          'অ্যাডোবি ইলাস্ট্রেটর পেন টুল ও শেইপ বিল্ডার টুল মাস্টারক্লাস',
          'মডার্ন লোগো ডিজাইন কনসেপ্ট (মিনিমালিস্ট, মনোগ্রাম, ম্যাসকট)',
          'বিজনেস কার্ড, লেটারহেড, এনভেলপ ও আইডি কার্ড ডিজাইন',
          'সোশ্যাল মিডিয়া অ্যাড কিট ও ইনফোগ্রাফিক্স ডিজাইন'
        ],
        durationWeeks: 'সপ্তাহ ৪ - ৭',
        practicalProjects: ['সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি কিট', 'ভেক্টর পোর্ট্রেট ইলাস্ট্রেশন', 'সোশ্যাল মিডিয়া ক্যাম্পেইন ডিজাইন']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: প্যাকেজিং, প্রিন্ট ডিজাইন ও সোশ্যাল ব্যানার',
        topics: [
          'প্রোডাক্ট প্যাকেজিং, ডাই-কাট ও লেবেল ডিজাইন',
          'বুক কভার ও ট্রাই-ফোল্ড ব্রোশিওর লেআউট',
          'সোশ্যাল মিডিয়া ব্যানার আর্টবোর্ড ক্রিয়েশন',
          'প্রিন্ট প্রেস ফাইল রেডি ও কালার সেপারেশন (CMYK/RGB)'
        ],
        durationWeeks: 'সপ্তাহ ৮ - ১০',
        practicalProjects: ['লাক্সারি কসমেটিক্স প্যাকেজিং বক্স', 'কর্পোরেট ব্রোশিওর ও ক্যাটালগ']
      },
      {
        moduleNumber: 4,
        title: 'মডিউল ৪: মার্কেটপ্লেস ও ফ্রিল্যান্সিং ক্যারিয়ার',
        topics: [
          'Fiverr একাউন্ট সেটআপ, কীওয়ার্ড রিসার্চ ও গিগ র‍্যাংকিং সিক্রেট',
          'Upwork প্রোফাইল অপটিমাইজেশন ও উইনিং প্রপোজাল রাইটিং',
          'ক্লায়েন্ট কমিউনিকেশন ও রেভিনিউ উত্তোলন (Payoneer / Bank)',
          'Behance ও Dribbble প্রফেশনাল পোর্টফোলিও বিল্ডিং'
        ],
        durationWeeks: 'সপ্তাহ ১১ - ১২',
        practicalProjects: ['লাইভ গিগ পাবলিশিং', 'ক্লায়েন্ট টেস্ট ব্রিফিং সল্যুশন']
      }
    ]
  },
  {
    id: 'graphic-design-6m',
    title: 'প্রফেশনাল গ্রাফিক্স ডিজাইন ও অ্যাডভান্সড ইউআই/ইউএক্স (৬ মাস)',
    category: 'design',
    badge: 'এককালীন ১৮,০০০৳',
    duration: '৬ মাস (৪৮টি ক্লাস + মেগা প্রজেক্ট)',
    totalClasses: 48,
    totalHours: 96,
    regularFee: 25000,
    discountFee: 18000,
    rating: 5.0,
    reviewCount: 310,
    enrolledStudents: 920,
    nextBatchDate: '১লা আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Photoshop, Illustrator, InDesign, Figma UI/UX, ৩ডি মকআপ ও আন্তর্জাতিক এজেন্সি ফ্রিল্যান্সিং। এককালীন পরিশোধ ফি ১৮,০০০ টাকা।',
    instructor: {
      name: 'মো: তানভীর আহমেদ',
      designation: 'সিনিয়র ইউআই/গ্রাফিক ডিজাইনার ও টপ-রেটেড ফ্রিল্যান্সার',
      experience: '৮+ বছরের ইন্ডাস্ট্রি অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'এককালীন পরিশোধ ফি: ১৮,০০০ টাকা (৬ মাস মেয়াদী ডিপ্লোমা)',
      'অ্যাডভান্সড ভেক্টর আর্ট, ৩D প্যাকেজিং ও Figma UI/UX ডিজাইন',
      'Upwork টপ রেটেড ও ডিরেক্ট ইন্টারন্যাশনাল ক্লায়েন্ট হান্টিং',
      'Behance ও Dribbble এ প্রো-লেভেল পোর্টফোলিও তৈরি',
      'সরাসরি সফটওয়্যার/এজেন্সিতে ইন্টার্নশিপ ও ক্যারিয়ার প্লেসমেন্ট'
    ],
    toolsLearned: ['Adobe Photoshop', 'Adobe Illustrator', 'InDesign', 'Figma', 'Blender Mockup', 'Canva Pro', 'Fiverr', 'Upwork'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: গ্রাফিক্স ফান্ডামেন্টালস ও মাস্টার রিটাচিং',
        topics: [
          'কালার থিওরি, গোল্ডেন রেশিও ও গ্রিড সিস্টেম',
          'কমপ্লেক্স মাস্কিং, কম্পোজিটিং ও ম্যাট পেইন্টিং',
          'কমার্শিয়াল প্রোডাক্ট ফটো ম্যানিপুলেশন ও ড্রামাটিক লাইটিং'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৬',
        practicalProjects: ['ইন্টারন্যাশনাল ব্র্যান্ড কমার্শিয়াল আর্টওয়ার্ক']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: অ্যাডভান্সড ভেক্টর ইলাস্ট্রেশন ও আইডেন্টিটি',
        topics: [
          'কাস্টম টাইপোগ্রাফি ও লেটারিং ডিজাইন',
          'ম্যাসকট লোগো ও আইসোমেট্রিক ইলাস্ট্রেশন',
          'সম্পূর্ণ ৩০+ পাতার ব্র্যান্ড গাইডলাইন বুকলেট মেকিং'
        ],
        durationWeeks: 'সপ্তাহ ৭ - ১২',
        practicalProjects: ['সম্পূর্ণ মেগা ব্র্যান্ড ম্যানুয়াল']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: Figma দিয়ে ইউআই/ইউএক্স ও অ্যাপ ইন্টারফেস',
        topics: [
          'ইউজার রিসার্চ, ওয়্যারফ্রেমিং ও ইউজার ফ্লো ডিজাইন',
          'Figma অটো-লেআউট, কম্পোনেন্ট ভ্যারিয়েন্টস ও ইন্টারেক্টিভ প্রোটোটাইপিং',
          'রেসপনসিভ মোবাইল অ্যাপ ও ওয়েব ড্যাশবোর্ড ইউআই'
        ],
        durationWeeks: 'সপ্তাহ ১৩ - ১৮',
        practicalProjects: ['কমপ্লিট মোবাইল অ্যাপ ইউআই কেস স্টাডি']
      },
      {
        moduleNumber: 4,
        title: 'মডিউল ৪: হাই-টিকিট ফ্রিল্যান্সিং ও ডিরেক্ট ক্লায়েন্ট হান্টিং',
        topics: [
          'Upwork প্রজেক্ট ক্যাটালগ ও এন্টারপ্রাইজ ক্লায়েন্ট পিচিং',
          'LinkedIn ও Cold Emailing দিয়ে ডিরেক্ট বায়ার হান্টিং',
          'আন্তর্জাতিক কন্ট্রাক্ট সাইনিং ও পেমেন্ট গেটওয়ে'
        ],
        durationWeeks: 'সপ্তাহ ১৯ - ২৪',
        practicalProjects: ['লাইভ হাই-টিকিট বায়ার প্রপোজাল']
      }
    ]
  },
  {
    id: 'office-application-3m',
    title: 'বেসিক কম্পিউটার ও অফিস অ্যাপ্লিকেশন (৩ মাস)',
    category: 'office',
    badge: 'এককালীন ২,৫০০৳',
    duration: '৩ মাস (২৪টি ক্লাস + ল্যাব প্র্যাকটিস)',
    totalClasses: 24,
    totalHours: 48,
    regularFee: 4500,
    discountFee: 2500,
    rating: 4.9,
    reviewCount: 680,
    enrolledStudents: 4100,
    nextBatchDate: 'শুক্রবার ব্যতীত প্রতিদিন নিয়মিত ক্লাস চলছে',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'MS Word, Excel, PowerPoint, বাংলা/ইংরেজি দ্রুত টাইপিং ও অফিস ফাইল ম্যানেজমেন্ট। এককালীন পরিশোধে কোর্স ফি মাত্র ২,৫০০ টাকা। ক্লাস সময়সূচি: সকাল ১০:০০ - রাত ৮:০০।',
    instructor: {
      name: 'মো: রফিকুল ইসলাম',
      designation: 'সার্টিফাইড অফিস স্পেশালিস্ট ও একাডেমি মেন্টর',
      experience: '১২+ বছর কম্পিউটার ট্রেনিং অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'এককালীন পরিশোধ ফি: মাত্র ২,৫০০ টাকা (৩ মাস মেয়াদী)',
      'ক্লাস ও প্র্যাকটিস সময়সূচি: সকাল ১০:০০ টা - রাত ৮:০০ টা (ফ্লেক্সিবল ল্যাব)',
      'সপ্তাহে ৬ দিন ক্লাস (শুধুমাত্র শুক্রবার সাপ্তাহিক ছুটি, বাকি সব দিন চালু)',
      'বাংলা (Bijoy & Avro) ও ইংরেজি দ্রুত টাইপিং টেস্ট',
      'কারিগরি শিক্ষা বোর্ড মানসম্পন্ন ভেরিফায়েড সার্টিফিকেট প্রদান'
    ],
    toolsLearned: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Bijoy 52', 'Avro Keyboard', 'Google Docs', 'Email & Internet'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: কম্পিউটার হার্ডওয়্যার, উইন্ডোজ ও দ্রুত টাইপিং',
        topics: [
          'কম্পিউটারের বেসিক গঠন ও অপারেটিং সিস্টেম কন্ট্রোল',
          'ইংরেজি স্পর্শ টাইপিং ও ফিঙ্গার পজিশন গাইডলাইন',
          'বাংলা ইউনিকোড ও বিজয় কিবোর্ড দ্রুত টাইপিং',
          'ফোল্ডার অর্গানাইজেশন, ড্রাইভ ব্যাকআপ ও ফাইল এক্সটেনশন'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['মিনিটে ৪০+ শব্দ টাইপিং স্পিড টেস্ট']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: মাইক্রোসফট ওয়ার্ড ও কর্পোরেট ডকুমেন্টেশন',
        topics: [
          'অফিশিয়াল চিঠি, সিভিসহ সকল প্রকার দরখাস্ত তৈরি',
          'টেবিল ক্রিয়েশন, হেডার-ফুটার ও পেজ সেটআপ',
          'মেইল মার্জ (Mail Merge) দিয়ে স্বয়ংক্রিয় হাজারো চিঠি প্রিন্ট',
          'গ্রাফিক্স, শেইপ ও প্রফেশনাল বুক কভার/সিলেবাস তৈরি'
        ],
        durationWeeks: 'সপ্তাহ ৫ - ৮',
        practicalProjects: ['আন্তর্জাতিক মানের স্মার্ট সিভি/রেজুমে ও অফিস লেটারহেড']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: মাইক্রোসফট এক্সেল, পাওয়ারপয়েন্ট ও অফিস ম্যানেজমেন্ট',
        topics: [
          'এক্সেল ফর্মুলা (Sum, Average, If, Percentage, Filter)',
          'স্যালারি শিট, ইনভয়েস ও অ্যাকাউন্টিং রিপোর্ট তৈরি',
          'পাওয়ারপয়েন্ট অ্যানিমেশন দিয়ে প্রজেক্ট স্লাইড উপস্থাপন',
          'ইমেইল সেন্ডিং, সিসি/বিসিসি রুলস ও গুগল শিট কলাবোরেশন'
        ],
        durationWeeks: 'সপ্তাহ ৯ - ১২',
        practicalProjects: ['সম্পূর্ণ কোম্পানির অটোমেটেড স্যালারি ও ইনভেন্টরি শিট']
      }
    ]
  },
  {
    id: 'office-application-6m',
    title: 'কম্পিউটার অফিস অ্যাপ্লিকেশন ডিপ্লোমা (৬ মাস)',
    category: 'office',
    badge: 'এককালীন ৫,০০০৳',
    duration: '৬ মাস (৪৮টি ক্লাস + কারিগরি বোর্ড প্রস্তুতি)',
    totalClasses: 48,
    totalHours: 96,
    regularFee: 8500,
    discountFee: 5000,
    rating: 5.0,
    reviewCount: 390,
    enrolledStudents: 2450,
    nextBatchDate: 'শুক্রবার ব্যতীত প্রতিদিন নিয়মিত ক্লাস চলছে',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'অ্যাডভান্সড এক্সেল (VLOOKUP, Pivot), এক্সেস ডেটাবেস, গভর্নমেন্ট প্রজেক্ট ফাইল ও কারিগরি শিক্ষা বোর্ড সার্টিফিকেট প্রস্তুতি। এককালীন পরিশোধ ফি ৫,০০০ টাকা।',
    instructor: {
      name: 'মো: রফিকুল ইসলাম',
      designation: 'সার্টিফাইড অফিস স্পেশালিস্ট ও একাডেমি মেন্টর',
      experience: '১২+ বছর কম্পিউটার ট্রেনিং অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'এককালীন পরিশোধ ফি: ৫,০০০ টাকা (৬ মাস মেয়াদী ডিপ্লোমা)',
      'Advanced Excel (VLOOKUP, XLOOKUP, Nested IF, Pivot Table, Macro)',
      'MS Access ডেটাবেস রিলেশনশিপ ও কোয়েরি তৈরি',
      'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) পরীক্ষার ১০০% প্রস্তুতি',
      'সরকারি ও কর্পোরেট চাকরির পরীক্ষায় এগিয়ে থাকার নিশ্চয়তা'
    ],
    toolsLearned: ['MS Word Pro', 'Advanced Excel', 'MS PowerPoint Pro', 'MS Access Database', 'Google Sheets', 'BTEB Exam Kit'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: অ্যাডভান্সড ডকুমেন্টেশন ও প্রফেশনাল টাইপিং',
        topics: [
          'স্পর্শ টাইপিং স্পিড ৬০+ ডব্লিউপিএম অর্জন',
          'কমপ্লেক্স টেবিল, ফরম্যাট ও সরকারি নথি প্রস্তুতকরণ',
          'বই বাঁধাই ও লেআউট মাস্টারিং'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৮',
        practicalProjects: ['১০০ পাতার অফিশিয়াল সরকারি রিপোর্ট ও বুকলেট']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: অ্যাডভান্সড এক্সেল ও এমআইএস রিপোর্টিং',
        topics: [
          'VLOOKUP, XLOOKUP, INDEX-MATCH ও ডায়নামিক ফর্মুলা',
          'Pivot Table, Pivot Chart ও স্লাইসার ড্যাশবোর্ড',
          'ইনভেন্টরি ট্র্যাকিং, লাভ-ক্ষতি ও অটোমেটেড পেরোল'
        ],
        durationWeeks: 'সপ্তাহ ৯ - ১৬',
        practicalProjects: ['ফুল-ফাংশনাল এমআইএস ফাইন্যান্সিয়াল ড্যাশবোর্ড']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: ডেটাবেস ম্যানেজমেন্ট ও বিটিইবি পরীক্ষা প্রস্তুতি',
        topics: [
          'MS Access টেবিল, ফর্ম, কোয়েরি ও রিপোর্ট ডিজাইন',
          'রিলেশনাল ডেটাবেস স্ট্রাকচার ও ডাটা সিকিউরিটি',
          'বাংলাদেশ কারিগরি শিক্ষা বোর্ড বিগত বছরের প্রশ্ন সমাধান ও প্র্যাকটিক্যাল টেস্ট'
        ],
        durationWeeks: 'সপ্তাহ ১৭ - ২৪',
        practicalProjects: ['স্কুল/কোম্পানি ম্যানেজমেন্ট ডেটাবেস সিস্টেম']
      }
    ]
  },
  {
    id: 'office-application-outsourcing',
    title: 'অফিস অ্যাপ্লিকেশন + আউটসোর্সিং ও ফ্রিল্যান্সিং',
    category: 'office',
    badge: 'এককালীন ৬,০০০৳',
    duration: '৩.৫ মাস (২৮টি ক্লাস + মার্কেটপ্লেস)',
    totalClasses: 28,
    totalHours: 56,
    regularFee: 10000,
    discountFee: 6000,
    rating: 4.9,
    reviewCount: 275,
    enrolledStudents: 1580,
    nextBatchDate: '৫ই আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'কম্পিউটার অফিস অ্যাপ্লিকেশনের সাথে ভার্চুয়াল অ্যাসিস্ট্যান্ট, ডাটা এন্ট্রি, গুগল শিট অটোমেশন ও ফ্রিল্যান্সিং মার্কেটপ্লেস থেকে আয়ের সম্পূর্ণ গাইড। এককালীন ফি ৬,০০০ টাকা।',
    instructor: {
      name: 'মো: রফিকুল ইসলাম ও টিম',
      designation: 'অফিস অ্যাপ্লিকেশন স্পেশালিস্ট ও টপ ফ্রিল্যান্সার মেন্টর',
      experience: '১০+ বছর অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'এককালীন পরিশোধ ফি: মাত্র ৬,০০০ টাকা',
      'MS Office + Google Workspace (Docs, Sheets, Drive) অটোমেশন',
      'ভার্চুয়াল অ্যাসিস্ট্যান্ট (Virtual Assistant) ও ডাটা এন্ট্রি স্পেশালাইজেশন',
      'Fiverr ও Upwork মার্কেটপ্লেসে ডাটা সার্ভিস গিগ ও বায়ার হ্যান্ডলিং',
      'আন্তর্জাতিক পেমেন্ট উইথড্রয়াল সাপোর্ট'
    ],
    toolsLearned: ['MS Office Suite', 'Google Workspace', 'Trello/Asana', 'Fiverr', 'Upwork', 'Payoneer'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: অফিস অ্যাপ্লিকেশন ও ক্লাউড টুলস মাস্টারি',
        topics: [
          'অফিস ফাইল তৈরি, দ্রুত টাইপিং ও স্প্রেডশিট ক্যালকুলেশন',
          'Google Docs, Sheets, Forms ও Drive ক্লাউড শেয়ারিং',
          'পিডিএফ টু ওয়ার্ড/এক্সেল রূপান্তর ও ডাটা ক্লিনআপ'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৫',
        practicalProjects: ['ক্লাউড ডাটাবেস ও অটোমেটেড গুগল শিট']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: ভার্চুয়াল অ্যাসিস্ট্যান্ট ও ওয়েব রিসার্চ',
        topics: [
          'ইন্টারনেট রিসার্চ, লিড কালেকশন ও ইমেইল ফাইন্ডিং',
          'ক্যালেন্ডার ও ইমেইল ম্যানেজমেন্ট অ্যাসিস্ট্যান্স',
          'প্রজেক্ট ম্যানেজমেন্ট টুলস (Trello, Slack, Zoom) ব্যবহার'
        ],
        durationWeeks: 'সপ্তাহ ৬ - ৯',
        practicalProjects: ['রিয়েল ক্লায়েন্ট ভার্চুয়াল অ্যাসিস্ট্যান্ট প্রজেক্ট']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: মার্কেটপ্লেস আর্নিং ও আউটসোর্সিং গিগ',
        topics: [
          'Fiverr এ ডাটা এন্ট্রি ও VA গিগ ক্রিয়েশন ও এসইও',
          'Upwork ক্যাটালগ ও বায়ার কমিউনিকেশন',
          'ক্লায়েন্ট সন্তুষ্টি, ৫-স্টার রিভিউ ও পেমেন্ট ক্যাশ আউট'
        ],
        durationWeeks: 'সপ্তাহ ১০ - ১৪',
        practicalProjects: ['লাইভ ফ্রিল্যান্সিং গিগ ও বায়ার মেসেজ রিপ্লাই']
      }
    ]
  },
  {
    id: 'digital-marketing-outsourcing',
    title: 'ডিজিটাল মার্কেটিং + আউটসোর্সিং ও ক্যারিয়ার',
    category: 'marketing',
    badge: 'এককালীন ৭,০০০৳',
    duration: '৩.৫ মাস (২৮টি ক্লাস + লাইভ ক্যাম্পেইন)',
    totalClasses: 28,
    totalHours: 56,
    regularFee: 12000,
    discountFee: 7000,
    rating: 4.9,
    reviewCount: 340,
    enrolledStudents: 1720,
    nextBatchDate: '৫ই আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Facebook/Meta Ads, Google Search/Display Ads, SEO, Content Strategy, লিড জেনারেশন ও মার্কেটপ্লেস আউটসোর্সিং। এককালীন পরিশোধ ফি ৭,০০০ টাকা।',
    instructor: {
      name: 'নাদিয়া সুলতানা',
      designation: 'ডিজিটাল স্ট্র্যাটেজিস্ট ও গ্রোথ স্পেশালিস্ট',
      experience: '৭+ বছর মার্কেটিং এজেন্সি হেড',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'এককালীন পরিশোধ ফি: মাত্র ৭,০০০ টাকা',
      'মেটা অ্যাডস ম্যানেজার, পিক্সেল ট্র্যাকিং ও সেলস ফানেল',
      'সার্চ ইঞ্জিন অপটিমাইজেশন (SEO) ও কীওয়ার্ড রিসার্চ',
      'লোকাল বিজনেসের পাশাপাশি মার্কেটপ্লেসে ক্লায়েন্ট হান্টিং',
      'লাইফটাইম সাপোর্ট ও প্র্যাকটিক্যাল কেস স্টাডি'
    ],
    toolsLearned: ['Meta Ads Manager', 'Google Ads', 'Google Analytics 4', 'Ahrefs', 'Semrush', 'Mailchimp', 'Canva'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: সোশ্যাল মিডিয়া মার্কেটিং ও পেইড ক্যাম্পেইন',
        topics: [
          'Facebook ও Instagram বিজনেস পেজ অপটিমাইজেশন',
          'টার্গেটেড অডিয়েন্স ক্রিয়েশন, রিটার্গেটিং ও পিক্সেল সেটআপ',
          'সেলস ফানেল স্ট্র্যাটেজি ও হাই-কনভার্টিং কপিরাইটিং',
          'ক্যাম্পেইন বাজেট অপটিমাইজেশন (CBO) ও A/B টেস্টিং'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['ই-কমার্স ব্র্যান্ডের জন্য লাইভ সেলস অ্যাড ক্যাম্পেইন']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)',
        topics: [
          'কীওয়ার্ড রিসার্চ ও কম্পিটিটর অ্যানালাইসিস',
          'অন-পেজ এসইও (মেটা ট্যাগ, হেডিং, ইমেজ অল্ট ট্যাগ)',
          'টেকনিক্যাল এসইও (সাইটস্পিড, সাইটম্যাপ, রোবটস.টেক্সট)',
          'হাই-কোয়ালিটি ব্যাকলিংক স্ট্র্যাটেজি ও গেস্ট পোস্টিং'
        ],
        durationWeeks: 'সপ্তাহ ৫ - ৮',
        practicalProjects: ['ওয়েবসাইট এসইও অডিট রিপোর্ট ও র‍্যাংকিং কেস']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: গুগল অ্যাডস ও মার্কেটপ্লেস ফ্রিল্যান্সিং',
        topics: [
          'Google Search Ads, Video/YouTube Ads সেটআপ',
          'Google Analytics 4 এবং Google Tag Manager ট্র্যাকিং',
          'লিড জেনারেশন ও ক্লায়েন্ট হান্টিং মেথড',
          'Fiverr ও Upwork এ ডিজিটাল মার্কেটিং সার্ভিস সেল'
        ],
        durationWeeks: 'সপ্তাহ ৯ - ১৪',
        practicalProjects: ['গুগল সার্চ অ্যাড ক্যাম্পেইন ও ক্লায়েন্ট পিচ ডেক']
      }
    ]
  },
  {
    id: 'video-editing-outsourcing',
    title: 'প্রফেশনাল ভিডিও এডিটিং + আউটসোর্সিং',
    category: 'multimedia',
    badge: 'এককালীন ১০,০০০৳',
    duration: '৩.৫ মাস (২৮টি ক্লাস + প্রজেক্ট)',
    totalClasses: 28,
    totalHours: 56,
    regularFee: 16000,
    discountFee: 10000,
    rating: 4.9,
    reviewCount: 230,
    enrolledStudents: 1140,
    nextBatchDate: '৮ই আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Adobe Premiere Pro, After Effects, CapCut Pro, ইউটিউব কনটেন্ট ক্রিয়েশন, সিনেমাটিক কাটিং ও বিদেশি ক্লায়েন্টদের জন্য আউটসোর্সিং। এককালীন পরিশোধ ফি ১০,০০০ টাকা।',
    instructor: {
      name: 'সাকিব আরমান',
      designation: 'ভিডিও প্রডিউসার ও মোশন ডিজাইনার',
      experience: '৬+ বছর মিডিয়া হাউজ ও কনটেন্ট স্টুডিও',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'এককালীন পরিশোধ ফি: মাত্র ১০,০০০ টাকা',
      'সিনেমাটিক কালার গ্রেডিং, সাউন্ড এফেক্টস ও ভাইরাল কাটিং ট্রিকস',
      'After Effects দিয়ে লোগো অ্যানিমেশন ও মোশন গ্রাফিক্স',
      'ইউটিউব ও সোশ্যাল মিডিয়া কনটেন্ট মনিটাইজেশন',
      'আন্তর্জাতিক ফ্রিল্যান্সিং মার্কেটপ্লেস ও ডিরেক্ট ক্লায়েন্ট প্রজেক্ট'
    ],
    toolsLearned: ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut Pro', 'Adobe Audition', 'Fiverr', 'Upwork'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: প্রিমিয়ার প্রো ফান্ডামেন্টালস ও কাটিং স্টাইল',
        topics: [
          'টাইমলাইন ম্যানেজমেন্ট, সিকোয়েন্স ও শর্টকাটস',
          'বি-রোল সিলেকশন, জ্যাম্প কাট ও ম্যাচ কাট টেকনিক',
          'গ্রিন স্ক্রিন রিমুভ ও ক্রোমা কি মাস্টারিং',
          'অডিও নয়েজ রিমুভাল ও ব্যাকগ্রাউন্ড মিউজিক সিঙ্কিং'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['ইউটিউব ব্লগ এডিটিং', 'সোশ্যাল মিডিয়া ভাইরাল শর্ট ভিডিও']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: কালার গ্রেডিং ও আফটার ইফেক্টস মোশন',
        topics: [
          'Lumetri Color দিয়ে সিনেমাটিক LUT ও স্কিন টোন কারেকশন',
          'After Effects ইন্টারফেস ও কিফ্রেম অ্যানিমেশন',
          'কাইনেটিক টাইপোগ্রাফি ও ট্রেন্ডি টেক্সট এফেক্টস',
          'লোগো রিভিল ও সাবস্ক্রাইব বাটন অ্যানিমেশন'
        ],
        durationWeeks: 'সপ্তাহ ৫ - ৮',
        practicalProjects: ['কর্পোরেট প্রমোশনাল ভিডিও', '3D লোগো মোশন ওপেনার']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: কমার্শিয়াল প্রজেক্ট ও ফ্রিল্যান্সিং',
        topics: [
          'প্রোডাক্ট অ্যাডভার্টাইজমেন্ট এডিটিং',
          'ফাইনাল রেন্ডারিং এক্সপোর্ট সেটিংস (4K / Full HD 60fps)',
          'Fiverr ও Upwork এ ভিডিও এডিটর হিসেবে কাজ পাওয়া',
          'রিমোট ক্লায়েন্টদের সাথে ফাইল আদান-প্রদান সিস্টেম'
        ],
        durationWeeks: 'সপ্তাহ ৯ - ১৪',
        practicalProjects: ['টেলিভিশন/ডিজিটাল কমার্শিয়াল অ্যাড শোরেল']
      }
    ]
  },
  {
    id: 'fullstack-web-development',
    title: 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট (MERN Stack)',
    category: 'web',
    badge: 'হাই-ডিমান্ড স্কিল',
    duration: '৬ মাস (৪৮টি ক্লাস + মেগা প্রজেক্ট)',
    totalClasses: 48,
    totalHours: 96,
    regularFee: 18000,
    discountFee: 8500,
    rating: 5.0,
    reviewCount: 290,
    enrolledStudents: 980,
    nextBatchDate: '১০ই আগামী মাস',
    batchType: 'অনলাইন ও অফলাইন',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'HTML, CSS, Tailwind, JavaScript, React.js, Node.js, Express এবং MongoDB দিয়ে তৈরি করুন ডায়নামিক ওয়েব অ্যাপ্লিকেশন। এককালীন ফি ৮,৫০০ টাকা।',
    instructor: {
      name: 'ইঞ্জি: মেহরাব হোসেন',
      designation: 'প্রিন্সিপাল সফটওয়্যার ইঞ্জিনিয়ার ও টেক ট্রেইনার',
      experience: '১০+ বছরের সফটওয়্যার ডেভেলপমেন্ট অভিজ্ঞতা',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    features: [
      'এককালীন অফার ফি: ৮,৫০০ টাকা (৬ মাস মেয়াদী)',
      '৫টি মেগা লাইভ প্রজেক্ট (ই-কমার্স, লার্নিং পোর্টাল, ড্যাশবোর্ড)',
      'গিট ও গিটহাব প্রফেশনাল ভার্সন কন্ট্রোল কোডিং',
      'রেস্ট এপিআই ও মডার্ন অথেনটিকেশন আর্কিটেকচার',
      'সরাসরি সফটওয়্যার কোম্পানিতে ইন্টার্নশিপ ও জব সাপোর্ট'
    ],
    toolsLearned: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ES6+', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git/GitHub', 'Vercel'],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'মডিউল ১: ফ্রন্টএন্ড ফাউন্ডেশন ও রেসপনসিভ ওয়েব ডিজাইন',
        topics: [
          'HTML5 সেমান্টিক ট্যাগ ও মডার্ন স্ট্রাকচারিং',
          'CSS3 ফ্লেক্সবক্স, সিএসএস গ্রিড ও অ্যানিমেশন',
          'Tailwind CSS দিয়ে আল্ট্রা ফাস্ট রেসপনসিভ লেআউট',
          'মোবাইল-ফার্স্ট ডিজাইন প্রিন্সিপালস'
        ],
        durationWeeks: 'সপ্তাহ ১ - ৪',
        practicalProjects: ['রেস্টুরেন্ট ল্যান্ডিং পেজ', 'এজেন্সি পোর্টফোলিও ওয়েবসাইট']
      },
      {
        moduleNumber: 2,
        title: 'মডিউল ২: জাভাস্ক্রিপ্ট ও রিয়্যাক্ট ফ্রেমওয়ার্ক',
        topics: [
          'জাভাস্ক্রিপ্ট কোর কনসেপ্ট, অ্যারে মেথড ও DOM ম্যানিপুলেশন',
          'ES6+ সিনট্যাক্স, Async/Await ও Fetch API',
          'React কম্পোনেন্ট আর্কিটেকচার, হুকস (useState, useEffect, useContext)',
          'React Router DOM, স্টেট ম্যানেজমেন্ট ও কাস্টম হুক'
        ],
        durationWeeks: 'সপ্তাহ ৫ - ১২',
        practicalProjects: ['রিয়েল-টাইম ওয়েদার অ্যাপ', 'মুভি ডাটাবেস এক্সপ্লোরার']
      },
      {
        moduleNumber: 3,
        title: 'মডিউল ৩: ব্যাকএন্ড, ডেটাবেস ও ফুল-স্ট্যাক ইন্টিগ্রেশন',
        topics: [
          'Node.js রানটাইম ও Express.js ফ্রেমওয়ার্ক সেটআপ',
          'MongoDB ডেটাবেস ডিজাইন, স্কিমা ও Mongoose কোয়েরি',
          'JWT অথেনটিকেশন, রোল-বেসড এক্সেস কন্ট্রোল (RBAC)',
          'পেমেন্ট গেটওয়ে ইন্টিগ্রেশন (bKash / Stripe)'
        ],
        durationWeeks: 'সপ্তাহ ১৩ - ২০',
        practicalProjects: ['ফুলস্ট্যাক ই-কমার্স স্টোর উইথ পেমেন্ট ও এডমিন প্যানেল']
      },
      {
        moduleNumber: 4,
        title: 'মডিউল ৪: ডেপ্লয়মেন্ট ও ক্যারিয়ার রেডিনেস',
        topics: [
          'Vercel, Render ও Cloud Run এ ওয়েবসাইট লাইভ করা',
          'কোডিং স্ট্যান্ডার্ড, ক্লিন কোড ও অপটিমাইজেশন',
          'আন্তর্জাতিক রিমোট জব অ্যাপ্লিকেশন গাইডলাইন',
          'টেক ইন্টারভিউ প্রস্তুতি ও মক ইন্টারভিউ'
        ],
        durationWeeks: 'সপ্তাহ ২১ - ২৪',
        practicalProjects: ['কাস্টম SaaS অ্যাপ ও লাইভ ডেপ্লয়মেন্ট']
      }
    ]
  }
];

