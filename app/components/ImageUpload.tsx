"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { HiEye, HiMiniTrash, HiMiniXMark } from "react-icons/hi2";

type ImageUploadProps = {
  handleUpload: (file: File) => void;
  fileUrl?: string;
};

const ImageUpload = ({ handleUpload, fileUrl }: ImageUploadProps) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState(fileUrl);
  const [isPreview, setIsPreview] = useState(false);

  const handleClick = () => imageRef?.current?.click();

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    if (!file) {
      toast.error("Please upload an image");
      return;
    }

    const imgUrl = URL.createObjectURL(file);
    setImageUrl(imgUrl);

    handleUpload(file);
  };

  const onRemoveImage = () => {
    setImageUrl("");
  };

  const onOpenPreview = () => {
    setIsPreview(true);
  };

  const onClosePreview = () => {
    setIsPreview(false);
  };

  return (
    <div className="flex flex-col my-2">
      <label htmlFor="file-input" className="mb-3">
        Image
      </label>
      {imageUrl ? (
        <div
          className="w-[120px]
          border-2 border-slate-400 aspect-square
          relative group"
        >
          <div
            className="group-hover:z-30
             flex gap-4  
          absolute top-1/2 left-1/2 -translate-x-1/2
          -translate-y-1/2 text-2xl cursor-pointer"
          >
            <HiEye onClick={onOpenPreview} />
            <HiMiniTrash onClick={onRemoveImage} />
          </div>
          <Image
            src={imageUrl}
            fill
            className="group-hover:opacity-70"
            style={{ objectFit: "contain" }}
            alt="profile"
          />
        </div>
      ) : (
        <div
          className="flex items-center 
      justify-center p-3 w-[120px] h-[120px]
      border-dashed border-2 border-slate-400
      text-[30px] text-slate-600 cursor-pointer
      "
          onClick={handleClick}
        >
          <input
            id="file-input"
            ref={imageRef}
            type="file"
            accept="image/*"
            onChange={onChange}
            hidden
          />
          +
        </div>
      )}
      {isPreview && (
        <div
          className="fixed inset-0 flex 
      max-h-full bg-slate-50 z-40"
        >
          <div className="w-full flex justify-end p-2">
            <HiMiniXMark
              className="z-50 text-3xl
            text-slate-900 cursor-pointer"
            onClick={onClosePreview}
            />
          </div>
          <Image
            src={imageUrl || ""}
            fill
            style={{ objectFit: "contain" }}
            alt="preview-profile"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
