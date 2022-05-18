import io from "socket.io";
import type { Server } from "http";

export const initWebsocket = (httpServer: Server) => {
  const wsServer = new io.Server({
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    serveClient: false,
  });

  wsServer.attach(httpServer);

  wsServer.on("connection", (socket) => {
    socket.on("je suis connecté", () => {
      socket.emit("ça me fait plaisir", {
        timestamp: Date.now(),
        socketId: socket.id,
      });
    });
  });
};
