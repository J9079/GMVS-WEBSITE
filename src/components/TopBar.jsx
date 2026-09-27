import React from 'react';
import { Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { SocialIcon } from './SocialIcons';

export default function TopBar({ lang, setLang }) {
  const announcements = [
    "GMVS honoured with Ajmer District Level Honour by District Collector for grassroots social excellence.",
    "Commended by Hon'ble Prime Minister Narendra Modi in Mann Ki Baat (Episode 92) for rural women apparel cluster DARJI ONLINE.",
    "Constructed 180+ traditional rainwater harvesting Taankas & Khadins across drought-prone Panchayats of Rajasthan.",
    "Organized 620+ Women Self-Help Groups (SHGs) mobilizing 14,500+ rural families into financial self-reliance.",
    "Dedicated to rural women empowerment, child education, and sustainable livelihoods since 1998."
  ];

  return (
    <aside className="hr-corner-bar">
      <div className="container-wide hr-corner-inner">
        <div className="hr-corner-left">
          <div className="hr-corner-badge">GMVS Corner</div>
          <div className="hr-corner-ticker" title="Click or hover to pause updates">
            <div className="ticker-text">
              {announcements.map((text, idx) => (
                <span key={idx} className="ticker-item">
                  <span>{text}</span>
                  <span className="ticker-separator">&bull;</span>
                </span>
              ))}
              {/* Duplicate loop for continuous ticker */}
              {announcements.map((text, idx) => (
                <span key={`dup-${idx}`} className="ticker-item">
                  <span>{text}</span>
                  <span className="ticker-separator">&bull;</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="top-bar-right" style={{ flexShrink: 0, gap: '1.25rem' }}>
          <span className="top-bar-item hidden-mobile">
            <Phone size={13} />
            <a href="tel:+919672979032" style={{ color: '#FDE68A' }}>+91-9672979032</a>
          </span>
          <span className="top-bar-item hidden-tablet">
            <Mail size={13} />
            <a href="mailto:info@gmvs.org.in">info@gmvs.org.in</a>
          </span>

          {/* Official Social Media Links */}
          <div className="top-bar-social hidden-mobile">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`top-social-icon ${item.className}`}
                aria-label={`GMVS ${item.name} (${item.handle})`}
                title={`${item.name} - ${item.handle}`}
              >
                <SocialIcon id={item.id} size={12} />
              </a>
            ))}
          </div>

          <button 
            type="button"
            className="lang-toggle-btn" 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            aria-label="Toggle Language"
          >
            <Globe size={13} />
            <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
