import React from 'react';
import { Youtube, Linkedin, Instagram, Facebook } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';

export function XTwitterIcon({ size = 16, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SocialIcon({ id, size = 16, className = '' }) {
  switch (id) {
    case 'youtube':
      return <Youtube size={size} className={className} />;
    case 'linkedin':
      return <Linkedin size={size} className={className} />;
    case 'x-twitter':
      return <XTwitterIcon size={size} className={className} />;
    case 'instagram':
      return <Instagram size={size} className={className} />;
    case 'facebook':
      return <Facebook size={size} className={className} />;
    default:
      return null;
  }
}

export function SocialLinksRow({ variant = 'default', size = 16 }) {
  return (
    <div className="social-links-row">
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon-btn ${item.className} ${variant === 'light' ? 'btn-light' : ''}`}
          aria-label={`GMVS on ${item.name} (${item.handle})`}
          title={`${item.name} - ${item.handle}`}
        >
          <SocialIcon id={item.id} size={size} />
        </a>
      ))}
    </div>
  );
}
