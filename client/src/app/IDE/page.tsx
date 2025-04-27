"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import Terminal from "@/components/IdeComponent/Terminal";
import IDENavBar from "@/components/Header/IDENavBar";
import FileTree from "@/components/IdeComponent/FileTree";
import axios from "axios";
import socket from "@/socket";
import debounce from "lodash.debounce";
import { BACKEND_URL } from "@/lib/config";


const getLanguageFromExtension = (filename: string | null): string => {
  if (!filename) return "text";
  const ext = filename.split(".").pop()?.toLowerCase();
  const map: Record<string, string> = {
    js: "javascript",
    jsx: "javascript",
    ts: "typescript",
    tsx: "typescript",
    py: "python",
    java: "java",
    c: "c_cpp",
    cpp: "c_cpp",
    html: "html",
    css: "css",
    json: "json",
    md: "markdown",
  };
  return map[ext || ""] || "text";
};

const Page = () => {
  const project = "my-node-appp";
  const userId = "user123";
  const container = "user123-my-node-appp-node";
  const [fileTree, setFileTree] = useState<Record<string, any>>({});
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);

  const getFileTree = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/files`, {
        params: { userId, project, container },
      });
      setFileTree(response.data);
    } catch (err) {
      console.error("Failed to fetch file tree:", err);
    }
  }, [userId, project, container]);

  const fetchFileContent = useCallback(
    async (path: string) => {
      try {

        console.log("Fetching file with path:",path , project, container, userId);
        const res = await axios.get(`${BACKEND_URL}/files/content`, {
          params: { path, project, container, userId },
        });
        setCode(res.data.content);
      } catch (err) {
        console.error("Failed to load file:", err);
        setCode("// Error loading file");
      }
    },
    [userId, project, container]
  );

  useEffect(() => {
    getFileTree();
  }, [getFileTree]);

  useEffect(() => {
    socket.on("file:refresh", getFileTree);
    return () => {
      socket.off("file:refresh", getFileTree);
    };
  }, [getFileTree]);

  useEffect(() => {
    if (selectedFile) fetchFileContent(selectedFile);
  }, [selectedFile, fetchFileContent]);

  const debouncedSocketSave = useRef(
    debounce((path: string, content: string) => {
      if (!path || !content) return;
      socket.emit("file:change", { path, content, project, container, userId });
      console.log("✅ Auto-saved:", path);
    }, 1500)
  ).current;

  useEffect(() => {
    if (selectedFile && code !== null) {
      debouncedSocketSave(selectedFile, code);
    }
  }, [code, selectedFile, debouncedSocketSave]);



  return (
    <div className="h-screen w-screen flex flex-col gap-1 p-2 ">
      <IDENavBar />
      <div className="w-full h-full border text-card-foreground rounded-xl bg-[#1e2021] overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={15} minSize={5}>
            <div className="h-full w-full overflow-y-auto p-2  ">
              <FileTree tree={fileTree} onSelect={setSelectedFile} />
            </div>
          </ResizablePanel>
          <ResizableHandle  />
          <ResizablePanel defaultSize={85}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={75}>
                <div className="h-full w-full">
                  {selectedFile && (
                    <p className="text-sm text-muted-foreground mb-1 pl-2">
                      {selectedFile.replaceAll("/", " > ")}
                    </p>
                  )}
                  <CodeEditor
                    code={code || ""}
                    setCode={setCode}
                    mode={getLanguageFromExtension(selectedFile)}
                  />
                </div>
              </ResizablePanel>
              <ResizableHandle  />
              <ResizablePanel defaultSize={25} minSize={10}>
                <div className="h-full w-full">
                  <Terminal containerName={container} />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Page;
