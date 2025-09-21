import React from 'react';

const LegalPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Advisory</h1>
        <p className="text-xl text-gray-600">
          Expert legal advisory services to support your business operations, ensure regulatory compliance, and protect your interests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Legal Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Corporate law advisory
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Contract review and drafting
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Employment law guidance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Intellectual property protection
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Dispute resolution support
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert guidance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cost-effective solutions
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Business protection
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Strategic legal planning
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Protect Your Business</h2>
        <p className="text-gray-700 mb-4">
          Our legal experts provide comprehensive advisory services to help you navigate complex legal requirements and protect your business interests.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default LegalPage;
