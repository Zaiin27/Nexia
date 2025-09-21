import React from 'react';

const TaxComplianceManagementPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tax Compliance Management</h1>
        <p className="text-xl text-gray-600">
          Comprehensive tax compliance services to ensure your business meets all tax obligations and maintains regulatory compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax return preparation and filing
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax planning and optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Compliance monitoring
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax audit support
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory updates and advice
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Penalty and interest management
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Tax Compliance Matters</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Avoid penalties and interest
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Maintain good standing
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Optimize tax efficiency
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Reduce audit risk
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Peace of mind
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Focus on business growth
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Stay Tax Compliant</h2>
        <p className="text-gray-700 mb-4">
          Let our tax experts handle all your compliance requirements and ensure you meet all tax obligations efficiently and accurately.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TaxComplianceManagementPage;
