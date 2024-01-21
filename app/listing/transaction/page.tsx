import Button from "@/app/components/Button";
import ListingTable from "@/app/components/ListingTable";
import React from "react";

export const getAllTransactions = () => {};

const Transaction = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-end mr-3">
        <Button title="Add Transaction" href="/transaction/add" />
      </div>
      <ListingTable />
    </section>
  );
};

export default Transaction;
