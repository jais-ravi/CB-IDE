import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languageMap = {
  node: { image: "node:18" },
  python: { image: "python:3.10" },
  java: { image: "openjdk:17" },
  go: { image: "golang:1.20" },
  php: { image: "php:8.2-cli" },
  ruby: { image: "ruby:3.2" },
};

export const spinProjectContainers = async (req, res) => {
  const { userId, projectName, language } = req.body;

  if (!userId || !projectName || !language) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const lang = languageMap[language.toLowerCase()];
  if (!lang) {
    return res.status(400).json({ message: "Unsupported language" });
  }

  const containerName = `${userId}-${projectName}-${language}`;
  const projectPath = path.resolve(__dirname, `../../user-projects/${userId}/${projectName}`);
  let exposePort = false;
  let detectedPort = null;

  try {
    const files = await fs.readdir(projectPath);
    const jsFiles = files.filter(file => file.endsWith(".js"));

    for (const file of jsFiles) {
      const content = await fs.readFile(path.join(projectPath, file), "utf-8");
      const match = content.match(/app\.listen\((\d{2,5})/); // detect app.listen(port)

      if (match && match[1]) {
        detectedPort = parseInt(match[1]);
        exposePort = true;
        break;
      }
    }
  } catch (err) {
    console.warn("Couldn't parse user code:", err.message);
  }

  let dockerCommand = `docker run -dit --rm --name ${containerName} ` +
    `-v "${projectPath}:/app/users/${userId}/${projectName}" ` +
    `-w "/app/users/${userId}/${projectName}" `;

  if (exposePort && detectedPort) {
    dockerCommand += `-p ${detectedPort}:${detectedPort} `;
  }

  dockerCommand += `${lang.image} bash -c "PS1='${userId}@${projectName}# ' bash"`;

  exec(dockerCommand, (err, stdout, stderr) => {
    if (err) {
      console.error("❌ Docker Error:", stderr);
      return res.status(500).json({ message: "Error starting container", error: stderr });
    }

    const containerId = stdout.trim();
    const publicUrl = exposePort ? `http://localhost:${detectedPort}` : null;

    res.status(200).json({
      message: "✅ Container started",
      containerId,
      exposed: !!publicUrl,
      port: detectedPort,
      publicUrl,
    });
  });
};