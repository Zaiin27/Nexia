import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";

const AccountingBookkeepingPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services", href: "/services/business-services" },
    { label: "Accounting and Bookkeeping" }
  ];

  const paragraphs = [
    "Professional accounting and bookkeeping services to keep your financial records accurate and up-to-date.",
    "Our experienced team provides comprehensive bookkeeping services including transaction recording, bank reconciliation, and financial statement preparation.",
    "We ensure your books are maintained according to accounting standards and regulatory requirements, giving you peace of mind and accurate financial insights."
  ];

  return (
    <ServicePageTemplate
      breadcrumbs={breadcrumbs}
      paragraphs={paragraphs}
      chairName="Emma Wilson"
      chairCompany="Accounting Partners"
      chairLocation="Canada"
      chairImage="/api/placeholder/96/96"
    />
  );
};

export default AccountingBookkeepingPage;
