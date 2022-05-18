import { app } from "./app";
import { initWebSocket } from "./web-socket";

const httpServer = app.listen(process.env.PORT, () => {
  console.log("Server ready ");
});

initWebSocket(httpServer);
