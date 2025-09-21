import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const TaxPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tax" }
  ];

  const paragraphs = [
    "Our tax services help you navigate complex tax regulations and optimize your tax position while ensuring full compliance.",
    "From corporate tax planning to global mobility services, we provide comprehensive tax solutions for businesses and individuals."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="David Chen"
      chairCompany="Tax Advisory Group"
      chairLocation="Singapore"
      chairImage="/api/placeholder/96/96"
    />
  );
};

export default TaxPage;