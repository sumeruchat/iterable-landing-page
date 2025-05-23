import React, { useState } from 'react';
// Replace the imported logo with a text version
// import iterableLogo from '../assets/images/iterable-logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 py-4 fixed w-full z-50 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 text-transparent bg-clip-text">Iterable</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#product" className="text-gray-300 hover:text-cyan-400 transition px-3 py-2 text-sm font-medium">
                Product
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-cyan-400 transition px-3 py-2 text-sm font-medium">
                Solutions
              </a>
              <a href="#customers" className="text-gray-300 hover:text-cyan-400 transition px-3 py-2 text-sm font-medium">
                Customers
              </a>
              <a href="#resources" className="text-gray-300 hover:text-cyan-400 transition px-3 py-2 text-sm font-medium">
                Resources
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition px-3 py-2 text-sm font-medium">
                Pricing
              </a>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-gray-300 hover:text-cyan-400 transition px-3 py-2 text-sm font-medium">
              Login
            </a>
            <a href="#demo" className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out shadow-lg shadow-cyan-500/20">
              Request Demo
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2 mx-2 shadow-lg">
            <a href="#product" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 rounded-md">
              Product
            </a>
            <a href="#solutions" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 rounded-md">
              Solutions
            </a>
            <a href="#customers" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 rounded-md">
              Customers
            </a>
            <a href="#resources" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 rounded-md">
              Resources
            </a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 rounded-md">
              Pricing
            </a>
            <a href="#login" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 rounded-md">
              Login
            </a>
            <a href="#demo" className="block w-full text-center px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium shadow-lg shadow-cyan-500/20">
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 