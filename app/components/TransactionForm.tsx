import React from "react";
import Button from "./Button";
import { createTransaction } from "../actions";

const TransactionForm = () => {
  return (
    <section
      className="w-full p-8 my-8 border-2 border-slate-300
      shadow-lg rounded-lg"
    >
      <form className="flex flex-col gap-2" action={createTransaction}>
        <div className="flex items-center justify-between gap-4 leading-8">
          <label className="" htmlFor="name">
            Transaction Name
          </label>
          <input
            className="w-1/2 border-2 p-1 rounded-md"
            name="name"
            id="name"
            type="text"
          />
        </div>
        <div className="flex items-center justify-between gap-4 leading-8">
          <label htmlFor="debit">Debit</label>
          <input
            className="w-1/2 border-2 p-1 rounded-md"
            name="debit"
            id="debit"
            type="number"
          />
        </div>
        <div className="flex items-center justify-between gap-4 leading-8">
          <label htmlFor="credit">Credit</label>
          <input
            className="w-1/2 border-2 p-1 rounded-md"
            name="credit"
            id="credit"
            type="number"
          />
        </div>
        <div className="flex justify-end mt-4">
          <Button type="submit" className="max-w-56 w-56" title="Add" />
        </div>
      </form>
    </section>
  );
};

export default TransactionForm;
