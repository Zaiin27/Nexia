import React from 'react';

const ESGFeatures = () => {
  const features = [
    {
      title: "Risk Management",
      description: "ESG integration enhances risk management by helping companies identify and mitigate non-financial risks such as climate change, regulatory shifts and reputational damage."
    },
    {
      title: "Due Diligence",
      description: "ESG-focused due diligence is now a key part of evaluating mergers, acquisitions, and investments. Businesses are scrutinised for their environmental impact, governance practices, and ethical conduct."
    },
    {
      title: "Change Management",
      description: "Successfully adopting ESG practices often requires organisational change. Nexia's ESG services guide companies through this transformation, ensuring new regulations and sustainability initiatives are integrated smoothly without disrupting operations."
    },
    {
      title: "Stakeholder Engagement",
      description: "Engaging stakeholders – ranging from investors to employees and communities – is a vital aspect of ESG. Nexia's ESG services support businesses in maintaining this crucial dialogue, meeting stakeholder expectations and fostering loyalty."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-xl font-semibold text-black">
              {feature.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default ESGFeatures;
