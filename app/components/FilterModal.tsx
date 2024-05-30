"use client";

import React, { useState } from "react";
import Button from "./Button";
import { HiOutlineFunnel } from "react-icons/hi2";
import Modal from "./Modal";

const FilterModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Button
        icon={HiOutlineFunnel}
        outline
        onClick={() => {
          setShowModal(true);
        }}
      />

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default FilterModal;
