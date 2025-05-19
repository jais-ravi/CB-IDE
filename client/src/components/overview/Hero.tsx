"use client";

import React from 'react'; 

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string;
  lastUpdated: string;
}

const projects: Project[] = [
  {
    id: 'el-akg6007p',
    title: 'E-Commerce API',
    description: 'RESTful API for an online store with product, user, and order management.',
    tech: 'Node.js',
    lastUpdated: '2 days ago',
  },
  {
    id: 'el-4607waww',
    title: 'Task Manager',
    description: 'A collaborative task management application with real-time updates.',
    tech: 'Node.js',
    lastUpdated: '1 week ago',
  },
  {
    id: 'el-71n35by0',
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring app with forecast and historical data visualization.',
    tech: 'Node.js',
    lastUpdated: '3 weeks ago',
  },
  {
    id: 'el-lsqwhvw9',
    title: 'Chat Application',
    description: 'Real-time messaging platform with group chat and private messaging.',
    tech: 'Node.js',
    lastUpdated: '1 month ago',
  },
  {
    id: 'el-10n95jcr',
    title: 'Blog Platform',
    description: 'Content management system with markdown support and analytics.',
    tech: 'Node.js',
    lastUpdated: '2 months ago',
  },
  {
    id: 'el-hqji4xdb',
    title: 'File Sharing Service',
    description: 'Secure file sharing application with access control and expiring links.',
    tech: 'Node.js',
    lastUpdated: '3 months ago',
  },
];

const Hero: React.FC = () => {
  const handleCreateProject = () => {
    console.log('Create New Project clicked');
    // Add your create project logic here
  };

  return (
    <section id="projects" className=" bg-black py-6 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto" id="el-mtbzdogn">
        {/* Greeting and header section */}
        <div className="mb-8" id="el-pf72mlm6">
          <h1 className="text-2xl font-bold text-gray-100 mb-2" id="el-1x2776eg">
            Welcome, Santosh Kumar.
          </h1>
          <p className="text-gray-400" id="el-68bpm21b">
            Here's what you've been working on.
          </p>
        </div>

        {/* Projects section with header and create button */}
        <div className="flex justify-between items-center mb-6" id="el-v1q88yub">
          <h2 className="text-xl font-semibold text-gray-100" id="el-02kj8cbi">
            Your Projects
          </h2>
          <button
            id="createProjectBtn"
            onClick={handleCreateProject}
            className="flex items-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              id="el-b4cgsn52"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
                id="el-wve6emaf"
              />
            </svg>
            Create New Project
          </button>
        </div>

        {/* Project cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="el-dxqzpcqc"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition duration-150 ease-in-out"
              id={project.id}
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">
                    {project.tech}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">
                    Updated {project.lastUpdated}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;








