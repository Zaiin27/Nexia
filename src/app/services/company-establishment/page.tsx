import React from 'react';

const CompanyEstablishmentPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Company Establishment</h1>
        <p className="text-xl text-gray-600">
          Complete company formation and registration services to help you establish your business with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Business name registration
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Company incorporation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Legal structure consultation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax registration assistance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Business license applications
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Bank account setup support
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Us</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert guidance throughout the process
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Fast and efficient service
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Compliance with all regulations
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Ongoing support and advice
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cost-effective solutions
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Local market expertise
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Start Your Business Today</h2>
        <p className="text-gray-700 mb-4">
          Let our experts guide you through the company establishment process and get your business up and running quickly and efficiently.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CompanyEstablishmentPage;
