import Catalog from "@/components/ui/catalog/Catalog";
import { ProductService } from "@/services/product.service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog Page",
  description: "Catalog Page",
};

async function getProducts() {
  const data = await ProductService.getAll();
  return data;
}

export default async function CatalogPage() {
  const data = await getProducts();

  return <Catalog products={data} />;
}
