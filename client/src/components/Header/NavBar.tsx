import React from "react";
import { Card } from "../ui/card";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <div className="p-1 ">
      <Card className="w-full h-12 p-2 flex justify-between items-center rounded-md">
        <div className="text-3xl font-bold">CB-IDE</div>
        <ModeToggle />
      </Card>
    </div>
  );
};

export default NavBar;
