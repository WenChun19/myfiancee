"use server";

import prisma from "@/app/libs/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { SignUpFormData } from "./signup/page";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

// auth
export async function signUp(formData: SignUpFormData, image: string) {
  const { password, username, email } = formData;

  if (!password || !username || !email) {
    return { error: "Missing fields" };
  }

  // check if the user has existed
  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    return { error: "Email already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name: username,
      email,
      hashedPassword,
      image,
    },
  });

  return { user };
}

// transaction listing
export async function createTransaction(formData: FormData) {
  const name = formData.get("name") as string;
  const debit = formData.get("debit") as any;
  const credit = formData.get("credit") as any;

  try {
    await prisma.transaction.create({
      data: {
        userId: undefined,
        name,
        debit: parseFloat(debit),
        credit: parseFloat(credit),
      },
    });
    revalidatePath("/listing/transaction");
  } catch (error: any) {
    console.log(error.message);
  }

  redirect("/listing/transaction");
}

export const updateTransaction = async (id: string, formData: FormData) => {
  const name = formData.get("name") as string;
  const debit = formData.get("debit") as any;
  const credit = formData.get("credit") as any;

  try {
    await prisma.transaction.update({
      where: {
        id,
      },
      data: {
        name,
        debit: parseFloat(debit),
        credit: parseFloat(credit),
      },
    });
    revalidatePath("/listing/transaction");
  } catch (error: any) {
    console.log(error.message);
  }

  redirect("/listing/transaction");
};

export const deleteTransaction = async (id: string) => {
  try {
    await prisma.transaction.delete({
      where: { id },
    });
    revalidatePath("/listing/transaction");
  } catch (error: any) {
    console.log(error.message);
  }
};

// portfolio
export const addNewPortfolio = async (
  currentState: any,
  formData: FormData
) => {
  const session = await getServerSession(authOptions);
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;

  try {
    const response = await prisma.portfolio.create({
      data: {
        userId: session?.user?.id,
        name,
        description,
      },
    });

    revalidatePath("/portfolio");

    return {
      formId: response?.id,
    };
  } catch (error) {}
};
