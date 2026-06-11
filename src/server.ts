import app from "./app";
import { PORT } from "./config";
import { createServer } from "http";
import { Server } from "socket.io";

import events from "./events";
import setup from "./setup";

// Create HTTP server from express app
const httpServer = createServer(app);

// Socket.IO setup
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

events(io);
setup();

// Start server
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});