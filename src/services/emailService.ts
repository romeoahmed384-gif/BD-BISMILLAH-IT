import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'KMhJ7V0pbOLdr95Os',
  SERVICE_ID: 'service_fatlban',
  TEMPLATE_ID: 'template_8n560ek',
};

export interface RegistrationEmailData {
  name: string;
  phone: string;
  email?: string;
  course?: string;
  branch?: string;
  message?: string;
  shift?: string;
  batchMode?: string;
  paymentMethod?: string;
  trackingRoll?: string;
  address?: string;
}

/**
 * Sends registration/admission form submissions directly to the administrator's Gmail via EmailJS.
 * Compatible with all common template parameter names:
 * {{name}}, {{from_name}}, {{user_name}}
 * {{phone}}, {{user_phone}}, {{contact_number}}
 * {{email}}, {{user_email}}, {{reply_to}}
 * {{course}}, {{branch}}, {{branch_course}}, {{course_name}}
 * {{message}}, {{address}}, {{shift}}, {{payment_method}}
 */
export const sendRegistrationEmail = async (data: RegistrationEmailData) => {
  const branchCourseCombo = [
    data.branch ? `ব্রাঞ্চ: ${data.branch}` : '',
    data.course ? `কোর্স: ${data.course}` : ''
  ].filter(Boolean).join(' | ');

  const assembledMessage = data.message?.trim() 
    ? data.message 
    : `অনলাইন রেজিস্ট্রেশন আবেদন।\nকোর্স: ${data.course || 'N/A'}\nব্রাঞ্চ: ${data.branch || 'N/A'}\nশিফট: ${data.shift || 'N/A'}\nক্লাস মোড: ${data.batchMode || 'N/A'}\nপেমেন্ট মেথড: ${data.paymentMethod || 'N/A'}\nঠিকানা: ${data.address || 'N/A'}\nরেজিস্ট্রেশন রোল: ${data.trackingRoll || 'N/A'}`;

  const templateParams: Record<string, string> = {
    // Primary fields as requested
    name: data.name,
    phone: data.phone,
    email: data.email?.trim() || 'প্রদান করা হয়নি',
    course: data.course || '',
    branch: data.branch || '',
    branch_course: branchCourseCombo || `${data.branch || ''} - ${data.course || ''}`,
    message: assembledMessage,

    // Secondary & Aliased fields to ensure 100% template compatibility
    from_name: data.name,
    user_name: data.name,
    user_phone: data.phone,
    contact_number: data.phone,
    user_email: data.email?.trim() || 'noreply@bdbcit.com',
    reply_to: data.email?.trim() || '',
    course_name: data.course || '',
    branch_name: data.branch || '',
    student_roll: data.trackingRoll || '',
    shift: data.shift || '',
    batch_mode: data.batchMode || '',
    payment_method: data.paymentMethod || '',
    address: data.address || '',
    submission_time: new Date().toLocaleString('bn-BD', { timeZone: 'Asia/Dhaka' })
  };

  return await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};
