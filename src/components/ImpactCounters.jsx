import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Compass, Landmark, Home, Users } from 'lucide-react';

const STATS = [
  { id: 'state', target: 1, suffix: '', label: 'STATE COVERED', icon: MapPin },
  { id: 'dist', target: 8, suffix: '', label: 'DISTRICTS COVERED', icon: Compass },
  { id: 'panch', target: 1000, suffix: '+', label: 'PANCHAYATS REACHED', icon: Landmark },
  { id: 'vil', target: 2500, suffix: '+', label: 'VILLAGES REACHED', icon: Home },
  { id: 'ben', target: 1.7, suffix: 'M+', label: 'PEOPLE BENEFITED', icon: Users, isDecimal: true }
];

export default function ImpactCounters() {
  const [counts, setCounts] = useState({ state: 0, dist: 0, panch: 0, vil: 0, ben: '0.0' });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);

        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);

          setCounts({
            state: Math.min(1, Math.floor(ease * 1 + 0.5)),
            dist: Math.floor(ease * 8),
            panch: Math.floor(ease * 1000),
            vil: Math.floor(ease * 2500),
            ben: (ease * 1.7).toFixed(1)
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCounts({ state: 1, dist: 8, panch: 1000, vil: 2500, ben: '1.7' });
          }
        };

        requestAnimationFrame(animate);
      }
    }, { threshold: 0.25 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="section impact-section">
      <div className="container">
        <div className="impact-grid">
          {STATS.map(stat => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon">
                  <Icon size={26} />
                </div>
                <div className="stat-number-wrap">
                  <span className="stat-number">
                    {typeof counts[stat.id] === 'number' ? counts[stat.id].toLocaleString('en-IN') : counts[stat.id]}
                  </span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
