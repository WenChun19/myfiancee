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

const getAllTransactions = async (
  search: string
): Promise<allTransactionsResponse> => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        name: { contains: search, mode: "insensitive" },
      },
    });
    return { status: "success", transactions };
  } catch (error: any) {
    // console.log(error?.message);
    return { status: "failed", transactions: [] };
  }
};

type TransactionPageProps = {
  searchParams?: {
    search?: string;
  };
};

const Transaction: React.FC<TransactionPageProps> = async ({
  searchParams,
}) => {
  unstable_noStore();

  const search = searchParams?.search || "";
  const response = await getAllTransactions(search);
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
