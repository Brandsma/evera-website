import { useEffect, useState } from 'react';

const POSES = [
  "M100 30 C112 30 120 40 120 50 C120 60 112 70 100 70 C88 70 80 60 80 50 C80 40 88 30 100 30 M100 70 L100 160 M100 90 L60 130 M100 90 L140 130 M100 160 L80 220 L70 260 M100 160 L120 220 L130 260",
  "M104 30 C116 30 124 40 124 50 C124 60 116 70 104 70 C92 70 84 60 84 50 C84 40 92 30 104 30 M104 70 L96 160 M100 90 L40 110 M100 90 L160 110 M96 160 L80 220 L60 260 M96 160 L120 220 L140 250",
  "M100 40 C112 40 120 50 120 60 C120 70 112 80 100 80 C88 80 80 70 80 60 C80 50 88 40 100 40 M100 80 L100 140 M100 100 L60 130 L80 160 M100 100 L140 130 L120 160 M100 140 L60 200 L60 260 M100 140 L140 200 L140 260",
  "M70 30 C82 30 90 40 90 50 C90 60 82 70 70 70 C58 70 50 60 50 50 C50 40 58 30 70 30 M70 70 L110 150 M85 100 L40 70 M85 100 L160 70 M110 150 L100 220 L90 260 M110 150 L160 180 L180 200",
  "M100 40 C112 40 120 50 120 60 C120 70 112 80 100 80 C88 80 80 70 80 60 C80 50 88 40 100 40 M100 80 L100 170 M100 100 L70 140 L90 170 M100 100 L130 140 L110 170 M100 170 L60 200 L40 260 M100 170 L140 200 L160 260",
  "M100 30 C112 30 120 40 120 50 C120 60 112 70 100 70 C88 70 80 60 80 50 C80 40 88 30 100 30 M100 70 L100 170 M100 90 L40 60 M100 90 L160 60 M100 170 L60 230 L40 260 M100 170 L140 230 L160 260",
];

function lerpPath(a: string, b: string, t: number): string {
  const re = /-?\d+(?:\.\d+)?|[a-zA-Z]/g;
  const ta = a.match(re), tb = b.match(re);
  if (!ta || !tb || ta.length !== tb.length) return a;
  const out: string[] = [];
  let last = '';
  for (let i = 0; i < ta.length; i++) {
    const sa = ta[i], sb = tb[i];
    if (/[a-zA-Z]/.test(sa)) {
      if (out.length && last !== ' ') out.push(' ');
      out.push(sa); last = sa;
    } else {
      const v = parseFloat(sa) + (parseFloat(sb) - parseFloat(sa)) * t;
      out.push(' ' + v.toFixed(2)); last = ' ';
    }
  }
  return out.join('').trim();
}

export default function HeroFigure({ accent = '#3d6464', ink = '#5e3c22' }) {
  const [d, setD] = useState(POSES[0]);

  useEffect(() => {
    let raf: number;
    let start: number | undefined;
    const dur = 3400;
    function tick(ts: number) {
      if (!start) start = ts;
      const total = (ts - start) / dur;
      const idx = Math.floor(total) % POSES.length;
      const next = (idx + 1) % POSES.length;
      const t = total - Math.floor(total);
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setD(lerpPath(POSES[idx], POSES[next], ease));
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 200 280" preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <path d={d} fill="none" stroke={accent} strokeWidth="1.2" strokeOpacity="0.35"
        strokeLinecap="round" strokeLinejoin="round" transform="translate(8 6)" />
      <path d={d} fill="none" stroke={accent} strokeWidth="1.2" strokeOpacity="0.55"
        strokeLinecap="round" strokeLinejoin="round" transform="translate(4 3)" />
      <path d={d} fill="none" stroke={ink} strokeWidth="2.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
