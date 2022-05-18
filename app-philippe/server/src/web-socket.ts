import io from "socket.io";
import type { Server } from "http";
import { bus } from "./bus";

export const initWebSocket = (httpServer: Server) => {
  const wsServer = new io.Server({
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  bus.on("new-post", (post) => {
    wsServer.on("new-post", post);
  });
  wsServer.attach(httpServer);
  wsServer.on("connection", (socket) => {
    socket.on("je suis connecté", () => {
      socket.emit("ça me fait plaisir", Date.now());
    });
  });
};
