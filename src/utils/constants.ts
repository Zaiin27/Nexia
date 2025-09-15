import { DropdownSection, DropdownItem } from './types';

// Services Dropdown Data - Desktop Mega Menu
export const servicesData: DropdownSection[] = [
  {
    id: 'audit',
    title: 'Audit',
    items: [
      { id: 'financial-statements', label: 'Financial Statements Audit', href: '/audit/financial-statements' },
      { id: 'esg-assurance', label: 'ESG Assurance', href: '/audit/esg' }
    ]
  },
  {
    id: 'business-services',
    title: 'Business Services',
    items: [
      { id: 'accounting', label: 'Accounting and Bookkeeping', href: '/business/accounting' },
      { id: 'company-establishment', label: 'Company Establishment', href: '/business/company-establishment' },
      { id: 'company-secretarial', label: 'Company Secretarial Services', href: '/business/company-secretarial' },
      { id: 'financial-reporting', label: 'Financial Reporting', href: '/business/financial-reporting' },
      { id: 'payroll', label: 'Payroll', href: '/business/payroll' },
      { id: 'tax-compliance', label: 'Tax Compliance Management', href: '/business/tax-compliance' }
    ]
  },
  {
    id: 'tax',
    title: 'Tax',
    items: [
      { id: 'corporate-tax', label: 'Corporate Tax', href: '/tax/corporate' },
      { id: 'global-mobility', label: 'Global Mobility Tax Services', href: '/tax/global-mobility' },
      { id: 'indirect-taxes', label: 'Indirect Taxes', href: '/tax/indirect' },
      { id: 'private-wealth', label: 'Private Wealth', href: '/tax/private-wealth' },
      { id: 'transfer-pricing', label: 'Transfer Pricing', href: '/tax/transfer-pricing' }
    ]
  },
  {
    id: 'advisory',
    title: 'Advisory',
    items: [
      { id: 'esg', label: 'ESG – Environment, Social and Governance', href: '/advisory/esg' },
      { id: 'legal', label: 'Legal', href: '/advisory/legal' },
      { id: 'mergers', label: 'Mergers & Acquisitions', href: '/advisory/mergers' },
      { id: 'risk-advisory', label: 'Risk Advisory', href: '/advisory/risk' },
      { id: 'transaction-services', label: 'Transaction Services', href: '/advisory/transaction' },
      { id: 'turnaround', label: 'Turnaround Restructuring Insolvency', href: '/advisory/turnaround' },
      { id: 'valuation', label: 'Valuation Services', href: '/advisory/valuation' }
    ]
  }
];

// Services Mobile Dropdown Data
export const servicesMobileData = [
  {
    id: 'audit',
    title: 'Audit',
    items: [
      { id: 'financial-statements', label: 'Financial Statements Audit', href: '/audit/financial-statements' },
      { id: 'pies', label: 'Audit of PIEs', href: '/audit/pies' },
      { id: 'ifrs', label: 'International Financial Reporting Standards (IFRS)', href: '/audit/ifrs' },
      { id: 'esg', label: 'ESG Assurance', href: '/audit/esg' }
    ]
  },
  {
    id: 'tax',
    title: 'Tax',
    items: [
      { id: 'corporate', label: 'Corporate Tax', href: '/tax/corporate' },
      { id: 'personal', label: 'Personal Tax', href: '/tax/personal' },
      { id: 'international', label: 'International Tax', href: '/tax/international' },
      { id: 'planning', label: 'Tax Planning', href: '/tax/planning' }
    ]
  },
  {
    id: 'business',
    title: 'Business Services',
    items: [
      { id: 'accounting', label: 'Accounting Services', href: '/business/accounting' },
      { id: 'payroll', label: 'Payroll Services', href: '/business/payroll' },
      { id: 'bookkeeping', label: 'Bookkeeping', href: '/business/bookkeeping' },
      { id: 'company-secretarial', label: 'Company Secretarial Services', href: '/business/company-secretarial' }
    ]
  },
  {
    id: 'advisory',
    title: 'Advisory',
    items: [
      { id: 'consulting', label: 'Business Consulting', href: '/advisory/consulting' },
      { id: 'mergers', label: 'Mergers & Acquisitions', href: '/advisory/mergers' },
      { id: 'risk', label: 'Risk Management', href: '/advisory/risk' },
      { id: 'technology', label: 'Technology Advisory', href: '/advisory/technology' }
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
