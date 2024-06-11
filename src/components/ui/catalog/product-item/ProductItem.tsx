import { FC } from "react";
import { IProduct } from "@/types/product.inteface";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductInfo } from "./ProductInfo/productInfo";

export const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className='group relative'>
      <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
        <ProductImage product={product} />
      </div>
      <ProductInfo product={product} />
    </div>
  );
};
