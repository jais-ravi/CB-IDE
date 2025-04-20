"use client";

import React, { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

interface FAQItem {
  id: string;
  question: string;
  answer: JSX.Element;
  category: string;
}

interface FAQCategory {
  id: string;
  name: string;
  value: string;
}

const faqCategories: FAQCategory[] = [
  { id: uuidv4(), name: 'All Questions', value: 'all' },
  { id: uuidv4(), name: 'Features', value: 'features' },
  { id: uuidv4(), name: 'Account', value: 'account' },
  { id: uuidv4(), name: 'Technical', value: 'technical' },
  { id: uuidv4(), name: 'Billing', value: 'billing' },
];

const faqItems: FAQItem[] = [
  {
    id: uuidv4(),
    question: 'What programming languages are supported?',
    category: 'features',
    answer: (
      <>
        <p className="text-neutral-400 mb-3">
          CodeCloud supports a wide range of programming languages and frameworks, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            'JavaScript/TypeScript',
            'Python',
            'Ruby',
            'Go',
            'PHP',
            'Java',
            'C/C++',
            'Rust',
            'And many more...',
          ].map((lang, index) => (
            <div
              key={index}
              className="bg-neutral-700 p-2 rounded text-center text-sm text-neutral-300"
            >
              {lang}
            </div>
          ))}
        </div>
        <p className="text-neutral-400 mt-3">
          Each environment comes pre-configured with language-specific tools and extensions. We're continuously expanding our language support based on user feedback.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    question: 'Is there an offline mode available?',
    category: 'features',
    answer: (
      <>
        <p className="text-neutral-400 mb-3">
          Yes, CodeCloud offers offline capabilities for Pro and Team plans with our desktop application. Here's how it works:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-neutral-400">
          <li>Install the CodeCloud desktop app on macOS, Windows, or Linux</li>
          <li>Sync your workspaces for offline use</li>
          <li>Work offline with full IDE functionality</li>
          <li>Changes automatically sync when you reconnect to the internet</li>
        </ul>
        <p className="text-neutral-400">
          Free plan users can access read-only versions of their code while offline, but editing requires an internet connection.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    question: 'How does the deployment process work?',
    category: 'technical',
    answer: (
      <>
        <p className="text-neutral-400 mb-3">
          CodeCloud offers one-click deployments directly from your workspace:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-3 text-neutral-400">
          <li>Click "Deploy" in your workspace dashboard</li>
          <li>Select your deployment target (CodeCloud hosting, Vercel, Netlify, AWS, etc.)</li>
          <li>Configure deployment settings (once for each project)</li>
          <li>Click "Deploy Now" to launch your application</li>
        </ol>
        <p className="text-neutral-400 mb-3">For automated deployments, you can:</p>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-neutral-400">
          <li>Set up CI/CD pipelines with GitHub/GitLab integration</li>
          <li>Configure auto-deployment on commits to specific branches</li>
          <li>Run automated tests before deployment</li>
        </ul>
        <p className="text-neutral-400">
          Team and Enterprise plans include advanced deployment features like staging environments, rollback capabilities, and deployment previews.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    question: 'What are the collaboration limits?',
    category: 'features',
    answer: (
      <>
        <p className="text-neutral-400 mb-3">Collaboration limits vary by plan:</p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-700 mb-3">
            <thead className="bg-neutral-900">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider"
                >
                  Plan
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider"
                >
                  Max Collaborators
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider"
                >
                  Simultaneous Editors
                </th>
              </tr>
            </thead>
            <tbody className="bg-neutral-800 divide-y divide-neutral-700">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">Free</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">1 (solo only)</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">N/A</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">Pro</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">Up to 3</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">Team</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">Unlimited</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">10</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">Enterprise</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">Unlimited</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400">25+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-400">
          All collaborative sessions include real-time editing, cursor tracking, chat, and commenting features.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    question: 'Can I use my own extensions and tools?',
    category: 'account',
    answer: (
      <>
        <p className="text-neutral-400 mb-3">
          Yes! CodeCloud provides several ways to customize your development environment:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-neutral-400">
          <li>Install extensions from our marketplace (VSCode compatible)</li>
          <li>Upload custom snippets and configurations</li>
          <li>Use custom themes and keyboard shortcuts</li>
          <li>Access terminal for installing additional tools</li>
        </ul>
        <p className="text-neutral-400 mb-3">Pro and Team plans allow:</p>
        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
          <li>Custom Docker containers</li>
          <li>Environment persistence between sessions</li>
          <li>Custom runtime environments</li>
          <li>Sync settings across all your devices</li>
        </ul>
      </>
    ),
  },
  {
    id: uuidv4(),
    question: 'Can I cancel my subscription at any time?',
    category: 'billing',
    answer: (
      <>
        <p className="text-neutral-400 mb-3">
          Yes, you can cancel your subscription at any time directly from your account settings. Here's what happens when you cancel:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
          <li>You'll maintain access to your paid plan until the end of your current billing period</li>
          <li>No further charges will be made to your payment method</li>
          <li>Your account will automatically downgrade to the Free plan at the end of your billing period</li>
          <li>Your workspaces and projects will remain intact, but collaborative features will be limited</li>
          <li>You can upgrade again at any time</li>
        </ul>
        <p className="text-neutral-400 mt-3">
          We don't offer prorated refunds for unused portions of your subscription after cancellation.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    question: 'How secure is my code on CodeCloud?',
    category: 'technical',
    answer: (
      <>
        <p className="text-neutral-400 mb-3">Security is our highest priority. CodeCloud implements multiple layers of protection:</p>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-neutral-400">
          <li>All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
          <li>Private workspaces are completely isolated from other users</li>
          <li>We use secure, ephemeral containers for code execution</li>
          <li>Two-factor authentication (2FA) for all accounts</li>
          <li>Regular security audits and penetration testing</li>
          <li>SOC 2 Type II certified infrastructure</li>
        </ul>
        <p className="text-neutral-400 mb-3">Enterprise plans include:</p>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-neutral-400">
          <li>Private cloud deployment options</li>
          <li>IP whitelisting</li>
          <li>SAML SSO integration</li>
          <li>Custom security policies</li>
        </ul>
        <p className="text-neutral-400">
          For more details, you can read our{' '}
          <Link href="#features" className="text-blue-400 hover:underline">
            Security Whitepaper
          </Link>.
        </p>
      </>
    ),
  },
  {
    id: uuidv4(),
    question: 'Can I export my projects from CodeCloud?',
    category: 'account',
    answer: (
      <>
        <p className="text-neutral-400 mb-3">
          Yes, you have full ownership of your code and can export projects at any time. Export options include:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-neutral-400">
          <li>Download as ZIP archive</li>
          <li>Push directly to GitHub/GitLab/Bitbucket</li>
          <li>Clone via Git</li>
          <li>Sync to local filesystem (Pro and Team plans)</li>
          <li>API access for automated backups (Team and Enterprise plans)</li>
        </ul>
        <p className="text-neutral-400">
          We believe in preventing vendor lock-in and ensuring you always have access to your code, even if you decide to stop using CodeCloud.
        </p>
      </>
    ),
  },
];

const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const router = useRouter();

  // Handle FAQ opening from URL hash
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#faq-')) {
        const faqId = hash.substring(1);
        const faq = faqItems.find((item) => `faq-${item.id}` === faqId);
        if (faq) {
          setExpandedFAQ(faq.id);
          setTimeout(() => {
            const element = document.getElementById(`faq-${faq.id}`);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }, 500);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ((prev) => (prev === id ? null : id));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredFAQs =
    selectedCategory === 'all'
      ? faqItems
      : faqItems.filter((faq) => faq.category === selectedCategory);

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">FAQ</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Find answers to commonly asked questions about CodeCloud.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-3xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
                onClick={() => handleCategoryChange(category.value)}
                aria-label={`Filter by ${category.name}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <p className="text-neutral-400 text-center">
                No FAQs found for this category.
              </p>
            ) : (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden"
                  id={`faq-${faq.id}`}
                >
                  <button
                    className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(faq.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleFAQ(faq.id);
                      }
                    }}
                    aria-expanded={expandedFAQ === faq.id}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-medium text-lg text-white">
                      {faq.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-neutral-400 transition-transform duration-200 ${
                        expandedFAQ === faq.id ? 'rotate-180' : 'rotate-0'
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`px-5 pb-5 ${expandedFAQ === faq.id ? 'block' : 'hidden'}`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-blue-900 border border-blue-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-white">
              Still have questions?
            </h3>
            <p className="text-neutral-400 mb-4">
              Our support team is here to help you with any questions you might have about CodeCloud.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#features"
                className="inline-flex items-center justify-center bg-neutral-800 border border-blue-500 text-blue-400 px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                Chat With Support
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Support Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;