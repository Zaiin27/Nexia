import React from 'react';

const CompanySecretarialServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Company Secretarial Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive secretarial services to ensure your company maintains good governance and regulatory compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Board meeting management
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Annual return filing
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Statutory record maintenance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Share transfer processing
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Director appointment/removal
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Compliance monitoring
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance assurance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Professional governance support
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Time and cost savings
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert advice and guidance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Peace of mind
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Ensure Compliance Excellence</h2>
        <p className="text-gray-700 mb-4">
          Let our experienced secretarial team handle your company's governance requirements and keep you compliant with all regulations.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CompanySecretarialServicesPage;
