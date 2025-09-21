import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const CorporateTaxPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tax", href: "/services/tax" },
    { label: "Corporate Tax" }
  ];

  const paragraphs = [
    "Comprehensive corporate tax services to help your business optimize its tax position while maintaining full compliance with local and international tax regulations.",
    "Our corporate tax experts provide strategic tax planning, compliance services, and advisory support to help you minimize tax liabilities and maximize opportunities.",
    "We work with businesses of all sizes to develop tax-efficient structures and ensure proper reporting and compliance across all jurisdictions where you operate."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="Robert Martinez"
      chairCompany="Corporate Tax Solutions"
      chairLocation="United States of America"
      chairImage="/api/placeholder/96/96"
    />
  );
};

export default CorporateTaxPage;