import GoBack from "@/app/components/GoBack";
import { TransactionDataType } from "@/app/components/ListingTable";
import TransactionForm from "@/app/components/TransactionForm";
import prisma from "@/app/libs/prismadb";

type TransactionResponse = {
  status: string;
  transaction: TransactionDataType | null;
};

const getTransaction = async (id: string): Promise<TransactionResponse> => {
  try {
    const transaction = await prisma.transaction.findFirst({
      where: {
        id,
      },
    });
    return { status: "success", transaction };
  } catch (error: any) {
    return { status: "failed", transaction: null };
  }
};

const EditTransaction = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { transaction } = await getTransaction(id);

  return (
    <div className="flex flex-col m-auto w-3/4 p-8 my-3">
      <GoBack />
      <TransactionForm data={transaction} />
    </div>
  );
};

export default EditTransaction;
