import React from 'react';
import { Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { SocialIcon } from './SocialIcons';

export default function TopBar({ lang, setLang }) {
  return (
    <aside className="top-bar">
      <div className="container-wide top-bar-inner">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <span className="top-badge-80g">80-G Tax Exempt</span>
            <span>50% Tax Deduction on all Donations</span>
          </span>
          <span className="top-bar-item hidden-mobile" style={{ opacity: 0.85 }}>
            <ShieldCheck size={14} style={{ color: '#FDE68A', display: 'inline', marginRight: '4px' }} />
            <span>FCRA Reg: <strong>125410040</strong> (Govt. of India)</span>
          </span>
          <span className="top-bar-item hidden-tablet" style={{ opacity: 0.85 }}>
            <span>Act 28 Reg: <strong>52/1998-99</strong></span>
          </span>
        </div>

        <div className="top-bar-right">
          <span className="top-bar-item">
            <Phone size={13} />
            <a href="tel:+919672979032">+91-9672979032</a>
          </span>
          <span className="top-bar-item">
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
