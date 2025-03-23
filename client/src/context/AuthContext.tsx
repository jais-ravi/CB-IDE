"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

// Create Context with default value as null
const AuthContext = createContext<AuthContextType | null>(null);

// Centralized Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/auth",
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout for better performance
});

// Centralized error handler
const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return axiosError.response?.data?.message || "An unexpected error occurred";
  }
  return "An unknown error occurred";
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user on mount
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true); 
      try {
        const { data } = await axiosInstance.get("/me");
        setUser(data.user);
      } catch (error) {
        setError(handleApiError(error));
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axiosInstance.post("/sign-in", { email, password });
      setUser(data.user);
      toast.success(data.message);
    } catch (error) {
      const errorMessage = handleApiError(error);
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.post("/logout");
      setUser(null);
    } catch (error) {
      const errorMessage = handleApiError(error);
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};