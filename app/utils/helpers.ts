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

export const uploadImage = async (
  folder: string,
  file: File,
  callback: (url: string) => void
) => {
  const storageRef = ref(storage, `/images/${folder}/${file.name}`);
  const uploader = uploadBytesResumable(storageRef, file);

  uploader.on(
    "state_changed",
    (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      console.log(percent);
    },
    (err) => {
      console.log(err);
    },
    () => {
      getDownloadURL(uploader.snapshot.ref).then((url) => {
        callback(url);
      });
    }
  );
};
