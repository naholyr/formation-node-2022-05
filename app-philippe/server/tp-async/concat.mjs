import { readFile } from "fs/promises";

console.log(await readFile("./1.txt", "utf8"));
