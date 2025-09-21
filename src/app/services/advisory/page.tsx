import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const AdvisoryPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Advisory" }
  ];

  const paragraphs = [
    "Our advisory services provide strategic guidance and expert insights to help your business navigate complex challenges and capitalize on opportunities.",
    "From ESG consulting to mergers & acquisitions, we offer comprehensive advisory solutions tailored to your specific needs and objectives."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="Lisa Anderson"
      chairCompany="Strategic Advisory Group"
      chairLocation="Australia"
      chairImage="/api/placeholder/96/96"
    />
  );
};

export default AdvisoryPage;