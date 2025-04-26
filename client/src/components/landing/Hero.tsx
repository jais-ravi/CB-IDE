'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-neutral-900 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side (text) */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Code Anywhere. <span className="text-blue-500">Deploy Instantly.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-lg">
              A cloud-based development environment that lets you write, test, and ship code from any device, anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#features"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                Start Coding
              </Link>
              <Link
                href="#features"
                className="bg-transparent border border-neutral-600 hover:border-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                See a Demo
              </Link>
            </div>
          </div>

          {/* Right side (code animation) */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg overflow-hidden">
              {/* Terminal header */}
              <div className="bg-neutral-800 border-b border-neutral-700 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-neutral-400 mx-auto">
                  cloud-terminal ~ npm start
                </div>
              </div>

              {/* Code editor content */}
              <div className="p-6 h-80 overflow-hidden font-mono text-sm leading-relaxed">
                <pre className="text-blue-400">
                  import <span className="text-green-400">React</span> from <span className="text-yellow-400">'react'</span>;
                </pre>
                <pre className="text-blue-400">
                  import <span className="text-green-400">{'{ useState, useEffect }'}</span> from <span className="text-yellow-400">'react'</span>;
                </pre>
                <pre></pre>
                <pre className="text-purple-400">
                  function <span className="text-blue-400">CodeCloudApp</span>() {'{'}
                </pre>
                <pre>
                  {'  '}<span className="text-purple-400">const</span> [<span className="text-blue-400">isDeploying</span>, <span className="text-green-400">setIsDeploying</span>] = <span className="text-purple-400">useState</span>(<span className="text-red-400">false</span>);
                </pre>
                <pre>
                  {'  '}<span className="text-purple-400">const</span> [<span className="text-blue-400">deploymentStatus</span>, <span className="text-green-400">setDeploymentStatus</span>] = <span className="text-purple-400">useState</span>(<span className="text-yellow-400">'idle'</span>);
                </pre>
                <pre></pre>
                <pre>
                  {'  '}<span className="text-purple-400">useEffect</span>(() => {'{'}
                </pre>
                <pre>
                  {'    '}<span className="text-purple-400">if</span> (<span className="text-blue-400">isDeploying</span>) {'{'}
                </pre>
                <pre>
                  {'      '}<span className="text-blue-400">setDeploymentStatus</span>(<span className="text-yellow-400">'in-progress'</span>);
                </pre>
                <pre>
                  {'      '}<span className="text-green-400">setTimeout</span>(() => {'{'}
                </pre>
                <pre>
                  {'        '}<span className="text-blue-400">setDeploymentStatus</span>(<span className="text-yellow-400">'completed'</span>);
                </pre>
                <pre>
                  {'        '}<span className="text-blue-400">setIsDeploying</span>(<span className="text-red-400">false</span>);
                </pre>
                <pre>
                  {'      '}, <span className="text-red-400">2000</span>);
                </pre>
                <pre>
                  {'    '}{'}'}
                </pre>
                <pre>
                  {'  '}}, [<span className="text-blue-400">isDeploying</span>]);
                </pre>
              </div>

              {/* Terminal output */}
              <div className="bg-black p-4 border-t border-neutral-700 text-green-400 font-mono text-sm">
                <p className="mb-1">&gt; Starting development server...</p>
                <p className="mb-1">&gt; Compiled successfully!</p>
                <p>&gt; Ready on http://localhost:3000</p>
                <p>&gt; Deploying to production...</p>
                <p className="text-green-400">&gt; Deployment completed! Site is live at https://yourapp.codecloud.dev</p>
              </div>
            </div>

            {/* Floating notification */}
            <div
              className={`absolute top-10 right-0 bg-green-600 text-white text-xs p-2 rounded shadow-lg transition-all duration-300 transform ${
                showNotification ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              Deployment successful! ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;