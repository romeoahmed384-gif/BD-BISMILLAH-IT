export interface CourseModule {
  moduleNumber: number;
  title: string;
  topics: string[];
  durationWeeks: string;
  practicalProjects: string[];
}

export interface Course {
  id: string;
  serialNo: string;
  title: string;
  category: 'all' | 'design' | 'web' | 'marketing' | 'office' | 'multimedia' | 'special' | 'language' | 'engineering';
  badge: string;
  duration: string;
  totalClasses: number;
  totalHours: number;
  regularFee: number;
  discountFee: number;
  rating: number;
  reviewCount: number;
  enrolledStudents: number;
  nextBatchDate: string;
  batchType: 'অনলাইন ও অফলাইন' | 'অনলাইন' | 'অফলাইন';
  image: string;
  shortDescription: string;
  instructor: {
    name: string;
    designation: string;
    experience: string;
    avatar: string;
  };
  features: string[];
  toolsLearned: string[];
  syllabus: CourseModule[];
}

export interface SuccessStory {
  id: string;
  studentName: string;
  photo: string;
  courseTaken: string;
  batchNo: string;
  currentRole: string;
  workplaceOrPlatform: string;
  monthlyEarnings: string;
  quote: string;
  portfolioUrl?: string;
  videoUrl?: string;
  badge: string;
}

export interface Branch {
  id: number;
  name: string;
  branchTag: string;
  isFourthBranch?: boolean;
  isEighthBranch?: boolean;
  address: string;
  landmark: string;
  phone: string;
  whatsapp: string;
  email: string;
  manager: string;
  timing: string;
  mapEmbedUrl: string;
  googleMapsUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface EventSeminar {
  id: string;
  title: string;
  category: 'ফ্রি সেমিনার' | 'ওয়ার্কশপ' | 'ক্যারিয়ার বুটক্যাম্প';
  date: string;
  time: string;
  location: string;
  speaker: string;
  speakerRole: string;
  seatsTotal: number;
  seatsBooked: number;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  rating: number;
  comment: string;
  avatar: string;
  placedCompany?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface CertificateData {
  certificateId: string;
  studentName: string;
  studentRoll: string;
  courseName: string;
  issueDate: string;
  grade: string;
  duration: string;
  centerBranch: string;
  status: 'সফলভাবে ভেরিফায়েড' | 'অকার্যকর';
}
