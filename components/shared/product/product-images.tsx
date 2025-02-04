"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        width={1000}
        height={1000}
        alt="product image"
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, idx) => (
          <div
            key={image}
            onClick={() => setCurrent(idx)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              current === idx && "border-orange-500"
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
