"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const authSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" })

    .regex(/^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*$/, {
      message: "Password contains invalid characters",
    }),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-zinc-900">
      <Card className="overflow-hidden w-full max-w-md bg-zinc-800 text-white">
        <CardContent className="grid p-0 md:grid-cols-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 md:p-8 bg-zinc-900 rounded-lg"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-zinc-400">
                  Enter your email below to login to your account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Valid Email..."
                  {...register("email")}
                  className="bg-zinc-600 text-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-zinc-300">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-sm underline-offset-2 hover:underline text-zinc-400"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="bg-zinc-600 text-white"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message as string}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-zinc-600 hover:bg-zinc-500"
              >
                Login
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-zinc-600">
                <span className="relative z-10 bg-zinc-700 px-2 text-zinc-400">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="w-full bg-zinc-600 text-white border-zinc-500"
                >
                  <span>Apple</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-zinc-600 text-white border-zinc-500"
                >
                  <span>Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-zinc-600 text-white border-zinc-500"
                >
                  <span>Meta</span>
                </Button>
              </div>
              <div className="text-center text-sm text-zinc-400">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-center text-xs text-zinc-400 mt-4">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};

export default Page;
