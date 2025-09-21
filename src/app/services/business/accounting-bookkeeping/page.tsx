import React from 'react';

const AccountingBookkeepingPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Accounting and Bookkeeping</h1>
        <p className="text-xl text-gray-600">
          Professional accounting and bookkeeping services to maintain accurate financial records and ensure compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Daily transaction recording
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Accounts payable and receivable management
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Bank reconciliation services
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Financial statement preparation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Chart of accounts setup
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Monthly and quarterly reporting
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Accurate financial records
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Time savings for your team
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Better financial insights
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cost-effective solutions
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Scalable services
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Get Professional Accounting Support</h2>
        <p className="text-gray-700 mb-4">
          Let our experienced accounting professionals handle your bookkeeping needs so you can focus on growing your business.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AccountingBookkeepingPage;
