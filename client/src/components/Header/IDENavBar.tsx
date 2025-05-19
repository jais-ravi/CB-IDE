import React from "react";
import { Card } from "../ui/card";
import RunButton from "../IdeComponent/RunButton";

const IDENavBar = () => {
  return (

      <Card className="w-full h-12 p-2 flex justify-between items-center rounded-md">
        <div className="text-3xl font-bold">CB-IDE</div>
        <RunButton/>
      </Card>

  );
};

export default IDENavBar;
