import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import storage from "../libs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
    toast.success("Welcome");
    callback();
  }
};

export const uploadImage = async (folder: string, file: File) => {
  const storageRef = ref(storage, `/images/${folder}/${file.name}`);

  let url = "";
  try {
    const snapshot = await uploadBytesResumable(storageRef, file);
    url = (await getDownloadURL(snapshot.ref)).toString();
  } catch (error) {
    console.log(error);
  } finally {
    const charIndex = url.lastIndexOf(`${folder}`);
    if (charIndex != -1) {
      url = url.substring(charIndex + folder?.length);
    }
    return url;
  }
};
