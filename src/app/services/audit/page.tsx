import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const AuditPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Audit" }
  ];

  const paragraphs = [
    "Our audit services provide independent verification of your financial statements, ensuring accuracy, transparency, and compliance with regulatory requirements.",
    "With our global network of experienced auditors and deep industry knowledge, we deliver audit services that not only meet regulatory standards but also add value to your business operations and strategic decision-making processes."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="Michael Monahan"
      chairCompany="CohnReznick"
      chairLocation="United States of America"
      chairImage="/api/placeholder/96/96"
    />
  );
};

export default AuditPage;