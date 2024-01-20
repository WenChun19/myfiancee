import React from "react";

const ListingTable = () => {
  return (
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
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Debit
            </th>
            <th scope="col" className="px-6 py-3">
              Credit
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="bg-white border-b dark:bg-gray-800 
          dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              className="px-6 py-4 font-medium text-gray-900
              whitespace-nowrap dark:text-white"
            >
              Touch And Go
            </th>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">40</td>
            <td className="px-6 py-4">-10</td>
            <td className="px-6 py-4">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
