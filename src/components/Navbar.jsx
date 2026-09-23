import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Menu, X, Heart, Landmark, Compass, Users, 
  ShieldCheck, GitFork, HeartHandshake, GraduationCap, 
  Droplets, Stethoscope, Sprout, BookOpen, Award, FileSpreadsheet, PhoneCall
} from 'lucide-react';
import { NAV_LINKS } from '../data/navigation';
import { SocialLinksRow } from './SocialIcons';

const ICON_MAP = {
  Landmark,
  Compass,
  Users,
  ShieldCheck,
  GitFork,
  HeartHandshake,
  GraduationCap,
  Droplets,
  Stethoscope,
  Sprout,
  BookOpen,
  Award,
  FileSpreadsheet
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveAccordion(null);
  }, [location.pathname]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const timerRef = React.useRef(null);

  const handleMouseEnter = (id) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const isCurrentPath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-wide nav-container">
          {/* Brand Logo & Institutional Tagline */}
          <Link to="/" className="brand-logo" aria-label="GMVS Home">
            <img src="assets/images/logo.png" alt="GMVS - Gramin Mahila Vikas Sansthan" />
            <div className="brand-text-block">
              <span className="brand-main-title">GMVS</span>
              <span className="brand-sub-title">Gramin Mahila Vikas Sansthan</span>
              <span className="brand-verified-pill">Reg. NGO &bull; Est. 1998</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="nav-menu" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
              const active = isCurrentPath(item.path);
              const isOpen = openDropdown === item.id;

              return (
                <div 
                  key={item.id} 
                  className={`nav-item ${isOpen ? 'dropdown-open' : ''}`}
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.id)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  <Link 
                    to={item.path} 
                    className={`nav-link ${active ? 'active' : ''}`}
                    onClick={() => hasDropdown && setOpenDropdown(isOpen ? null : item.id)}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && <ChevronDown size={14} className="chevron" />}
                  </Link>

                  {/* Rich Modern Dropdown Card */}
                  {hasDropdown && (
                    <div 
                      className={`dropdown-menu ${isOpen ? 'active' : ''}`}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="dropdown-grid">
                        {item.dropdown.map((subItem, idx) => {
                          const IconComponent = ICON_MAP[subItem.icon] || Landmark;
                          return (
                            <Link 
                              key={idx} 
                              to={subItem.path} 
                              className="dropdown-card-item"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="dropdown-icon-wrapper">
                                <IconComponent size={18} />
                              </div>
                              <div className="dropdown-item-text">
                                <div className="dropdown-item-header">
                                  <span className="dropdown-item-title">{subItem.title}</span>
                                  {subItem.tag && <span className="dropdown-item-tag">{subItem.tag}</span>}
                                </div>
                                <span className="dropdown-item-desc">{subItem.desc}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <Link to="/donate" className="btn btn-donate-header">
              <Heart size={16} className="heart-icon pulse" />
              <span>Donate (80-G)</span>
            </Link>

            <button 
              type="button"
              className="mobile-menu-toggle" 
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileOpen ? 'active' : ''}`} 
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Off-Canvas Navigation Drawer */}
      <aside className={`mobile-drawer ${mobileOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-brand-wrap">
            <img src="assets/images/logo.png" alt="GMVS Logo" style={{ height: '38px' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--primary)', lineHeight: 1.1 }}>GMVS</strong>
              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Ajmer, Rajasthan</span>
            </div>
          </div>
          <button 
            type="button"
            className="mobile-close-btn" 
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <ul className="mobile-nav-list">
            {NAV_LINKS.map((item) => {
              const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
              const isOpen = activeAccordion === item.id;
              const active = isCurrentPath(item.path);

              return (
                <li key={item.id} className="mobile-nav-item">
                  <div className="mobile-nav-link-row">
                    <Link 
                      to={item.path} 
                      className={`mobile-nav-link ${active ? 'active' : ''}`}
                      onClick={() => !hasDropdown && setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {hasDropdown && (
                      <button 
                        type="button"
                        className="mobile-accordion-btn"
                        onClick={() => toggleAccordion(item.id)}
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown 
                          size={18} 
                          style={{ 
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.25s ease' 
                          }} 
                        />
                      </button>
                    )}
                  </div>

                  {hasDropdown && (
                    <div className={`mobile-sub-menu ${isOpen ? 'active' : ''}`}>
                      {item.dropdown.map((subItem, idx) => (
                        <Link 
                          key={idx}
                          to={subItem.path}
                          className="mobile-sub-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="sub-bullet">&bull;</span>
                          <span>{subItem.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Quick Help & Action Tile */}
          <div className="mobile-quick-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <PhoneCall size={18} style={{ color: 'var(--primary)' }} />
              <div>
                <strong style={{ fontSize: '0.875rem', display: 'block' }}>Secretariat Helpline</strong>
                <a href="tel:+919672979032" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>+91-9672979032</a>
              </div>
            </div>
            <div style={{ fontSize: '0.775rem', color: '#64748B' }}>
              FCRA # 125410040 &bull; Section 80-G Tax Exempt
            </div>
          </div>

          {/* Mobile Drawer Social Channels */}
          <div className="mobile-drawer-socials">
            <span className="mobile-socials-label">Official Social Channels</span>
            <SocialLinksRow variant="light" size={15} />
          </div>
        </div>

        <div className="mobile-drawer-footer">
          <Link 
            to="/donate" 
            className="btn btn-secondary btn-block"
            onClick={() => setMobileOpen(false)}
          >
            <Heart size={16} fill="currentColor" />
            <span>Donate &amp; Save 50% Tax (80-G)</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
