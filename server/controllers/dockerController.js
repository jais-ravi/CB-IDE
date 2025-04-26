import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🧠 Supported languages and their base Docker image
const languageMap = {
  node: {
    image: "node:18",
  },
  python: {
    image: "python:3.10",
  },
  java: {
    image: "openjdk:17",
  },
  go: {
    image: "golang:1.20",
  },
  php: {
    image: "php:8.2-cli",
  },
  ruby: {
    image: "ruby:3.2",
  },
};

export const spinProjectContainers = (req, res) => {
  const { userId, projectName, language } = req.body;

  if (!userId || !projectName || !language) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const lang = languageMap[language.toLowerCase()];
  if (!lang) {
    return res.status(400).json({ message: "Unsupported language" });
  }

  const containerName = `${userId}-${projectName}-${language}`;
  const projectPath = path.resolve(
    __dirname,
    `../../user-projects/${userId}/${projectName}`
  );
  console.log(projectPath)
  const dockerCommand = `
  docker run -dit --rm --name ${containerName} \
  -v ${projectPath}:/app/users/${userId}/${projectName} \
  -w /app/users/${userId}/${projectName} \
  ${lang.image} bash -c "PS1='${userId}@${projectName}# ' bash"
`;

  exec(dockerCommand, (err, stdout, stderr) => {
    if (err) {
      console.error("❌ Error starting container:", stderr);
      return res
        .status(500)
        .json({ message: "Error starting container", error: stderr });
    }

    return res.status(200).json({
      message: "✅ Container started successfully",
      containerId: stdout.trim(),
    });
  });
};
