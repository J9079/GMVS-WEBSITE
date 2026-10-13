import React, { useState } from 'react';
import { MEDIA_REPORTS } from '../data/mediaReports';
import { Newspaper, ZoomIn, X, ExternalLink, Calendar, CheckCircle2, FileText, ArrowRight, Play, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const VIDEO_DOCUMENTARIES = [
  {
    id: "4jR9QkrvPWM",
    title: "VYK Training | Feedback from Gramin Mahila Vikas Sansthan",
    tag: "Ground Voices",
    desc: "Ms. Gayatri Sukhwal shares her experience on capacity building, village youth empowerment, and rural development frameworks implemented by GMVS in Rajasthan.",
    image: "/assets/images/hero-slide-4.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=4jR9QkrvPWM"
  },
  {
    id: "elQeWMV9Jmg",
    title: "Jal Shakti Mission: Saving Water, Reviving Communities",
    tag: "Success Story",
    desc: "Success story of rain harvesting structures constructed by GMVS in water-scarce villages of Ajmer, replenishing the local water table and securing drinking water.",
    image: "/assets/images/hero-slide-7.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=elQeWMV9Jmg"
  }
];

export default function MediaReportsPage({ onNotify }) {
  const [activeClip, setActiveClip] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePreview = (item) => {
    setActiveClip(item);
    if (onNotify) {
      onNotify('Media Clipping', `Viewing newspaper article: ${item.titleHindi}`, 'info');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>
            <Newspaper size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Press &amp; Media Coverage
          </span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Media Reports &amp; Newspaper Clippings
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '780px', lineHeight: 1.6 }}>
            Our grassroots initiatives documented by regional and national daily newspapers. Read real press coverage of our tree plantation campaigns, women sanitary production centres, cyber crime workshops, and health camps.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Ground Visibility</span>
            <h2>Documented in Regional &amp; National Press</h2>
            <p className="section-subtitle">
              Click on any newspaper article clipping to open high-resolution reader view.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {MEDIA_REPORTS.map((report) => (
              <div
                key={report.id}
                className="media-card"
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
                {/* Press Clipping Image Wrap */}
                <div
                  style={{
                    position: 'relative',
                    height: '260px',
                    backgroundColor: '#F8FAFC',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderBottom: '1px solid #E2E8F0'
                  }}
                  onClick={() => handlePreview(report)}
                  title="Click to zoom clipping"
                >
                  <img
                    src={report.image}
                    alt={report.titleHindi}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      transition: 'transform 0.4s ease'
                    }}
                    onError={(e) => {
                      if (e.currentTarget.src !== report.thumb) {
                        e.currentTarget.src = report.thumb;
                      }
                    }}
                  />

                  {/* Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
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

                  {/* Zoom Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
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

                {/* Card Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {report.source}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.35rem 0', color: '#0F172A', fontFamily: 'inherit' }}>
                    {report.titleHindi}
                  </h3>

                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
                    {report.titleEnglish}
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: '0 0 1rem 0', flexGrow: 1 }}>
                    {report.summary}
                  </p>

                  <div style={{
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                      {report.highlights.split('•')[0]}
                    </span>
                    <button
                      type="button"
                      onClick={() => handlePreview(report)}
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
                      <span>Read Clipping</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Coverage & Documentaries Section */}
      <section className="section bg-surface-subtle" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="badge-tag tag-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Youtube size={15} color="#DC2626" />
                <span>Video Coverage &bull; Ground Documentaries</span>
              </span>
              <h2>Impact in Action: Video Documentaries</h2>
              <p className="section-subtitle" style={{ margin: 0 }}>
                Authentic ground footage and firsthand beneficiary interviews from GMVS programmes in Rajasthan.
              </p>
            </div>
            <a 
              href="https://www.youtube.com/@gmvs_ajmer" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Youtube size={16} color="#DC2626" />
              <span>Official YouTube Channel (@gmvs_ajmer)</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}>
            {VIDEO_DOCUMENTARIES.map((video) => (
              <div
                key={video.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div 
                  style={{
                    position: 'relative',
                    height: '240px',
                    backgroundColor: '#000000',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  onClick={() => setActiveVideo(video)}
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.82,
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.25)'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#DC2626',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(220, 38, 38, 0.5)'
                    }}>
                      <Play size={24} fill="currentColor" style={{ marginLeft: '3px' }} />
                    </div>
                  </div>
                  {/* Tag Pill */}
                  <span style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    color: '#FFFFFF',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <Youtube size={12} color="#EF4444" />
                    <span>YouTube &bull; {video.tag}</span>
                  </span>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.65rem', lineHeight: 1.4, color: '#0F172A' }}>
                    {video.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.25rem' }}>
                    {video.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setActiveVideo(video)}
                    >
                      <Play size={14} fill="currentColor" style={{ marginRight: '5px' }} />
                      <span>Watch Video</span>
                    </button>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <span>Open on YouTube</span>
                      <ExternalLink size={13} style={{ marginLeft: '4px' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-linking to Stories & Annual Reports */}
      <section className="section-sm bg-surface-subtle" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
            <div>
              <h3 style={{ margin: '0 0 0.4rem 0', fontSize: '1.3rem' }}>Looking for First-Hand Field Testimonials?</h3>
              <p style={{ margin: 0, color: '#64748B', fontSize: '0.95rem' }}>
                Read how rural families, SHG women, and schoolchildren narrate their personal transformations.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/stories" className="btn btn-primary btn-sm">
                <span>Field Stories &amp; Voices</span>
                <ArrowRight size={14} style={{ marginLeft: '4px' }} />
              </Link>
              <Link to="/annual-reports" className="btn btn-outline btn-sm">
                <span>Annual Reports</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full Clipping */}
      {activeClip && (
        <div
          className="modal-overlay active"
          onClick={() => setActiveClip(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.88)',
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
              maxWidth: '720px',
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
                <span className="badge-tag" style={{ margin: 0, fontSize: '0.75rem' }}>{activeClip.source}</span>
                <h4 style={{ margin: '4px 0 0 0', fontSize: '1.15rem' }}>{activeClip.titleHindi}</h4>
                <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{activeClip.titleEnglish}</div>
              </div>
              <button
                type="button"
                onClick={() => setActiveClip(null)}
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

            {/* Clipping Image Box */}
            <div style={{ padding: '1rem', backgroundColor: '#0F172A', textAlign: 'center', maxHeight: '65vh', overflowY: 'auto' }}>
              <img
                src={activeClip.image}
                alt={activeClip.titleHindi}
                referrerPolicy="no-referrer"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '6px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                }}
                onError={(e) => {
                  if (e.currentTarget.src !== activeClip.thumb) {
                    e.currentTarget.src = activeClip.thumb;
                  }
                }}
              />
            </div>

            {/* Modal Footer Description */}
            <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#FFFFFF' }}>
              <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.925rem', lineHeight: 1.6, color: '#334155' }}>
                {activeClip.summary}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                  {activeClip.highlights}
                </span>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveClip(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backdropFilter: 'blur(6px)'
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            style={{
              backgroundColor: '#0F172A',
              borderRadius: '16px',
              maxWidth: '850px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
              position: 'relative',
              border: '1px solid #334155'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 1.5rem',
              backgroundColor: '#1E293B',
              borderBottom: '1px solid #334155'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Youtube size={18} color="#EF4444" />
                <h4 style={{ margin: 0, fontSize: '1rem', color: '#FFFFFF', fontWeight: 600 }}>
                  {activeVideo.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '6px'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Video Iframe Container (Responsive 16:9) */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000000' }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '1rem 1.5rem',
              backgroundColor: '#1E293B',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#94A3B8', maxWidth: '550px' }}>
                {activeVideo.desc}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <ExternalLink size={13} />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
