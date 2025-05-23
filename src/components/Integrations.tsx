import React from 'react';

const Integrations: React.FC = () => {
  // Integration logos would normally be imported from files
  // Here we're using placeholder elements
  const integrations = [
    { name: 'Segment', category: 'Data' },
    { name: 'Snowflake', category: 'Data' },
    { name: 'AWS', category: 'Infrastructure' },
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Zendesk', category: 'Support' },
    { name: 'Mixpanel', category: 'Analytics' },
  ];

  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDJlM2IiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgMHY2ME0wIDMwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Glowing elements */}
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-cyan-600 opacity-10 blur-3xl"></div>
      <div className="absolute top-1/3 -left-24 h-96 w-96 rounded-full bg-indigo-700 opacity-10 blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Seamless Connectivity</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Power up your martech stack
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Your CRM is an ecosystem—Iterable brings it all together. Maximize your tech stack with seamless 
            integrations that supercharge customer engagement.
          </p>
        </div>
        
        {/* Colorful flow diagram */}
        <div className="relative mt-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-800" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-300">
              <div className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-cyan-500 shadow-glow-cyan"></div>
                <div className="h-3 w-3 rounded-full bg-indigo-500 shadow-glow-indigo"></div>
                <div className="h-3 w-3 rounded-full bg-purple-500 shadow-glow-purple"></div>
                <div className="h-3 w-3 rounded-full bg-blue-500 shadow-glow-blue"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-glow-emerald"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Integration grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex flex-col items-center group">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800 text-white border border-gray-700 group-hover:border-cyan-500 transition-colors duration-300 shadow-lg">
                  <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">{integration.name.charAt(0)}</span>
                </div>
                <dt className="mt-4 font-semibold text-white">{integration.name}</dt>
                <dd className="mt-1 text-sm leading-7 text-gray-400">{integration.category}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        {/* Integration benefits */}
        <div className="mt-20 sm:mt-24">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="group relative">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 p-6 shadow-lg shadow-cyan-500/20">
                <h3 className="text-lg font-semibold text-white">Data Unification</h3>
                <p className="mt-3 text-sm text-cyan-100">
                  Connect all your customer data sources to create a unified view of every interaction and touchpoint.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 shadow-lg shadow-indigo-500/20">
                <h3 className="text-lg font-semibold text-white">Bi-Directional Sync</h3>
                <p className="mt-3 text-sm text-indigo-100">
                  Keep your data fresh with real-time syncing between Iterable and your entire marketing stack.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-6 shadow-lg shadow-blue-500/20">
                <h3 className="text-lg font-semibold text-white">Quick Deployment</h3>
                <p className="mt-3 text-sm text-blue-100">
                  Get up and running in days, not months, with pre-built connectors and expert implementation support.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#integrations"
            className="rounded-md bg-gradient-to-r from-cyan-500 to-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-cyan-600 hover:to-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-all duration-150 ease-in-out"
          >
            See all integrations
          </a>
        </div>
      </div>
      
      {/* Add the glowing styles to the global scope */}
      <style>
        {`
          .shadow-glow-cyan {
            box-shadow: 0 0 15px 2px rgba(6, 182, 212, 0.5);
          }
          .shadow-glow-indigo {
            box-shadow: 0 0 15px 2px rgba(99, 102, 241, 0.5);
          }
          .shadow-glow-purple {
            box-shadow: 0 0 15px 2px rgba(168, 85, 247, 0.5);
          }
          .shadow-glow-blue {
            box-shadow: 0 0 15px 2px rgba(59, 130, 246, 0.5);
          }
          .shadow-glow-emerald {
            box-shadow: 0 0 15px 2px rgba(16, 185, 129, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Integrations; 