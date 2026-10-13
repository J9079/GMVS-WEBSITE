import React, { useState } from 'react';
import { ANNUAL_REPORTS } from '../data/annualReports';
import { 
  FileText, 
  Download, 
  Search, 
  ShieldCheck, 
  Calendar, 
  ExternalLink, 
  X, 
  ZoomIn, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';

const DECADE_FILTERS = [
  { id: 'all', label: 'All Archives (26)' },
  { id: '2020s', label: '2020s (2020–2025)' },
  { id: '2010s', label: '2010s (2010–2020)' },
  { id: '2000s', label: '2000s (2000–2010)' },
  { id: '1990s', label: 'Foundational (1997–2000)' }
];

export default function AnnualReportsPage({ onNotify }) {
  const [selectedDecade, setSelectedDecade] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewReport, setPreviewReport] = useState(null);

  const filteredReports = ANNUAL_REPORTS.filter((report) => {
    const matchesDecade = selectedDecade === 'all' || report.decade === selectedDecade;
    const matchesSearch = 
      report.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.highlights.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.theme.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDecade && matchesSearch;
  });

  const handleDownloadRequest = (report) => {
    if (onNotify) {
      onNotify('Report Selected', `Viewing details for FY ${report.year}. Official audit filing accessible.`, 'info');
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>
            <ShieldCheck size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Financial Stewardship &amp; Transparency
          </span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '0.85rem' }}>
            Audited Annual Reports (1997–2025)
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '780px', lineHeight: 1.6 }}>
            Explore 28 years of unbroken institutional accountability. At GMVS, every single rupee entrusted by partners, government bodies, and patrons is audited annually by independent Chartered Accountants and filed with statutory authorities.
          </p>
        </div>
      </section>

      {/* Audit Transparency Highlights Banner */}
      <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '1.25rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle2 size={18} style={{ color: '#16A34A', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>Independent CA Audited (1998–2025)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={18} style={{ color: '#0284C7', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>FCRA Registered (No. 125410040)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award size={18} style={{ color: '#D97706', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>NITI Aayog Darpan &amp; MCA CSR-1</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FileText size={18} style={{ color: '#7C3AED', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>Form 10B Statutory Returns Current</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section bg-surface">
        <div className="container">
          {/* Controls: Filter Tabs & Search Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <div className="story-filter-tabs" style={{ margin: 0 }}>
              {DECADE_FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`filter-btn ${selectedDecade === f.id ? 'active' : ''}`}
                  onClick={() => setSelectedDecade(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Quick Search Input */}
            <div style={{ position: 'relative', minWidth: '260px', flexGrow: '0' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
              <input
                type="text"
                placeholder="Search year, theme, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '8px 12px 8px 36px',
                  borderRadius: '24px',
                  border: '1px solid #CBD5E1',
                  fontSize: '0.9rem',
                  outline: 'none',
                  width: '100%'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8', padding: 0 }}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Results count banner if search active */}
          {(searchQuery || selectedDecade !== 'all') && (
            <div style={{ marginBottom: '1.5rem', fontSize: '0.925rem', color: '#64748B' }}>
              Showing <strong>{filteredReports.length}</strong> reports {selectedDecade !== 'all' ? `in ${selectedDecade}` : ''} {searchQuery ? `matching "${searchQuery}"` : ''}
            </div>
          )}

          {/* Reports Grid */}
          <div className="annual-reports-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            {filteredReports.map((report) => (
              <div 
                key={report.id} 
                className="annual-report-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Book Cover Container */}
                <div 
                  style={{ 
                    position: 'relative', 
                    height: '340px', 
                    backgroundColor: '#F1F5F9',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => setPreviewReport(report)}
                  title="Click to view cover preview"
                >
                  <img
                    src={report.cover}
                    alt={report.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      transition: 'transform 0.4s ease'
                    }}
                    onError={(e) => {
                      // Fallback placeholder styling
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Badge */}
                  <span 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.88)',
                      color: '#FEF3C7',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    {report.tag}
                  </span>

                  {/* Year Tag */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'var(--primary)',
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    FY {report.year}
                  </span>

                  {/* Zoom Overlay on Hover */}
                  <div 
                    className="report-hover-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(15, 23, 42, 0.4)',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      gap: '6px',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <ZoomIn size={18} />
                    <span>View Cover</span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <Calendar size={13} style={{ color: 'var(--primary)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>
                      Financial Year {report.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.5rem 0', lineHeight: 1.4, color: '#0F172A' }}>
                    {report.title}
                  </h3>

                  <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 1rem 0', flexGrow: 1 }}>
                    {report.highlights}
                  </p>

                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button
                      type="button"
                      onClick={() => setPreviewReport(report)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
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
                      <span>Preview</span>
                    </button>

                    <a
                      href={`#/contact?subject=Annual+Report+Audit+Request+FY+${encodeURIComponent(report.year)}`}
                      className="btn btn-outline btn-sm"
                      onClick={() => handleDownloadRequest(report)}
                      style={{
                        padding: '5px 12px',
                        fontSize: '0.78rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Download size={13} />
                      <span>Request PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReports.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#64748B' }}>
              <FileText size={48} style={{ margin: '0 auto 1rem auto', opacity: 0.4 }} />
              <h3>No Reports Found</h3>
              <p>Try clearing your search query or choosing another decade filter.</p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => { setSelectedDecade('all'); setSearchQuery(''); }}
                style={{ marginTop: '1rem' }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox / Modal for Cover Preview */}
      {previewReport && (
        <div 
          className="modal-overlay active"
          onClick={() => setPreviewReport(null)}
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
              maxWidth: '560px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid #E2E8F0',
              backgroundColor: '#F8FAFC'
            }}>
              <div>
                <span className="badge-tag" style={{ margin: 0, fontSize: '0.75rem' }}>FY {previewReport.year}</span>
                <h4 style={{ margin: '4px 0 0 0', fontSize: '1.1rem' }}>{previewReport.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setPreviewReport(null)}
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

            {/* Modal Image Body */}
            <div style={{ padding: '1rem', backgroundColor: '#0F172A', textAlign: 'center' }}>
              <img
                src={previewReport.cover}
                alt={previewReport.title}
                style={{
                  maxHeight: '65vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                }}
              />
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#FFFFFF'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#64748B', maxWidth: '300px' }}>
                {previewReport.highlights}
              </div>
              <a
                href={`#/contact?subject=Audit+Request+Annual+Report+${encodeURIComponent(previewReport.year)}`}
                className="btn btn-primary btn-sm"
                onClick={() => setPreviewReport(null)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Download size={14} />
                <span>Request Full Audit PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
