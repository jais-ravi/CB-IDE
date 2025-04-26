import express from "express";
import { spinProjectContainers } from "../controllers/dockerController.js";

const router = express.Router();

// 🧪 Spin a container for user project
router.post("/spin", (req, res) => {
  spinProjectContainers(req, res);
});

export default router;