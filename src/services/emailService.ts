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
    data.course ? `কোর্স: ${data.course}` : '',
    data.branch ? `ব্রাঞ্চ: ${data.branch}` : ''
  ].filter(Boolean).join(' | ');

  const courseAndBranchDisplay = data.course && data.branch 
    ? `${data.course} (${data.branch})` 
    : data.course || data.branch || 'বিডি বিসমিল্লাহ আইটি কোর্স';

  let assembledMessage = '';
  if (data.message && data.message.trim()) {
    assembledMessage = data.message.trim();
    if (data.shift || data.batchMode || data.trackingRoll || data.address) {
      assembledMessage += `\n\n[অতিরিক্ত তথ্য: শিফট: ${data.shift || 'N/A'}, মাধ্যম: ${data.batchMode || 'N/A'}, রোল: ${data.trackingRoll || 'N/A'}${data.address ? `, এলাকা: ${data.address}` : ''}]`;
    }
  } else {
    assembledMessage = `অনলাইন কোর্স রেজিস্ট্রেশন আবেদন।\nশিফট: ${data.shift || 'N/A'}\nক্লাস মাধ্যম: ${data.batchMode || 'N/A'}\nপেমেন্ট মেথড: ${data.paymentMethod || 'N/A'}\nরেজিস্ট্রেশন আইডি: ${data.trackingRoll || 'N/A'}${data.address ? `\nঠিকানা: ${data.address}` : ''}`;
  }

  const templateParams: Record<string, string> = {
    // Exact keys requested in user's EmailJS Template:
    // {{from_name}}
    from_name: data.name,
    // {{phone_number}}
    phone_number: data.phone,
    // {{user_email}}
    user_email: data.email?.trim() || 'প্রদান করা হয়নি',
    // {{course_name}} (Selected Course/Branch)
    course_name: courseAndBranchDisplay,
    // {{message}} (Additional Message)
    message: assembledMessage,

    // Also include standard variants so nothing breaks if template edits occur
    name: data.name,
    user_name: data.name,
    student_name: data.name,
    phone: data.phone,
    user_phone: data.phone,
    contact_number: data.phone,
    email: data.email?.trim() || 'প্রদান করা হয়নি',
    reply_to: data.email?.trim() || '',
    course: data.course || '',
    branch: data.branch || '',
    branch_course: branchCourseCombo,
    student_roll: data.trackingRoll || '',
    roll_id: data.trackingRoll || '',
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
