import React from "react";
import { Card } from "../ui/card";
import { NavUser } from "../ui/nav-user";
import { useAuth } from "@/context/AuthContext";

const IDENavBar = () => {
  const { user } = useAuth();

  const loginUser = {
    name: user?.name || "User",
    email: user?.email || "user@example.com",
    avatar: "https://via.placeholder.com/150",
  };

  return (
    <Card className="w-full h-12 p-2 flex justify-between items-center rounded-xl shadow">
      <div className="text-xl font-semibold ">Cloud Code</div>
      <NavUser user={loginUser} />
    </Card>
  );
};

export default IDENavBar;