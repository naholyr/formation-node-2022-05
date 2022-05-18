import "dotenv/config";
import { app } from "./src/app";
import { initWebsocket } from "./src/websocket";
import cluster from "cluster";
import { cpus } from "os";

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  const numCPUs = cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Fork ${process.pid} is running`);

  // Code from index.ts: start server
  const httpServer = app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server ready http://localhost:${process.env.PORT}`);
  });

  initWebsocket(httpServer);
}
