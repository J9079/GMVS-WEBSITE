import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, CheckCircle2, Award, Landmark, Compass, 
  MapPin, Users, ArrowRight 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Our Identity</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            About Gramin Mahila Vikas Sansthan
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Founded in 1998 in Village Bubani, Ajmer, GMVS is committed to women's collective empowerment, child education, water security, and rural self-reliance across Rajasthan.
          </p>
        </div>
      </section>

      {/* Historical Genesis */}
      <section className="section bg-surface">
        <div className="container">
          <div className="split-grid">
            <div className="split-media">
              <div className="split-image-main">
                <img src="assets/images/home-welcome.jpeg" alt="GMVS Women Collective Gathering" />
              </div>
              <div className="split-floating-card">
                <div className="floating-card-icon">
                  <Landmark size={24} />
                </div>
                <div className="floating-card-text">
                  <h5>28 Years</h5>
                  <p>Of participatory grassroots governance</p>
                </div>
              </div>
            </div>

            <div className="split-content">
              <span className="badge-tag">Genesis &bull; 1998</span>
              <h2>Born from Grassroots Need in Bubani, Ajmer</h2>
              <p>
                In the late 1990s, rural families in central Rajasthan faced acute seasonal droughts, rampant female illiteracy, forced child labour, and severe socio-economic marginalisation.
              </p>
              <p>
                A committed group of local grassroots workers, social visionaries, and community elders led by <strong>Mr. Anil Kumar Mathur</strong> and <strong>Mr. Shankar Singh Rawat</strong> came together to establish <strong>Gramin Mahila Vikas Sansthan (GMVS)</strong> on 28th May 1998.
              </p>

              <div className="key-highlights-list">
                <div className="highlight-item">
                  <div className="highlight-item-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="highlight-item-text">
                    <strong>Societies Registration Act No. 28</strong>
                    <span>Registered with Registrar of Societies, Ajmer (Reg # 52/1998-99).</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-item-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="highlight-item-text">
                    <strong>Women-Led Development Paradigm</strong>
                    <span>Shifting the paradigm from passive welfare to active, democratic women leadership.</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-item-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="highlight-item-text">
                    <strong>National &amp; District Recognitions</strong>
                    <span>Felicitated by the Ajmer District Collector and commended in Prime Minister's Mann Ki Baat.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section id="vision" className="section bg-surface-subtle">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Foundational Compass</span>
            <h2>Vision, Mission &amp; Guiding Philosophy</h2>
            <p className="section-subtitle">Our guiding compass ensuring dignity, equity, and sustainability in every village intervention.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Vision */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', background: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.975rem' }}>
                To create a just, equitable, and self-reliant rural society where women exercise democratic leadership, every child enjoys holistic education and rights, natural resources are sustainably conserved, and marginalized families live with dignity.
              </p>
            </div>

            {/* Mission */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', background: 'var(--secondary-subtle)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Users size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.975rem' }}>
                To mobilise rural women into empowered Self-Help Groups and federations, provide quality schooling and nutrition for children, revive traditional water harvesting systems, improve community health, and build sustainable livelihood clusters.
              </p>
            </div>

            {/* Core Values */}
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', background: 'var(--accent-gold-subtle)', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Our Values</h3>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.975rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>Grassroots Participation:</strong> Community ownership of all assets.</li>
                <li><strong>Gender Equality:</strong> Over 65% female leadership across all levels.</li>
                <li><strong>Transparency:</strong> Independent CA audits and open public disclosure.</li>
                <li><strong>Ecological Harmony:</strong> Revitalising indigenous water and soil wisdom.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory & Legal Credentials */}
      <section id="legal" className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Statutory Governance</span>
            <h2>Legal Accreditations &amp; Institutional Registrations</h2>
            <p className="section-subtitle">Fully verified and compliant with all Indian statutory and regulatory authorities.</p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto', background: '#FFFFFF', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-light)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg-surface-subtle)', borderBottom: '2px solid var(--border-color)' }}>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-main)', fontWeight: 700 }}>Statutory Authority</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-main)', fontWeight: 700 }}>Registration Detail / Number</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-main)', fontWeight: 700 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}><strong>Rajasthan Societies Registration Act, 1958</strong></td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', color: 'var(--primary)' }}>Reg # 52 / Ajmer / 1998-99</td>
                  <td style={{ padding: '1rem 1.5rem' }}><span className="badge-tag" style={{ margin: 0 }}>Active &bull; 1998</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}><strong>Foreign Contribution Regulation Act (FCRA)</strong></td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', color: 'var(--secondary)' }}>FCRA Reg # 125410040</td>
                  <td style={{ padding: '1rem 1.5rem' }}><span className="badge-tag" style={{ margin: 0 }}>MHA Approved</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}><strong>Income Tax Act, 1961 - Section 12-AA</strong></td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', color: 'var(--text-main)' }}>Perpetual Non-Profit Registration</td>
                  <td style={{ padding: '1rem 1.5rem' }}><span className="badge-tag" style={{ margin: 0 }}>Exempt</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}><strong>Income Tax Act, 1961 - Section 80-G</strong></td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace', color: 'var(--primary)' }}>50% Tax Deduction on Donations</td>
                  <td style={{ padding: '1rem 1.5rem' }}><span className="badge-tag" style={{ margin: 0 }}>Valid &bull; 10BE</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}><strong>Tax Deduction Account Number (TAN)</strong></td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>JDHG10077E</td>
                  <td style={{ padding: '1rem 1.5rem' }}><span className="badge-tag" style={{ margin: 0 }}>Compliant</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem 1.5rem' }}><strong>NITI Aayog NGO Darpan Portal</strong></td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'monospace' }}>Verified Implementing Agency</td>
                  <td style={{ padding: '1rem 1.5rem' }}><span className="badge-tag" style={{ margin: 0 }}>CSR Eligible</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Institutional Organogram */}
      <section id="organogram" className="section bg-surface-subtle">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Democratic Hierarchy</span>
            <h2>Institutional Organogram</h2>
            <p className="section-subtitle">
              Democratic representation from Village User Groups and SHGs up to the Governing Board and Executive Secretariat.
            </p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto', background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
            <img src="assets/images/organogram.png" alt="GMVS Institutional Organogram" style={{ width: '100%', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }} />
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/leadership" className="btn btn-primary">Meet Our Leadership Board</Link>
              <Link to="/awards#reports" className="btn btn-outline">View Audited Annual Reports</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
