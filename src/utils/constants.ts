import { DropdownSection, DropdownItem } from './types';

export interface Industry {
  id: string
  name: string
  image: string
}

export const servicesData: DropdownSection[] = [
  {
    id: 'audit',
    title: 'Audit',
    items: [
      { id: 'financial-statements', label: 'Financial Statements Audit', href: '/services/audit/financial-statements-audit' },
      { id: 'esg-assurance', label: 'ESG Assurance', href: '/services/audit/esg-assurance' }
    ]
  },
  {
    id: 'business-services',
    title: 'Business Services',
    items: [
      { id: 'accounting', label: 'Accounting and Bookkeeping', href: '/services/business-services/accounting-bookkeeping' },
      { id: 'company-establishment', label: 'Company Establishment', href: '/services/business-services/company-establishment' },
      { id: 'company-secretarial', label: 'Company Secretarial Services', href: '/services/business-services/company-secretarial-services' },
      { id: 'financial-reporting', label: 'Financial Reporting', href: '/services/business-services/financial-reporting' },
      { id: 'payroll', label: 'Payroll', href: '/services/business-services/payroll' },
      { id: 'tax-compliance', label: 'Tax Compliance Management', href: '/services/business-services/tax-compliance-management' }
    ]
  },
  {
    id: 'tax',
    title: 'Tax',
    items: [
      { id: 'corporate-tax', label: 'Corporate Tax', href: '/services/tax/corporate-tax' },
      { id: 'global-mobility', label: 'Global Mobility Tax Services', href: '/services/tax/global-mobility-tax-services' },
      { id: 'indirect-taxes', label: 'Indirect Taxes', href: '/services/tax/indirect-taxes' },
      { id: 'private-wealth', label: 'Private Wealth', href: '/services/tax/private-wealth' },
      { id: 'transfer-pricing', label: 'Transfer Pricing', href: '/services/tax/transfer-pricing' }
    ]
  },
  {
    id: 'advisory',
    title: 'Advisory',
    items: [
      { id: 'esg', label: 'ESG – Environment, Social and Governance', href: '/services/advisory/esg-environment-social-governance' },
      { id: 'legal', label: 'Legal', href: '/services/advisory/legal' },
      { id: 'mergers', label: 'Mergers & Acquisitions', href: '/services/advisory/mergers-acquisitions' },
      { id: 'risk-advisory', label: 'Risk Advisory', href: '/services/advisory/risk-advisory' },
      { id: 'transaction-services', label: 'Transaction Services', href: '/services/advisory/transaction-services' },
      { id: 'turnaround', label: 'Turnaround Restructuring Insolvency', href: '/services/advisory/turnaround-restructuring-insolvency' }
    ]
  }
];

export const servicesMobileData = [
  {
    id: 'audit',
    title: 'Audit',
    items: [
      { id: 'financial-statements', label: 'Financial Statements Audit', href: '/services/audit/financial-statements-audit' },
      { id: 'esg', label: 'ESG Assurance', href: '/services/audit/esg-assurance' }
    ]
  },
  {
    id: 'business-services',
    title: 'Business Services',
    items: [
      { id: 'accounting', label: 'Accounting and Bookkeeping', href: '/services/business-services/accounting-bookkeeping' },
      { id: 'company-establishment', label: 'Company Establishment', href: '/services/business-services/company-establishment' },
      { id: 'company-secretarial', label: 'Company Secretarial Services', href: '/services/business-services/company-secretarial-services' },
      { id: 'financial-reporting', label: 'Financial Reporting', href: '/services/business-services/financial-reporting' },
      { id: 'payroll', label: 'Payroll', href: '/services/business-services/payroll' },
      { id: 'tax-compliance', label: 'Tax Compliance Management', href: '/services/business-services/tax-compliance-management' }
    ]
  },
  {
    id: 'tax',
    title: 'Tax',
    items: [
      { id: 'corporate-tax', label: 'Corporate Tax', href: '/services/tax/corporate-tax' },
      { id: 'global-mobility', label: 'Global Mobility Tax Services', href: '/services/tax/global-mobility-tax-services' },
      { id: 'indirect-taxes', label: 'Indirect Taxes', href: '/services/tax/indirect-taxes' },
      { id: 'private-wealth', label: 'Private Wealth', href: '/services/tax/private-wealth' },
      { id: 'transfer-pricing', label: 'Transfer Pricing', href: '/services/tax/transfer-pricing' }
    ]
  },
  {
    id: 'advisory',
    title: 'Advisory',
    items: [
      { id: 'esg', label: 'ESG – Environment, Social and Governance', href: '/services/advisory/esg-environment-social-governance' },
      { id: 'legal', label: 'Legal', href: '/services/advisory/legal' },
      { id: 'mergers', label: 'Mergers & Acquisitions', href: '/services/advisory/mergers-acquisitions' },
      { id: 'risk-advisory', label: 'Risk Advisory', href: '/services/advisory/risk-advisory' },
      { id: 'transaction-services', label: 'Transaction Services', href: '/services/advisory/transaction-services' },
      { id: 'turnaround', label: 'Turnaround Restructuring Insolvency', href: '/services/advisory/turnaround-restructuring-insolvency' }
    ]
  }
];

// Insights Dropdown Data
export const insightsData: DropdownItem[] = [
  { id: 'case-studies', label: 'Case Studies', href: '/insights/case-studies' },
  { id: 'global-insights', label: 'Global Insights', href: '/insights/global' },
  { id: 'campaigns', label: 'Campaigns', href: '/insights/campaigns' },
  { id: 'podcasts', label: 'Podcasts', href: '/insights/podcasts' },
  { id: 'press-releases', label: 'Press Releases', href: '/insights/press-releases' },
  { id: 'publications', label: 'Publications', href: '/insights/publications' },
  { id: 'videos', label: 'Videos', href: '/insights/videos' }
];

// Insights Mobile Dropdown Data
export const insightsMobileData = [
  {
    id: 'case-studies',
    title: 'Case Studies',
    items: [
      { id: 'financial', label: 'Financial Services', href: '/insights/case-studies/financial' },
      { id: 'technology', label: 'Technology Sector', href: '/insights/case-studies/technology' },
      { id: 'healthcare', label: 'Healthcare Industry', href: '/insights/case-studies/healthcare' }
    ]
  },
  {
    id: 'global-insights',
    title: 'Global Insights',
    items: [
      { id: 'market-trends', label: 'Market Trends', href: '/insights/global/market-trends' },
      { id: 'regulatory', label: 'Regulatory Updates', href: '/insights/global/regulatory' },
      { id: 'economic', label: 'Economic Outlook', href: '/insights/global/economic' }
    ]
  },
  {
    id: 'publications',
    title: 'Publications',
    items: [
      { id: 'whitepapers', label: 'White Papers', href: '/insights/publications/whitepapers' },
      { id: 'reports', label: 'Industry Reports', href: '/insights/publications/reports' },
      { id: 'newsletters', label: 'Newsletters', href: '/insights/publications/newsletters' }
    ]
  }
];

// Industries Dropdown Data
export const industriesData: DropdownItem[] = [
  { id: 'construction', label: 'Construction', href: '/industries/construction' },
  { id: 'financial-services', label: 'Financial Services', href: '/industries/financial-services' },
  { id: 'manufacturing', label: 'Manufacturing', href: '/industries/manufacturing' },
  { id: 'mining', label: 'Mining, Natural Resources & Renewable Energy', href: '/industries/mining' },
  { id: 'real-estate', label: 'Real Estate', href: '/industries/real-estate' },
  { id: 'retail', label: 'Retail', href: '/industries/retail' },
  { id: 'technology', label: 'Technology', href: '/industries/technology' }
];

// Industries Mobile Dropdown Data
export const industriesMobileData = [
  {
    id: 'financial-services',
    title: 'Financial Services',
    items: [
      { id: 'banking', label: 'Banking', href: '/industries/financial/banking' },
      { id: 'insurance', label: 'Insurance', href: '/industries/financial/insurance' },
      { id: 'investment', label: 'Investment Management', href: '/industries/financial/investment' }
    ]
  },
  {
    id: 'technology',
    title: 'Technology',
    items: [
      { id: 'software', label: 'Software Development', href: '/industries/technology/software' },
      { id: 'ai', label: 'AI & Machine Learning', href: '/industries/technology/ai' },
      { id: 'cybersecurity', label: 'Cybersecurity', href: '/industries/technology/cybersecurity' }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    items: [
      { id: 'hospitals', label: 'Hospitals & Clinics', href: '/industries/healthcare/hospitals' },
      { id: 'pharmaceuticals', label: 'Pharmaceuticals', href: '/industries/healthcare/pharmaceuticals' },
      { id: 'medical-devices', label: 'Medical Devices', href: '/industries/healthcare/medical-devices' }
    ]
  },
  {
    id: 'construction',
    title: 'Construction',
    items: [
      { id: 'residential', label: 'Residential', href: '/industries/construction/residential' },
      { id: 'commercial', label: 'Commercial', href: '/industries/construction/commercial' },
      { id: 'infrastructure', label: 'Infrastructure', href: '/industries/construction/infrastructure' }
    ]
  }
];

// About Dropdown Data
export const aboutData: DropdownItem[] = [
  { id: 'history', label: 'History', href: '/about/history' },
  { id: 'leadership', label: 'Nexia Leadership', href: '/about/leadership' },
  { id: 'purpose', label: 'Purpose and Mission', href: '/about/purpose' },
  { id: 'commitments', label: 'Commitments', href: '/about/commitments' },
  { id: 'strategic-alliance', label: 'Strategic Alliance', href: '/about/strategic-alliance' },
  { id: 'become-member', label: 'Become a member', href: '/about/become-member' }
];

// About Mobile Dropdown Data
export const aboutMobileData = [
  {
    id: 'our-company',
    title: 'Our Company',
    items: [
      { id: 'history', label: 'Our History', href: '/about/company/history' },
      { id: 'mission', label: 'Mission & Vision', href: '/about/company/mission' },
      { id: 'values', label: 'Core Values', href: '/about/company/values' }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership',
    items: [
      { id: 'board', label: 'Board of Directors', href: '/about/leadership/board' },
      { id: 'management', label: 'Management Team', href: '/about/leadership/management' },
      { id: 'partners', label: 'Partners', href: '/about/leadership/partners' }
    ]
  },
  {
    id: 'global-network',
    title: 'Global Network',
    items: [
      { id: 'locations', label: 'Office Locations', href: '/about/network/locations' },
      { id: 'member-firms', label: 'Member Firms', href: '/about/network/member-firms' },
      { id: 'partnerships', label: 'Strategic Partnerships', href: '/about/network/partnerships' }
    ]
  },
  {
    id: 'careers',
    title: 'Careers',
    items: [
      { id: 'opportunities', label: 'Job Opportunities', href: '/about/careers/opportunities' },
      { id: 'culture', label: 'Company Culture', href: '/about/careers/culture' },
      { id: 'benefits', label: 'Benefits & Perks', href: '/about/careers/benefits' }
    ]
  }
];

// Main Navigation Links
export const mainNavigationLinks = [
  { id: 'events', label: 'Events', href: '/events' },
  { id: 'contact', label: 'Contact Us', href: '/contact' }
];

// Action Buttons Data
export const actionButtons = [
  { 
    id: 'rfp', 
    label: 'RFP', 
    icon: 'https://nexia.com/wp-content/uploads/2024/09/Icon-file-text-teal.svg',
    action: 'RFP'
  },
  { 
    id: 'find-firm', 
    label: 'Find a firm', 
    icon: 'https://nexia.com/wp-content/uploads/2024/07/Icon-feather-globe.svg',
    action: 'Find a firm'
  },
  { 
    id: 'become-member', 
    label: 'Become a member', 
    icon: 'https://nexia.com/wp-content/uploads/2024/07/Icon-feather-shield.svg',
    action: 'Become a member'
  },
  { 
    id: 'member-login', 
    label: 'Member log in', 
    icon: 'https://nexia.com/wp-content/uploads/2024/08/Menu_Member-Login-Icon.svg',
    action: 'Member log in',
    isHighlighted: true
  }
];

// Navigation Menu Items
export const navigationMenuItems = [
  { id: 'services', label: 'Services', hasDropdown: true },
  { id: 'insights', label: 'Insights', hasDropdown: true },
  { id: 'industries', label: 'Industries', hasDropdown: true },
  { id: 'about', label: 'About', hasDropdown: true }
];

// Icons
export const icons = {
  search: 'https://nexia.com/wp-content/uploads/2024/07/Vector.svg',
  logo: 'https://nexia.com/wp-content/uploads/2024/06/nexiaLogo.svg'
};

// Colors (matching globals.css)
export const colors = {
  teal: '#00B9B9',
  dark: '#00323C',
  black: '#000000',
  white: '#FFFFFF'
} as const;

// RelatedInsights Component Styles
export const CARD_STYLES = {
  container: "bg-white overflow-hidden transition-all duration-500 ease-in-out group rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.22)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.28)] hover:rounded-tl-[3rem] hover:rounded-br-[3rem] hover:rounded-tr-none hover:rounded-bl-none",
  imageContainer: "relative h-52 w-[89%] mx-auto mt-5 mb-4 overflow-hidden rounded-[10px] group-hover:rounded-tl-[3rem] group-hover:rounded-br-[3rem] group-hover:rounded-tr-none group-hover:rounded-bl-none transition-all duration-500 ease-in-out",
  image: "object-cover transition-all duration-300",
  contentContainer: "p-8 pt-1",
  title: "font-medium text-2xl text-gray-900 mb-2 line-clamp-2",
  subtitle: "text-teal-500 text-md mt-1 mb-8"
} as const;

export const SECTION_STYLES = {
  container: "py-12 bg-white",
  wrapper: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8",
  title: "text-3xl font-bold text-teal-600 mb-4 sm:mb-0",
  button: "bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-colors duration-300 w-fit",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
} as const;

// Services Cards Data for different pages
export const servicesCardsData = {
  'home': {
    heading: "Personal connections, global solutions.",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1-3.jpg',
        waveColor: 'from-blue-400 via-cyan-400 to-blue-500'
      },
      {
        id: 'business-services',
        title: 'Business Services',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
        waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
      }
    ]
  },
  'financial-statements-audit': {
    heading: "Other Services",
    services: [
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1-3.jpg',
        waveColor: 'from-blue-400 via-cyan-400 to-blue-500'
      },
      {
        id: 'business-services',
        title: 'Business Services',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
        waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
      }
    ]
  },
  'esg-assurance': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'business-services',
        title: 'Business Services',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
        waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
      }
    ]
  },
  'corporate-tax': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'business-services',
        title: 'Business Services',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
        waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'global-mobility-tax-services': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'business-services',
        title: 'Business Services',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
        waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'indirect-taxes': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'business-services',
        title: 'Business Services',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
        waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'private-wealth': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'business-services',
        title: 'Business Services',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
        waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'transfer-pricing': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'business-services',
        title: 'Business Services',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
        waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'accounting-bookkeeping': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'company-establishment': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'company-secretarial-services': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'financial-reporting': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'payroll': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  },
  'tax-compliance-management': {
    heading: "Other Services",
    services: [
      {
        id: 'audit',
        title: 'Audit',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
        waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
      },
      {
        id: 'tax',
        title: 'Tax',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
        waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
      },
      {
        id: 'advisory',
        title: 'Advisory',
        image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1.jpg',
        waveColor: 'from-purple-400 via-indigo-400 to-purple-500'
      }
    ]
  }
  // Add more page-specific data as needed
} as const;


export const servicesDataSidebar = [
  {
    name: "Audit",
    items: [
      { name: "Financial Statements Audit", href: "/services/audit/financial-statements-audit" },
      { name: "ESG Assurance", href: "/services/audit/esg-assurance" }
    ]
  },
  {
    name: "Business Services",
    items: [
      { name: "Accounting and Bookkeeping", href: "/services/business-services/accounting-bookkeeping" },
      { name: "Company Establishment", href: "/services/business-services/company-establishment" },
      { name: "Company Secretarial Services", href: "/services/business-services/company-secretarial-services" },
      { name: "Financial Reporting", href: "/services/business-services/financial-reporting" },
      { name: "Payroll", href: "/services/business-services/payroll" },
      { name: "Tax Compliance Management", href: "/services/business-services/tax-compliance-management" }
    ]
  },
  {
    name: "Tax",
    items: [
      { name: "Corporate Tax", href: "/services/tax/corporate-tax" },
      { name: "Global Mobility Tax Services", href: "/services/tax/global-mobility-tax-services" },
      { name: "Indirect Taxes", href: "/services/tax/indirect-taxes" },
      { name: "Private Wealth", href: "/services/tax/private-wealth" },
      { name: "Transfer Pricing", href: "/services/tax/transfer-pricing" }
    ]
  },
  {
    name: "Advisory",
    items: [
      { name: "ESG – Environment, Social and Governance", href: "/services/advisory/esg-environment-social-governance" },
      { name: "Legal", href: "/services/advisory/legal" },
      { name: "Mergers & Acquisitions", href: "/services/advisory/mergers-acquisitions" },
      { name: "Risk Advisory", href: "/services/advisory/risk-advisory" },
      { name: "Transaction Services", href: "/services/advisory/transaction-services" },
      { name: "Turnaround Restructuring Insolvency", href: "/services/advisory/turnaround-restructuring-insolvency" }
    ]
  }
];




export const industries: Industry[] = [
  {
    id: 'construction',
    name: 'Construction',
    image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg'
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Manufacturing-1024x576.jpg'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/12/Mining-Trucks-1024x540.jpg'
  },
  {
    id: 'mining-natural-resources',
    name: 'Mining, Natural Resources & Renewable Energy',
    image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg'
  },
  {
    id: 'retail',
    name: 'Retail',
    image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg'
  },
  {
    id: 'technology',
    name: 'Technology',
    image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg'
  }
]