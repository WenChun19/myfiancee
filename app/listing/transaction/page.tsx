import Button from "@/app/components/Button";
import ListingTable, {
  TransactionDataType,
} from "@/app/components/ListingTable";
import React from "react";
import prisma from "@/app/libs/prismadb";
import { unstable_noStore } from "next/cache";
import FilterForm from "@/app/components/FilterForm";

type allTransactionsResponse = {
  status: string;
  transactions: TransactionDataType[] | [];
};

const getAllTransactions = async (): Promise<allTransactionsResponse> => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const transactions = await prisma.transaction.findMany();
    return { status: "success", transactions };
  } catch (error: any) {
    // console.log(error?.message);
    return { status: "failed", transactions: [] };
  }
};

const Transaction = async () => {
  unstable_noStore();

  const response = await getAllTransactions();
  const { transactions } = response;

  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between md:mt-4 mr-3">
        <FilterForm />
        <Button title="Add Transaction" href="/transaction/add" />
      </div>

      <ListingTable data={transactions} />
    </section>
  );
};

export default Transaction;
