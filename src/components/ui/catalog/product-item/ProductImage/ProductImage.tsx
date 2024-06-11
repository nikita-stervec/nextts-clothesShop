import Image from "next/image";
import { FC } from "react";
import { IProduct } from "@/types/product.inteface";

export const ProductImage: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <Image
      src={product.images[0]}
      alt={product.name}
      className='w-full h-full object-cover object-center lg:h-full lg:w-full'
      width={300}
      height={300}
    />
  );
};
