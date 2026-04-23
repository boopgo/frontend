import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
);

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_ADDRESS = 'boop <hello@boopgo.app>';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_AUDIENCES = new Set(['pet-parent', 'investor', 'press', 'brand']);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, audience } = req.body || {};
  const cleanEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  const cleanAudience = typeof audience === 'string' && ALLOWED_AUDIENCES.has(audience) ? audience : null;

  if (!EMAIL_RE.test(cleanEmail) || cleanEmail.length > 254) {
    return res.status(400).json({ error: 'Please enter a valid email.' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || null;
  const userAgent = req.headers['user-agent'] || null;
  const referrer = req.headers['referer'] || null;

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: cleanEmail, audience: cleanAudience, ip, user_agent: userAgent, referrer });

  if (error) {
    if (error.code === '23505') {
      return res.status(200).json({ ok: true, already: true });
    }
    console.error('supabase insert failed', error);
    return res.status(500).json({ error: 'Something went wrong. Try again in a moment.' });
  }

  if (resend) {
    try {
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: cleanEmail,
        subject: "You're on the boop waitlist 🐾",
        html: confirmationEmail(cleanAudience),
      });
    } catch (e) {
      console.error('resend send failed', e);
    }
  }

  return res.status(200).json({ ok: true });
}

function confirmationEmail(audience) {
  const lineByAudience = {
    investor: "We'll be in touch personally with deck access and next steps.",
    press: "We'll reach out with a press kit and founder availability soon.",
    brand: "We'll be in touch about the outfits-to-commerce partnership flow.",
    'pet-parent': "You're early. We'll send your TestFlight invite the moment it's ready.",
  };
  const line = lineByAudience[audience] || "You're early. We'll send updates as we build.";
  return `
  <div style="font-family:-apple-system,system-ui,sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#FFF6EC;border-radius:20px;color:#2A1A2E">
    <div style="font-family:Georgia,serif;font-size:48px;font-weight:800;letter-spacing:-1px">boop</div>
    <h2 style="font-family:Georgia,serif;font-size:28px;margin:20px 0 12px">You're in.</h2>
    <p style="font-size:16px;line-height:1.5;color:#4a3a4e">${line}</p>
    <p style="font-size:16px;line-height:1.5;color:#4a3a4e">In the meantime — tell a pet person. The softest corner of the internet is coming.</p>
    <p style="font-size:14px;color:#8b7a8f;margin-top:32px">— the boop team 🐾</p>
  </div>`;
}
