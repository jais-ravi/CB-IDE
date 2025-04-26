import chokidar from "chokidar";
import path from "path";
import fs from "fs";
import { BASE_PROJECT_PATH } from "../config.js";



const setupFileWatcher = (io) => {
  if (!fs.existsSync(BASE_PROJECT_PATH)) {
    console.warn("⚠️ user-projects folder not found:", BASE_PROJECT_PATH);
    return;
  }


  const watcher = chokidar.watch(BASE_PROJECT_PATH, {
    // eslint-disable-next-line no-useless-escape
    ignored: /(^|[\/\\])\../, // Ignore dotfiles
    persistent: true,
    ignoreInitial: true,
    depth: 10,
  });

  watcher
    .on("add", (filePath) => emitEvent("add", filePath))
    .on("change", (filePath) => emitEvent("change", filePath))
    .on("unlink", (filePath) => emitEvent("unlink", filePath))
    .on("addDir", (dirPath) => emitEvent("addDir", dirPath))
    .on("unlinkDir", (dirPath) => emitEvent("unlinkDir", dirPath))
    .on("error", (error) => console.error("❌ File watcher error:", error));

  function emitEvent(event, filePath) {
    const relativePath = path.relative(BASE_PROJECT_PATH, filePath);
    io.emit("file:refresh", { event, path: relativePath });
    console.log(`📂 File ${event}: ${relativePath}`);
  }

  console.log(`🧠 File watcher active on ${BASE_PROJECT_PATH}`);
};

export default setupFileWatcher;