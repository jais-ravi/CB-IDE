"use client"
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import Terminal from "@/components/Terminal";
<<<<<<< HEAD
import IDENavBar from "@/components/Header/IDENavBar";
=======
>>>>>>> f7c3cf0 (landing page done)

const page = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-1 p-2">
      <IDENavBar />
      <div className=" w-full h-full border text-card-foreground rounded-md overflow-hidden">
        <ResizablePanelGroup direction="horizontal" >
          <ResizablePanel defaultSize={15} minSize={5}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={85}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={75}>
                <div className="h-full w-full">
                  <CodeEditor />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={15} minSize={0}>
                <div className="h-full w-full ">
                  <Terminal />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default page;
