# Gramin Mahila Vikas Sansthan (GMVS) - Official Website (React & Production Platform)

> **"Developing women’s collective & women-led development at the grassroots"**  
> Official Website: [gmvs.org.in](https://gmvs.org.in) | Secretariat: Bubani, District Ajmer, Rajasthan, India

A modern, professional, fully responsive, and production-ready NGO web application built for **Gramin Mahila Vikas Sansthan (GMVS)** using **React 18, Vite, Lucide Icons, and modern CSS3 Design System**.

---

## 🏛️ Institutional Credentials Preserved

- **Legal Registration:** Registered under Rajasthan Societies Registration Act No. 28 of 1958 (Registration No. **52 / Ajmer / 1998-99**, registered on 28th May 1998).
- **FCRA Clearance:** Foreign Contribution Regulation Act Registration No. **125410040** (Ministry of Home Affairs, Government of India).
- **Statutory Governance:** MCA Form CSR-1 Approved (Eligible Implementing Agency for Corporate Social Responsibility).
- **NITI Aayog NGO Darpan:** Verified Registered Implementing Agency.
- **Offices:**
  - **Head Office / Secretariat:** Village & Post Bubani, Via Gagwana, District Ajmer – 305023, Rajasthan.
  - **Branch Office 1:** Chittorgarh Field Secretariat, District Chittorgarh, Rajasthan.
  - **Branch Office 2:** Jal Shakti & Livelihoods Centre, Thanwala, District Nagaur, Rajasthan.
- **Leadership Recognitions:**
  - Felicitated by the **District Collector, Ajmer** on Republic Day for distinguished social service.
  - Felicitated at the **International Tribal Culture Festival** for eco-heritage and water conservation.
  - **Darji Online** women apparel cluster initiative commended by **Prime Minister Narendra Modi** in *Mann Ki Baat* (Episode 92).

---

## 🚀 Key Features & Menubar Redesign

1. **Ultra-Modern, Professional Menubar & Navigation:**
   - **Streamlined 5-Section Architecture:**
     - **Home**
     - **About Us** ▾ (Overview & History, Vision & Mission, Governing Board, Legal/FCRA, Organogram)
     - **Our Work** ▾ (Women Empowerment, Child Rights & Schools, Jal Shakti/Water, Health & Eye Care, Rural Livelihoods)
     - **Impact & Proof** ▾ (Field Stories, Awards & Recognitions, Audited Annual Reports)
     - **Partners & CSR**
     - **Contact**
   - **Glassmorphic Floating Header:** Translucent backdrop blur with smooth sticky elevation compression from 78px to 64px on scroll.
   - **Rich Mega-Menu Cards:** Dropdown cards with distinct category icons, micro-descriptions, and SDG alignment tags.
   - **High-Contrast Glowing CTA:** "Donate Now" pill button with subtle heart pulse animation.
   - **Language Toggle:** Instant English / हिन्दी preview switcher.
   - **Responsive Mobile Drawer:** Off-canvas sliding drawer with smooth backdrop blur, animated accordion sub-menus, and quick helpline access.

2. **React 18 & Component Architecture:**
   - **Grassroots Impact Highlights:** Mission-driven giving avenues and contextual community transformation narratives.
   - **Filterable Field Stories:** Real-time filtering across 9 authentic case studies (Women, Water, Education, Health, Livelihoods).
   - **Leadership Biographical Modal:** Dynamic modal drawer for Anil Kumar Mathur, Shankar Singh Rawat, Shambhu Singh Rawat, and Setha Singh Rawat.
   - **Animated Metric Counters:** Smooth ease-out count animation triggered by IntersectionObserver.
   - **Validated Forms with Toast Notifications:** Contact Inquiry, Volunteer Application, CSR Proposal, and Donation Confirmation form with instant feedback.
   - **Bank Account Cards:** One-click Copy-to-Clipboard with visual checkmark indicator and toast confirmation.

---

## 💻 How to Run Locally

### Option 1: React Dev Server (Vite)
```powershell
# In the project directory:
npm run dev
```
Open **`http://localhost:3000`** in your browser for the full hot-reloading React experience.

### Option 2: Build for Production
```powershell
npm run build
```
This generates the optimized, production-ready static bundle in the `dist/` directory.

### Option 3: Python Local HTTP Server
```powershell
# Serve production build:
& "C:\Program Files\Python314\python.exe" -m http.server 8000 --directory dist

# Or serve root directory:
& "C:\Program Files\Python314\python.exe" -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.

---

## 📂 Project Structure

```text
GMVS Website/
├── src/
│   ├── components/
│   │   ├── TopBar.jsx            # Top announcement ribbon and language toggle
│   │   ├── Navbar.jsx            # Glassmorphic header with rich mega-menu dropdowns
│   │   ├── Footer.jsx            # Institutional footer with credentials & contacts
│   │   ├── TaxCalculator.jsx     # Neutralized placeholder component
│   │   ├── LeadershipModal.jsx   # Full biographical modal drawer
│   │   ├── FieldStories.jsx      # Filterable beneficiary case studies
│   │   ├── BankCards.jsx         # Domestic SBI & Foreign FCRA cards with copy buttons
│   │   ├── Forms.jsx             # Contact, Volunteer, CSR, and Donation Confirmation forms
│   │   ├── ImpactCounters.jsx    # Animated numerical impact metrics
│   │   └── Toast.jsx             # Floating animated notification toast
│   ├── data/
│   │   ├── navigation.js         # Menubar structure, icons, and descriptions
│   │   ├── leaders.js            # Executive board bios and quotes
│   │   └── stories.js            # 9 authentic beneficiary case studies
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero, counters, pillars, stories, impact, partners
│   │   ├── AboutPage.jsx         # History, vision, mission, legal table, organogram
│   │   ├── ProgramsPage.jsx      # 5 thematic pillars & SDG mapping
│   │   ├── LeadershipPage.jsx    # Board profiles & governance standards
│   │   ├── StoriesPage.jsx       # Real-life field impact stories
│   │   ├── PartnersPage.jsx      # Donor portfolio & CSR partnership portal
│   │   ├── AwardsPage.jsx        # District Collector honour, Mann Ki Baat, audit reports
│   │   ├── ContactPage.jsx       # Office directory, inquiry form, volunteer application
│   │   └── DonatePage.jsx        # Dedicated giving portal & bank transfer cards
│   ├── App.jsx                   # React Router DOM configuration & layout
│   └── main.jsx                  # React application entry point
├── assets/
│   ├── css/
│   │   └── style.css             # Comprehensive design system & component styles
│   └── images/                   # 45+ authentic images, board portraits, donor logos
├── public/                       # Static public assets copied to dist
├── dist/                         # Compiled production-ready React bundle
├── package.json                  # Dependencies: react, react-dom, react-router-dom, lucide-react, vite
├── vite.config.js                # Vite build and dev server configuration
└── README.md                     # Documentation & setup guide
```
