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
    "In today’s dynamic business landscape, Environmental, Social and Governance (ESG) considerations are increasingly central to corporate strategy and stakeholder expectations.",
    "Nexia member firms provide independent ESG assurance services to help businesses navigate these critical areas with confidence and integrity. Our services deliver objective assessments of ESG data and disclosures, ensuring they are reliable, accurate and aligned with recognised frameworks such as the Global Reporting Initiative (GRI), Sustainability Accounting Standards Board (SASB), Task Force on Climate-related Financial Disclosures (TCFD), IFRS Sustainability Disclosure Standards, and EU Corporate Sustainability Reporting Directive (CSRD).",
    "Our rigorous assurance processes enhance the credibility of your ESG reporting, giving stakeholders – including investors, customers and regulators – greater trust in your sustainability commitments and performance.",
    "By identifying gaps or inconsistencies in ESG disclosures, we assist in mitigating reputational and compliance risks while supporting robust decision-making processes. Our expert team provides a customised approach to suit your unique ESG strategies and goals, helping your organisation stay aligned with industry best practices and evolving regulatory requirements."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="Michael Monahan"
      chairCompany="CohnReznick"
      chairLocation="United States of America"
      chairImage="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/10/michael-monahan.jpg"
    />
  );
};

export default ESGAssurancePage;