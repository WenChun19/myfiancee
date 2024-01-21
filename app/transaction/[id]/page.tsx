import GoBack from "@/app/components/GoBack";
import TransactionForm from "@/app/components/TransactionForm";

const EditTransaction = () => {
  return (
    <div className="flex flex-col m-auto w-3/4 p-8 my-3">
      <GoBack />
      <TransactionForm />
    </div>
  );
};

export default EditTransaction;
