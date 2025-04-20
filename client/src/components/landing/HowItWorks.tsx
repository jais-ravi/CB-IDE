'use client';

import React, { useState, useEffect } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  content: {
    description: string;
    features: string[];
  };
  image: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Sign Up',
    description: 'Create an account or sign in with GitHub/GitLab in seconds.',
    content: {
      description:
        'Getting started with CodeCloud is easy. Create an account using your email or sign in with your GitHub or GitLab account for a seamless integration experience.',
      features: [
        'No credit card required for free accounts',
        'OAuth 2.0 integration with major providers',
        'Secure, encrypted authentication',
      ],
    },
    image: (
      <div className="bg-neutral-900 p-6 rounded-lg">
        <div className="w-full h-64 bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col overflow-hidden">
          <div className="bg-neutral-900 px-4 py-2 text-white text-sm border-b border-neutral-700">
            Sign In to CodeCloud
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center items-center">
            <div className="w-full max-w-xs">
              <div className="mb-4">
                <div className="text-neutral-300 mb-1 text-sm">Email</div>
                <div className="h-10 w-full bg-neutral-700 rounded"></div>
              </div>
              <div className="mb-6">
                <div className="text-neutral-300 mb-1 text-sm">Password</div>
                <div className="h-10 w-full bg-neutral-700 rounded"></div>
              </div>
              <div className="mb-4">
                <div className="h-10 w-full bg-blue-600 rounded text-white flex items-center justify-center">
                  Sign In
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-10 w-full flex items-center justify-center border border-neutral-600 rounded text-sm text-neutral-300">
                  <div className="w-5 h-5 mr-2 bg-neutral-600 rounded-sm"></div>
                  Continue with GitHub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 2,
    title: 'Workspace Setup',
    description: 'Create a new project or import an existing repository.',
    content: {
      description:
        'Create a new workspace or import an existing project. Our smart setup detects your project type and configures the environment accordingly.',
      features: [
        'Start from templates for popular frameworks',
        'Import directly from Git repositories',
        'Automatic dependency installation',
      ],
    },
    image: (
      <div className="bg-neutral-900 p-6 rounded-lg">
        <div className="w-full h-64 bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col overflow-hidden">
          <div className="bg-neutral-900 px-4 py-2 text-white text-sm border-b border-neutral-700">
            New Workspace
          </div>
          <div className="p-6 flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800 flex flex-col items-center justify-center">
                <div className="w-10 h-10 bg-blue-900 rounded-full mb-2"></div>
                <div className="text-sm text-center text-neutral-300">Blank Project</div>
              </div>
              <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800 flex flex-col items-center justify-center">
                <div className="w-10 h-10 bg-green-900 rounded-full mb-2"></div>
                <div className="text-sm text-center text-neutral-300">From Template</div>
              </div>
              <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800 flex flex-col items-center justify-center">
                <div className="w-10 h-10 bg-yellow-900 rounded-full mb-2"></div>
                <div className="text-sm text-center text-neutral-300">From GitHub</div>
              </div>
              <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800 flex flex-col items-center justify-center">
                <div className="w-10 h-10 bg-purple-900 rounded-full mb-2"></div>
                <div className="text-sm text-center text-neutral-300">From GitLab</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    title: 'Choose Language',
    description: 'Select from dozens of programming languages and frameworks.',
    content: {
      description:
        'Choose from over 30+ programming languages and frameworks. Each environment is pre-configured with all the tools and extensions you need.',
      features: [
        'JavaScript, Python, Ruby, Go, PHP and more',
        'React, Vue, Angular, Next.js environments',
        'Language-specific tooling and debugging',
      ],
    },
    image: (
      <div className="bg-neutral-900 p-6 rounded-lg">
        <div className="w-full h-64 bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col overflow-hidden">
          <div className="bg-neutral-900 px-4 py-2 text-white text-sm border-b border-neutral-700">
            Choose Environment
          </div>
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: 'JS', label: 'JavaScript' },
                { icon: 'Py', label: 'Python' },
                { icon: 'Rb', label: 'Ruby' },
                { icon: 'Go', label: 'Golang' },
                { icon: 'Ts', label: 'TypeScript' },
                { icon: 'PHP', label: 'PHP' },
                { icon: 'Rx', label: 'React' },
                { icon: 'Vx', label: 'Vue' },
                { icon: '...', label: 'More' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-2 border border-neutral-700 rounded-lg flex flex-col items-center justify-center bg-neutral-800"
                >
                  <div className="text-2xl mb-1 text-blue-400">{item.icon}</div>
                  <div className="text-xs text-neutral-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 4,
    title: 'Collaborate / Deploy',
    description: 'Work with your team and deploy with a single click.',
    content: {
      description:
        'Work together with your team in real-time. See each other’s cursors and changes as they happen. Deploy to production with one click.',
      features: [
        'Real-time collaborative editing',
        'Built-in live chat and comments',
        'One-click deployment to Vercel, Netlify, etc.',
      ],
    },
    image: (
      <div className="bg-neutral-900 p-6 rounded-lg">
        <div className="w-full h-64 bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col overflow-hidden">
          <div className="bg-neutral-900 px-4 py-2 text-white text-sm flex items-center border-b border-neutral-700">
            <span>Project: my-app</span>
            <span className="ml-auto text-xs bg-green-700 px-2 py-0.5 rounded">
              2 collaborators online
            </span>
          </div>
          <div className="flex-1 grid grid-cols-12 h-full">
            <div className="col-span-3 border-r border-neutral-700 p-2">
              <div className="w-full h-5 bg-neutral-700 rounded mb-2"></div>
              <div className="w-3/4 h-5 bg-neutral-700 rounded mb-2"></div>
              <div className="w-5/6 h-5 bg-neutral-700 rounded"></div>
            </div>
            <div className="col-span-9 p-2">
              <div className="w-full h-full bg-neutral-700 rounded flex flex-col">
                <div className="p-2">
                  <div className="w-full h-3 bg-neutral-600 rounded mb-2"></div>
                  <div className="w-3/4 h-3 bg-neutral-600 rounded mb-2"></div>
                  <div className="w-5/6 h-3 bg-neutral-600 rounded mb-2"></div>
                  <div className="w-2/3 h-3 bg-neutral-600 rounded"></div>
                </div>
                <div className="mt-auto mx-2 mb-2 bg-blue-900 p-2 rounded-md text-xs">
                  <div className="font-bold text-blue-300">Alex (Collaborator):</div>
                  <div className="text-neutral-300">I updated the API endpoint as discussed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 5,
    title: 'Share or Publish',
    description: 'Share your work or publish to your custom domain.',
    content: {
      description:
        'Share your project with others through a public URL or connect your custom domain for professional hosting of your application.',
      features: [
        'Public and private sharing options',
        'Custom domain support with SSL',
        'Embed your projects in other websites',
      ],
    },
    image: (
      <div className="bg-neutral-900 p-6 rounded-lg">
        <div className="w-full h-64 bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col overflow-hidden">
          <div className="bg-neutral-900 px-4 py-2 text-white text-sm border-b border-neutral-700">
            Share Your Project
          </div>
          <div className="p-6 flex-1">
            <div className="mb-4">
              <div className="text-neutral-300 mb-1 text-sm">Project URL</div>
              <div className="h-10 w-full bg-neutral-700 rounded flex items-center px-3">
                <span className="text-xs text-neutral-300">
                  https://codecloud.dev/user/project-name
                </span>
                <button className="ml-auto text-xs text-blue-400">Copy</button>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-neutral-300 mb-1 text-sm">Privacy</div>
              <div className="h-10 w-full border border-neutral-700 rounded flex items-center px-3 bg-neutral-800">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-xs text-neutral-300">
                  Public - Anyone with the link can view
                </span>
              </div>
            </div>
            <div>
              <div className="text-neutral-300 mb-1 text-sm">Custom Domain</div>
              <div className="h-10 w-full border border-neutral-700 rounded flex items-center px-3 bg-neutral-800">
                <span className="text-xs text-neutral-300">Set up custom domain</span>
                <button className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const HowItWorks: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Optional: Auto-rotate steps every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev % steps.length) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const currentStepData = steps.find((step) => step.number === currentStep);

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Get up and running with your development environment in minutes, not hours.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Horizontal line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-blue-800 z-0"></div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="mb-10 md:mb-0 md:w-1/5 flex flex-col items-center text-center cursor-pointer"
                onClick={() => handleStepClick(step.number)}
              >
                <div
                  className={`w-12 h-12 rounded-full text-white flex items-center justify-center text-xl font-bold mb-4 ${
                    currentStep === step.number ? 'bg-blue-500' : 'bg-blue-600'
                  }`}
                >
                  {step.number}
                </div>
                <div className="bg-neutral-800 rounded-lg p-6 shadow-md border border-neutral-700 w-full">
                  <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed View */}
        <div className="mt-16 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="text-blue-400 font-semibold mb-2">
                Step {currentStep}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{currentStepData?.title}</h3>
              <p className="text-neutral-400 mb-6">{currentStepData?.content.description}</p>
              <ul className="space-y-3">
                {currentStepData?.content.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">{currentStepData?.image}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;