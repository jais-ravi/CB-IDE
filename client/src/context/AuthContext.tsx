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

// ✅ Centralized Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/auth",
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout for better performance
});

// ✅ Centralized error handler
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
      try {
        const res = await axiosInstance.get("/me");
        setUser(res.data.user);
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
    try {
      setLoading(true);
      setError(null);
  
      const res = await axiosInstance.post("/sign-in", { email, password });
  
      // If successful, set user and show success message
      setUser(res.data.user);

      if(!res.data.success){
        toast.success(res.data.message);
      }

    } catch (error: any) {
      // Extract error message from the server response
      const errorMessage = error.response?.data?.error || "Something went wrong! Please try again.";
  
      // Show the error message dynamically
      // toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      await axiosInstance.post("/logout");
      setUser(null);
    } catch (error) {
      setError(handleApiError(error));
      throw new Error(handleApiError(error));
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

// Custom hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
