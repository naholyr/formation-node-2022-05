import "dotenv/config";
import { app } from "./src/app";
import { initWebsocket } from "./src/websocket";

const httpServer = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready http://localhost:${process.env.PORT}`);
});

initWebsocket(httpServer);
