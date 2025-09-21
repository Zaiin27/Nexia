import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const BusinessServicesPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services" }
  ];

  const paragraphs = [
    "Our comprehensive business services help you manage your day-to-day operations efficiently while ensuring compliance with regulatory requirements.",
    "From accounting and bookkeeping to company establishment and secretarial services, we provide end-to-end support for your business needs."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="John Smith"
      chairCompany="Business Solutions Ltd"
      chairLocation="United Kingdom"
      chairImage="/api/placeholder/96/96"
    />
  );
};

export default BusinessServicesPage;
