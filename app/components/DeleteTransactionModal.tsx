"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { HiTrash } from "react-icons/hi2";
import { deleteTransaction } from "../actions";

const DeleteModal = dynamic(() => import("@/app/components/Modal"));

type DeleteTransactionModalProps = {
  transactionId: string;
};

const DeleteTransactionModal = ({
  transactionId,
}: DeleteTransactionModalProps) => {
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      <HiTrash className="cursor-pointer" onClick={() => setshowModal(true)} />
      {showModal && (
        <DeleteModal
          onClose={() => setshowModal(false)}
          onConfirm={() => deleteTransaction(transactionId)}
        />
      )}
    </>
  );
};

export default DeleteTransactionModal;
