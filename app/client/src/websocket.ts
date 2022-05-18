import io from "socket.io-client";

const uri = process.env.REACT_APP_WS_URI;
if (!uri) throw new Error("REACT_APP_WS_URI is not defined");

const socket = io(uri, {
  transports: ["websocket"],
});

socket.emit("je suis connecté");

socket.on("ça me fait plaisir", (timestamp) => {
  console.log(timestamp);
});
