import { convertPrice } from "@/utils/convert-price";
import Link from "next/link";
import { IProduct } from "@/types/product.inteface";
import { FC } from "react";

export const ProductInfo: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className='mt-4 flex justify-between'>
      <div>
        <h3 className='text-sm text-gray-700'>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className='mt-1 text-sm text-gray-500'>{product.category}</p>
      </div>
      <p className='text-sm font-medium text-gray-900'>
        {convertPrice(product.price)}
      </p>
    </div>
  );
};
