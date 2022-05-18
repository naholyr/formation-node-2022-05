import io from "socket.io-client";

const uri = process.env.REACT_APP_WS_URI;

if (!uri) throw new Error("error");

export const socket = io(uri);

socket.emit("je suis connecté");

socket.on("ça me fait plaisir", (date) => {
  console.log(date);
});
