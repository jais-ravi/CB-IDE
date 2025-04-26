// import os from "os";
import pty from "node-pty";
import process from "node:process";

const setupTerminal = (containerName) => {
  const shell = "/bin/bash"; // or /bin/sh if bash not available in container

  const ptyProcess = pty.spawn("docker", ["exec", "-it", containerName, shell], {
    name: "xterm-color",
    cols: 80,
    rows: 30,
    cwd: process.cwd(),
    env: process.env,
  });

  return ptyProcess;
};

const handleTerminalEvents = (io, socket) => {
  let ptyProcess;

  socket.on("terminal:start", ({ containerName }) => {
    ptyProcess = setupTerminal(containerName);

    // Send data back to frontend
    ptyProcess.onData((data) => {
      socket.emit("terminal:data", data);
    });

    // Receive input from frontend
    socket.on("terminal:write", (data) => {
      ptyProcess.write(data);
    });

    socket.on("disconnect", () => {
      ptyProcess.kill();
    });
  });
};

export default handleTerminalEvents;