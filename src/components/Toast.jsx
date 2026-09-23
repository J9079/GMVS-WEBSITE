import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isError = toast.type === 'error';
  const isWarning = toast.type === 'warning';

  return (
    <div className="toast-container">
      <div className={`toast show ${isError ? 'toast-error' : isWarning ? 'toast-warning' : ''}`}>
        <div style={{ fontSize: '1.4rem', color: isError ? '#EF4444' : isWarning ? 'var(--secondary)' : 'var(--primary)' }}>
          {isError ? <AlertCircle size={24} /> : <CheckCircle2 size={24} />}
        </div>
        <div style={{ flex: 1 }}>
          <h6 style={{ color: 'var(--text-main)', fontWeight: 700, margin: '0 0 2px 0', fontSize: '0.95rem' }}>
            {toast.title}
          </h6>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.35 }}>
            {toast.message}
          </p>
        </div>
        <button 
          type="button" 
          onClick={onClose} 
          style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '2px' }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
