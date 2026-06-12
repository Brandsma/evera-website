import { useState } from 'react';
import type { Copy } from '../i18n/copy';
import { WEB3FORMS_ACCESS_KEY } from '../config';

interface Props {
  labels: Copy['contact']['form'];
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

// Delivers messages to Michelle's inbox via Web3Forms (https://web3forms.com).
export default function ContactForm({ labels }: Props) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const onField = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const canSend =
    form.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.message.trim().length > 2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} via everamovement.com`,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return <div className="subscribed">{labels.done}</div>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="fields-row">
        <div className="field">
          <label htmlFor="cf-name">{labels.fields.name}</label>
          <input id="cf-name" value={form.name} onChange={onField('name')} />
        </div>
        <div className="field">
          <label htmlFor="cf-email">{labels.fields.email}</label>
          <input id="cf-email" type="email" value={form.email} onChange={onField('email')} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">{labels.fields.message}</label>
        <textarea id="cf-message" rows={4} value={form.message} onChange={onField('message')} />
      </div>
      {status === 'error' && <p className="form-error">{labels.error}</p>}
      <button
        type="submit"
        className="btn"
        disabled={!canSend || status === 'sending'}
        style={{
          opacity: canSend ? 1 : 0.4,
          cursor: canSend ? 'pointer' : 'not-allowed',
          alignSelf: 'flex-start',
        }}
      >
        {status === 'sending' ? labels.sending : labels.cta} <span className="arrow">→</span>
      </button>
    </form>
  );
}
