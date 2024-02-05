"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const Login = () => {
  const session = useSession();

  const isAuthenticated = session?.data?.user;

  if (session?.status === "loading") {
    return <></>;
  }

  return isAuthenticated ? (
    <button
      onClick={() => {
        signOut();
        toast.success("Successfully logout!");
      }}
    >
      Logout
    </button>
  ) : (
    <Link className="mr-2" key="login" href="/login">
      Login
    </Link>
  );
};

export default Login;
