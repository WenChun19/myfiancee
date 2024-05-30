import React, { FC } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";

interface ModalProps {
  onClose: () => void;
  onConfirm?: () => void;
}

const Modal: FC<ModalProps> = ({ onClose, onConfirm }) => {
  return (
    <div
      tabIndex={-1}
      className="overflow-y-auto 
          overflow-x-hidden
           fixed z-50 justify-center
            items-center w-full 
            inset-0 
            max-h-full flex bg-slate-100
            bg-opacity-70"
    >
      <div
        className="bg-white w-[350px] h-40 
            rounded-md p-3"
      >
        <div className="flex justify-end">
          <HiMiniXMark
            className="text-xl text-slate-500
            cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div
          id="content"
          className="flex justify-center 
          p-3 m-3 text-sm text-slate-600"
        >
          you sure want to remove?
        </div>
        <div className="flex justify-between px-10">
          <Button title="Cancel" outline onClick={onClose} />
          <Button title="Confirm" outline onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
