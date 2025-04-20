'use client';

import React from 'react';

const featureCards = [
  {
    icon: '💻',
    title: 'Real-Time Coding',
    description: 'Code with zero latency in your browser. Our editor supports syntax highlighting for all major languages.',
  },
  {
    icon: '☁️',
    title: 'Instant Setup',
    description: 'Get started in seconds with ready-to-use development environments for any stack or framework.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Editing',
    description: 'Work together in real-time with team members. See changes as they happen with multi-cursor support.',
  },
  {
    icon: '🚀',
    title: 'One-Click Deployments',
    description: 'Deploy straight to production with a single click. No complicated CI/CD setup required.',
  },
  {
    icon: '🔐',
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security with encrypted workspaces and automated backups to keep your code safe.',
  },
  {
    icon: '🔄',
    title: 'GitHub/GitLab Integration',
    description: 'Seamlessly connect with your repositories for easy code management and version control.',
  },
];

const highlightFeatures = [
  'Full terminal access with customizable environments',
  'Language servers for intelligent code completion',
  'Integrated debugging tools for faster development',
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Powerful Features for Developers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to code, collaborate, and deploy your projects from anywhere in the world.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-400">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gray-800 border border-gray-700 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Built for professional developers
              </h3>
              <p className="text-gray-400 mb-4">
                Our platform is designed with performance and productivity in mind. Focus on coding, not infrastructure management.
              </p>
              <ul className="space-y-2">
                {highlightFeatures.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-black text-white p-6 rounded-lg font-mono text-sm">
                <div className="flex items-center border-b border-gray-800 pb-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-auto text-gray-500">Terminal</div>
                </div>
                <p className="mb-1">
                  <span className="text-green-400">user@codecloud</span>:
                  <span className="text-blue-400">~/project</span>$ npm install
                </p>
                <p className="mb-1">Installing dependencies...</p>
                <p className="mb-1">+ react@18.2.0</p>
                <p className="mb-1">+ typescript@5.0.4</p>
                <p className="mb-1">+ tailwindcss@3.3.2</p>
                <p className="mb-3">Done in 2.3s</p>
                <p className="mb-1">
                  <span className="text-green-400">user@codecloud</span>:
                  <span className="text-blue-400">~/project</span>$ npm start
                </p>
                <p className="mb-1">Starting development server...</p>
                <p>Server running at http://localhost:3000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;