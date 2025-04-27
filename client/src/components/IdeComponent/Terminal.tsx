"use client";

import React, { useEffect, useRef } from "react";
import "@xterm/xterm/css/xterm.css";
import socket from "@/socket";

// Pass containerName from parent component
const Terminal = ({ containerName }: { containerName: string }) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let term: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fitAddon: any;

    const loadTerminal = async () => {
      const { Terminal: XTerminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");

      term = new XTerminal({
        scrollback: 1000,
        cursorBlink: true,
        theme: {
          background: "#1e2021",
          foreground: "#d0d0d0",
          cursor: "#ffffff",
        },
      });

      fitAddon = new FitAddon();
      term.loadAddon(fitAddon);

      if (terminalRef.current) {
        term.open(terminalRef.current);
        fitAddon.fit();
      }

      // 🔌 Notify backend to connect this terminal to the container
      socket.emit("terminal:start", { containerName });

      // ⌨️ Send input to backend
      term.onData((data: string) => {
        socket.emit("terminal:write", data);
      });

      // 🖥️ Receive output from backend
      socket.on("terminal:data", (data: string) => {
        term.write(data);
      });

      // 🧩 Resize terminal on container resize
      const resizeObserver = new ResizeObserver(() => {
        fitAddon?.fit();
      });

      if (terminalRef.current) {
        resizeObserver.observe(terminalRef.current);
      }

      return () => {
        term?.dispose();
        socket.off("terminal:data");
        resizeObserver.disconnect();
      };
    };

    const cleanup = loadTerminal();

    return () => {
      cleanup.then((cleanupFn) => cleanupFn && cleanupFn());
    };
  }, [containerName]); // 👈 Watch for container changes

  return (
    <div
      ref={terminalRef}
      id="terminal"
      className="w-full h-full overflow-y-auto"
    />
  );
};

export default Terminal;