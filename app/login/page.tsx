"use client";

import React from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInUser } from "../utils/helpers";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: FormData) {
    const { email, password } = data;
    await signInUser(email, password, () => router.push("/"));
  }

  return (
    <section
      className="p-8 my-8 mx-20 border-2 border-slate-300
      shadow-lg rounded-lg"
    >
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  flex-col  gap-2 leading-8">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            className={`w-full ring-2 p-1 rounded-md
            ${errors.email && "ring-red-300 focus:ring-red-300"}
            focus:outline-none focus:ring-2 `}
            name="email"
            id="email"
            type="text"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col  gap-2 leading-8">
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            className={`w-full ring-2 p-1 rounded-md
            ${errors.password && "ring-red-300 focus:ring-red-300"}
            focus:outline-none focus:ring-2 `}
            name="password"
            id="password"
            type="password"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>
        <Button title="Login" type="submit" />
        <Link
          href="/signup"
          className="text-blue-500 text-sm underline
          w-70 self-end flex justify-center"
        >
          Don&apos;t have an account? Sign Up Now
        </Link>
      </form>
    </section>
  );
};

export default Login;
