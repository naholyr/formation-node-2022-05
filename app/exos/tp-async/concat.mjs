import { readFile } from "fs/promises";

const files = ["./1.txt", "./2.txt", "./3.txt"];

// Séquentiel
// const contents = [
//   await readFile("./1.txt", "utf8"), // 2s
//   await readFile("./2.txt", "utf8"), // 1s
//   await readFile("./3.txt", "utf8"), // 3s
// ]; // total 6s + delta
// console.log(contents.join(" "));

// Concurrence avec await
// const readFiles = [
//   readFile("./1.txt", "utf8"),
//   readFile("./2.txt", "utf8"),
//   readFile("./3.txt", "utf8"),
// ]; // delta
// const contents = [
//   await readFiles[0], // 2s
//   await readFiles[1], // 0s (2s déjà écoulées, le fichier est dispo depuis 1s)
//   await readFiles[2], // 1s (2s déjà écoulées, il reste 1s d'attente)
// ]; // total 3s + delta
// console.log(contents.join(" "));

// Concurrence avec Promise.all: Promise.all([ promise1, promise2, ... ]) // Promise<[ result1, result2, ... ]>
// const p1 = readFile("./1.txt", "utf8");
// const p2 = readFile("./2.txt", "utf8");
// const p3 = readFile("./3.txt", "utf8");
// const promiseOfContents = Promise.all([p1, p2, p3]);
// const cont = await promiseOfContents;
// console.log(cont.join(" "));
// // const contents = await Promise.all(files.map((file) => readFile(file, "utf8")));

// Concurrence sans async/await
// const contentPs = files.map((file) => readFile(file, "utf8")); // array of promises
// Promise.all(contentPs) // promise of array
//   .then((contents) => {
//     // array of string
//     return contents.join(" "); // string
//   }) // promise of string
//   .then((content) => {
//     console.log(content);
//   });
// // Declare functions readability
// Promise.all(files.map(readOneFile)).then(concat).then(log);

// Buffers: memory safe
/*
const p1 = readFile("./1.txt"); // Promise<Buffer>
const p2 = readFile("./2.txt"); // Promise<Buffer>
const p3 = readFile("./3.txt"); // Promise<Buffer>
const promiseOfContents = Promise.all([p1, p2, p3]);
const cont = await promiseOfContents;
// [b1, b2, b3]
// [[b1, " "], [b2, " "], [b3, " "]]
// cont.reduce((agg, buffer) => [...agg, buffer, " "], []);
const contentsWithSpaces = cont.flatMap((buffer) => [buffer, Buffer.from(" ")]);
const content = Buffer.concat(contentsWithSpaces);
process.stdout.write(content);
*/
