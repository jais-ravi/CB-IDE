const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

const config = {
  backendUrl: BACKEND_URL,
};

export { BACKEND_URL };
export default config;