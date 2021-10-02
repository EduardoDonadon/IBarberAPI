const rootDir = process.env.NODE_ENV === "development" ?
"./src" :
"./build";

const extensionFile = process.env.NODE_ENV === "development" ?
"ts" :
"js";

export default {
  rootDir,
  extensionFile,
}