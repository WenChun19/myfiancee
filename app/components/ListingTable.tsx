import { HiOutlinePencilAlt } from "react-icons/hi";
import Link from "next/link";
import DeleteTransactionModal from "./DeleteTransactionModal";

export interface TransactionDataType {
  id: string;
  name: string;
  debit: number;
  credit: number;
  created_at: Date;
}

type ListingTableProps = {
  data: TransactionDataType[] | [];
};

const ListingTable = ({ data }: ListingTableProps) => {
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
              Created Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, debit, credit, created_at }, index) => (
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
              <td className="px-6 py-4">{debit}</td>
              <td className="px-6 py-4">{credit}</td>
              <td className="px-6 py-4">{created_at.toString()}</td>
              <td className="px-6 py-4">
                <div className="flex mr-1 text-lg text-cyan-600">
                  <Link href={`/transaction/${id}`}>
                    <HiOutlinePencilAlt />
                  </Link>
                  <DeleteTransactionModal transactionId={id}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
