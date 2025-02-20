"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Login = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log("Login successful:", response);
      // Redirect user or show success message here
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally show error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      <a href="http://localhost:5000/auth/google">Login with Google</a>
    </div>
  );
};

export default Login;