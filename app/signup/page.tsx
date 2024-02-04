"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/Button";
import Link from "next/link";
import { signUp } from "../actions";
import toast from "react-hot-toast";
import { signInUser } from "../utils/helpers";
import { useRouter } from "next/navigation";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    username: z.string(),
    firstname: z.string().min(1, { message: "First name is required" }),
    lastname: z.string(),
    password: z.string(),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Password don't match",
    path: ["confirmpassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    const { user, error } = await signUp(data);

    if (error) {
      toast.error(error);
      return;
    }

    if (user?.email) {
      await signInUser(user.email, data?.password, () => router.push("/"));
    }
  };

  return (
    <section
      className=" p-8 my-8 mx-20 border-2 border-slate-300
          shadow-lg rounded-lg"
    >
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col  gap-2 leading-8">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            className={`w-full ring-2 p-1 rounded-md
            ${errors.email && "ring-red-300 focus:ring-red-300"}
            focus:outline-none focus:ring-2`}
            name="email"
            id="email"
            type="text"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col  gap-2 leading-8">
          <label className="" htmlFor="username">
            Username
          </label>
          <input
            {...register("username")}
            className={`w-full ring-2 p-1 rounded-md
            ${errors.username && "ring-red-300 focus:ring-red-300"}
            focus:outline-none focus:ring-2`}
            name="username"
            id="username"
            type="text"
          />
          {errors.username && (
            <p className="text-red-600 text-sm">{errors.username.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col  gap-2 leading-8">
            <label className="" htmlFor="firstname">
              Firstname
            </label>
            <input
              {...register("firstname")}
              className={`w-full ring-2 p-1 rounded-md
              ${errors.firstname && "ring-red-300 focus:ring-red-300"}
            focus:outline-none focus:ring-2`}
              name="firstname"
              id="firstname"
              type="text"
            />
            {errors.firstname && (
              <p className="text-red-600 text-sm">{errors.firstname.message}</p>
            )}
          </div>
          <div className="flex flex-col  gap-2 leading-8">
            <label className="" htmlFor="lastname">
              Lastname
            </label>
            <input
              {...register("lastname")}
              className={`w-full ring-2 p-1 rounded-md
              ${errors.lastname && "ring-red-300 focus:ring-red-300"}
            focus:outline-none focus:ring-2`}
              name="lastname"
              id="lastname"
              type="text"
            />
            {errors.lastname && (
              <p className="text-red-600 text-sm">{errors.lastname.message}</p>
            )}
          </div>
        </div>
        <div className="flex  flex-col  gap-2 leading-8">
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            className={`w-full ring-2 p-1 rounded-md
            ${errors.password && "ring-red-300 focus:ring-red-300"}
            focus:outline-none focus:ring-2`}
            name="password"
            id="password"
            type="password"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="flex  flex-col  gap-2 leading-8">
          <label className="" htmlFor="confirmpassword">
            Confirm Password
          </label>
          <input
            {...register("confirmpassword")}
            className={`w-full ring-2 p-1 rounded-md
            ${errors.confirmpassword && "ring-red-300 focus:ring-red-300"}
            focus:outline-none focus:ring-2`}
            name="confirmpassword"
            id="confirmpassword"
            type="password"
          />
          {errors.confirmpassword && (
            <p className="text-red-600 text-sm">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>
        <Button title="Signup" type="submit" />
        <Link
          href="/login"
          className="text-blue-500 text-sm underline
              w-60 self-end flex justify-center"
        >
          Have an account? Log In now!
        </Link>
      </form>
    </section>
  );
};
export default SignUp;
