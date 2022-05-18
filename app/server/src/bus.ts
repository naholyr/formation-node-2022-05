import EventEmitter from "events";
import type { ExposedPost } from "./api-posts";

interface Bus extends EventEmitter {
  emit(event: "new-post", post: ExposedPost): boolean;
}

export const bus: Bus = new EventEmitter();

bus.setMaxListeners(5);
