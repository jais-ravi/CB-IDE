"use client";
import { Terminal as XTerminal } from "@xterm/xterm";
import React, { useEffect, useRef } from "react";
import "@xterm/xterm/css/xterm.css"; // Required for styling

const Terminal = () => {
    const terminalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!terminalRef.current) return;

        const term = new XTerminal({
            rows:100
        });
        term.open(terminalRef.current);

        term.onData((data) => {
            console.log(data);
        });

        return () => {
            term.dispose(); // Cleanup when component unmounts
        };
    }, []);

    return <div ref={terminalRef} id="terminal"  />;
};

export default Terminal;