'use client'
import React, { useState } from 'react'

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    help: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    hearAbout: ''
  })
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [messageCount, setMessageCount] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (name === 'message') {
      setMessageCount(value.length)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="relative bg-[#00323C] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Left Side - Title */}
          <div className="lg:col-span-2 flex items-start ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Get in touch
            </h2>
          </div>

          <div className="lg:col-span-4 max-w-xl lg:ml-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="help"
                  placeholder="How can we help?"
                  value={formData.help}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-transparent border-2 border-[#4a6361] rounded-3xl text-white placeholder-white focus:outline-none focus:border-[#00B9B9] transition-colors duration-300"
                />
              </div>

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent border-2 border-[#4A5A63] rounded-3xl text-white placeholder-white focus:outline-none focus:border-[#00B9B9] transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent border-2 border-[#4A5A63] rounded-3xl text-white placeholder-white focus:outline-none focus:border-[#00B9B9] transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent border-2 border-[#4A5A63] rounded-3xl text-white placeholder-white focus:outline-none focus:border-[#00B9B9] transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent border-2 border-[#4A5A63] rounded-3xl text-white placeholder-white focus:outline-none focus:border-[#00B9B9] transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={600}
                  className="w-full px-4 py-2 bg-transparent border-2 border-[#4A5A63] rounded-3xl text-white placeholder-white focus:outline-none focus:border-[#00B9B9] transition-colors duration-300 resize-none"
                />
                <div className="text-right text-sm text-[#9CA3AF] mt-1">
                  {messageCount} of 600 max characters
                </div>
              </div>

              {/* Where did you hear about us? */}
              <div>
                <input
                  type="text"
                  name="hearAbout"
                  placeholder="Where did you hear about us?"
                  value={formData.hearAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-transparent border-2 border-[#4A5A63] rounded-3xl text-white placeholder-white focus:outline-none focus:border-[#00B9B9] transition-colors duration-300"
                />
              </div>

              {/* Privacy Policy */}
              <div className="space-y-4">
                <p className="text-xs text-white leading-relaxed">
                  By submitting this contact form you will be providing some personal data and as such you will need to consent to the way that Nexia will process your personal data.
                </p>
                <p className="text-xs text-white leading-relaxed">
                  Do you agree to Nexia processing your personal data?
                </p>
                
                <div className="flex items-start space-x-3">
                  <div className="relative ">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="sr-only"
                    />
                    <label htmlFor="privacy" className="flex items-center cursor-pointer">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        privacyAgreed 
                          ? 'border-[#00B9B9] bg-transparent' 
                          : 'border-[#4A5A63] bg-transparent'
                      }`}>
                        {privacyAgreed && (
                          <svg className="w-3 h-3 text-[#00B9B9]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </label>
                  </div>
                  <label htmlFor="privacy" className="text-xs text-white leading-relaxed cursor-pointer">
                    I agree to the{' '}
                    <a href="#" className="text-[#00B9B9] hover:text-white transition-colors duration-300 underline">
                      privacy policy.
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!privacyAgreed}
                  className="w-32 bg-[#00323C] border-2 border-[#00B9B9] text-[#00B9B9] py-2 px-4 rounded-3xl font-medium hover:border-white hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </button>
      </div>

      {/* Privacy Terms */}
      <div className="fixed bottom-2 right-2 text-xs text-[#9CA3AF] z-40">
        <a href="#" className="hover:text-white transition-colors duration-300">Privacy - Terms</a>
      </div>
    </section>
  )
}

export default GetInTouch
