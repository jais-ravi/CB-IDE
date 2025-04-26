import fs from "fs/promises";
import path from "path";
import { BASE_PROJECT_PATH } from "../../config.js";

export default function handleFileSave(socket) {
  console.log("base path", BASE_PROJECT_PATH);
  socket.on("file:change", async ({ path: filePath, content, project, userId }) => {
    try {
      // Ensure filePath is relative inside project dir
      const cleanFilePath = filePath.replace(new RegExp(`^${project}/?`), ""); // removes "project/" if it exists

      const fullPath = path.join(BASE_PROJECT_PATH, userId, project, cleanFilePath);
      const dirPath = path.dirname(fullPath);

      console.log(`Saving file at: ${fullPath}`);
      console.log(`Directory path: ${dirPath}`);

      // Check if the directory exists
      try {
        await fs.stat(dirPath);
      } catch (err) {
        console.error("❌ Directory doesn't exist:", dirPath);
        return;
      }

      await fs.writeFile(fullPath, content);
      console.log(`✅ File ${filePath} saved successfully`);
    } catch (err) {
      console.error("❌ Error saving file:", err);
    }
  });
}