import React from "react";
import { Card } from "../ui/card";
import { ModeToggle } from "./ModeToggle";

const IDENavBar = () => {
  return (

      <Card className="w-full h-12 p-2 flex justify-between items-center rounded-md">
        <div className="text-3xl font-bold">CB-IDE</div>
        <ModeToggle />
      </Card>

  );
};

export default IDENavBar;
