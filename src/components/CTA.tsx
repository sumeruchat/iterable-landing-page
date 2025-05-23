import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo requested with email:', email);
    // Here you would typically send the data to a backend API
  };

  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-cyan-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-24 h-96 w-96 rounded-full bg-indigo-700 opacity-10 blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDJlM2IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMHY2ME0wIDMwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 relative z-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your marketing?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Get started with Iterable today.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join leading brands like Priceline, Fender, and Box who use Iterable to create personalized, 
            cross-channel experiences that convert customers into lifelong fans.
          </p>
        </div>
        
        <div className="mt-10 w-full lg:mt-0 lg:w-auto lg:max-w-md">
          <div className="bg-gray-800 rounded-lg shadow-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Request a personalized demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="cta-email" className="block text-sm font-medium text-gray-300">
                  Work email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="cta-email"
                    className="block w-full rounded-md border-gray-700 bg-gray-700 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-white sm:text-sm"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-500 to-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-150 ease-in-out"
                >
                  Request Demo
                </button>
              </div>
              
              <p className="text-xs text-gray-400 mt-3">
                No commitment required. We'll get in touch to schedule a time that works for you.
              </p>
            </form>
          </div>
          
          <div className="mt-4 text-center">
            <a href="#pricing" className="text-sm font-medium text-cyan-400 hover:text-cyan-300 inline-flex items-center group">
              Or view pricing details <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Social Proof */}
      <div className="bg-gray-800 py-8 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">1,000+</div>
              <div className="text-sm text-gray-300">Global brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">99.9%</div>
              <div className="text-sm text-gray-300">Uptime reliability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">24/7</div>
              <div className="text-sm text-gray-300">Customer support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA; 