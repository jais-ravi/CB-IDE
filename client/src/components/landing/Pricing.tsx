"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlySavings?: number;
  features: { text: string; available: boolean; highlighted?: boolean }[];
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const plans: Plan[] = [
  {
    id: uuidv4(),
    name: 'Free',
    description: 'Perfect for personal projects and learning.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { text: '30 hours/month of coding time', available: true },
      { text: 'Up to 3 workspaces', available: true },
      { text: 'Standard development environments', available: true },
      { text: '512MB RAM / 1GB disk space', available: true },
      { text: 'Public repositories only', available: true },
      { text: 'Team collaboration features', available: false },
      { text: 'Custom domains', available: false },
    ],
    buttonText: 'Get Started',
    buttonLink: '#features',
  },
  {
    id: uuidv4(),
    name: 'Pro',
    description: 'For professional developers who code regularly.',
    monthlyPrice: 19,
    yearlyPrice: 184,
    yearlySavings: 44,
    features: [
      { text: 'Unlimited coding time', available: true, highlighted: true },
      { text: 'Up to 10 workspaces', available: true },
      { text: 'Advanced development environments', available: true },
      { text: '2GB RAM / 5GB disk space', available: true },
      { text: 'Public & private repositories', available: true },
      { text: 'Collaborate with up to 3 users', available: true },
      { text: '1 custom domain', available: true },
    ],
    buttonText: 'Start Free Trial',
    buttonLink: '#features',
    isPopular: true,
  },
  {
    id: uuidv4(),
    name: 'Team',
    description: 'For teams working together on multiple projects.',
    monthlyPrice: 49,
    yearlyPrice: 470,
    yearlySavings: 118,
    features: [
      { text: 'Unlimited coding time', available: true, highlighted: true },
      { text: 'Unlimited workspaces', available: true, highlighted: true },
      { text: 'Premium development environments', available: true },
      { text: '4GB RAM / 15GB disk space', available: true },
      { text: 'Public & private repositories', available: true },
      { text: 'Collaborate with unlimited users', available: true, highlighted: true },
      { text: 'Multiple custom domains', available: true },
      { text: 'Advanced team management & roles', available: true },
    ],
    buttonText: 'Contact Sales',
    buttonLink: '#features',
  },
];

const enterpriseFeatures: string[] = [
  'Dedicated instances',
  'SSO integration',
  '24/7 priority support',
  'Custom integrations',
];

const faqs: FAQ[] = [
  {
    id: uuidv4(),
    question: 'Can I change plans at any time?',
    answer:
      'Yes, you can upgrade, downgrade, or cancel your plan at any time. When upgrading, you’ll be charged the prorated difference. When downgrading, your new rate begins on the next billing cycle.',
  },
  {
    id: uuidv4(),
    question: 'Do you offer educational discounts?',
    answer:
      'Yes! We offer special discounts for students, teachers, and educational institutions. Contact our support team with your educational email address for details.',
  },
  {
    id: uuidv4(),
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and invoicing for annual Enterprise plans.',
  },
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that&apos;s right for you and start building in the cloud today.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`font-medium ${isYearly ? 'text-gray-400' : 'text-blue-400'}`}>
              Monthly
            </span>
            <div className="relative mx-4 w-12 h-6 bg-gray-700 rounded-full">
              <input
                type="checkbox"
                id="billing-toggle"
                className="sr-only"
                checked={isYearly}
                onChange={toggleBilling}
                aria-label="Toggle billing cycle"
              />
              <span
                className={`absolute left-1 top-1 w-4 h-4 bg-blue-500 rounded-full transition-transform duration-200 ease-in-out ${
                  isYearly ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></span>
            </div>
            <span className={`font-medium ${isYearly ? 'text-blue-400' : 'text-gray-400'}`}>
              Yearly{' '}
              <span className="text-green-400 text-xs font-medium ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex-1 bg-gray-800 border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 ${
                plan.isPopular
                  ? 'border-2 border-blue-500 relative md:scale-100 md:hover:scale-105 z-10'
                  : 'border-gray-700'
              } hover:-translate-y-2 md:hover:-translate-y-0`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-6 h-12">{plan.description}</p>
                <div className="mb-6">
                  <div className={`${isYearly ? 'hidden' : 'block'}`}>
                    <span className="text-4xl font-bold text-white">${plan.monthlyPrice}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className={`${isYearly ? 'block' : 'hidden'}`}>
                    <span className="text-4xl font-bold text-white">${plan.yearlyPrice}</span>
                    <span className="text-gray-400">/year</span>
                    {plan.yearlySavings && (
                      <span className="text-green-400 text-sm font-medium ml-2">
                        Save ${plan.yearlySavings}
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={plan.buttonLink}
                  className={`block w-full py-3 px-4 text-center rounded-lg font-medium transition-colors ${
                    plan.isPopular
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-800 border border-blue-500 text-blue-400 hover:bg-gray-700'
                  }`}
                >
                  {plan.buttonText}
                </Link>
                <div className="pt-6 mt-6 border-t border-gray-700">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 mt-0.5 mr-2 flex-shrink-0 ${
                            feature.available ? 'text-green-400' : 'text-gray-500'
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d={
                              feature.available
                                ? 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                : 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            }
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className={`${
                            feature.available ? 'text-gray-300' : 'text-gray-500'
                          }`}
                          dangerouslySetInnerHTML={{
                            __html: feature.highlighted
                              ? feature.text.replace(/(Unlimited|\d+\s\w+)/g, '<strong class="text-white">$1</strong>')
                              : feature.text,
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-3 text-white">Enterprise Solution</h3>
              <p className="text-gray-400 mb-4">
                Need a custom solution for your large team or organization? We offer
                enterprise-grade features, dedicated support, and custom integrations.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-400 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 text-center">
              <Link
                href="#features"
                className="inline-block py-3 px-8 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800"
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={expandedFAQ === faq.id}
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
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
                  className={`px-4 pb-4 ${expandedFAQ === faq.id ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="#features"
              className="text-blue-400 font-medium hover:underline"
            >
              View all FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;