import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Heart, ArrowRight, CheckCircle2, 
  Users, Landmark, Compass, Award, Droplets, 
  GraduationCap, HeartHandshake, Stethoscope, Sparkles, ChevronRight
} from 'lucide-react';
import TaxCalculator from '../components/TaxCalculator';

const AWARDS_SHOWCASE = [
  {
    badge: "State & District Honour",
    title: "Honoured with Ajmer District Level Honour by District Collector for Grassroots Social Excellence",
    desc: "Recognised by the Rajasthan State Administration and District Collectorate for over 28 years of tireless grassroots service in women empowerment, child protection, and community development.",
    image: "assets/images/hero-slide-1.jpg",
    link: "/awards"
  },
  {
    badge: "National Commendation",
    title: "Commended by Hon'ble PM Narendra Modi in Mann Ki Baat (Ep. 92) for Women Apparel Cluster DARJI ONLINE",
    desc: "National commendation on Mann Ki Baat highlighting GMVS board member Setha Singh Rawat and rural women artisans transforming traditional sewing skills into sustainable livelihoods.",
    image: "assets/images/hero-slide-2.jpg",
    link: "/leadership"
  },
  {
    badge: "Water Conservation Milestone",
    title: "Constructed 180+ Traditional Rainwater Harvesting Taankas & Khadins across Drought-Prone Hamlets",
    desc: "Revitalising indigenous Aravalli water wisdom to provide reliable drinking water and year-round moisture security to vulnerable rural families.",
    image: "assets/images/nrm.jpg",
    link: "/programs#nrm"
  },
  {
    badge: "Transformative Partnership",
    title: "Scaling Women's Collectives with RAJEEVIKA, NABARD, and Tata Trusts across Rajasthan",
    desc: "Mobilising over 620 Self-Help Groups into self-governing village federations, financial credit networks, and women-owned micro-enterprises.",
    image: "assets/images/women-empowerment.jpg",
    link: "/partners"
  }
];

const FEATURED_STORIES = [
  {
    tag: "Women Enterprise",
    title: "Sewing a New Life: Santosh Devi's Journey from Grief to Enterprise",
    excerpt: "After sudden bereavement, Santosh Devi rebuilt her family's future through GMVS tailoring collective, now mentoring 35 rural women.",
    image: "assets/images/story-santosh-devi.jpg",
    link: "/stories"
  },
  {
    tag: "Water Harvesting",
    title: "Revitalising Taanka Wisdom: Bringing Safe Water to Parched Aravalli Hamlets",
    excerpt: "Traditional rainwater Taankas constructed by GMVS now harvest over 3.6 million litres annually, freeing women from 4km daily water walks.",
    image: "assets/images/nrm.jpg",
    link: "/stories"
  },
  {
    tag: "Child Protection",
    title: "Mainstreaming 4,800+ Rural Children from Brick Kilns into Formal Schools",
    excerpt: "Community learning centres and nutrition support have helped first-generation rural girls complete secondary school with dignity.",
    image: "assets/images/child-rights.jpg",
    link: "/stories"
  },
  {
    tag: "Livelihoods",
    title: "Economic Dignity Through Sirohi Goat Rearing & Micro-Credit Collectives",
    excerpt: "Scientific breed improvement and door-to-door veterinary clinics have doubled household incomes for over 3,200 pastoral families.",
    image: "assets/images/community-development.jpg",
    link: "/stories"
  }
];

const MANJARI_PROGRAMS = [
  {
    id: "women-institutions",
    title: "Women's Institutions & SHGs",
    image: "assets/images/women-empowerment.jpg",
    text: "Committed to empowering women from marginalised communities through 620+ Self-Help Groups, village federations, leadership training, and financial autonomy.",
    link: "/programs#women-empowerment"
  },
  {
    id: "enhancing-livelihoods",
    title: "Enhancing Livelihoods & Livestock",
    image: "assets/images/community-development.jpg",
    text: "Promoting sustainable income generation through Sirohi goat rearing cooperatives, organic agriculture, value addition, and direct market linkage.",
    link: "/programs#community-development"
  },
  {
    id: "quality-education",
    title: "Quality Child Education",
    image: "assets/images/child-rights.jpg",
    text: "Eradicating child labour, running remedial learning centres in remote hamlets, and ensuring 100% retention for rural girl children in secondary schools.",
    link: "/programs#child-rights"
  },
  {
    id: "wash-nrm",
    title: "Water, Sanitation & Hygiene (WASH)",
    image: "assets/images/nrm.jpg",
    text: "Constructing traditional rainwater Taankas, check dams, and Khadins to resolve drinking water scarcity and recharge groundwater across Rajasthan.",
    link: "/programs#nrm"
  },
  {
    id: "health-nutrition",
    title: "Health, Nutrition & Eye Care",
    image: "assets/images/health-concerns.jpg",
    text: "Providing mobile medical outreach, maternal and child healthcare, nutrition counseling, and over 32,000 free eye screenings and cataract surgeries.",
    link: "/programs#health-concerns"
  },
  {
    id: "social-enterprises",
    title: "Social Enterprises & Youth Skills",
    image: "assets/images/hero-slide-2.jpg",
    text: "Empowering rural youth and women with market-driven skills, vocational tailoring clusters (DARJI ONLINE), and micro-enterprise development.",
    link: "/programs#women-empowerment"
  }
];

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

const TESTIMONIALS = [
  {
    quote: "GMVS's participatory grassroots model in Ajmer is a benchmark for women-led rural development. Their transparency, institutional discipline, and impact on water conservation and SHG federations reflect deep commitment to rural empowerment.",
    author: "District Administration & Collectorate",
    org: "Ajmer, Rajasthan"
  },
  {
    quote: "Our collaboration with GMVS on maternal healthcare and eye care has enabled life-changing medical interventions in remote rural Panchayats where mainstream healthcare infrastructure was previously inaccessible.",
    author: "CSR Project Integrator",
    org: "National Healthcare Partner"
  },
  {
    quote: "Before joining the GMVS Self-Help Group, I had never stepped outside my home alone. Today, I manage our village micro-savings cooperative, have paid for my daughter's college education, and lead our local Panchayat water committee.",
    author: "Pushpa Devi Rawat",
    org: "SHG Cluster Pradhan, Bubani"
  }
];

const NEWS_UPDATES = [
  {
    date: "March 2026",
    title: "GMVS Expands Taanka Water Harvesting Initiative to 15 New Hamlets in Ajmer",
    excerpt: "With support from institutional donors, construction of 40 new household rainwater harvesting structures begins to ensure clean drinking water ahead of summer.",
    image: "assets/images/nrm.jpg",
    link: "/stories"
  },
  {
    date: "February 2026",
    title: "Digital Financial Literacy Workshops Successfully Conducted for 350 Women Artisans",
    excerpt: "Empowering rural SHG entrepreneurs with UPI digital payments, bank transfer security, and accounting basics across Srinagar and Jawaja blocks.",
    image: "assets/images/women-empowerment.jpg",
    link: "/stories"
  },
  {
    date: "January 2026",
    title: "Annual Girl Child Education Drive Re-enrolls 240 Out-of-School Children",
    excerpt: "Door-to-door community counseling and remedial kits distributed in rural school clusters to ensure zero dropouts among tribal girl students.",
    image: "assets/images/child-rights.jpg",
    link: "/stories"
  }
];

export default function HomePage({ lang, onNotify }) {
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);

  // Auto-cycle through showcase awards every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAwardIndex((prev) => (prev + 1) % AWARDS_SHOWCASE.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentAward = AWARDS_SHOWCASE[activeAwardIndex];

  return (
    <>
      {/* 1. Manjari-Style Split Hero Section */}
      <section className="hero-split-section">
        <div className="container-wide">
          <div className="hero-split-grid">
            {/* Left Column: Featured Award / Milestone Showcase Carousel (awwardbox) */}
            <div className="awwardbox">
              <div className="awwardbox-img">
                <img src={currentAward.image} alt={currentAward.title} />
              </div>
              <div className="awwardbox-overlay" />
              <div className="awwardbox-content">
                <span className="awwardbox-badge">
                  <Award size={14} />
                  <span>{currentAward.badge}</span>
                </span>
                <h3>{currentAward.title}</h3>
                <p>{currentAward.desc}</p>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <Link to={currentAward.link} className="btn01">
                    <span>Explore Milestone</span>
                    <ArrowRight size={16} />
                  </Link>

                  <div className="awwardbox-nav">
                    {AWARDS_SHOWCASE.map((_, idx) => (
                      <button
                        key={idx}
                        className={`awwardbox-tab ${idx === activeAwardIndex ? 'active' : ''}`}
                        onClick={() => setActiveAwardIndex(idx)}
                        aria-label={`Showcase slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4-Grid Featured Impact Stories (impect-box) */}
            <div className="impect-grid">
              {FEATURED_STORIES.map((story, i) => (
                <Link key={i} to={story.link} className="impect-box">
                  <div className="impect-box-img">
                    <img src={story.image} alt={story.title} />
                  </div>
                  <div className="impect-box-overlay" />
                  <div className="impect-box-content">
                    <span className="impect-box-tag">{story.tag}</span>
                    <h5>{story.title}</h5>
                    <p>{story.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Manjari 4-Pillars Core Value Band (icobox / bg-theme) */}
      <section className="pillars-theme-band">
        <div className="container">
          <div className="pillars-grid">
            <div className="icobox">
              <div className="icobox-icon">
                <Users size={32} />
              </div>
              <div className="icobox-content">
                <h5>Leadership</h5>
                <p>
                  We structure ourselves as concentric, community-driven circles and women-led federations rather than traditional hierarchies of power.
                </p>
              </div>
            </div>

            <div className="icobox">
              <div className="icobox-icon">
                <Heart size={32} />
              </div>
              <div className="icobox-content">
                <h5>People</h5>
                <p>
                  Centering rural women, girl children, and smallholder farmers as the architects and primary owners of their own socio-economic transformation.
                </p>
              </div>
            </div>

            <div className="icobox">
              <div className="icobox-icon">
                <Landmark size={32} />
              </div>
              <div className="icobox-content">
                <h5>Partnerships</h5>
                <p>
                  Forging strategic alliances with Tata Trusts, NABARD, GIZ Germany, ICICI Bank, and Govt. of Rajasthan to scale grassroots innovations.
                </p>
              </div>
            </div>

            <div className="icobox">
              <div className="icobox-icon">
                <CheckCircle2 size={32} />
              </div>
              <div className="icobox-content">
                <h5>Results</h5>
                <p>
                  Committed to delivering measurable, transparent grassroots outcomes: verifiable water security, school enrollment, and dignified rural incomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Welcome to GMVS Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-image-wrap">
              <img 
                src="assets/images/hero-slide-1.jpg" 
                alt="Gramin Mahila Vikas Sansthan Community Assembly" 
                className="welcome-img" 
              />
              <div className="welcome-badge-float">
                <h4>28+</h4>
                <p>Years of Service &bull; Est. 1998</p>
              </div>
            </div>

            <div className="welcome-content">
              <span className="welcome-content-subhead">Welcome to</span>
              <h2>Gramin Mahila Vikas Sansthan (GMVS)</h2>
              <h6 className="welcome-content-tagline">
                Developing women's institutions &amp; sustainable livelihoods at the grassroots
              </h6>
              <p>
                Gramin Mahila Vikas Sansthan (GMVS) is a registered non-profit organisation established in 1998 in Bubani, Ajmer district, Rajasthan. Our mission is to help women from marginalised communities overcome social injustice, poverty, and exclusion through collective self-reliance.
              </p>
              <p>
                We execute participatory ground initiatives across 2,500+ villages, facilitating women-led Self-Help Groups, child labour withdrawal, school mainstreaming, traditional rainwater harvesting (Taankas &amp; Khadins), and livestock livelihoods.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn01">
                  <span>Read More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/leadership" className="btn01 btn01-outline">
                  <span>Governing Leadership</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Programmes Section (Manjari Style program-box) */}
      <section className="section bg-surface-subtle">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Thematic Focus Areas</span>
            <h2>Our Programmes</h2>
            <p className="section-subtitle">
              Our thematic programmes are designed to improve living conditions of village communities and foster self-reliant rural ecosystems.
            </p>
          </div>

          <div className="programs-manjari-grid">
            {MANJARI_PROGRAMS.map((prog) => (
              <div key={prog.id} className="program-box">
                <div className="program-box-img">
                  <img src={prog.image} alt={prog.title} />
                </div>
                <div className="program-box-content">
                  <h3 className="program-box-title">{prog.title}</h3>
                  <p className="program-box-text">{prog.text}</p>
                  <div>
                    <Link to={prog.link} className="btn01 btn01-primary">
                      <span>Click Here</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Full-Width Community Callout Banner (addimg-section) */}
      <div className="addimg-section">
        <div className="container">
          <div className="addimg-content">
            <h2>Are you a rural entrepreneur, CSR partner, or changemaker seeking to create lasting impact?</h2>
            <p>
              Partner with GMVS to empower grassroots women's institutions, construct clean water harvesting structures, and transform lives across Rajasthan.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn01">
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/donate" className="btn01 btn01-white">
                <Heart size={16} fill="currentColor" />
                <span>Donate Under Section 80-G</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Testimonials Section (What People Say About Us) */}
      <section className="section bg-surface">
        <div className="container">
          <div className="testimonials-manjari-grid">
            <div>
              <span className="badge-tag">Stakeholder Voices</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>What People Say About Us</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.025rem' }}>
                When women mobilise into self-governing institutions and rural communities take ownership of their natural resources, lasting transformation takes root.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/stories" className="btn01 btn01-outline">
                  <span>Explore All Field Testimonials</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div>
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="testimonial-card-item">
                  <p className="testimonial-quote-text">“{t.quote}”</p>
                  <div className="testimonial-meta">
                    <div className="testimonial-meta-info">
                      <h5>{t.author}</h5>
                      <span>{t.org}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Milestone Impact Numbers Counter Band (edu-counterup) */}
      <section className="section-sm bg-surface-subtle">
        <div className="container">
          <div className="edu-counter-grid">
            <div className="edu-counterup primary-color">
              <h3>50,000+</h3>
              <p className="counter-label">Lives Impacted</p>
            </div>
            <div className="edu-counterup secondary-color">
              <h3>14,500+</h3>
              <p className="counter-label">Women Empowered</p>
            </div>
            <div className="edu-counterup extra02-color">
              <h3>180+</h3>
              <p className="counter-label">Taankas Built</p>
            </div>
            <div className="edu-counterup extra05-color">
              <h3>₹25+ Cr</h3>
              <p className="counter-label">Credit Mobilised</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Interactive 80-G Tax Exemption Calculator */}
      <section className="section bg-surface">
        <div className="container">
          <TaxCalculator />
        </div>
      </section>

      {/* 9. Institutional Partners (Our Partners) */}
      <section className="section-sm bg-surface-subtle">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Institutional Support</span>
            <h2>Our Partners</h2>
            <p className="section-subtitle">
              Working in close alliance with prestigious national foundations, government bodies, and corporate CSR programs.
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
            <Link to="/partners" className="btn01 btn01-outline">
              <span>View Full Partner Ecosystem</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Latest News & Field Stories (manblog) */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Field Dispatches</span>
            <h2>Latest News &amp; Field Stories</h2>
            <p className="section-subtitle">
              Updates and grassroots milestones from our ongoing development initiatives across Rajasthan.
            </p>
          </div>

          <div className="manblog-grid">
            {NEWS_UPDATES.map((item, idx) => (
              <div key={idx} className="manblog">
                <div className="manblog-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="manblog-content">
                  <span className="manblog-date">{item.date}</span>
                  <Link to={item.link} className="manblog-title">
                    {item.title}
                  </Link>
                  <p className="manblog-excerpt">{item.excerpt}</p>
                  <div>
                    <Link to={item.link} className="line-button">
                      <span>Read More</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
