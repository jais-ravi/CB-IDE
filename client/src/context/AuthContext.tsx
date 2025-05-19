"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { BACKEND_URL } from "@/lib/config";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const axiosInstance = axios.create({
  baseURL: BACKEND_URL
    ? `${BACKEND_URL}/api/auth`
    : "http://localhost:8000/api/auth",
  withCredentials: true,
  timeout: 10000,
});

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
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get("/me");
        setUser(data.user);
      } catch (error) {
        const message = handleApiError(error);
        if (message !== "Unauthorized") {
          setError(message);
        }
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
      router.push("/overview");
    } catch (error) {
      const errorMessage = handleApiError(error);
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, name?: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axiosInstance.post("/sign-up", {
        email,
        password,
        name,
      });
      setUser(data.user);
      toast.success(data.message);
      router.push("/overview");
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
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      const errorMessage = handleApiError(error);
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, loading, error, setUser }}
    >
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