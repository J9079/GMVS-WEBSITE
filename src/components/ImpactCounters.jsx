import React, { useState, useEffect, useRef } from 'react';
import { Users, Landmark, MapPin, Droplets } from 'lucide-react';

const STATS = [
  { id: 'ben', target: 85000, suffix: '+', label: 'Rural Lives Empowered', icon: Users },
  { id: 'shg', target: 620, suffix: '+', label: 'Women SHGs Formed', icon: Landmark },
  { id: 'vil', target: 250, suffix: '+', label: 'Villages Transformed', icon: MapPin },
  { id: 'wat', target: 180, suffix: '+', label: 'Water Structures Built', icon: Droplets }
];

export default function ImpactCounters() {
  const [counts, setCounts] = useState({ ben: 0, shg: 0, vil: 0, wat: 0 });
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
            ben: Math.floor(ease * 85000),
            shg: Math.floor(ease * 620),
            vil: Math.floor(ease * 250),
            wat: Math.floor(ease * 180)
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCounts({ ben: 85000, shg: 620, vil: 250, wat: 180 });
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
                    {counts[stat.id].toLocaleString('en-IN')}
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
