import { createContext } from "react";
import type { Socket } from "socket.io-client";

export const WebSocketContext = createContext<Socket | null>(null);
