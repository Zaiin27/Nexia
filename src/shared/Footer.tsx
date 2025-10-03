import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="w-full">
            {/* Main Footer Section - Teal Background */}
             <div className="bg-[#00B9B9] pt-10 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                         {/* Left Side - Logo */}
                         <div className="flex flex-col">
                             {/* Nexia Logo */}
                             <div className="flex items-center md:mb-6">
                                  <img
                                      src="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/nexia-logo-white.png"
                                      alt="Nexia International"
                                      className="h-12 sm:h-16 w-auto"
                                  />
                             </div>
                         </div>

                        {/* Right Side - Navigation Links, Social Icons and Chat */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">
                            {/* Social Media Icons */}


                            {/* Navigation Links */}
                             <div className="space-y-2 text-left">
                                  <Link href="/insights" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                      Insights
                                  </Link>
                                  <Link href="/expertise" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                      Expertise
                                  </Link>
                                  <Link href="/sectors" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                      Sectors
                                  </Link>
                                  <Link href="/about" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                      About
                                  </Link>
                                  <Link href="/locations" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                      Locations
                                  </Link>
                                  <Link href="/contact" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                      Contact Us
                                  </Link>
                             </div>


                            {/* Additional Links and Chat */}
                             <div className="space-y-4 text-left mt-4 md:mt-0 lg:flex lg:flex-col lg:items-center">
                                 <div className="space-y-2">
                                     <Link href="/find-firm" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                         Find a firm
                                     </Link>
                                     <Link href="/become-member" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                         Become a member
                                     </Link>
                                     <Link href="/member-login" className="block text-white hover:text-gray-200 transition-colors text-lg">
                                         Member login
                                     </Link>
                                 </div>

                            </div>

                             <div className="flex justify-start lg:justify-end space-x-4 mt-4 md:mt-4 lg:mt-0">
                                 <a
                                     href="#"
                                     className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                     aria-label="LinkedIn"
                                 >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-gray-600"
                                    >
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>

                                 <a
                                     href="#"
                                     className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                     aria-label="Instagram"
                                 >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-gray-600"
                                    >
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>

                                 <a
                                     href="#"
                                     className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                     aria-label="YouTube"
                                 >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-gray-600"
                                    >
                                        <path
                                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>




                        </div>
                    </div>
                    
                    {/* Copyright Text at Bottom of Green Section */}
                    <div className="mt-20 md:mt-48">
                        <div className="max-w-2xl text-white text-sm text-left">
                            <p>
                                © 2025 Nexia International Limited. All rights reserved. The trade marks NEXIA INTERNATIONAL, NEXIA and the NEXIA logo are owned by Nexia International Limited.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom - Dark Blue Background */}
             <div className="bg-[#00323C] py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        {/* Left Side - Legal Links */}
                        <div className="flex flex-wrap justify-center lg:justify-start items-center space-x-4 lg:space-x-6">
                             <Link href="/disclaimer" className="text-white hover:text-gray-300 transition-colors text-xs md:text-sm lg:text-base flex items-center">
                                
                                 Disclaimer
                             </Link>

                             <Link href="/member-firm-disclaimer" className="text-white hover:text-gray-300 transition-colors text-xs md:text-sm lg:text-base">
                                 Member firm disclaimer
                             </Link>

                             <Link href="/privacy-policy" className="text-white hover:text-gray-300 transition-colors text-xs md:text-sm lg:text-base">
                                 Privacy policy
                             </Link>

                             <Link href="/cookie-policy" className="text-white hover:text-gray-300 transition-colors text-xs md:text-sm lg:text-base">
                                 Cookie policy
                             </Link>

                             <Link href="/email-disclaimer" className="text-white hover:text-gray-300 transition-colors text-xs md:text-sm lg:text-base">
                                 Email disclaimer
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
