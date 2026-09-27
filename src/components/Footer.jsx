import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Send, CheckCircle2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { SocialIcon } from './SocialIcons';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1: Logo, Mission Tagline & Verified Contacts */}
        <div className="footer-col-about">
          <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <img src="assets/images/logo-white.png" alt="GMVS Logo White" className="footer-logo" />
          </Link>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            Developing women&rsquo;s institutions and sustainable community livelihoods at the grassroots since 1998.
          </p>

          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={18} style={{ color: 'var(--secondary-light)', flexShrink: 0, marginTop: '2px' }} />
              <span>Village &amp; Post Bubani, Via Gagwana, District Ajmer – 305023, Rajasthan, India</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} style={{ color: 'var(--secondary-light)', flexShrink: 0 }} />
              <span><a href="mailto:info@gmvs.org.in">info@gmvs.org.in</a></span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} style={{ color: 'var(--secondary-light)', flexShrink: 0 }} />
              <span><a href="tel:+919672979032">+91-9672979032</a> / <a href="tel:+918107241463">+91-8107241463</a></span>
            </div>
          </div>
        </div>

        {/* Column 2: About GMVS & Quick Links */}
        <div>
          <h3 className="footer-title">About GMVS</h3>
          <ul className="footer-links-list">
            <li><Link to="/about">Who We Are</Link></li>
            <li><Link to="/leadership">Governing Body</Link></li>
            <li><Link to="/leadership#team">Our Executive Team</Link></li>
            <li><Link to="/partners">Our Partners &amp; CSR</Link></li>
            <li><Link to="/awards">Impact &amp; Awards</Link></li>
            <li><Link to="/stories">Field Stories</Link></li>
            <li><Link to="/contact#careers">Careers &amp; Internships</Link></li>
          </ul>
        </div>

        {/* Column 3: Thematic Programmes (Manjari Alignment) */}
        <div>
          <h3 className="footer-title">Our Programmes</h3>
          <ul className="footer-links-list">
            <li><Link to="/programs#women-empowerment">Women&rsquo;s Institutions</Link></li>
            <li><Link to="/programs#community-development">Enhancing Livelihoods</Link></li>
            <li><Link to="/programs#child-rights">Quality Education</Link></li>
            <li><Link to="/programs#health-concerns">Health and Nutrition</Link></li>
            <li><Link to="/programs#nrm">Water, Sanitation &amp; WASH</Link></li>
            <li><Link to="/programs#women-empowerment">Social Enterprises (DARJI)</Link></li>
            <li><Link to="/programs#nrm">Renewable Energy &amp; NRM</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Social Connection */}
        <div>
          <h3 className="footer-title">Newsletter</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1rem' }}>
            Enter your email address to receive our grassroots development bulletin.
          </p>

          <form onSubmit={handleSubscribe} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input
                type="email"
                className="form-control"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '180px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF'
                }}
              />
              <button type="submit" className="btn01" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                <Send size={14} />
                <span>Subscribe</span>
              </button>
            </div>
            {subscribed && (
              <div style={{ color: '#86EFAC', fontSize: '0.85rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={14} /> Subscribed successfully!
              </div>
            )}
          </form>

          <h3 className="footer-title" style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }}>Connect With Us!</h3>
          <div className="footer-social-wrapper" style={{ marginTop: 0 }}>
            <div className="social-links-row">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon-btn ${item.className}`}
                  aria-label={item.name}
                  title={`${item.name}: ${item.handle}`}
                >
                  <SocialIcon id={item.id} size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Badges Bar */}
      <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="footer-legal-badges" style={{ justifyContent: 'center' }}>
          <span className="legal-badge-pill">Rajasthan Societies Act 28 (52/1998-99)</span>
          <span className="legal-badge-pill">MHA FCRA Reg # 125410040</span>
          <span className="legal-badge-pill">NITI Aayog Darpan ID: RJ/2017/0160241</span>
          <span className="legal-badge-pill">Ajmer District Level Honour</span>
        </div>
      </div>

      {/* Copyright & Quick Links */}
      <div className="container footer-bottom">
        <div>
          &copy; 1998–2026 Gramin Mahila Vikas Sansthan (GMVS). All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/contact">Contact Secretariat</Link>
          <span>&bull;</span>
          <Link to="/donate" style={{ color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
            <Heart size={14} fill="currentColor" /> Support Our Cause
          </Link>
        </div>
      </div>
    </footer>
  );
}
