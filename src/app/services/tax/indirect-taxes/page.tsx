import React from 'react';

const IndirectTaxesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Indirect Taxes</h1>
        <p className="text-xl text-gray-600">
          Expert guidance on VAT, GST, sales tax, and other indirect tax obligations to ensure compliance and optimize your tax position.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              VAT/GST registration and compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Indirect tax return preparation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax planning and optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cross-border transactions
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax audit support
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory updates and advice
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Compliance assurance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cost optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert guidance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Process efficiency
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Peace of mind
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Master Indirect Tax Compliance</h2>
        <p className="text-gray-700 mb-4">
          Let our indirect tax specialists help you navigate complex VAT, GST, and sales tax requirements across multiple jurisdictions.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default IndirectTaxesPage;
