import { useState } from 'react';
import type { Copy } from '../i18n/copy';
import { SUBSTACK_URL, SUBSTACK_SUBSCRIBE_URL } from '../config';

interface Props {
  labels: Copy['contact']['newsletter'];
}

type State = 'idle' | 'loading' | 'done' | 'error';

export default function NewsletterForm({ labels }: Props) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) return;
    setState('loading');
    try {
      const res = await fetch(`${SUBSTACK_URL}/api/v1/free`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          first_url: window.location.href,
          first_referrer: document.referrer,
          current_url: window.location.href,
          current_referrer: document.referrer,
          referral_code: '',
          source: 'subscribe_page',
        }),
      });
      if (res.ok) {
        setState('done');
      } else {
        // Substack API unavailable — fall back to opening the subscribe page
        window.open(`${SUBSTACK_SUBSCRIBE_URL}?email=${encodeURIComponent(email)}`, '_blank', 'noopener');
        setState('done');
      }
    } catch {
      // Network/CORS error — fall back to opening the subscribe page
      window.open(`${SUBSTACK_SUBSCRIBE_URL}?email=${encodeURIComponent(email)}`, '_blank', 'noopener');
      setState('done');
    }
  };

  if (state === 'done') {
    return <div className="subscribed">{labels.done}</div>;
  }

  return (
    <form className="subscribe" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder={labels.placeholder}
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        disabled={state === 'loading'}
      />
      <button type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? '…' : <>{labels.cta} <span>→</span></>}
      </button>
    </form>
  );
}
