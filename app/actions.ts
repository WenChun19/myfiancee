"use server";

import prisma from "@/app/libs/prismadb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTransaction(formData: FormData) {
  const name = formData.get("name") as string;
  const debit = formData.get("debit") as any;
  const credit = formData.get("credit") as any;

  try {
    await prisma.transaction.create({
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
