import GoBack from "@/app/components/GoBack";
import TransactionForm from "@/app/components/TransactionForm";
import prisma from "@/app/libs/prismadb";

export const getTransaction = async (id: string) => {
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
