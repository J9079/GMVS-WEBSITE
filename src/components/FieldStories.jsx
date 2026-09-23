import React, { useState } from 'react';
import { STORIES } from '../data/stories';
import { Quote, User, MapPin } from 'lucide-react';

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
            <div className="story-card-header">
              <span className="story-tag">{story.tag}</span>
              <h4 className="story-title">{story.title}</h4>
            </div>

            <div className="story-quote-box">
              <Quote size={16} style={{ color: 'var(--secondary)', marginBottom: '4px' }} />
              <p style={{ margin: 0, fontStyle: 'italic' }}>{story.quote}</p>
            </div>

            <div className="story-body">
              <p>{story.body}</p>
            </div>

            <div className="story-footer">
              <div className="story-beneficiary">
                <div className="beneficiary-avatar">
                  {story.beneficiary.name.charAt(0)}
                </div>
                <div className="beneficiary-meta">
                  <h6>{story.beneficiary.name}</h6>
                  <span>
                    <MapPin size={11} style={{ display: 'inline', marginRight: '2px' }} />
                    {story.beneficiary.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
