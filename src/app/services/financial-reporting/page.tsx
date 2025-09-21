import React from 'react';

const FinancialReportingPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Financial Reporting</h1>
        <p className="text-xl text-gray-600">
          Professional financial reporting services to meet regulatory requirements and provide stakeholders with accurate financial information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Monthly financial statements
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Quarterly reporting packages
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Annual financial reports
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Management reporting
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory filings
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Custom reporting solutions
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Our Reporting</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Accurate and timely reports
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Professional presentation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Stakeholder confidence
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Decision-making support
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert analysis and insights
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Professional Financial Reporting</h2>
        <p className="text-gray-700 mb-4">
          Trust our experienced team to deliver accurate, compliant, and insightful financial reports that support your business objectives.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FinancialReportingPage;
