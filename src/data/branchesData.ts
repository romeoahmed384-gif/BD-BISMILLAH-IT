import { Branch } from '../types';

export const FACEBOOK_PAGE_URL = 'https://www.facebook.com/bdbcit';
export const OFFICIAL_GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScDKuEuqnUbupBDjY36KqnCGm2upIef9YG8VMYNsS402th7jA/viewform';
export const FOURTH_BRANCH_WHATSAPP = '8801730880560';
export const FOURTH_BRANCH_PHONE = '01730-880553';
export const FOURTH_BRANCH_WHATSAPP_DISPLAY = '01730-880560';
export const EIGHTH_BRANCH_PHONE = '01969-802385';
export const MAIN_BRANCH_PHONE = '01730-880551';
export const THIRD_BRANCH_PHONE = '01730-880552';

export const BRANCHES_DATA: Branch[] = [
  {
    id: 1,
    name: '১ম ব্রাঞ্চ (মেইন ব্রাঞ্চ) - খালিশপুর ফায়ার সার্ভিস এলাকা',
    branchTag: 'প্রধান ক্যাম্পাস ও সেন্ট্রাল এডমিশন হেড অফিস',
    address: 'খালিশপুর ফায়ার সার্ভিস সংলগ্ন এলাকা, খালিশপুর, খুলনা',
    landmark: 'খালিশপুর ফায়ার সার্ভিস মোড়',
    phone: '01730880551',
    whatsapp: '8801730880560',
    email: 'khalishpur@bdbcit.com',
    manager: 'খুলনা সেন্ট্রাল ক্যাম্পাস টিম',
    timing: 'সকাল ১০:০০ টা - রাত ৮:০০ টা (শুক্রবার ব্যতিত প্রতিদিন খোলা)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Khalishpur%20Khulna%20Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 3,
    name: '৩য় ব্রাঞ্চ - সরকারি আযম খান কমার্স কলেজ এলাকা',
    branchTag: 'আযম খান কমার্স কলেজ ক্যাম্পাস ও আইটি ল্যাব',
    address: 'সরকারি আযম খান কমার্স কলেজ এলাকা, বাবুখান রোড, খুলনা',
    landmark: 'সরকারি আযম খান কমার্স কলেজের সন্নিকটে',
    phone: '01730880552',
    whatsapp: '8801730880560',
    email: 'azamkhan@bdbcit.com',
    manager: 'ব্রাঞ্চ ইন-চার্জ (কমার্স কলেজ শাখা)',
    timing: 'সকাল ১০:০০ টা - রাত ৮:০০ টা (শুক্রবার ব্যতিত প্রতিদিন খোলা)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Govt%20Azam%20Khan%20Commerce%20College%20Khulna&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 4,
    name: '৪র্থ ব্রাঞ্চ - সরকারি বি এল কলেজ ১ নম্বর গেট এলাকা',
    branchTag: 'বিএল কলেজ ১নং গেট ক্যাম্পাস',
    isFourthBranch: false,
    address: 'সরকারি বি এল কলেজ ১ নম্বর গেট এলাকা, দৌলতপুর, খুলনা',
    landmark: 'সরকারি বি এল কলেজ ১নং মেইন গেট সংলগ্ন',
    phone: '01730880553',
    whatsapp: '8801730880560',
    email: 'blcollege@bdbcit.com',
    manager: 'মো: আব্দুল্লাহ (কো-অর্ডিনেটর)',
    timing: 'সকাল ১০:০০ টা - রাত ৮:০০ টা (শুক্রবার ব্যতিত প্রতিদিন খোলা)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Govt%20BL%20College%20Khulna&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 8,
    name: '৮ম ব্রাঞ্চ - খুলনা বয়রা মডেল স্কুল এন্ড কলেজ এলাকা',
    branchTag: 'বয়রা মডেল ক্যাম্পাস ও প্রধান হেল্পডেস্ক হাব',
    isEighthBranch: true,
    address: 'খুলনা বয়রা মডেল স্কুল এন্ড কলেজ এলাকা, বয়রা মেইন রোড, খুলনা',
    landmark: 'বয়রা মডেল স্কুল এন্ড কলেজের সন্নিকটে',
    phone: '01969802385',
    whatsapp: '8801730880560',
    email: 'boyra@bdbcit.com',
    manager: 'ট্রেনিং কো-অর্ডিনেটর (বয়রা শাখা)',
    timing: 'সকাল ১০:০০ টা - রাত ৮:০০ টা (শুক্রবার ব্যতিত প্রতিদিন খোলা)',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Khulna%20Boyra%20Model%20School%20and%20College&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
];

