import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Heart, ArrowRight, CheckCircle2, Play, 
  Droplets, GraduationCap, HeartHandshake, Stethoscope, Sprout, 
  Sparkles, Award
} from 'lucide-react';
import ImpactCounters from '../components/ImpactCounters';
import FieldStories from '../components/FieldStories';
import TaxCalculator from '../components/TaxCalculator';

const PARTNERS = [
  { name: 'Tata Trusts', logo: 'assets/images/partner-tata-trusts.png' },
  { name: 'NABARD', logo: 'assets/images/partner-nabard.png' },
  { name: 'ICICI Bank', logo: 'assets/images/partner-icici-bank.png' },
  { name: 'GIZ Germany', logo: 'assets/images/partner-giz.png' },
  { name: 'The Hans Foundation', logo: 'assets/images/partner-hans-foundation.png' },
  { name: 'Chola', logo: 'assets/images/partner-chola.png' },
  { name: 'HLL Lifecare', logo: 'assets/images/partner-hll-lifecare.png' },
  { name: 'Ray-Ban', logo: 'assets/images/partner-ray-ban.png' },
  { name: 'Sightsavers', logo: 'assets/images/partner-sight-savers.png' },
  { name: 'NACO', logo: 'assets/images/partner-naco.png' },
  { name: 'RSACS', logo: 'assets/images/partner-rsacs.png' },
  { name: 'Govt. of India', logo: 'assets/images/partner-goi.png' }
];

export default function HomePage({ lang, onOpenVideo, onSelectLeader }) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src="assets/images/hero-slide-1.jpg" alt="GMVS Rural Community Empowerment in Rajasthan" />
        </div>
        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-badge-pill">
            <Sparkles size={15} style={{ color: '#FDE68A' }} />
            <span>28 Years of Grassroots Impact &bull; Est. 1998 &bull; Ajmer, Rajasthan</span>
          </div>

          <h1 className="hero-title hero-title-main" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
            {lang === 'en' ? (
              <>
                Empowering Rural Lives Through <span className="highlight">Women’s Collective Leadership</span>
              </>
            ) : (
              <>
                ग्रामीण महिलाओं के सामूहिक नेतृत्व से <span className="highlight">समग्र सामाजिक विकास</span>
              </>
            )}
          </h1>

          <p className="hero-description hero-desc-main">
            {lang === 'en'
              ? 'Gramin Mahila Vikas Sansthan (GMVS) is an accredited NGO based in Bubani, Ajmer, transforming rural lives across Rajasthan through women-led Self-Help Groups, child education, Jal Shakti water harvesting, and health security.'
              : 'ग्रामीण महिला विकास संस्थान (GMVS) अजमेर स्थित एक प्रमुख संस्था है, जो महिला स्वयं सहायता समूहों, बाल शिक्षा, जल संरक्षण एवं स्वास्थ्य सुरक्षा द्वारा राजस्थान के ग्रामीण परिवारों को सशक्त बना रही है।'}
          </p>

          <div className="hero-actions">
            <Link to="/donate" className="btn btn-secondary btn-lg">
              <Heart size={18} fill="currentColor" />
              <span>Donate &amp; Save 50% Tax (80-G)</span>
            </Link>
            <Link to="/programs" className="btn btn-outline-white btn-lg">
              <span>Explore Our 5 Pillars</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Hero Trust Badges */}
          <div className="hero-trust-bar">
            <div className="hero-trust-item">
              <ShieldCheck size={18} />
              <span>Section 80-G Tax Exempt</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle2 size={18} />
              <span>MHA FCRA Reg. # 125410040</span>
            </div>
            <div className="hero-trust-item">
              <Award size={18} />
              <span>Ajmer District Collector Honour</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Credentials Ribbon */}
      <section className="credentials-ribbon">
        <div className="container credentials-grid">
          <div className="credential-item">
            <div className="credential-icon">
              <ShieldCheck size={24} />
            </div>
            <div className="credential-info">
              <h6>Section 80-G Tax Deductible</h6>
              <p>50% deduction for Indian donors with Form 10BE certificate</p>
            </div>
          </div>

          <div className="credential-item">
            <div className="credential-icon">
              <Award size={24} />
            </div>
            <div className="credential-info">
              <h6>Accredited NGO Status</h6>
              <p>Registered under Societies Act 28 (52/1998-99) &amp; NITI Aayog</p>
            </div>
          </div>

          <div className="credential-item">
            <div className="credential-icon">
              <HeartHandshake size={24} />
            </div>
            <div className="credential-info">
              <h6>CSR Implementing Partner</h6>
              <p>Trusted by Tata Trusts, NABARD, ICICI Bank &amp; GIZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Numerical Impact Counters */}
      <ImpactCounters />

      {/* Thematic Pillars of Impact */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Core Interventions</span>
            <h2>Our Five Thematic Pillars of Grassroots Impact</h2>
            <p className="section-subtitle">
              Building lasting community resilience aligned with the United Nations Sustainable Development Goals (SDGs).
            </p>
          </div>

          <div className="programs-grid">
            {/* Pillar 1: Women Empowerment */}
            <div className="program-card">
              <div className="program-img-wrap">
                <img src="assets/images/women-empowerment.jpg" alt="Women Empowerment & SHGs" />
                <span className="program-category-pill">SDG 5 &bull; Gender Equality</span>
              </div>
              <div className="program-content">
                <h3 className="program-title">Women's Collective &amp; Enterprise</h3>
                <p className="program-desc">
                  Mobilising 620+ Self-Help Groups (SHGs) into village-level federations, micro-savings collectives, and women-led tailoring clusters.
                </p>
                <div className="program-features">
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>14,500+ Women actively organised in SHGs</span>
                  </div>
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>Tailoring clusters commended in Mann Ki Baat</span>
                  </div>
                </div>
                <div className="program-footer">
                  <Link to="/programs#women-empowerment" className="program-link">
                    <span>Learn More</span> <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pillar 2: Child Rights & Education */}
            <div className="program-card">
              <div className="program-img-wrap">
                <img src="assets/images/child-rights.jpg" alt="Child Rights & Education" />
                <span className="program-category-pill">SDG 4 &bull; Quality Education</span>
              </div>
              <div className="program-content">
                <h3 className="program-title">Child Rights &amp; Remedial Schools</h3>
                <p className="program-desc">
                  Withdrawing children from forced labour, running community learning centres, and mainstreaming rural girl children into formal secondary education.
                </p>
                <div className="program-features">
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>4,800+ Children mainstreamed into schools</span>
                  </div>
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>Remedial tuition &amp; nutrition kits in 45 hamlets</span>
                  </div>
                </div>
                <div className="program-footer">
                  <Link to="/programs#child-rights" className="program-link">
                    <span>Learn More</span> <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pillar 3: Jal Shakti & NRM */}
            <div className="program-card">
              <div className="program-img-wrap">
                <img src="assets/images/nrm.jpg" alt="Jal Shakti & NRM" />
                <span className="program-category-pill">SDG 6 &bull; Clean Water</span>
              </div>
              <div className="program-content">
                <h3 className="program-title">Jal Shakti &amp; Water Harvesting</h3>
                <p className="program-desc">
                  Constructing traditional Taankas, Khadins, and check bunds in drought-prone areas to ensure year-round drinking water and soil moisture retention.
                </p>
                <div className="program-features">
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>180+ Taankas &amp; check bunds built</span>
                  </div>
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>Revitalising indigenous Aravalli water wisdom</span>
                  </div>
                </div>
                <div className="program-footer">
                  <Link to="/programs#nrm" className="program-link">
                    <span>Learn More</span> <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pillar 4: Health & Nutrition */}
            <div className="program-card">
              <div className="program-img-wrap">
                <img src="assets/images/health-concerns.jpg" alt="Health & Eye Care" />
                <span className="program-category-pill">SDG 3 &bull; Good Health</span>
              </div>
              <div className="program-content">
                <h3 className="program-title">Rural Health &amp; Eye Screening</h3>
                <p className="program-desc">
                  Delivering mobile health outreach, maternal health monitoring, and free cataract surgeries in partnership with Sightsavers and health authorities.
                </p>
                <div className="program-features">
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>32,000+ Screenings &amp; free eye surgeries</span>
                  </div>
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>100% Institutional deliveries in pilot villages</span>
                  </div>
                </div>
                <div className="program-footer">
                  <Link to="/programs#health-concerns" className="program-link">
                    <span>Learn More</span> <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pillar 5: Community Livelihoods */}
            <div className="program-card">
              <div className="program-img-wrap">
                <img src="assets/images/community-development.jpg" alt="Community Livelihoods" />
                <span className="program-category-pill">SDG 1 &bull; No Poverty</span>
              </div>
              <div className="program-content">
                <h3 className="program-title">Livelihoods &amp; Animal Husbandry</h3>
                <p className="program-desc">
                  Establishing Sirohi goat rearing cooperatives, sustainable fodder management, and market linkage for rural women producers and artisans.
                </p>
                <div className="program-features">
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>3,200+ Families earning sustainable livestock income</span>
                  </div>
                  <div className="program-feature-item">
                    <CheckCircle2 size={16} /> <span>Breed improvement and doorstep veterinary care</span>
                  </div>
                </div>
                <div className="program-footer">
                  <Link to="/programs#community-development" className="program-link">
                    <span>Learn More</span> <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field Stories Showcase */}
      <section className="section bg-surface-subtle">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Real Transformation</span>
            <h2>Voices from the Grassroots</h2>
            <p className="section-subtitle">
              Authentic transformation stories demonstrating how our participatory approach empowers rural families across Rajasthan.
            </p>
          </div>

          <FieldStories />
        </div>
      </section>

      {/* Interactive 80-G Tax Calculator Section */}
      <section className="section bg-surface">
        <div className="container">
          <TaxCalculator />
        </div>
      </section>

      {/* Institutional Partners Marquee */}
      <section className="section-sm partners-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-tag">Collaborative Alliances</span>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>Supported by Reputed Institutional Partners</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
              Working hand-in-hand with leading philanthropic foundations, government departments, and corporate CSR programs.
            </p>
          </div>

          <div className="partners-grid">
            {PARTNERS.map((p, i) => (
              <div key={i} className="partner-card" title={p.name}>
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/partners" className="btn btn-outline btn-sm">
              <span>View CSR Partnership Framework</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Urgent Call to Action Banner */}
      <section className="section-sm bg-surface-subtle">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <span className="badge-tag tag-white" style={{ marginBottom: '1rem' }}>
                Grassroots Catalyst
              </span>
              <h2 className="cta-title">Join Us in Transforming Another 100,000 Lives</h2>
              <p className="cta-desc">
                Your generous contribution directly builds rainwater harvesting tanks, puts young rural girls into schools, and gives women the tools to lead their communities.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/donate" className="btn btn-secondary btn-lg">
                  <Heart size={18} fill="currentColor" />
                  <span>Donate Online (80-G)</span>
                </Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">
                  <span>Volunteer With Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
