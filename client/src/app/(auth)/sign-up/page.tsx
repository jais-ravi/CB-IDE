"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaGoogle } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { signupSchema } from "@/schema/signupSchema";

const Page = () => {
  const { login } = useAuth();

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      await login(data.email, data.password);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };
  const handleGoogleLogin = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`,
      "_self"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <Card>
        <CardContent>
          <div className="flex flex-col gap-5">
            <CardHeader className="pb-0 text-center">
              <CardTitle className=" text-lg font-bold">
              Create a New Account
              </CardTitle>
              <CardDescription>
              Enter your email to get started with your new account
              </CardDescription>
            </CardHeader>

            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleLogin)}
                  className=" space-y-5"
                >
                  {/* Username Field */}
                  <FormField
                    control={form.control}
                    name="username"
                    rules={{ required: "Username is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter your username"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Password Field */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button type="submit" className="w-full ">
                    Signup
                  </Button>
                </form>
              </Form>
            </div>

            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-zinc-600">
              <span className="relative z-10 bg-white dark:bg-zinc-950 px-2 ">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" disabled={true}>
                <FaApple />
              </Button>
              <Button variant="outline" onClick={handleGoogleLogin}>
                <FaGoogle />
              </Button>
              <Button variant="outline" disabled={true}>
                <FaMeta />
              </Button>
            </div>

            <div className="text-center text-sm ">
            Already have an account?{" "}
              
              <Link href="/sign-in" className="underline">
                Sign in
              </Link>

              
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-xs text-zinc-400 mt-4">
        By clicking continue, you agree to our{" "}
        <Link href="/terms" className="underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
};

export default Page;
