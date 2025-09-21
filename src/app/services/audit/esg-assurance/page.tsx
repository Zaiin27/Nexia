import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const ESGAssurancePage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Audit", href: "/services/audit" },
    { label: "ESG Assurance" }
  ];

  const paragraphs = [
    "Environmental, Social, and Governance (ESG) assurance services help your organization demonstrate commitment to sustainable business practices and build stakeholder confidence in your sustainability reporting.",
    "Our ESG assurance services provide independent verification of your sustainability metrics, ensuring accuracy and reliability in your environmental, social, and governance disclosures. We help you meet regulatory requirements while enhancing your reputation as a responsible business.",
    "With increasing focus on sustainability and responsible business practices, ESG assurance has become critical for organizations seeking to build trust with investors, customers, and other stakeholders. Our comprehensive approach covers all aspects of ESG reporting and verification.",
    "Our experienced team works with you to develop robust ESG frameworks, verify your sustainability data, and provide assurance that meets international standards and best practices in environmental, social, and governance reporting."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="Sarah Johnson"
      chairCompany="Green Audit Partners"
      chairLocation="United Kingdom"
      chairImage="/api/placeholder/96/96"
    />
  );
};

export default ESGAssurancePage;