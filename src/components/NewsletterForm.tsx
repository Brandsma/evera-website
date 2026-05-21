import { useState } from 'react';
import type { Copy } from '../i18n/copy';

interface Props {
  t: Copy;
}

export default function NewsletterForm({ t }: Props) {
  const { newsletter } = t.foot;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div>
      <span className="eyebrow">{newsletter.eyebrow}</span>
      <h3 style={{ marginTop: 16 }}>
        {newsletter.headLead}<span className="it">{newsletter.headEm}</span>{newsletter.headTail}
      </h3>
      <p>{newsletter.desc}</p>
      {subscribed ? (
        <div className="subscribed">{newsletter.done}</div>
      ) : (
        <form className="subscribe" onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true); }}>
          <input
            type="email"
            placeholder={newsletter.placeholder}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">{newsletter.cta} <span>→</span></button>
        </form>
      )}
    </div>
  );
}
