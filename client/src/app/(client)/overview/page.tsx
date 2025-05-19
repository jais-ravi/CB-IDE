"use client";

import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import React from "react";


type Project = {
  id: string;
  title: string;
  description: string;
  tech: string;
  lastUpdated: string;
};

const Hero = () => {
  const { user } = useAuth();

  const projects: Project[] = [
    {
      id: "el-akg6007p",
      title: "E-Commerce API",
      description:
        "RESTful API for an online store with product, user, and order management.",
      tech: "Node.js",
      lastUpdated: "2 days ago",
    },
    {
      id: "el-4607waww",
      title: "Task Manager",
      description:
        "A collaborative task management application with real-time updates.",
      tech: "Node.js",
      lastUpdated: "1 week ago",
    },
    {
      id: "el-71n35by0",
      title: "Weather Dashboard",
      description:
        "Real-time weather monitoring app with forecast and historical data visualization.",
      tech: "Node.js",
      lastUpdated: "3 weeks ago",
    },
    {
      id: "el-lsqwhvw9",
      title: "Chat Application",
      description:
        "Real-time messaging platform with group chat and private messaging.",
      tech: "Node.js",
      lastUpdated: "1 month ago",
    },
    {
      id: "el-10n95jcr",
      title: "Blog Platform",
      description:
        "Content management system with markdown support and analytics.",
      tech: "Node.js",
      lastUpdated: "2 months ago",
    },
    {
      id: "el-hqji4xdb",
      title: "File Sharing Service",
      description:
        "Secure file sharing application with access control and expiring links.",
      tech: "Node.js",
      lastUpdated: "3 months ago",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="mt-20 flex flex-wrap justify-between items-center gap-y-4">
        <div>
          <h1 className="text-2xl font-bold capitalize">
            Welcome, {user?.name || "Guest"}
          </h1>
          <p className="text-muted-foreground">Here&apos;s what you&apos;ve been working on.</p>
        </div>
        <Button onClick={() => console.log("Trigger project creation")}>
          + Create New Project
        </Button>
      </div>

      {/* Projects Grid */}
      {projects.length === 0 ? (
        <p className="mt-10 text-gray-500 text-center">
          No projects found. Start by creating a new one!
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;