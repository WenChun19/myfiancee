import Button from "@/app/components/Button";
import ListingTable, {
  TransactionDataType,
} from "@/app/components/ListingTable";
import React from "react";
import prisma from "@/app/libs/prismadb";
import { unstable_noStore } from "next/cache";
import FilterForm from "@/app/components/FilterForm";
import Pagination from "@/app/components/Pagination";

type allTransactionsResponse = {
  status: string;
  transactions: TransactionDataType[] | [];
  totalTransactions: number;
};

const getAllTransactions = async (
  search: string,
  page: number,
  limit: number
): Promise<allTransactionsResponse> => {
  try {
    const skip = (page - 1) * limit;

    const [transactions, totalTransactions] = await prisma.$transaction([
      prisma.transaction.findMany({
        where: {
          name: { contains: search, mode: "insensitive" },
        },
        skip,
        take: limit,
      }),
      prisma.transaction.count(),
    ]);
    return { status: "success", transactions, totalTransactions };
  } catch (error: any) {
    // console.log(error?.message);
    return { status: "failed", transactions: [], totalTransactions: 0 };
  }
};

type TransactionPageProps = {
  searchParams?: {
    search?: string;
    page?: number;
    limit?: number;
  };
};

const Transaction: React.FC<TransactionPageProps> = async ({
  searchParams,
}) => {
  unstable_noStore();

  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const limit = 3;
  const response = await getAllTransactions(search, page, limit);
  const { transactions, totalTransactions } = response;

  const totalPages = Math.ceil(totalTransactions / limit);

  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between md:mt-4 mr-3">
        <FilterForm />
        <Button title="Add Transaction" href="/transaction/add" />
      </div>

      <ListingTable data={transactions} />
      <Pagination totalPages={totalPages} maxCol={4} />
    </section>
  );
};

export default Transaction;
