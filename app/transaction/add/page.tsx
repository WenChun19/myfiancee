import GoBack from "@/app/components/GoBack";
import TransactionForm from "@/app/components/TransactionForm";
import React from "react";

const Transaction = () => {
  return (
    <div className="flex flex-col m-auto w-3/4 p-8 my-3">
      <GoBack />
      <TransactionForm />
    </div>
  );
};

export default Transaction;
