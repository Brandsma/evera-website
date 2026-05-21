import { useState, useEffect } from 'react';
import type { Copy, Workshop } from '../i18n/copy';

interface Props {
  t: Copy;
}

export default function Booking({ t }: Props) {
  const tb = t.booking;
  const workshops: Workshop[] = t.workshops.list as Workshop[];

  const [step, setStep] = useState(0);
  const [workshop, setWorkshop] = useState<number | null>(null);
  const [seats, setSeats] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [done, setDone] = useState(false);

  // Read ?w=N from URL to pre-select a workshop
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const w = params.get('w');
    if (w !== null) {
      const idx = parseInt(w, 10);
      if (idx >= 0 && idx < workshops.length) {
        setWorkshop(idx);
        setStep(1);
        // Remove the param without full navigation
        const url = new URL(window.location.href);
        url.searchParams.delete('w');
        window.history.replaceState({}, '', url.toString());
      }
    }
  }, []);

  const canNext = [
    workshop !== null,
    seats > 0 && seats <= 4,
    name.trim().length > 1 && /\S+@\S+\.\S+/.test(email),
    true,
  ][step];

  const reset = () => {
    setStep(0); setWorkshop(null); setSeats(1);
    setName(''); setEmail(''); setPhone(''); setNote('');
    setDone(false);
  };

  const chosen = workshop !== null ? workshops[workshop] : null;

  const priceNum = chosen ? parseInt(chosen.price.replace(/[^\d]/g, ''), 10) : 0;

  return (
    <section className="section booking" id="book">
      <div className="shell">
        <span className="eyebrow">{tb.eyebrow}</span>
        <h2>{tb.headLead} <span className="it">{tb.headEm}</span></h2>

        <div className="booking-card">
          <aside className="booking-steps">
            <div className="lbl">{tb.stepsLabel}</div>
            {tb.steps.map((s, i) => (
              <button key={i}
                className={`booking-step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}
                onClick={() => { if (i < step) setStep(i); }}>
                <span className="ix">{i < step ? '✓' : i + 1}</span>
                <span>
                  <div className="lbl2">{s.title}</div>
                  <div className="sub">{s.sub}</div>
                </span>
              </button>
            ))}
          </aside>

          <div className="booking-body">
            {done ? (
              <div className="done-state">
                <div className="ring">✓</div>
                <h3>{tb.doneTitle} <span className="it">{tb.doneTitleEm}</span></h3>
                <p>{tb.doneBody}</p>
                <button className="btn ghost" onClick={reset}>{tb.doneCta}</button>
              </div>
            ) : (
              <>
                <h3>{tb.stepHeads[step].lead} <span className="it">{tb.stepHeads[step].em}</span></h3>
                <div className="helper">{tb.helpers[step]}</div>

                {step === 0 && (
                  <div className="svc-options">
                    {workshops.map((w, i) => (
                      <button key={i}
                        className={`svc-option ${workshop === i ? 'sel' : ''}`}
                        onClick={() => setWorkshop(i)}>
                        <span className="meta">{w.date} · {w.price}</span>
                        <span className="name">{w.title} <span style={{ color: 'var(--accent)' }}>{w.titleIt}</span></span>
                        <p>{w.dot} · {w.place}</p>
                      </button>
                    ))}
                  </div>
                )}

                {step === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {chosen && (
                      <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, color: 'var(--ink-strong)' }}>
                        {chosen.title} {chosen.titleIt} · {chosen.date}
                      </div>
                    )}
                    <div>
                      <label style={{ fontFamily: 'var(--body)', fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-soft)', display: 'block', marginBottom: 14 }}>
                        {tb.seatsLabel}
                      </label>
                      <div className="seats-row">
                        <button onClick={() => setSeats(Math.max(1, seats - 1))}>−</button>
                        <span className="v">{seats}</span>
                        <button onClick={() => setSeats(Math.min(4, seats + 1))}>+</button>
                        <span style={{ fontFamily: 'var(--body)', fontSize: 13, color: 'var(--ink-soft)', marginLeft: 16, letterSpacing: '0.06em' }}>
                          × {chosen?.price} = €{priceNum * seats}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="fields-row">
                      <div className="field">
                        <label>{tb.fields.name}</label>
                        <input value={name} onChange={e => setName(e.target.value)} />
                      </div>
                      <div className="field">
                        <label>{tb.fields.email}</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="field">
                      <label>{tb.fields.phone}</label>
                      <input value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className="field">
                      <label>{tb.fields.note}</label>
                      <textarea rows={3} value={note} onChange={e => setNote(e.target.value)} />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="confirm">
                    <div className="summary">
                      {[
                        [tb.summary[0], `${chosen?.title} ${chosen?.titleIt}`],
                        [tb.summary[1], chosen?.date],
                        [tb.summary[2], String(seats)],
                        [tb.summary[3], name],
                        [tb.summary[4], email],
                      ].map(([k, v], i) => (
                        <div key={i} className="row">
                          <span className="k">{k}</span>
                          <span className="v" style={i >= 3 ? { fontStyle: 'normal', fontFamily: 'var(--body)', fontSize: i === 4 ? 14 : 16 } : undefined}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="booking-foot">
                  <span className="pill">{step + 1} / {tb.steps.length}</span>
                  <div>
                    {step > 0 && (
                      <button className="back" onClick={() => setStep(step - 1)}>
                        ← {tb.back}
                      </button>
                    )}
                    {step < 3 ? (
                      <button className="btn"
                        disabled={!canNext}
                        style={{ opacity: canNext ? 1 : 0.4, cursor: canNext ? 'pointer' : 'not-allowed' }}
                        onClick={() => canNext && setStep(step + 1)}>
                        {tb.next} <span className="arrow">→</span>
                      </button>
                    ) : (
                      <button className="btn" onClick={() => setDone(true)}>
                        {tb.send} <span className="arrow">→</span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
