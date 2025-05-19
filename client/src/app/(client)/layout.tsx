"use client";

import React from "react";
import Navbar from "@/components/Header/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex flex-col gap-3 p-2 ">
      {/* Navbar Floating */}
      <Navbar />
      {/* Main Content Floating */}
      <main className="w-full h-full border text-card-foreground rounded-xl  overflow-hidden ">
        {children}
      </main>
    </div>
  );
}
