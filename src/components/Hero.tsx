import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo requested with email:', email);
    // Here you would typically send the data to a backend API
  };

  return (
    <div className="relative overflow-hidden pt-20 bg-gray-900">
      {/* Animated background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-cyan-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 h-96 w-96 rounded-full bg-indigo-700 opacity-20 blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDJlM2IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMHY2ME0wIDMwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32 z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:mx-0">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  AI-Powered Marketing Automation
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-white">Campaigns are out.</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Moments are in.</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Transform your customer experience with Iterable, the AI-powered communication platform that turns customers into lifelong fans.
              </p>
              
              <div className="mt-8 sm:mt-10 max-w-md mx-auto lg:mx-0">
                <form onSubmit={handleSubmit} className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full px-4 py-3 rounded-md border-0 text-base bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 shadow-lg"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full py-3 px-4 rounded-md shadow-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium hover:from-cyan-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 transition-all duration-150 ease-in-out"
                    >
                      Request Demo
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-gray-400 text-center lg:text-left">
                  See how leading brands deliver moments that matter.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="bg-gray-800 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-xl sm:overflow-hidden lg:mx-0 shadow-2xl border border-gray-700">
              <div className="px-4 py-8 sm:px-10">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-white">See Iterable in action</h2>
                  <p className="mt-2 text-sm text-gray-400">Watch a 5-minute demo</p>
                </div>
                
                <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-800 text-gray-400">Quick overview</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-56 bg-gray-900 rounded-lg flex items-center justify-center group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-indigo-900/30 group-hover:opacity-75 transition-opacity"></div>
                      <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-400 text-center">
                    Learn how Iterable helps leading brands like Priceline, Fender, and Box create personalized customer experiences.
                  </p>
                </div>
              </div>
              <div className="px-4 py-6 bg-gray-900 border-t border-gray-700 sm:px-10">
                <p className="text-xs text-gray-400 text-center">
                  By providing your email, you agree to our{' '}
                  <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 