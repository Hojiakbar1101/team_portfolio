// lib/telegram.ts

import { ContactFormData, QuoteFormData } from '@/types';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

/**
 * Send message to Telegram
 */
async function sendMessage(text: string, parseMode: string = 'HTML'): Promise<boolean> {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: parseMode,
      }),
    });

    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error('Telegram send error:', error);
    return false;
  }
}

/**
 * Format contact form data for Telegram
 */
function formatContactMessage(data: ContactFormData): string {
  return `
🔔 <b>Yangi aloqa so'rovi!</b>

👤 <b>Ism:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
${data.phone ? `📱 <b>Telefon:</b> ${data.phone}` : ''}
${data.company ? `🏢 <b>Kompaniya:</b> ${data.company}` : ''}
🛠 <b>Xizmat:</b> ${data.service}
${data.budget ? `💰 <b>Byudjet:</b> ${data.budget}` : ''}

💬 <b>Xabar:</b>
${data.message}

⏰ <b>Yuborilgan vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
  `.trim();
}

/**
 * Format quote request for Telegram
 */
function formatQuoteMessage(data: QuoteFormData): string {
  return `
💼 <b>Yangi loyiha narxi so'rovi!</b>

👤 <b>Mijoz ma'lumotlari:</b>
• Ism: ${data.name}
• Email: ${data.email}
${data.phone ? `• Telefon: ${data.phone}` : ''}
${data.company ? `• Kompaniya: ${data.company}` : ''}

🎯 <b>Loyiha tafsilotlari:</b>
• Turi: ${data.projectType}
• Xizmat: ${data.service}
${data.budget ? `• Byudjet: ${data.budget}` : ''}
${data.timeline ? `• Muddat: ${data.timeline}` : ''}

✨ <b>Talablar:</b>
${data.features.length > 0 ? data.features.map(f => `• ${f}`).join('\n') : '• Belgilanmagan'}

📋 <b>Qo'shimcha:</b>
• Dizayn: ${data.hasDesign ? '✅ Bor' : '❌ Yo\'q'}
• Kontent: ${data.hasContent ? '✅ Tayyor' : '❌ Kerak'}
• Shoshilinch: ${data.urgency === 'urgent' ? '🔥 Ha' : data.urgency === 'flexible' ? '⏳ Moslashuvchan' : '✅ Oddiy'}

💬 <b>Xabar:</b>
${data.message}

⏰ <b>Yuborilgan vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
  `.trim();
}

/**
 * Send contact form to Telegram
 */
export async function sendContactForm(data: ContactFormData): Promise<{
  success: boolean;
  message: string;
}> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return {
      success: false,
      message: 'Telegram integratsiyasi sozlanmagan',
    };
  }

  const message = formatContactMessage(data);
  const success = await sendMessage(message);

  return {
    success,
    message: success
      ? 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada aloqaga chiqamiz.'
      : 'Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.',
  };
}

/**
 * Send quote request to Telegram
 */
export async function sendQuoteRequest(data: QuoteFormData): Promise<{
  success: boolean;
  message: string;
}> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return {
      success: false,
      message: 'Telegram integratsiyasi sozlanmagan',
    };
  }

  const message = formatQuoteMessage(data);
  const success = await sendMessage(message);

  return {
    success,
    message: success
      ? 'So\'rovingiz yuborildi! Bizning mutaxassislar tez orada siz bilan bog\'lanishadi.'
      : 'Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.',
  };
}

/**
 * Send newsletter subscription to Telegram
 */
export async function sendNewsletterSubscription(email: string, name?: string): Promise<boolean> {
  const message = `
📮 <b>Yangi obunachi!</b>

📧 <b>Email:</b> ${email}
${name ? `👤 <b>Ism:</b> ${name}` : ''}

⏰ <b>Obuna vaqti:</b> ${new Date().toLocaleString('uz-UZ')}
  `.trim();

  return await sendMessage(message);
}

/**
 * Send error notification to Telegram
 */
export async function sendErrorNotification(error: Error, context?: string): Promise<boolean> {
  const message = `
🚨 <b>Xatolik yuz berdi!</b>

${context ? `📍 <b>Kontekst:</b> ${context}` : ''}
❌ <b>Xatolik:</b> ${error.message}

📊 <b>Stack Trace:</b>
<code>${error.stack?.slice(0, 500) || 'Mavjud emas'}</code>

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
  `.trim();

  return await sendMessage(message);
}