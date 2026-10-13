import React, { useState } from 'react';
import { AWARDS, AWARDS_PDF_URL } from '../data/awards';
import { 
  Award, 
  FileText, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink, 
  ZoomIn, 
  X,
  Newspaper,
  Calendar,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AwardsPage({ onNotify }) {
  const [selectedAward, setSelectedAward] = useState(null);

  const handlePdfDownload = () => {
    if (onNotify) {
      onNotify('Awards Document', 'Opening official Government & Foundation awards dossier PDF.', 'success');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>
            <Award size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Honours &amp; Accreditations
          </span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Awards, Accreditations &amp; Citations
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '780px', lineHeight: 1.6 }}>
            Celebrating 28 years of grassroots community leadership. Recognised by district authorities, state leadership, national institutions, and civil society forums across India.
          </p>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a 
              href={AWARDS_PDF_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              onClick={handlePdfDownload}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Download size={16} />
              <span>Download Official Awards PDF</span>
            </a>
            <Link 
              to="/annual-reports" 
              className="btn btn-outline btn-white"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <FileText size={16} />
              <span>View 26 Annual Reports</span>
            </Link>
            <Link 
              to="/media-reports" 
              className="btn btn-outline btn-white"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Newspaper size={16} />
              <span>View Press &amp; Media Clippings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Official PDF Commendation Banner */}
      <section style={{ backgroundColor: '#FEF3C7', borderBottom: '1px solid #FDE68A', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Award size={22} style={{ color: '#D97706', flexShrink: 0 }} />
              <span style={{ color: '#92400E', fontWeight: 600, fontSize: '0.95rem' }}>
                Official State &amp; District Awards Dossier (Certified Document) is publicly downloadable.
              </span>
            </div>
            <a 
              href={AWARDS_PDF_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-sm"
              style={{ backgroundColor: '#D97706', color: '#FFFFFF', fontWeight: 600 }}
              onClick={handlePdfDownload}
            >
              <Download size={14} style={{ marginRight: '6px' }} />
              Download Awards.PDF
            </a>
          </div>
        </div>
      </section>

      {/* Awards Showcase Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Grassroots Recognition</span>
            <h2>Distinguished Honours &amp; Felicitations</h2>
            <p className="section-subtitle">
              Acknowledged by the District Administration, National Forums, Banking Consortia, and International Assemblies.
            </p>
          </div>

          <div className="awards-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {AWARDS.map((award) => (
              <div key={award.id} className="award-card">
                <div 
                  className="award-image-wrap" 
                  style={{ cursor: 'pointer', position: 'relative' }}
                  onClick={() => setSelectedAward(award)}
                  title="Click to view award certificate"
                >
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      if (award.fallbackImage && e.currentTarget.src !== award.fallbackImage) {
                        e.currentTarget.src = award.fallbackImage;
                      }
                    }}
                  />
                  <span className="award-badge">{award.badge}</span>
                  
                  {/* Zoom indicator */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      color: '#FFFFFF',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>

                <div className="award-content">
                  <div className="award-by" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                    {award.awardedBy}
                  </div>
                  <h3 className="award-title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {award.title}
                  </h3>
                  <p className="award-desc" style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem', flexGrow: 1 }}>
                    {award.description}
                  </p>
                  <div className="award-quote-box" style={{ background: '#F8FAFC', borderLeft: '3px solid var(--secondary)', padding: '0.85rem 1rem', fontStyle: 'italic', fontSize: '0.875rem', color: '#475569' }}>
                    {award.quote}
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>{award.category}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedAward(award)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <ZoomIn size={14} />
                      <span>View Citation</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Resource Linking Section */}
      <section className="section bg-surface-subtle" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Verification &amp; Documentation</span>
            <h2>Explore Connected Verification Resources</h2>
            <p className="section-subtitle">
              Transparency and institutional credibility backed by documented filings.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            <Link to="/annual-reports" style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', marginBottom: '1.25rem' }}>
                  <FileText size={24} />
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0F172A' }}>26 Annual Audited Reports</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>
                  Complete historical archive from FY 1997-00 to FY 2024-25, certified by independent Chartered Accountants.
                </p>
                <span style={{ color: '#2563EB', fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Browse All 26 Reports &rarr;
                </span>
              </div>
            </Link>

            <Link to="/media-reports" style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706', marginBottom: '1.25rem' }}>
                  <Newspaper size={24} />
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0F172A' }}>Media Reports &amp; Press Clippings</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>
                  Verified newspaper articles covering our women manufacturing centres, cyber security camps, and tree plantations.
                </p>
                <span style={{ color: '#D97706', fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Read Newspaper Articles &rarr;
                </span>
              </div>
            </Link>

            <Link to="/gallery" style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', marginBottom: '1.25rem' }}>
                  <Sparkles size={24} />
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0F172A' }}>Photo Gallery</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>
                  Authentic high-resolution photographs documenting women SHGs, medical camps, and water harvesting structures.
                </p>
                <span style={{ color: '#059669', fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Explore Photo Gallery &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Award Zoom */}
      {selectedAward && (
        <div 
          className="modal-overlay active"
          onClick={() => setSelectedAward(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(6px)'
          }}
        >
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid #E2E8F0',
              backgroundColor: '#F8FAFC'
            }}>
              <div>
                <span className="badge-tag" style={{ margin: 0, fontSize: '0.75rem' }}>{selectedAward.awardedBy}</span>
                <h4 style={{ margin: '4px 0 0 0', fontSize: '1.15rem' }}>{selectedAward.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748B',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div style={{ padding: '1rem', backgroundColor: '#0F172A', textAlign: 'center' }}>
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                referrerPolicy="no-referrer"
                style={{
                  maxHeight: '65vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                }}
                onError={(e) => {
                  if (selectedAward.fallbackImage && e.currentTarget.src !== selectedAward.fallbackImage) {
                    e.currentTarget.src = selectedAward.fallbackImage;
                  }
                }}
              />
            </div>

            {/* Modal Content */}
            <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
              <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.95rem', lineHeight: 1.6, color: '#334155' }}>
                {selectedAward.description}
              </p>
              <div style={{ background: '#F8FAFC', borderLeft: '3px solid var(--secondary)', padding: '0.75rem 1rem', fontStyle: 'italic', fontSize: '0.9rem', color: '#475569', marginBottom: '1rem' }}>
                {selectedAward.quote}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <a
                  href={AWARDS_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  onClick={handlePdfDownload}
                >
                  <Download size={13} style={{ marginRight: '4px' }} />
                  Download Awards Dossier
                </a>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setSelectedAward(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
