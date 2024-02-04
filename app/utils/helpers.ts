import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export const signInUser = async (
  email: string,
  password: string,
  callback: () => void
) => {
  const response = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  let error = response?.error;
  if (error) {
    if (error == "CredentialsSignin") {
      error = "Invalid email or password!";
    }
    toast.error(error);
    return;
  }

  if (response?.ok) {
    callback();
  }
};
