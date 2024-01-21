import Button from "@/app/components/Button";
import ListingTable from "@/app/components/ListingTable";
import React from "react";
import prisma from "@/app/libs/prismadb";

export const getAllTransactions = async () => {
  try {
    const transactions = await prisma.transaction.findMany();
    return { status: "success", transactions };
  } catch (error: any) {
    // console.log(error?.message);
    return { status: "failed", transactions: [] };
  }
};

const Transaction = async () => {
  const response = await getAllTransactions();
  const { transactions } = response;

  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-end mr-3">
        <Button title="Add Transaction" href="/transaction/add" />
      </div>
      <ListingTable data={transactions} />
    </section>
  );
};

export default Transaction;
