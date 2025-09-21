import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const FinancialStatementsAuditPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Audit", href: "/services/audit" },
    { label: "Financial Statements Audit" }
  ];

  const paragraphs = [
    "The importance of a professional audit cannot be overstated. It not only fulfils regulatory requirements but also reinforces corporate governance and accountability.",
    "Nexia's member firms offer unparalleled expertise in the audit of financial statements under the ISA framework – or equivalent (e.g. PCAOB) – ensuring the highest standards of accuracy, transparency and reliability. Our risk-based approach helps identify potential issues early, while our comprehensive methodology ensures thorough examination of all material aspects of your financial statements. Our audit services enhance the reliability of your financial information, promote stakeholder trust, and provide valuable insights for business improvement. We work closely with your team to understand your business processes and ensure our audit approach is tailored to your specific needs and industry requirements.",
    "With our global network of experienced auditors and deep industry knowledge, we deliver audit services that not only meet regulatory standards but also add value to your business operations and strategic decision-making processes."
  ];



  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
        chairName="Michael Monahan"
        chairCompany="CohnReznick"
        chairLocation="United States of America"
        chairImage="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/10/michael-monahan.jpg"
      />
    </div>
  );
};

export default FinancialStatementsAuditPage;