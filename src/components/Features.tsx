import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      name: 'AI-Powered Personalization',
      description:
        "Leverage Iterable's Nova AI suite to transform insights into smarter marketing decisions that drive engagement and conversions.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      name: 'Cross-Channel Orchestration',
      description:
        'Create seamless customer journeys across email, mobile push, SMS, in-app, web, and more — all from a single platform.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
    {
      name: 'Data Activation',
      description:
        'Connect, centralize, and activate all your customer data to deliver personalized experiences that drive engagement and loyalty.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDJlM2IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMHY2ME0wIDMwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Glowing elements */}
      <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-cyan-600 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-24 h-96 w-96 rounded-full bg-indigo-700 opacity-10 blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Stop guessing. Start delivering.</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transform your marketing with AI-powered intelligence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Iterable helps you create, optimize, and measure every interaction across the customer journey.
          </p>
        </div>
      </div>
      
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Feature Cards */}
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="relative flex flex-col gap-6 sm:flex-row lg:flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 sm:shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-400">{feature.description}</p>
                    <div className="mt-4">
                      <a
                        href={`#${feature.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm font-semibold leading-6 text-cyan-400 hover:text-cyan-300 group inline-flex items-center"
                      >
                        Learn more <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Background glow effect */}
          <div className="absolute left-1/2 top-1/2 -z-10 -translate-y-1/2 blur-3xl xl:-top-6">
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0c4a6e] to-[#1e1b4b] opacity-30"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real results from real brands
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            See how leading companies are transforming their marketing with Iterable.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300">
            <div className="flex-1 px-6 py-8">
              <h3 className="text-xl font-semibold text-white">Increase Purchase Frequency</h3>
              <p className="mt-4 text-base text-gray-400">
                Turn one-time buyers into loyal customers with automated journeys that reward engagement and drive action.
              </p>
            </div>
            <div className="bg-gray-900 px-6 py-8 border-t border-gray-700">
              <div className="flex items-center">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Jersey Mike's</div>
                <div className="ml-2 text-sm text-gray-500">saw a</div>
              </div>
              <div className="text-3xl font-bold text-white mt-1">13% lift</div>
              <div className="text-sm text-gray-500">in purchase frequency</div>
            </div>
          </div>
          
          <div className="flex flex-col bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300">
            <div className="flex-1 px-6 py-8">
              <h3 className="text-xl font-semibold text-white">Drive More Engagement</h3>
              <p className="mt-4 text-base text-gray-400">
                Leverage real-time behavioral data to deliver personalized moments that capture attention and spark interaction.
              </p>
            </div>
            <div className="bg-gray-900 px-6 py-8 border-t border-gray-700">
              <div className="flex items-center">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">The Athletic</div>
                <div className="ml-2 text-sm text-gray-500">drove a</div>
              </div>
              <div className="text-3xl font-bold text-white mt-1">127% boost</div>
              <div className="text-sm text-gray-500">in email click rates</div>
            </div>
          </div>
          
          <div className="flex flex-col bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300">
            <div className="flex-1 px-6 py-8">
              <h3 className="text-xl font-semibold text-white">Accelerate Upsell</h3>
              <p className="mt-4 text-base text-gray-400">
                Surface timely, relevant opportunities that fuel expansion, adoption, and incremental value across channels.
              </p>
            </div>
            <div className="bg-gray-900 px-6 py-8 border-t border-gray-700">
              <div className="flex items-center">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Thirty Madison</div>
                <div className="ml-2 text-sm text-gray-500">saw a</div>
              </div>
              <div className="text-3xl font-bold text-white mt-1">50% lift</div>
              <div className="text-sm text-gray-500">in converted subscribers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 