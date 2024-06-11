import { IProduct } from "@/types/product.inteface";
import axios from "axios";

const PRODUCTS = "http://localhost:4200/products";

export const ProductService = {
  async getAll() {
    const { data } = await axios<IProduct[]>({
      url: PRODUCTS,
      method: "GET",
    });
    return data;
  },
};
