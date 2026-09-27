/**
 * GMVS (Gramin Mahila Vikas Sansthan) - Main JavaScript Controller
 * Website: gmvs.org.in | Ajmer, Rajasthan, India
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStickyHeader();
  initImpactCounters();
  initStoryFilters();
  initLeadershipModals();
  initVideoModals();
  initForms();
  initBilingualToggle();
  initSmoothScroll();
  initCopyButtons();
  initScrollAnimations();
  initBackToTop();
  initAwardShowcaseCarousel();
});

/* ==========================================================================
   1. Mobile Navigation & Drawer
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const subMenuToggles = document.querySelectorAll('.mobile-submenu-toggle');

  function openDrawer() {
    drawer?.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Mobile submenu accordion
  subMenuToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.closest('.mobile-nav-item');
      const subMenu = parent.querySelector('.mobile-sub-menu');
      if (subMenu) {
        subMenu.classList.toggle('active');
        const icon = toggle.querySelector('svg');
        if (icon) {
          icon.style.transform = subMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
        }
      }
    });
  });

  // Desktop dropdown hover-intent and click management
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const dropdown = item.querySelector('.dropdown-menu');
    if (!dropdown) return;

    let hoverTimeout = null;

    item.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimeout);
      navItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('dropdown-open');
          const otherMenu = other.querySelector('.dropdown-menu');
          if (otherMenu) otherMenu.classList.remove('active');
        }
      });
      item.classList.add('dropdown-open');
      dropdown.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
      hoverTimeout = setTimeout(() => {
        item.classList.remove('dropdown-open');
        dropdown.classList.remove('active');
      }, 200);
    });

    // Touch/click support for hybrid touch laptop screens
    const navLink = item.querySelector('.nav-link');
    if (navLink) {
      navLink.addEventListener('click', (e) => {
        if (window.innerWidth >= 1024) {
          const isOpen = dropdown.classList.contains('active');
          if (!isOpen) {
            e.preventDefault();
            navItems.forEach(other => {
              other.classList.remove('dropdown-open');
              const otherMenu = other.querySelector('.dropdown-menu');
              if (otherMenu) otherMenu.classList.remove('active');
            });
            item.classList.add('dropdown-open');
            dropdown.classList.add('active');
          }
        }
      });
    }
  });

  // Close desktop dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('dropdown-open');
        const menu = item.querySelector('.dropdown-menu');
        if (menu) menu.classList.remove('active');
      });
    }
  });
}

/* ==========================================================================
   2. Sticky Header Elevation
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. Animated Numerical Impact Counters
   ========================================================================== */
function initImpactCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const isDecimal = target % 1 !== 0;
          const duration = 2000; // ms
          const startTime = performance.now();

          function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeProgress * target;

            if (isDecimal) {
              counter.textContent = currentVal.toFixed(1);
            } else {
              counter.textContent = Math.floor(currentVal).toLocaleString('en-IN');
            }

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              counter.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString('en-IN');
            }
          }

          requestAnimationFrame(updateNumber);
        });
      }
    });
  }, { threshold: 0.35 });

  const impactSection = document.querySelector('.impact-section') || document.querySelector('.impact-grid');
  if (impactSection) {
    observer.observe(impactSection);
  }
}

/* ==========================================================================
   4. Field Stories Thematic Filters
   ========================================================================== */
function initStoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const storyCards = document.querySelectorAll('.story-card');

  if (!filterBtns.length || !storyCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      storyCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. Interactive Calculator (Neutralized)
   ========================================================================== */
function initTaxCalculator() {
  // Tax calculator functionality removed per request
}

/* ==========================================================================
   6. Leadership Biography Modals
   ========================================================================== */
const leadershipBios = {
  'anil-kumar-mathur': {
    name: 'Mr. Anil Kumar Mathur',
    role: 'Chairman & President',
    image: 'assets/images/anil-kumar-mathur.jpg',
    tenure: 'Over 3 Decades of Grassroots Leadership',
    quote: '“Empowered Women, Educated Children, Self-Reliant Families, and Developed Villages – These are the Foundations of Sustainable Development.”',
    bio: `The development journey of Gramin Mahila Vikas Sansthan (GMVS), Bubani, Ajmer, reflects the visionary leadership, social commitment, and dedication of its Chairman, Mr. Anil Kumar Mathur. Since the establishment of the organization in 1998, he has consistently guided its efforts toward creating positive and sustainable change in the lives of rural communities, particularly women, children, farmers, and other marginalized groups.
    <br><br>
    Starting from Ajmer district in Rajasthan, GMVS has expanded its work across diverse sectors including education, healthcare, women’s empowerment, natural resource management, livelihood promotion, and community development. Under Mr. Mathur’s leadership, the organization has successfully implemented community-driven initiatives that emphasize local participation, self-reliance, and democratic decision-making.
    <br><br>
    Mr. Mathur’s leadership style is rooted in transparency, social accountability, and human values, helping establish GMVS as a trusted and deeply impactful organization in Rajasthan.`
  },
  'shankar-singh-rawat': {
    name: 'Mr. Shankar Singh Rawat',
    role: 'Secretary & Executive Director',
    image: 'assets/images/shankar-singh-rawat.jpg',
    tenure: 'Felicitated by Ajmer District Collector & State Authorities',
    quote: '“Sustainable development is possible only when communities themselves lead the process of change and every individual has the opportunity to live a life of dignity, equality, and respect.”',
    bio: `On behalf of Gramin Mahila Vikas Sansthan (GMVS), Mr. Shankar Singh Rawat has spearheaded ground execution across 2,500+ villages over the past three decades. His focus has been ensuring that development opportunities reach those sections of society that had long remained marginalized and excluded from the mainstream.
    <br><br>
    Today, through his leadership, thousands of women have formed self-help collectives, children have been withdrawn from forced labour and re-enrolled in formal schools, and rural families have strengthened their livelihoods through goat rearing, agriculture, and water management.
    <br><br>
    Mr. Rawat was honoured with the prestigious Ajmer District Level Honour by the District Collector and felicitated at the International Tribal Culture Festival for his exceptional service to society.`
  },
  'shambhu-singh-rawat': {
    name: 'Mr. Shambhu Singh Rawat',
    role: 'Treasurer & Governance Head',
    image: 'assets/images/shambhu-singh-rawat.jpg',
    tenure: 'Custodianship of Financial Transparency & FCRA Compliance',
    quote: '“Every single rupee donated by our supporters must generate measurable, dignified, and lasting transformation at the grassroots level.”',
    bio: `At Gramin Mahila Vikas Sansthan (GMVS), financial transparency, accountability, and the efficient management of resources are given the highest institutional priority under Mr. Shambhu Singh Rawat.
    <br><br>
    He ensures strict adherence to the principles of statutory compliance, including the Rajasthan Societies Registration Act, Foreign Contribution Regulation Act (FCRA), NITI Aayog guidelines, and audited public filings.
    <br><br>
    His prudent stewardship has earned GMVS trust from international agencies (GIZ), national banks (ICICI, NABARD), and prominent philanthropic foundations (Tata Trusts, Hans Foundation).`
  },
  'setha-singh-rawat': {
    name: 'Mr. Setha Singh Rawat',
    role: 'Board Member & Social Entrepreneur',
    image: 'assets/images/setha-singh-rawat.jpg',
    tenure: 'Mentioned by PM Narendra Modi in Mann Ki Baat (Episode 92)',
    quote: '“Creating sustainable women-led enterprises that transform local skills into global opportunities.”',
    bio: `Setha Singh Rawat is a social entrepreneur and development professional with over a decade of experience in entrepreneurship promotion, women empowerment, livelihood generation, and cluster-based enterprise development. He is the Founder of LOCAL2GLOBAL MART and DARJI ONLINE, dedicated to creating sustainable livelihoods for rural women and artisans.
    <br><br>
    Under his leadership, DARJI ONLINE was recognized nationally when Prime Minister Narendra Modi commended the initiative in the 92nd episode of Mann Ki Baat for its pioneering contribution toward rural women entrepreneurship and apparel cluster formation.
    <br><br>
    As a Board Member of GMVS, he contributes his expertise in market linkage creation, digital access, and building women-owned sustainable businesses across Rajasthan.`
  }
};

function initLeadershipModals() {
  const modalOverlay = document.getElementById('leader-modal');
  const modalContainer = document.getElementById('leader-modal-body');
  const closeBtn = modalOverlay?.querySelector('.modal-close-btn');
  const triggerBtns = document.querySelectorAll('.leader-bio-trigger');

  if (!modalOverlay || !modalContainer) return;

  function openLeaderModal(id) {
    const data = leadershipBios[id];
    if (!data) return;

    modalContainer.innerHTML = `
      <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
        <div style="width: 160px; height: 160px; border-radius: 50%; overflow: hidden; border: 4px solid var(--primary-subtle); flex-shrink: 0; margin: 0 auto;">
          <img src="${data.image}" alt="${data.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="flex: 1; min-width: 260px;">
          <span class="badge-tag" style="margin-bottom: 0.4rem;">${data.tenure}</span>
          <h3 style="margin-bottom: 0.25rem;">${data.name}</h3>
          <p style="color: var(--secondary); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.05em; margin-bottom: 1rem;">${data.role}</p>
          <div style="background-color: var(--bg-surface-subtle); border-left: 3px solid var(--secondary); padding: 0.85rem 1rem; border-radius: 0 8px 8px 0; font-style: italic; font-size: 0.95rem; margin-bottom: 1.25rem; color: #334155;">
            ${data.quote}
          </div>
        </div>
      </div>
      <div style="margin-top: 1.5rem; font-size: 0.975rem; line-height: 1.75; color: var(--text-muted); border-top: 1px solid var(--border-light); padding-top: 1.5rem;">
        ${data.bio}
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLeaderModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-leader');
      openLeaderModal(id);
    });
  });

  closeBtn?.addEventListener('click', closeLeaderModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeLeaderModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeLeaderModal();
    }
  });
}

/* ==========================================================================
   7. Video Modals
   ========================================================================== */
function initVideoModals() {
  const videoTriggers = document.querySelectorAll('.video-play-btn');
  const videoModal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-modal-iframe');
  const closeBtn = videoModal?.querySelector('.modal-close-btn');

  if (!videoModal || !videoFrame) return;

  function openVideo(url) {
    videoFrame.src = url;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    videoFrame.src = '';
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  videoTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-video-url');
      if (url) openVideo(url);
    });
  });

  closeBtn?.addEventListener('click', closeVideo);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      closeVideo();
    }
  });
}

/* ==========================================================================
   8. Form Handling & Instant Feedback Toasts
   ========================================================================== */
function showToast(title, message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : type === 'warning' ? 'toast-warning' : ''}`;
  toast.innerHTML = `
    <div style="font-size: 1.4rem;">${type === 'error' ? '⚠️' : '✅'}</div>
    <div>
      <h6 style="color: var(--text-main); font-weight: 700; margin-bottom: 0.15rem;">${title}</h6>
      <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.3;">${message}</p>
    </div>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

function initForms() {
  // Contact Form
  const contactForm = document.getElementById('gmvs-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !message) {
        showToast('Required Fields Missing', 'Please fill in your name, email, and message.', 'error');
        return;
      }

      showToast('Message Dispatched Successfully!', `Thank you, ${name}. The GMVS Secretariat at Bubani, Ajmer will respond within 24-48 hours.`, 'success');
      contactForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]')?.value.trim();
      if (!email) {
        showToast('Email Required', 'Please enter a valid email address.', 'error');
        return;
      }
      showToast('Subscribed to GMVS Updates', `Thank you! You are now subscribed to our grassroots development bulletin.`, 'success');
      form.reset();
    });
  });

  // Volunteer Application Form
  const volunteerForm = document.getElementById('gmvs-volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = volunteerForm.querySelector('[name="vol_name"]')?.value.trim();
      showToast('Application Received!', `Thank you ${name}. Our volunteer coordinator will connect with you soon.`, 'success');
      volunteerForm.reset();
    });
  }

  // Donation Confirmation Form
  const receiptForm = document.getElementById('gmvs-receipt-form');
  if (receiptForm) {
    receiptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Donation Details Received', 'Thank you for your generous support! Your donation confirmation has been logged.', 'success');
      receiptForm.reset();
    });
  }

  // CSR Proposal Form
  const csrForm = document.getElementById('gmvs-csr-form');
  if (csrForm) {
    csrForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('CSR Proposal Submitted', 'Thank you for your interest in partnering with GMVS. Our Executive Director will contact your team.', 'success');
      csrForm.reset();
    });
  }
}

/* ==========================================================================
   9. Bilingual English / Hindi Headline Preview Toggle
   ========================================================================== */
function initBilingualToggle() {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (!toggleBtn) return;

  let currentLang = 'en';

  const translations = [
    {
      selector: '.hero-title-main',
      en: 'Supporting Local Initiatives to Improve Lives of Rural Poor',
      hi: 'ग्रामीण निर्धनों का जीवन स्तर सुधारने हेतु स्थानीय प्रयासों का सशक्तिकरण'
    },
    {
      selector: '.hero-desc-main',
      en: 'Gramin Mahila Vikas Sansthan (GMVS) is a grassroots NGO based in Ajmer, Rajasthan, dedicated to women’s leadership, child rights, health, and natural resource conservation since 1998.',
      hi: 'ग्रामीण महिला विकास संस्थान (जीएमवीएस) 1998 से अजमेर, राजस्थान में महिला नेतृत्व, बाल अधिकार, स्वास्थ्य एवं जल-पर्यावरण संरक्षण हेतु समर्पित एक प्रमुख स्वयंसेवी संस्था है।'
    },
    {
      selector: '.quote-banner-text',
      en: '“Developing women’s collective and women-led development at the grassroots.”',
      hi: '“ज़मीनी स्तर पर महिला समूहों और महिला-नेतृत्व वाले समग्र विकास का निर्माण।”'
    }
  ];

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentLang = currentLang === 'en' ? 'hi' : 'en';

    translations.forEach(item => {
      const el = document.querySelector(item.selector);
      if (el) {
        el.style.opacity = '0';
        setTimeout(() => {
          el.textContent = item[currentLang];
          el.style.opacity = '1';
        }, 150);
      }
    });

    toggleBtn.innerHTML = currentLang === 'en'
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> हिन्दी`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> English`;

    showToast('Language Updated', currentLang === 'en' ? 'Switched to English' : 'हिन्दी अनुवाद सक्रिय किया गया', 'success');
  });
}

/* ==========================================================================
   10. Smooth In-Page Anchor Scrolling
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   11. Copy to Clipboard for Bank Details
   ========================================================================== */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Text';
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast('Copied to Clipboard!', `${label}: ${textToCopy}`, 'success');
          const originalText = btn.innerHTML;
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        }).catch(() => {
          showToast('Copy Failed', 'Please manually select and copy the text.', 'error');
        });
      }
    });
  });
}

/* ==========================================================================
   12. Scroll Entrance Animations
   ========================================================================== */
function initScrollAnimations() {
  const revealTargets = document.querySelectorAll(
    '.reveal-on-scroll, .program-card, .story-card, .leader-card, .award-card, .partner-card, .office-card, .bank-card, .stat-card'
  );

  if (!revealTargets.length) return;

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  revealTargets.forEach((el, index) => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
      const staggerClass = `stagger-${(index % 5) + 1}`;
      el.classList.add(staggerClass);
    }
    observer.observe(el);
  });
}

/* ==========================================================================
   13. Floating Back to Top Action
   ========================================================================== */
function initBackToTop() {
  let backToTopBtn = document.getElementById('back-to-top');

  // If button not already present in the HTML, create dynamically
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.setAttribute('title', 'Back to top');
    backToTopBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    `;
    document.body.appendChild(backToTopBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   14. Award Showcase Carousel (Manjari Split Hero)
   ========================================================================== */
function initAwardShowcaseCarousel() {
  const tabs = document.querySelectorAll('.awwardbox-tab');
  const imgEl = document.getElementById('award-showcase-img');
  const badgeEl = document.getElementById('award-showcase-badge');
  const titleEl = document.getElementById('award-showcase-title');
  const descEl = document.getElementById('award-showcase-desc');
  const linkEl = document.getElementById('award-showcase-link');

  if (!tabs.length || !imgEl) return;

  const staticAwards = [
    {
      badge: "State & District Honour",
      title: "Honoured with Ajmer District Level Honour by District Collector for Grassroots Social Excellence",
      desc: "Recognised by the Rajasthan State Administration and District Collectorate for over 28 years of tireless grassroots service in women empowerment, child protection, and community development.",
      image: "assets/images/hero-slide-1.jpg",
      link: "awards.html"
    },
    {
      badge: "National Commendation",
      title: "Commended by Hon'ble PM Narendra Modi in Mann Ki Baat (Ep. 92) for Women Apparel Cluster DARJI ONLINE",
      desc: "National commendation on Mann Ki Baat highlighting GMVS board member Setha Singh Rawat and rural women artisans transforming traditional sewing skills into sustainable livelihoods.",
      image: "assets/images/hero-slide-2.jpg",
      link: "leadership.html"
    },
    {
      badge: "Water Conservation Milestone",
      title: "Constructed 180+ Traditional Rainwater Harvesting Taankas & Khadins across Drought-Prone Hamlets",
      desc: "Revitalising indigenous Aravalli water wisdom to provide reliable drinking water and year-round moisture security to vulnerable rural families.",
      image: "assets/images/nrm.jpg",
      link: "programs.html#nrm"
    },
    {
      badge: "Transformative Partnership",
      title: "Scaling Women's Collectives with RAJEEVIKA, NABARD, and Tata Trusts across Rajasthan",
      desc: "Mobilising over 620 Self-Help Groups into self-governing village federations, financial credit networks, and women-owned micro-enterprises.",
      image: "assets/images/women-empowerment.jpg",
      link: "partners.html"
    }
  ];

  let currentIndex = 0;
  let cycleTimer = null;

  function setAward(index) {
    currentIndex = index;
    const award = staticAwards[index];
    if (!award) return;

    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });

    imgEl.style.opacity = '0.4';
    setTimeout(() => {
      imgEl.src = award.image;
      imgEl.style.opacity = '1';
    }, 150);

    if (badgeEl) {
      badgeEl.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        <span>${award.badge}</span>
      `;
    }

    if (titleEl) titleEl.textContent = award.title;
    if (descEl) descEl.textContent = award.desc;
    if (linkEl) linkEl.setAttribute('href', award.link);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      clearInterval(cycleTimer);
      const idx = parseInt(tab.getAttribute('data-index') || '0', 10);
      setAward(idx);
      startCycle();
    });
  });

  function startCycle() {
    cycleTimer = setInterval(() => {
      const nextIdx = (currentIndex + 1) % staticAwards.length;
      setAward(nextIdx);
    }, 5500);
  }

  startCycle();
}



