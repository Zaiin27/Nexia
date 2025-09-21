import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const MergersAcquisitionsPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "Mergers & Acquisitions" }
  ];

  const paragraphs = [
    "Expert guidance for mergers and acquisitions to help you make informed decisions and achieve successful transactions.",
    "Our M&A advisory services include due diligence, valuation, deal structuring, and post-transaction integration support.",
    "We work with buyers and sellers to navigate complex M&A processes, ensuring optimal outcomes and minimizing risks throughout the transaction lifecycle."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="James Thompson"
      chairCompany="M&A Advisory Partners"
      chairLocation="United Kingdom"
      chairImage="/api/placeholder/96/96"
    />
  );
};

export default MergersAcquisitionsPage;