import React, { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function GalleryPage({ onNotify }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalIndex, setModalIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openModal = (index) => {
    setModalIndex(index);
    if (onNotify) {
      onNotify('Photo Gallery', `Viewing: ${filteredItems[index]?.title}`, 'info');
    }
  };

  const closeModal = () => setModalIndex(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const activePhoto = modalIndex !== null ? filteredItems[modalIndex] : null;

  return (
    <>
      {/* Hero Section */}
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>
            <Camera size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Visual Documentation
          </span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Ground Photo Gallery
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '780px', lineHeight: 1.6 }}>
            Witness the grassroots energy across Rajasthan. From bustling women Self-Help Group assemblies and vocational garment workshops to mobile ophthalmic camps and rainwater Taanka masonry.
          </p>
        </div>
      </section>

      {/* Main Gallery Area */}
      <section className="section bg-surface">
        <div className="container">
          {/* Category Tabs */}
          <div className="story-filter-tabs" style={{ marginBottom: '2.5rem', justifyContent: 'center' }}>
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => openModal(index)}
              >
                <div style={{ position: 'relative', height: '220px', backgroundColor: '#F1F5F9', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onError={(e) => {
                      if (e.currentTarget.src !== item.thumb) {
                        e.currentTarget.src = item.thumb;
                      }
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(15, 23, 42, 0.35)',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                    className="gallery-item-overlay"
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <ZoomIn size={24} />
                  </div>
                </div>

                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.35rem 0', color: '#0F172A', lineHeight: 1.4 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      {activePhoto && (
        <div
          className="modal-overlay active"
          onClick={closeModal}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)'
          }}
        >
          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001,
              transition: 'background-color 0.2s'
            }}
            title="Previous Photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10001,
              transition: 'background-color 0.2s'
            }}
            title="Next Photo"
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Container */}
          <div
            style={{
              backgroundColor: '#0F172A',
              borderRadius: '16px',
              maxWidth: '840px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              color: '#FFFFFF'
            }}>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Photo {modalIndex + 1} of {filteredItems.length}
              </span>
              <button
                type="button"
                onClick={closeModal}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#CBD5E1',
                  padding: '4px'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Photo Center */}
            <div style={{ padding: '1rem', textAlign: 'center', maxHeight: '68vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                style={{
                  maxHeight: '64vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
                onError={(e) => {
                  if (e.currentTarget.src !== activePhoto.thumb) {
                    e.currentTarget.src = activePhoto.thumb;
                  }
                }}
              />
            </div>

            {/* Bottom Caption */}
            <div style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: '#1E293B',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              color: '#FFFFFF'
            }}>
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.1rem', color: '#FFFFFF' }}>{activePhoto.title}</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.5 }}>{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
