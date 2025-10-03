// Background header images for different service pages
export const backgroundHeaders = {
  '/services/audit/financial-statements-audit': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
  '/services/audit/esg-assurance': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
  '/services/tax/corporate-tax': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
  '/services/tax/global-mobility-tax-services': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
  '/services/tax/indirect-taxes': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
  '/services/tax/private-wealth': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
  '/services/tax/transfer-pricing': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
  '/services/business-services/company-establishment': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
  '/services/business-services/accounting-bookkeeping': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
  '/services/business-services/company-secretarial-services': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
  '/services/business-services/financial-reporting': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
  '/services/business-services/payroll': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
  '/services/business-services/tax-compliance-management': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
  
} as const;

// Function to get background image for a given pathname
export const getBackgroundImage = (pathname: string): string | undefined => {
  return backgroundHeaders[pathname as keyof typeof backgroundHeaders];
};
