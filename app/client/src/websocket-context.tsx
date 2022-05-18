import { createContext } from "react";
import type { Socket } from "socket.io-client";

export const WebsocketContext = createContext<Socket | null>(null);
