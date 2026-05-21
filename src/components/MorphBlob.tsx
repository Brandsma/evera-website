import { useEffect, useState } from 'react';

interface Props {
  fill: string;
  opacity?: number;
  dur?: number;
  seed?: number;
  style?: React.CSSProperties;
}

export default function MorphBlob({ fill, opacity = 0.7, dur = 18000, seed = 0, style }: Props) {
  const [d, setD] = useState('');

  useEffect(() => {
    let raf: number;
    let start: number | undefined;
    function tick(ts: number) {
      if (!start) start = ts;
      const t = (((ts - start) / dur) + seed) % 1;
      const cx = 200, cy = 200, n = 8;
      const pts: [number, number][] = [];
      for (let i = 0; i < n; i++) {
        const ang = (i / n) * Math.PI * 2;
        const r = 150
          + Math.sin(t * Math.PI * 2 + i * 0.9 + seed * 6) * 20
          + Math.cos(t * Math.PI * 2 * 1.3 + i * 1.7) * 12;
        pts.push([cx + Math.cos(ang) * r, cy + Math.sin(ang) * r]);
      }
      let path = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      for (let i = 0; i < n; i++) {
        const p0 = pts[(i - 1 + n) % n];
        const p1 = pts[i];
        const p2 = pts[(i + 1) % n];
        const p3 = pts[(i + 2) % n];
        const c1x = p1[0] + (p2[0] - p0[0]) / 6;
        const c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6;
        const c2y = p2[1] - (p3[1] - p1[1]) / 6;
        path += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
      }
      path += ' Z';
      setD(path);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dur, seed]);

  return (
    <svg viewBox="0 0 400 400" style={style} preserveAspectRatio="xMidYMid meet">
      <path d={d} fill={fill} opacity={opacity} />
    </svg>
  );
}
