"use client";

import React, { FC, useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { useFormState } from "react-dom";
import { addNewPortfolio } from "../actions";

interface PortfolioDataProps {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  created_at: Date;
  default: boolean;
}

type PortfolioTableProps = {
  data: PortfolioDataProps[];
};

const PortfolioTable: FC<PortfolioTableProps> = ({ data }) => {
  const [rowNumber, setRowNumber] = useState(0);

  const increaseRow = () => {
    setRowNumber((prev) => prev + 1);
  };

  const [state, action] = useFormState<any, FormData>(addNewPortfolio, {
    error: null,
    formId: "",
  });

  return (
    <form action={action} key={state?.formId}>
      <div
        className="relative overflow-x-auto 
        shadow-md sm:rounded-lg"
      >
        <table
          className="w-full text-sm text-left 
            rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            className="text-xs text-gray-700 uppercase 
            bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" className="px-6 py-3 w-[400px]">
                Name
              </th>
              <th scope="col" className="px-6 py-3 w-[500px]">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, description }, index) => (
              <tr
                key={`${name}_${index}`}
                className="bg-white border-b dark:bg-gray-800 
              dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  className="px-6 py-4 font-medium text-gray-900
                  whitespace-nowrap dark:text-white"
                >
                  {name}
                </th>
                <td className="px-6 py-4">{description}</td>
                <td className="px-6 py-4">
                  <div className="flex mr-1 text-lg text-cyan-600"></div>
                </td>
              </tr>
            ))}
            {(rowNumber > 0 || data?.length > 0) && (
              <tr
                className="bg-white border-b dark:bg-gray-800 
            dark:border-gray-700"
              >
                <td className="px-6 py-4">
                  <input
                    type="text"
                    name="name"
                    className="border-2 border-slate-300 
                w-full p-1 rounded-md"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    name="description"
                    className="border-2 border-slate-300 
                w-full p-1 rounded-md"
                  />
                </td>
                <td className="px-6 py-4 flex items-center gap-4 leading-8">
                  <button className="text-cyan-600 outline-none" type="submit">
                    Add
                  </button>
                  <div className="text-slate-600">Delete</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {data?.length == 0 && rowNumber == 0 && (
          <div
            className="p-4 h-[200px] bg-slate-100 flex flex-col justify-center
      items-center cursor-pointer"
            onClick={increaseRow}
          >
            <HiDocumentAdd className="text-7xl text-slate-200 mb-3" />
            <span className="text-slate-400">Add new Portfolio</span>
          </div>
        )}
      </div>
    </form>
  );
};

export default PortfolioTable;
