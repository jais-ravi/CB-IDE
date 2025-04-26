import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the base project path
export const BASE_PROJECT_PATH = path.resolve(__dirname, '../user-projects');