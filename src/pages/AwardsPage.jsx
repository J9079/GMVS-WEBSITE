import React from 'react';
import { Award, FileText, Download, CheckCircle2, ShieldCheck } from 'lucide-react';

const REPORTS = [
  {
    year: '2024–25',
    title: 'GMVS Annual Activity & Audited Accounts Report 2024-25',
    highlights: 'Audited by Independent CA • Form 10B & FCRA Return Compliant',
    pdf: 'contact?subject=Annual+Report+Request+2024-25'
  },
  {
    year: '2023–24',
    title: 'Annual Report 2023-24: "Conserving Every Drop, Empowering Every Hand"',
    highlights: 'Statutory Filing Complete • Focus: Jal Shakti & Rainwater Harvesting',
    pdf: 'contact?subject=Annual+Report+Request+2023-24'
  },
  {
    year: '2022–23',
    title: 'Annual Report 2022-23: "Silver Jubilee Milestone (1998–2023)"',
    highlights: '25 Years of Institutional Governance • Women Apparel Clusters Commendation',
    pdf: 'contact?subject=Annual+Report+Request+2022-23'
  },
  {
    year: '2021–22',
    title: 'Annual Report 2021-22: "Resilience, Health Security & Rural Livelihoods"',
    highlights: 'Audited Balance Sheet & Expenditure • Mobile Clinics & Relief Outreach',
    pdf: 'contact?subject=Annual+Report+Request+2021-22'
  },
  {
    year: '2020–21',
    title: 'Annual Report 2020-21: "Grassroots Humanitarian Response & SHG Solidarity"',
    highlights: 'Full CA Audit Certificate • Dry Ration & Emergency Health Support',
    pdf: 'contact?subject=Annual+Report+Request+2020-21'
  }
];

export default function AwardsPage() {
  return (
    <>
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Honours &amp; Accountability</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Awards, Accreditations &amp; Audits
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Celebrating our grassroots community leadership, institutional recognitions by government bodies, and unwavering commitment to financial transparency.
          </p>
        </div>
      </section>

      {/* Awards Showcase */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Grassroots Recognition</span>
            <h2>Distinguished Honours &amp; Felicitations</h2>
            <p className="section-subtitle">Acknowledged by district authorities, state leadership, and national platforms.</p>
          </div>

          <div className="awards-grid">
            {/* Award 1 */}
            <div className="award-card">
              <div className="award-image-wrap">
                <img src="assets/images/district-honour.jpeg" alt="Ajmer District Level Honour" />
                <span className="award-badge">District Honour &bull; Ajmer</span>
              </div>
              <div className="award-content">
                <div className="award-by">Office of District Collector, Ajmer</div>
                <h3 className="award-title">District Level Honour for Distinguished Social Service</h3>
                <p className="award-desc">
                  Conferred upon GMVS and Secretary Shankar Singh Rawat by the District Collector and District Administration of Ajmer commemorating outstanding grassroots development, girl child education, and women empowerment.
                </p>
                <div className="award-quote-box">
                  “In recognition of unwavering social commitment and impactful transformation of rural marginalized communities across Rajasthan.”
                </div>
              </div>
            </div>

            {/* Award 2 */}
            <div className="award-card">
              <div className="award-image-wrap">
                <img src="assets/images/tribal-culture-festival.jpeg" alt="International Tribal Culture Festival" />
                <span className="award-badge">Cultural &amp; Eco-Heritage Honour</span>
              </div>
              <div className="award-content">
                <div className="award-by">International Tribal Culture Festival Committee</div>
                <h3 className="award-title">Felicitation at International Tribal Culture Festival</h3>
                <p className="award-desc">
                  Felicitated for exemplary work in reviving indigenous rainwater conservation, safeguarding traditional tribal knowledge, and creating sustainable livelihoods for indigenous communities.
                </p>
                <div className="award-quote-box">
                  “Honouring leadership that revitalizes indigenous eco-wisdom, community soil-water stewardship, and indigenous heritage.”
                </div>
              </div>
            </div>

            {/* Award 3 */}
            <div className="award-card">
              <div className="award-image-wrap">
                <img src="assets/images/honoured-for-service.jpeg" alt="Dedicated Social Service Honour" />
                <span className="award-badge">Social Service Citation</span>
              </div>
              <div className="award-content">
                <div className="award-by">State Dignitaries &amp; Grassroots Apex Forum</div>
                <h3 className="award-title">Citation for Dedicated Community Service</h3>
                <p className="award-desc">
                  Presented to GMVS leadership for championing women-led Self-Help Group federations, establishing child-friendly school environments, and ensuring access to primary healthcare.
                </p>
                <div className="award-quote-box">
                  “Exemplary dedication to grassroots community mobilization and building sustainable democratic institutions for rural women.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audited Reports Section */}
      <section id="reports" className="section bg-surface-subtle">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Financial Stewardship</span>
            <h2>Audited Annual Reports &amp; Public Disclosures</h2>
            <p className="section-subtitle">
              At GMVS, every single rupee is an institutional trust. Our accounts are audited annually by independent Chartered Accountants.
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {REPORTS.map((r, i) => (
              <div key={i} className="report-row">
                <div className="report-meta">
                  <div className="report-icon-box">PDF</div>
                  <div>
                    <div className="report-title">{r.title}</div>
                    <div className="report-sub">
                      <span>📅 FY {r.year}</span>
                      <span>🏛️ {r.highlights}</span>
                    </div>
                  </div>
                </div>
                <div className="report-actions">
                  <a href={`#/${r.pdf}`} className="btn btn-outline btn-sm">
                    <Download size={14} />
                    <span>Request Audit</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
