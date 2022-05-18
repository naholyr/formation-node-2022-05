import io from "socket.io-client";

const uri = process.env.REACT_APP_WS_URI;
if (!uri) throw new Error("REACT_APP_WS_URI is not defined");

export const socket = io(uri, {
  transports: ["websocket"],
});

// Sample test
socket.emit("je suis connecté");
socket.on("ça me fait plaisir", (timestamp) => {
  console.log(timestamp);
});

// Mini-chat in console
(window as any).chat = (text: string) => socket.emit("msg", text);
(window as any).nick = (text: string) => socket.emit("nick", text);
socket.on("othermsg", (text: string, username: string) => {
  console.log(`${username}: ${text}`);
});
