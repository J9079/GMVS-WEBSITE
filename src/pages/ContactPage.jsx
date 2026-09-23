import React from 'react';
import { ContactForm, VolunteerForm } from '../components/Forms';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { SocialIcon } from '../components/SocialIcons';

export default function ContactPage({ onNotify }) {
  return (
    <>
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Get in Touch</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Contact Secretariat &amp; Field Hubs
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Reach out to our leadership, program heads, or field secretariats across Ajmer, Chittorgarh, and Thanwala.
          </p>
        </div>
      </section>

      {/* Office Locations Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Locations</span>
            <h2>Our Secretariat &amp; Operational Offices</h2>
            <p className="section-subtitle">Active grassroots presence across three key operational districts in Rajasthan.</p>
          </div>

          <div className="contact-offices-grid">
            {/* Head Office Bubani */}
            <div className="office-card">
              <span className="office-type-badge office-type-head">Head Office &amp; Secretariat</span>
              <h3 className="office-name">Bubani, District Ajmer</h3>
              <p className="office-address">
                Gramin Mahila Vikas Sansthan (GMVS)<br />
                Village &amp; Post Bubani, Via Gagwana,<br />
                District Ajmer – 305023, Rajasthan, India
              </p>
              <div className="office-contact-links">
                <a href="tel:+919672979032">
                  <Phone size={15} /> +91-9672979032, 8107241463
                </a>
                <a href="mailto:info@gmvs.org.in">
                  <Mail size={15} /> info@gmvs.org.in, ed@gmvs.org.in
                </a>
                <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.35rem' }}>
                  🕒 Mon – Sat: 9:30 AM to 6:00 PM IST
                </div>
              </div>
            </div>

            {/* Chittorgarh Branch */}
            <div className="office-card">
              <span className="office-type-badge office-type-branch">Southern Rajasthan Field Hub</span>
              <h3 className="office-name">Chittorgarh Branch</h3>
              <p className="office-address">
                GMVS Field Secretariat &amp; Program Office<br />
                Near Old Bus Stand, District Chittorgarh,<br />
                Rajasthan – 312001, India
              </p>
              <div className="office-contact-links">
                <a href="tel:+919672979032">
                  <Phone size={15} /> +91-9672979032
                </a>
                <a href="mailto:info@gmvs.org.in">
                  <Mail size={15} /> chittor@gmvs.org.in
                </a>
                <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.35rem' }}>
                  🎯 Focus: Tribal Education, SHGs &amp; Eye Camps
                </div>
              </div>
            </div>

            {/* Thanwala Branch */}
            <div className="office-card">
              <span className="office-type-badge office-type-branch">Arid Watershed Hub</span>
              <h3 className="office-name">Thanwala, Nagaur Branch</h3>
              <p className="office-address">
                GMVS Jal Shakti &amp; Livelihood Centre<br />
                Main Market, Thanwala, Tehsil Riyan Badi,<br />
                District Nagaur – 305624, Rajasthan, India
              </p>
              <div className="office-contact-links">
                <a href="tel:+918107241463">
                  <Phone size={15} /> +91-8107241463
                </a>
                <a href="mailto:info@gmvs.org.in">
                  <Mail size={15} /> nagaur@gmvs.org.in
                </a>
                <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.35rem' }}>
                  💧 Focus: Water Harvesting &amp; Livestock
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms & Map Grid */}
      <section className="section bg-surface-subtle">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
            {/* Contact Form */}
            <div className="form-card">
              <span className="badge-tag" style={{ marginBottom: '0.5rem' }}>Send a Message</span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Direct Secretariat Inquiry</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Whether you represent a funding agency, CSR team, researcher, or volunteer, please connect with us.
              </p>
              <ContactForm onNotify={onNotify} />
            </div>

            {/* Right Map & Direct Directory */}
            <div>
              <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Key Personnel Directory</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <strong style={{ fontSize: '0.95rem', display: 'block' }}>Executive Director</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mr. Shankar Singh Rawat</span>
                    <div style={{ fontSize: '0.85rem', color: 'var(--primary)', marginTop: '2px' }}>
                      <a href="mailto:ed@gmvs.org.in">ed@gmvs.org.in</a>
                    </div>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.95rem', display: 'block' }}>General &amp; CSR Secretariat</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Institutional Desk</span>
                    <div style={{ fontSize: '0.85rem', color: 'var(--primary)', marginTop: '2px' }}>
                      <a href="mailto:info@gmvs.org.in">info@gmvs.org.in</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Social Media Channels Card */}
              <div className="contact-social-card">
                <span className="badge-tag" style={{ marginBottom: '0.4rem' }}>Official Channels</span>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--text-main)' }}>Connect with GMVS</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  Follow our verified social platforms for ground activity updates, beneficiary interviews, and community programs.
                </p>

                <div className="contact-social-list">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-item"
                    >
                      <div className="contact-social-left">
                        <div className={`contact-social-icon ${item.className}`}>
                          <SocialIcon id={item.id} size={18} />
                        </div>
                        <div>
                          <span className="contact-social-name">{item.name}</span>
                          <span className="contact-social-handle">{item.handle}</span>
                        </div>
                      </div>
                      <span className="contact-social-badge">
                        <span>{item.badgeText}</span>
                        <ExternalLink size={13} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Embed */}
              <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                  <strong style={{ fontSize: '0.95rem' }}>Secretariat Map Location (Bubani, Ajmer)</strong>
                </div>
                <div style={{ width: '100%', height: '260px' }}>
                  <iframe 
                    src="https://maps.google.com/maps?q=Bubani+Ajmer+Rajasthan+305023&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="GMVS Head Office Bubani Map Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Section */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', borderRadius: 'var(--radius-xl)', border: '2px solid var(--primary-subtle)', padding: 'clamp(2rem, 5vw, 3.5rem)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
              <span className="badge-tag">Community Action</span>
              <h2>Volunteer or Intern with GMVS</h2>
              <p className="section-subtitle" style={{ maxWidth: '620px', margin: '0 auto' }}>
                Join our fieldwork in rural Rajasthan: teach children, support women-led SHGs, help map watersheds, or document stories.
              </p>
            </div>
            <VolunteerForm onNotify={onNotify} />
          </div>
        </div>
      </section>
    </>
  );
}
