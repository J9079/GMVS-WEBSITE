import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Heart, Users, GraduationCap, Droplets, Stethoscope, Sprout } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <>
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Thematic Interventions</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Our Work: Five Pillars of Grassroots Impact
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Multi-sectoral development initiatives driving sustainable transformation across 250+ villages in Ajmer, Chittorgarh, and Nagaur.
          </p>
        </div>
      </section>

      {/* Program 1: Women Empowerment */}
      <section id="women-empowerment" className="section bg-surface">
        <div className="container">
          <div className="split-grid">
            <div className="split-media">
              <div className="split-image-main">
                <img src="assets/images/women-empowerment.jpg" alt="Women Empowerment and SHGs" />
              </div>
            </div>
            <div className="split-content">
              <span className="badge-tag">Pillar 1 &bull; SDG 5 &amp; 8</span>
              <h2>Women's Collectives, Financial Inclusion &amp; Apparel Clusters</h2>
              <p>
                At the core of GMVS's philosophy is the belief that sustainable development occurs only when women lead. We mobilise rural women into democratic Self-Help Groups (SHGs), establish village federations, and provide micro-credit access.
              </p>
              <div className="key-highlights-list">
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>620+ Active Self-Help Groups</strong>
                    <span>Enabling financial independence and community leadership for 14,500+ women.</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>Tailoring &amp; Apparel Enterprise Clusters</strong>
                    <span>Recognised nationally by Prime Minister Narendra Modi in Mann Ki Baat (Ep. 92).</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 2: Child Rights & Education */}
      <section id="child-rights" className="section bg-surface-subtle">
        <div className="container">
          <div className="split-grid">
            <div className="split-content">
              <span className="badge-tag">Pillar 2 &bull; SDG 4 &amp; 2</span>
              <h2>Child Rights, Remedial Education &amp; Nutrition</h2>
              <p>
                GMVS works vigorously to eliminate child labour from agricultural fields and domestic work. We establish village-level remedial bridge schools, deliver school supplies, and promote girl child secondary education.
              </p>
              <div className="key-highlights-list">
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>4,800+ Children Mainstreamed</strong>
                    <span>Withdrawn from informal child labour and enrolled into formal government schools.</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>Remedial Learning Centres</strong>
                    <span>Free after-school tutoring, textbooks, nutrition supplements, and scholarship support.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="split-media">
              <div className="split-image-main">
                <img src="assets/images/child-rights.jpg" alt="Child Rights & Education" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 3: Jal Shakti & NRM */}
      <section id="nrm" className="section bg-surface">
        <div className="container">
          <div className="split-grid">
            <div className="split-media">
              <div className="split-image-main">
                <img src="assets/images/nrm.jpg" alt="Natural Resource Management & Jal Shakti" />
              </div>
            </div>
            <div className="split-content">
              <span className="badge-tag">Pillar 3 &bull; SDG 6 &amp; 13</span>
              <h2>Jal Shakti: Rainwater Harvesting &amp; Soil Conservation</h2>
              <p>
                In the semi-arid landscapes of Rajasthan, water is life. GMVS combines indigenous hydrological knowledge with modern participatory watershed design to construct household Taankas and community Khadins.
              </p>
              <div className="key-highlights-list">
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>180+ Taankas &amp; Water Harvesting Check Bunds</strong>
                    <span>Capturing monsoon runoff and providing 25,000L drinking water per family.</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>International Tribal Culture Festival Honour</strong>
                    <span>Felicitated for preserving indigenous Aravalli water harvesting heritage.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 4: Health Concerns */}
      <section id="health-concerns" className="section bg-surface-subtle">
        <div className="container">
          <div className="split-grid">
            <div className="split-content">
              <span className="badge-tag">Pillar 4 &bull; SDG 3</span>
              <h2>Rural Health Outreach, Maternal Care &amp; Eye Surgeries</h2>
              <p>
                Bridging the rural healthcare divide through mobile health checkups, maternal nutrition education, iron supplementation, and free cataract screening camps in partnership with Sightsavers.
              </p>
              <div className="key-highlights-list">
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>32,000+ Screenings &amp; Free Cataract Surgeries</strong>
                    <span>Restoring eyesight for rural elderly citizens across Ajmer and Chittorgarh.</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>Zero Maternal Death Target</strong>
                    <span>100% institutional deliveries promoted through community health animators.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="split-media">
              <div className="split-image-main">
                <img src="assets/images/health-concerns.jpg" alt="Health Outreach and Eye Camps" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 5: Community Livelihoods */}
      <section id="community-development" className="section bg-surface">
        <div className="container">
          <div className="split-grid">
            <div className="split-media">
              <div className="split-image-main">
                <img src="assets/images/community-development.jpg" alt="Community Livelihoods and Livestock" />
              </div>
            </div>
            <div className="split-content">
              <span className="badge-tag">Pillar 5 &bull; SDG 1 &amp; 10</span>
              <h2>Sustainable Livelihoods &amp; Animal Husbandry Clusters</h2>
              <p>
                Supporting smallholder farmers, landless wage labourers, and pastoralists with indigenous Sirohi goat rearing units, veterinary care, fodder preservation, and direct producer market linkages.
              </p>
              <div className="key-highlights-list">
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>3,200+ Livestock Farming Beneficiaries</strong>
                    <span>Supplementary household income through goat breed improvement and cooperative sales.</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-item-icon"><CheckCircle2 size={16} /></div>
                  <div className="highlight-item-text">
                    <strong>Market Linkage via Local2Global Mart</strong>
                    <span>Empowering rural artisans to sell value-added handicrafts directly to urban buyers.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
