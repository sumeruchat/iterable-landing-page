import React from 'react';
// Remove image imports
// import boxLogo from '../assets/images/box-logo.svg';
// import pricelineLogo from '../assets/images/priceline-logo.svg';

const LogoBar: React.FC = () => {
  // Array of customer logos with names
  const logos = [
    {
      name: 'Priceline',
      // Using null to indicate we want text instead of image
      src: null,
      width: 120
    },
    {
      name: 'Box',
      // Using null to indicate we want text instead of image
      src: null,
      width: 90
    },
    {
      name: 'Fender',
      src: null,
      width: 110
    },
    {
      name: 'Cinemark',
      src: null,
      width: 130
    },
    {
      name: 'The Athletic',
      src: null,
      width: 140
    },
    {
      name: 'Jersey Mike\'s',
      src: null,
      width: 120
    }
  ];

  return (
    <div className="bg-gray-900 py-16 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDJlM2IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMHY2ME0wIDMwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Glowing line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-wide uppercase">
            Trusted By Industry Leaders
          </h2>
          <p className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
            See who's leading the new era of marketing with Iterable
          </p>
        </div>
        
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {logos.map((logo, index) => (
              <div key={index} className="col-span-1 flex justify-center items-center">
                <div className="text-xl font-bold text-gray-500 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a
            href="#customers"
            className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 group"
          >
            <span>Meet all our customers</span>
            <svg
              className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogoBar; 