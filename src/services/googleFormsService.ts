// Client-side Google Identity Services (GIS) Token Client for Google Forms & Google Drive
// Scopes: https://www.googleapis.com/auth/forms.body, https://www.googleapis.com/auth/drive.file

import { OFFICIAL_GOOGLE_FORM_URL } from '../data/branchesData';

declare global {
  interface Window {
    google?: any;
    gapi?: any;
  }
}

export interface GoogleFormCreationResult {
  formId: string;
  responderUri: string; // The public shareable URL for students to fill out
  editUri: string;      // The creator edit URL
  title: string;
}

export interface StudentFormData {
  fullName: string;
  phone: string;
  email?: string;
  courseTitle: string;
  courseFee: number;
  branchName: string;
  batchMode: string;
  shiftPreference: string;
  address?: string;
  paymentMethod: string;
  admissionTrackingId: string;
  submittedAt: string;
}

const FORMS_SCOPE = 'https://www.googleapis.com/auth/forms.body https://www.googleapis.com/auth/drive.file';

class GoogleFormsService {
  private tokenClient: any = null;
  private accessToken: string | null = null;
  private tokenExpiresAt: number = 0;
  private cachedFormInfo: GoogleFormCreationResult | null = {
    formId: '1FAIpQLScDKuEuqnUbupBDjY36KqnCGm2upIef9YG8VMYNsS402th7jA',
    responderUri: OFFICIAL_GOOGLE_FORM_URL,
    editUri: 'https://docs.google.com/forms/d/1FAIpQLScDKuEuqnUbupBDjY36KqnCGm2upIef9YG8VMYNsS402th7jA/edit',
    title: 'বিডি বিসমিল্লাহ আইটি সেন্টার - অফিশিয়াল গুগল ভর্তি ও স্কলারশিপ ফরম (খুলনা শাখা)',
  };

  constructor() {
    // Load cached form details from localStorage if available
    const saved = localStorage.getItem('bdbcit_google_form_info');
    if (saved) {
      try {
        this.cachedFormInfo = JSON.parse(saved);
      } catch (e) {
        // ignore
      }
    }
  }

  public getCachedForm(): GoogleFormCreationResult | null {
    return this.cachedFormInfo;
  }

  public setCachedForm(info: GoogleFormCreationResult) {
    this.cachedFormInfo = info;
    localStorage.setItem('bdbcit_google_form_info', JSON.stringify(info));
  }

  // Ensure Google Identity Services script is loaded
  private async loadGisScript(): Promise<void> {
    if (window.google?.accounts?.oauth2) {
      return;
    }

    return new Promise((resolve, reject) => {
      const existingScript = document.getElementById('google-gis-script');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve());
        return;
      }

      const script = document.createElement('script');
      script.id = 'google-gis-script';
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Google Identity Services SDK লোড হতে ব্যর্থ হয়েছে'));
      document.head.appendChild(script);
    });
  }

  // Request OAuth Access Token
  public async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiresAt - 60000) {
      return this.accessToken;
    }

    await this.loadGisScript();

    const clientId = ((import.meta as any).env?.VITE_GOOGLE_CLIENT_ID) || '745923438835-m20956m0lke1e93t69t37t9l7r0p920d.apps.googleusercontent.com'; // fallback standard

    return new Promise((resolve, reject) => {
      try {
        this.tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: FORMS_SCOPE,
          callback: (response: any) => {
            if (response.error) {
              reject(new Error(`OAuth Error: ${response.error}`));
              return;
            }
            this.accessToken = response.access_token;
            // expires_in in seconds
            const expiresIn = Number(response.expires_in) || 3599;
            this.tokenExpiresAt = Date.now() + expiresIn * 1000;
            resolve(this.accessToken!);
          },
        });

        this.tokenClient.requestAccessToken({ prompt: '' });
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Create a comprehensive, beautifully structured Google Form for BD Bismillah IT Center Student Admission
   */
  public async createAdmissionGoogleForm(token?: string): Promise<GoogleFormCreationResult> {
    const activeToken = token || (await this.getAccessToken());

    // 1. Create Initial Google Form
    const createRes = await fetch('https://forms.googleapis.com/v1/forms', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${activeToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        info: {
          title: 'বিডি বিসমিল্লাহ আইটি সেন্টার - শিক্ষার্থী ভর্তি ও স্কলারশিপ ফরম (খুলনা শাখা)',
          documentTitle: 'বিডি বিসমিল্লাহ আইটি - অনলাইন ভর্তি ফরম',
        },
      }),
    });

    if (!createRes.ok) {
      const errText = await createRes.text();
      throw new Error(`Google Form তৈরি করা যায়নি: ${errText}`);
    }

    const formMeta = await createRes.json();
    const formId = formMeta.formId;
    const responderUri = formMeta.responderUri;
    const editUri = `https://docs.google.com/forms/d/${formId}/edit`;

    // 2. Batch Update to add formatted questions, descriptions, dropdowns, and text fields
    const batchUpdatePayload = {
      requests: [
        // Update Form Description
        {
          updateFormInfo: {
            info: {
              description: 
                'বিডি বিসমিল্লাহ কম্পিউটার এন্ড আইটি সেন্টার (স্কিল ডেভেলপমেন্ট ও ক্যারিয়ার মেকিং সেন্টার, খুলনা)\n' +
                '📍 খুলনার নিজস্ব ৪টি আধুনিক ক্যাম্পাস: খালিশপুর, সরকারি আযম খান কমার্স কলেজ, সরকারি বি এল কলেজ ১নং গেট ও বয়রা মডেল স্কুল এন্ড কলেজ এলাকা।\n' +
                '⏰ অফিস ও ক্লাস সময়সূচি: সকাল ১০:০০ টা থেকে রাত ৮:০০ টা পর্যন্ত (শুক্রবার ব্যতীত সপ্তাহে ৬ দিন নিয়মিত খোলা)।\n' +
                '📞 হেল্পলাইন: 01969802385 (৮ম ব্রাঞ্চ) | 01730880553 (৪র্থ ব্রাঞ্চ WhatsApp: 01730880560) | ফেসবুক: www.facebook.com/bdbcit\n\n' +
                'দয়া করে আপনার সঠিক তথ্য দিয়ে নিচের ফরমটি পূরণ করুন। আমাদের এডমিশন টিম আপনার সাথে দ্রুত যোগাযোগ করবে।',
            },
            updateMask: 'description',
          },
        },
        // 1. Student Full Name
        {
          createItem: {
            item: {
              title: '১. শিক্ষার্থীর পূর্ণ নাম (Full Name)',
              description: 'বাংলা অথবা ইংরেজিতে আপনার সম্পূর্ণ নাম লিখুন',
              questionItem: {
                question: {
                  required: true,
                  textQuestion: {
                    paragraph: false,
                  },
                },
              },
            },
            location: { index: 0 },
          },
        },
        // 2. Phone / WhatsApp Number
        {
          createItem: {
            item: {
              title: '২. মোবাইল ও হোয়াটসঅ্যাপ নম্বর (Phone Number)',
              description: '১১ ডিজিটের সচল মোবাইল নম্বর (যাতে এসএমএস ও হোয়াটসঅ্যাপ কল দেওয়া যায়)',
              questionItem: {
                question: {
                  required: true,
                  textQuestion: {
                    paragraph: false,
                  },
                },
              },
            },
            location: { index: 1 },
          },
        },
        // 3. Email Address
        {
          createItem: {
            item: {
              title: '৩. ইমেইল এড্রেস (Email Address)',
              description: 'আপনার ব্যক্তিগত জিমেইল বা ইমেইল ঠিকানা (ঐচ্ছিক)',
              questionItem: {
                question: {
                  required: false,
                  textQuestion: {
                    paragraph: false,
                  },
                },
              },
            },
            location: { index: 2 },
          },
        },
        // 4. Course Selection
        {
          createItem: {
            item: {
              title: '৪. যে কোর্সে ভর্তি হতে চান (Select Desired Course)',
              description: 'বিডি বিসমিল্লাহ আইটি সেন্টারের অফিশিয়াল কোর্সসমূহ ও এককালীন পরিশোধ ফি:',
              questionItem: {
                question: {
                  required: true,
                  choiceQuestion: {
                    type: 'RADIO',
                    options: [
                      { value: 'প্রফেশনাল গ্রাফিক্স ডিজাইন ও ফ্রিল্যান্সিং - ৩ মাস (এককালীন ফি: ৯,০০০ টাকা)' },
                      { value: 'প্রফেশনাল গ্রাফিক্স ডিজাইন ও অ্যাডভান্সড ইউআই/ইউএক্স - ৬ মাস (এককালীন ফি: ১৮,০০০ টাকা)' },
                      { value: 'বেসিক কম্পিউটার ও অফিস অ্যাপ্লিকেশন - ৩ মাস (এককালীন ফি: ২,৫০০ টাকা)' },
                      { value: 'কম্পিউটার অফিস অ্যাপ্লিকেশন ডিপ্লোমা - ৬ মাস (এককালীন ফি: ৫,০০০ টাকা)' },
                      { value: 'অফিস অ্যাপ্লিকেশন + আউটসোর্সিং ও ফ্রিল্যান্সিং (এককালীন ফি: ৬,০০০ টাকা)' },
                      { value: 'ডিজিটাল মার্কেটিং + আউটসোর্সিং ও ক্যারিয়ার (এককালীন ফি: ৭,০০০ টাকা)' },
                      { value: 'প্রফেশনাল ভিডিও এডিটিং + আউটসোর্সিং (এককালীন ফি: ১০,০০০ টাকা)' },
                      { value: 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট (MERN Stack) - ৬ মাস (অফার ফি: ৮,৫০০ টাকা)' },
                    ],
                  },
                },
              },
            },
            location: { index: 3 },
          },
        },
        // 5. Preferred Khulna Campus (Branch)
        {
          createItem: {
            item: {
              title: '৫. খুলনার কোন ব্রাঞ্চে ক্লাস করতে চান? (Select Branch)',
              description: 'আপনার সুবিধাজনক ক্যাম্পাস নির্বাচন করুন:',
              questionItem: {
                question: {
                  required: true,
                  choiceQuestion: {
                    type: 'RADIO',
                    options: [
                      { value: '৮ম ব্রাঞ্চ - খুলনা বয়রা মডেল স্কুল এন্ড কলেজ এলাকা (হেল্পলাইন: 01969802385)' },
                      { value: '৪র্থ ব্রাঞ্চ - সরকারি বি এল কলেজ ১নং গেট এলাকা, দৌলতপুর (WhatsApp: 01730880560 / 01730880553)' },
                      { value: '১ম ব্রাঞ্চ (মেইন ব্রাঞ্চ) - খালিশপুর ফায়ার সার্ভিস এলাকা (ফোন: 01730880551)' },
                      { value: '৩য় ব্রাঞ্চ - সরকারি আযম খান কমার্স কলেজ এলাকা (ফোন: 01730880552)' },
                    ],
                  },
                },
              },
            },
            location: { index: 4 },
          },
        },
        // 6. Class Mode
        {
          createItem: {
            item: {
              title: '৬. ক্লাসের মাধ্যম (Class Mode)',
              questionItem: {
                question: {
                  required: true,
                  choiceQuestion: {
                    type: 'RADIO',
                    options: [
                      { value: 'অফলাইন ল্যাব ব্যাচ (সরাসরি ব্রাঞ্চে প্র্যাকটিক্যাল ল্যাব)' },
                      { value: 'অনলাইন লাইভ ব্যাচ (Zoom / Google Meet ও লাইভ সাপোর্ট)' },
                    ],
                  },
                },
              },
            },
            location: { index: 5 },
          },
        },
        // 7. Shift & Time Preference
        {
          createItem: {
            item: {
              title: '৭. ক্লাসের সময়সূচি ও শিফট (Preferred Shift: সকাল ১০:০০ - রাত ৮:০০)',
              description: 'শুক্রবার ব্যতীত সপ্তাহে ৬ দিন নিয়মিত খোলা:',
              questionItem: {
                question: {
                  required: true,
                  choiceQuestion: {
                    type: 'RADIO',
                    options: [
                      { value: 'সকাল শিফট (সকাল ১০:০০ টা - দুপুর ০১:০০ টা)' },
                      { value: 'বিকাল শিফট (দুপুর ০২:০০ টা - বিকাল ০৫:০০ টা)' },
                      { value: 'সন্ধ্যা শিফট (বিকাল ০৫:০০ টা - রাত ০৮:০০ টা)' },
                      { value: 'ফ্লেক্সিবল ল্যাব প্র্যাকটিস (যে কোনো সুবিধাজনক সময়ে)' },
                    ],
                  },
                },
              },
            },
            location: { index: 6 },
          },
        },
        // 8. Present Address
        {
          createItem: {
            item: {
              title: '৮. বর্তমান ঠিকানা / এলাকা (Present Address)',
              description: 'আপনার বাসা বা বর্তমান এলাকা (যেমন: খালিশপুর, বয়রা, সোনাডাঙ্গা, দৌলতপুর ইত্যাদি)',
              questionItem: {
                question: {
                  required: false,
                  textQuestion: {
                    paragraph: true,
                  },
                },
              },
            },
            location: { index: 7 },
          },
        },
        // 9. Payment Method
        {
          createItem: {
            item: {
              title: '৯. ফি প্রদানের পছন্দের মাধ্যম (Payment Method)',
              questionItem: {
                question: {
                  required: true,
                  choiceQuestion: {
                    type: 'RADIO',
                    options: [
                      { value: 'বিকাশ (bKash) - 01730880560' },
                      { value: 'নগদ (Nagad) - 01730880560' },
                      { value: 'রকেট (Rocket) - 01730880560' },
                      { value: 'সরাসরি ব্রাঞ্চের ক্যাশ কাউন্টারে এসে প্রদান করব' },
                    ],
                  },
                },
              },
            },
            location: { index: 8 },
          },
        },
        // 10. Additional Note / Questions
        {
          createItem: {
            item: {
              title: '১০. আপনার কোনো বিশেষ প্রশ্ন বা মতামত থাকলে লিখুন (Optional)',
              questionItem: {
                question: {
                  required: false,
                  textQuestion: {
                    paragraph: true,
                  },
                },
              },
            },
            location: { index: 9 },
          },
        },
      ],
    };

    const updateRes = await fetch(`https://forms.googleapis.com/v1/forms/${formId}:batchUpdate`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${activeToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(batchUpdatePayload),
    });

    if (!updateRes.ok) {
      console.warn('Batch update error, form was created with title:', await updateRes.text());
    }

    const result: GoogleFormCreationResult = {
      formId,
      responderUri,
      editUri,
      title: 'বিডি বিসমিল্লাহ আইটি সেন্টার - শিক্ষার্থী ভর্তি ও স্কলারশিপ ফরম (খুলনা শাখা)',
    };

    this.setCachedForm(result);
    return result;
  }
}

export const googleFormsService = new GoogleFormsService();
