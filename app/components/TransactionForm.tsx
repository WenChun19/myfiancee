import React from "react";
import Button from "./Button";
import { createTransaction, updateTransaction } from "../actions";
import { TransactionDataType } from "./ListingTable";

interface TransactionFormProps {
  data?: TransactionDataType | null;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ data }) => {

  let name = data ? data.name : '';
  let debit = data ? data.debit : '';
  let credit = data ? data.credit : '';
  let id = data ? data.id : null;

  const submitAction = id
    ? updateTransaction.bind(null, id)
    : createTransaction;

  const buttonTitle = id ? "Edit" : "Add";

  return (
    <section
      className="w-full p-8 my-8 border-2 border-slate-300
      shadow-lg rounded-lg"
    >
      <form className="flex flex-col gap-2" action={submitAction}>
        <div className="flex items-center justify-between gap-4 leading-8">
          <label className="" htmlFor="name">
            Transaction Name
          </label>
          <input
            className="w-1/2 border-2 p-1 rounded-md"
            name="name"
            defaultValue={name}
            id="name"
            type="text"
          />
        </div>
        <div className="flex items-center justify-between gap-4 leading-8">
          <label htmlFor="debit">Debit</label>
          <input
            className="w-1/2 border-2 p-1 rounded-md"
            name="debit"
            defaultValue={debit}
            id="debit"
            type="number"
          />
        </div>
        <div className="flex items-center justify-between gap-4 leading-8">
          <label htmlFor="credit">Credit</label>
          <input
            className="w-1/2 border-2 p-1 rounded-md"
            name="credit"
            defaultValue={credit}
            id="credit"
            type="number"
          />
        </div>
        <div className="flex justify-end mt-4">
          <Button type="submit" className="max-w-56 w-56" title={buttonTitle} />
        </div>
      </form>
    </section>
  );
};

export default TransactionForm;
