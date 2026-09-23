import React from 'react';
import { X, Award, Quote } from 'lucide-react';

export default function LeadershipModal({ leader, onClose }) {
  if (!leader) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button"
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-content">
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary-subtle)', flexShrink: 0, margin: '0 auto' }}>
              <img src={leader.image} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <span className="badge-tag" style={{ marginBottom: '0.4rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Award size={12} /> {leader.tenure}
              </span>
              <h3 style={{ marginBottom: '0.25rem', fontSize: '1.6rem' }}>{leader.name}</h3>
              <p style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                {leader.role}
              </p>
              
              <div style={{ backgroundColor: 'var(--bg-surface-subtle)', borderLeft: '3px solid var(--secondary)', padding: '0.85rem 1rem', borderRadius: '0 8px 8px 0', fontStyle: 'italic', fontSize: '0.95rem', color: '#334155' }}>
                {leader.quote}
              </div>
            </div>
          </div>

          <div 
            style={{ marginTop: '1.5rem', fontSize: '0.975rem', lineHeight: 1.75, color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}
            dangerouslySetInnerHTML={{ __html: leader.bio }}
          />
        </div>
      </div>
    </div>
  );
}
