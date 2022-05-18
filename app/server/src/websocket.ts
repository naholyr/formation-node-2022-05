import io from "socket.io";
import type { Server } from "http";
import { bus } from "./bus";

export const initWebsocket = (httpServer: Server) => {
  const wsServer = new io.Server({
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    serveClient: false,
  });

  bus.on("new-post", (post) => {
    wsServer.emit("new-post", post);
  });

  wsServer.attach(httpServer);

  wsServer.on("connection", (socket) => {
    /** Send message to socket(s)
     *
     * Note: https://socket.io/docs/v4/emit-cheatsheet/#reserved-events
     *
     * socket.emit('name', ...args) => send to connected socket
     * wsServer.emit('name', ...args) => send to all connected sockets
     * socket.broadcast.emit('name', ...args) => send to all connected sockets except the current socket
     * socket.join('room') / socket.leave('room') => put the socket in a room
     * wsServer.to('room').emit('name', ...args) => send to all connected sockets in the room
     * socket.to('room').emit('name', ...args) => send to all connected sockets in the room except the current socket
     *
     * socket.volatile.emit('name', ...args) => send to connected socket without guarantee of delivery
     * socket.volatile.broadcast.emit('name', ...args) => send to all connected sockets without guarantee of delivery
     * socket.volatile.to('room').emit('name', ...args) => send to all connected sockets in the room except the current socket, and the socket will not be stored in the room
     */

    // Sample test
    socket.on("je suis connecté", () => {
      socket.emit("ça me fait plaisir", {
        timestamp: Date.now(),
        socketId: socket.id,
      });
    });

    socket.on("disconnect", () => {
      // cleanup
    });

    // Mini-chat in console
    let username: string | null = null;
    socket.on("nick", (nickname: string) => {
      username = nickname;
    });
    socket.on("msg", (text: string) => {
      if (!username) {
        socket.emit("warning", "You must set a nickname first");
        return;
      }
      socket.broadcast.emit("othermsg", text, username);
    });

    /** * /
    // Memory leak sample
    const rooms = ["room1", "room2", "room3"];
    // Bouh caca
    rooms.forEach((room) => {
      socket.on("coucou", () => {
        console.log(room);
      });
    });
    // OK
    socket.on("coucou", () => {
      rooms.forEach((room) => {
        console.log(room);
      });
    });
    /** */
  });
};
