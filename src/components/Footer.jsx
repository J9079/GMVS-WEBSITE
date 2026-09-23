import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { SocialLinksRow } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1: Institutional Identity & Social Media */}
        <div className="footer-col-about">
          <img src="assets/images/logo-white.png" alt="GMVS Logo White" className="footer-logo" />
          <p>
            Gramin Mahila Vikas Sansthan (GMVS) has dedicated 28 years to fostering women's collectives, child rights, water security, and rural self-reliance across Rajasthan.
          </p>
          <div className="footer-legal-badges">
            <span className="legal-badge-pill">Act 28 Reg # 52/1998-99</span>
            <span className="legal-badge-pill">FCRA # 125410040</span>
            <span className="legal-badge-pill">12-AA &amp; 80-G Certified</span>
            <span className="legal-badge-pill">TAN: JDHG10077E</span>
          </div>

          <div className="footer-social-wrapper">
            <span className="footer-social-title">Official Social Channels</span>
            <SocialLinksRow size={16} />
          </div>
        </div>

        {/* Column 2: Governance & Institutional Links */}
        <div>
          <h4 className="footer-title">Institutional</h4>
          <ul className="footer-links-list">
            <li><Link to="/about">About Overview</Link></li>
            <li><Link to="/leadership">Governing Board</Link></li>
            <li><Link to="/about#legal">Legal Registrations</Link></li>
            <li><Link to="/awards#reports">Audited Annual Reports</Link></li>
            <li><Link to="/partners">Partners &amp; CSR</Link></li>
          </ul>
        </div>

        {/* Column 3: Thematic Work */}
        <div>
          <h4 className="footer-title">Our Work</h4>
          <ul className="footer-links-list">
            <li><Link to="/programs#women-empowerment">Women Collectives</Link></li>
            <li><Link to="/programs#child-rights">Child Education</Link></li>
            <li><Link to="/programs#nrm">Jal Shakti / Water</Link></li>
            <li><Link to="/programs#health-concerns">Rural Eye &amp; Health Care</Link></li>
            <li><Link to="/stories">Field Stories</Link></li>
            <li><Link to="/donate">Donate (80-G)</Link></li>
          </ul>
        </div>

        {/* Column 4: Secretariat Contacts */}
        <div>
          <h4 className="footer-title">Head Secretariat</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Village &amp; Post Bubani, Via Gagwana, District Ajmer – 305023, Rajasthan, India</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span><a href="tel:+919672979032">+91-9672979032</a> / <a href="tel:+918107241463">8107241463</a></span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span><a href="mailto:info@gmvs.org.in">info@gmvs.org.in</a></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>
          Copyright &copy; 1998–2026 Gramin Mahila Vikas Sansthan (GMVS). All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/contact">Get in Touch</Link>
          <span>&bull;</span>
          <Link to="/donate" style={{ color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Heart size={14} fill="currentColor" /> 80-G Giving
          </Link>
        </div>
      </div>
    </footer>
  );
}
