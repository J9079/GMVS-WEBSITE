import React, { useState } from 'react';
import { STORIES } from '../data/stories';
import { Quote, MapPin, Sparkles, BookOpen } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Stories' },
  { id: 'women', label: 'Women Collectives' },
  { id: 'water', label: 'Jal Shakti & Water' },
  { id: 'education', label: 'Child Education' },
  { id: 'health', label: 'Health & Eye Care' },
  { id: 'livelihoods', label: 'Rural Livelihoods' }
];

export default function FieldStories() {
  const [filter, setFilter] = useState('all');

  const filteredStories = filter === 'all' 
    ? STORIES 
    : STORIES.filter(s => s.category === filter);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="story-filter-tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Stories Grid */}
      <div className="stories-grid">
        {filteredStories.map((story) => (
          <div key={story.id} className="story-card">
            {story.image && (
              <div className="story-image-wrap" style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: 'var(--bg-surface-subtle)' }}>
                <img 
                  src={story.image} 
                  alt={story.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="story-tag" style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2, margin: 0, backdropFilter: 'blur(4px)', background: 'rgba(15, 23, 42, 0.85)', color: '#FEF3C7' }}>
                  {story.tag}
                </span>
              </div>
            )}

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              {!story.image && (
                <div className="story-card-header">
                  <span className="story-tag">{story.tag}</span>
                </div>
              )}
              
              <h4 className="story-title" style={{ fontSize: '1.25rem', marginBottom: '0.85rem' }}>
                {story.title}
              </h4>

              <div className="story-quote-box" style={{ marginBottom: '1rem' }}>
                <Quote size={16} style={{ color: 'var(--secondary)', marginBottom: '4px', flexShrink: 0 }} />
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.925rem' }}>{story.quote}</p>
              </div>

              <div className="story-body" style={{ flexGrow: 1, marginBottom: '1.25rem' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  {story.body}
                </p>
              </div>

              <div className="story-footer" style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: 'auto' }}>
                <div className="story-beneficiary">
                  <div className="beneficiary-avatar">
                    {story.beneficiary.name.charAt(0)}
                  </div>
                  <div className="beneficiary-meta">
                    <h6 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700 }}>{story.beneficiary.name}</h6>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <MapPin size={11} style={{ display: 'inline', marginRight: '2px' }} />
                      {story.beneficiary.location}
                    </span>
                  </div>
                </div>
                <span className="badge-tag" style={{ fontSize: '0.725rem', padding: '0.2rem 0.6rem', background: '#F1F5F9', color: '#334155', border: 'none' }}>
                  {story.beneficiary.impact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
