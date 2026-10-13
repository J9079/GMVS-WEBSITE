export const NAV_LINKS = [
  {
    label: 'Home',
    path: '/',
    id: 'home'
  },
  {
    label: 'About Us',
    path: '/about',
    id: 'about',
    dropdown: [
      {
        title: 'Overview & History',
        desc: '28 years of grassroots empowerment since 1998',
        path: '/about',
        icon: 'Landmark'
      },
      {
        title: 'Vision, Mission & Values',
        desc: 'Core principles of human dignity & self-reliance',
        path: '/about#vision',
        icon: 'Compass'
      },
      {
        title: 'Governing Board & Leadership',
        desc: 'Meet our trustees and executive custodians',
        path: '/leadership',
        icon: 'Users'
      },
      {
        title: 'Legal Registrations & FCRA',
        desc: 'Act 28, FCRA 125410040, NITI Aayog & MCA credentials',
        path: '/about#legal',
        icon: 'ShieldCheck'
      },
      {
        title: 'Institutional Organogram',
        desc: 'Participatory governance from village to board',
        path: '/about#organogram',
        icon: 'GitFork'
      }
    ]
  },
  {
    label: 'Our Work',
    path: '/programs',
    id: 'programs',
    dropdown: [
      {
        title: 'Women Empowerment & SHGs',
        desc: '620+ Self-Help Groups & tailoring enterprises',
        path: '/programs#women-empowerment',
        icon: 'HeartHandshake',
        tag: 'SDG 5'
      },
      {
        title: 'Child Rights & Education',
        desc: 'Remedial schools, nutrition & girl child support',
        path: '/programs#child-rights',
        icon: 'GraduationCap',
        tag: 'SDG 4'
      },
      {
        title: 'Jal Shakti & NRM',
        desc: 'Rainwater harvesting, Taankas & Khadins',
        path: '/programs#nrm',
        icon: 'Droplets',
        tag: 'SDG 6'
      },
      {
        title: 'Health & Eye Care',
        desc: 'Mobile medical camps & free cataract surgeries',
        path: '/programs#health-concerns',
        icon: 'Stethoscope',
        tag: 'SDG 3'
      },
      {
        title: 'Community Livelihoods',
        desc: 'Livestock development & goat rearing clusters',
        path: '/programs#community-development',
        icon: 'Sprout',
        tag: 'SDG 1'
      }
    ]
  },
  {
    label: 'Impact & Proof',
    path: '/stories',
    id: 'impact',
    dropdown: [
      {
        title: 'Field Stories & Voices',
        desc: 'Real-life transformations from rural hamlets',
        path: '/stories',
        icon: 'BookOpen'
      },
      {
        title: 'Awards & Honours',
        desc: 'District Collector Honour & 9 State/National citations',
        path: '/awards',
        icon: 'Award'
      },
      {
        title: 'Audited Annual Reports',
        desc: 'Complete archives of 26 reports from 1997 to 2025',
        path: '/annual-reports',
        icon: 'FileText'
      },
      {
        title: 'Photo Gallery',
        desc: 'Authentic ground photographs across 4 key sectors',
        path: '/gallery',
        icon: 'Camera'
      },
      {
        title: 'Media & Press Reports',
        desc: 'Regional newspaper clippings & public news coverage',
        path: '/media-reports',
        icon: 'Newspaper'
      }
    ]
  },
  {
    label: 'Partners & CSR',
    path: '/partners',
    id: 'partners'
  },
  {
    label: 'Contact',
    path: '/contact',
    id: 'contact'
  }
];
