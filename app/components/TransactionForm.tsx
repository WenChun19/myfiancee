import React from "react";
import Button from "./Button";

const TransactionForm = () => {
  return (
    <section
      className="w-full p-8 my-8 border-2 border-slate-300
      shadow-lg rounded-lg"
    >
      <form className="flex flex-col gap-2" action="">
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
          <label htmlFor="name">Debit</label>
          <input
            className="w-1/2 border-2 p-1 rounded-md"
            name="name"
            id="name"
            type="text"
          />
        </div>
        <div className="flex items-center justify-between gap-4 leading-8">
          <label htmlFor="name">Credit</label>
          <input
            className="w-1/2 border-2 p-1 rounded-md"
            name="name"
            id="name"
            type="text"
          />
        </div>
        <div className="flex justify-end mt-4">
          <Button className="max-w-56 w-56" title="Add" />
        </div>
      </form>
    </section>
  );
};

export default TransactionForm;
