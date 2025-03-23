"use client";
import { GlobeDemo } from "@/components/Globe";
import NavBar from "@/components/Header/IDENavBar";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";


const Page = () => {
  return (
    <div className="w-full h-screen bg-black absolute">
      {/* Navbar */}
      <NavBar />
      {/* Sparkles in the background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Globe in the foreground */}
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <GlobeDemo />
      </div>
    </div>
  );
};

export default Page;