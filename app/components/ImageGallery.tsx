"use client";

import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../lib/sanity";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
          {images.map((images: any, idx: any) => (
            <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={urlFor(images).url()}
                width={200}
                height={200}
                alt="photos"
                className="h-full w-full object-cover object-center cursor-pointer"
                onClick={() => handleSmallImageClick(images)}
              />
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
          <Image
            src={urlFor(bigImage).url()}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
            alt="photo"
          />
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            Sale
          </span>
        </div>
      </div>
    </div>
  );
}
