"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

type ImageUploadProps = {
  handleUpload: (file: File) => void;
  fileUrl?: string;
};

const ImageUpload = ({ handleUpload, fileUrl }: ImageUploadProps) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState(fileUrl);

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

  return (
    <div className="flex flex-col my-2">
      <label htmlFor="file-input" className="mb-3">
        Image
      </label>
      {imageUrl ? (
        <div
          className="w-[120px]
          border-2 border-slate-400 aspect-square
          relative"
        >
          <Image
            src={imageUrl}
            fill
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
    </div>
  );
};

export default ImageUpload;
