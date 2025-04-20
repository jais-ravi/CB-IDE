"use client";

import React from 'react';
import Link from 'next/link';

interface TrustBadge {
  id: string;
  svgPath: string;
  heightClass: string;
}

interface Award {
  id: string;
  iconSvgPath: string;
  iconClass: string;
  title: string;
  subtitle: string;
}

const trustBadges: TrustBadge[] = [
  {
    id: 'badge-1',
    svgPath: 'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z',
    heightClass: 'h-7',
  },
  {
    id: 'badge-2',
    svgPath: 'M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
    heightClass: 'h-6',
  },
  {
    id: 'badge-3',
    svgPath: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    heightClass: 'h-6',
  },
  {
    id: 'badge-4',
    svgPath: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
    heightClass: 'h-5',
  },
  {
    id: 'badge-5',
    svgPath: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
    heightClass: 'h-5',
  },
  {
    id: 'badge-6',
    svgPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
    heightClass: 'h-6',
  },
];

const awards: Award[] = [
  {
    id: 'award-1',
    iconSvgPath: 'M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z',
    iconClass: 'w-5 h-5 text-yellow-400',
    title: 'Rated 4.9/5 on',
    subtitle: 'Product Hunt',
  },
  {
    id: 'award-2',
    iconSvgPath: 'M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z',
    iconClass: 'w-6 h-6 text-yellow-400',
    title: 'Winner',
    subtitle: 'Best Dev Tool 2023',
  },
  {
    id: 'award-3',
    iconSvgPath: 'M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z',
    iconClass: 'w-6 h-6 text-green-400',
    title: 'Security Certified',
    subtitle: 'SOC 2 Type II',
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header and Call-to-Action */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start coding in seconds, from anywhere.
          </h2>
          <p className="text-lg md:text-xl text-blue-300 max-w-2xl mx-auto mb-8">
            Join thousands of developers who are building faster and collaborating better with CodeCloud.
          </p>

          {/* OAuth and Regular Signup Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button
              id="github-oauth-btn"
              className="bg-neutral-800 hover:bg-neutral-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 w-full sm:w-auto border border-neutral-700"
              aria-label="Sign up with GitHub"
              onClick={() => {
                // Placeholder for GitHub OAuth logic
                console.log('Initiate GitHub OAuth');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-3"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Sign up with GitHub
            </button>
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 w-full sm:w-auto"
              aria-label="Start coding free"
            >
              Start Coding Free
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-blue-300 text-sm mb-6">
            Trusted by developers at leading companies
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {trustBadges.map((badge) => (
              <div key={badge.id} className={badge.heightClass + ' text-blue-300'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-full w-auto"
                >
                  <path d={badge.svgPath} />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Ratings */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {/* Product Hunt Rating */}
          <div className="bg-gray-800 px-5 py-3 rounded-lg flex items-center border border-gray-700">
            <div className="flex mr-3">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={`star-${index}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.760-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
            </div>
            <div>
              <p className="text-xs font-medium text-gray-300">Rated 4.9/5 on</p>
              <p className="text-sm font-bold text-white">Product Hunt</p>
            </div>
          </div>

          {/* Other Awards */}
          {awards.slice(1).map((award) => (
            <div
              key={award.id}
              className="bg-gray-800 px-5 py-3 rounded-lg flex items-center border border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={award.iconClass}
              >
                <path fillRule="evenodd" d={award.iconSvgPath} clipRule="evenodd" />
              </svg>
              <div className="ml-2">
                <p className="text-xs font-medium text-gray-300">{award.title}</p>
                <p className="text-sm font-bold text-white">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;