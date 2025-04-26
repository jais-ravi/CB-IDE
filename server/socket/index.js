import { Server as SocketServer } from "socket.io";
import handleTerminalEvents from "../terminal/terminalHandler.js";
import process from "node:process";
import handleFileSave from "./handlers/fileSaveHandler.js";

let io;

const setupSocket = (server) => {
  io = new SocketServer(server, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:3000",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(`⚡ Socket connected: ${socket.id}`);
    
    // Handle events for terminal and file save
    handleTerminalEvents(io, socket); // Terminal event handling
    handleFileSave(socket);           // File save event handling

    // You can add more event handlers here in the future
  });

  return io; // Important to return io instance to allow further use
};

export default setupSocket;
export { io };