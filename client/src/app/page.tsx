"use client";
import NavBar from "@/components/Header/NavBar";
import { useAuth } from "@/context/AuthContext";
import React from "react";

const Page = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <div>
        <NavBar />
      </div>
      {user?.email}
      <p>{user?.id}</p>

      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Page;
