import { ProductService } from "@/services/product.service";
import { Hero } from "../components/ui/hero/Hero";
import Catalog from "@/components/ui/catalog/Catalog";

async function getProducts() {
  const data = await ProductService.getAll();

  return data;
}

export default async function Home() {
  const data = await getProducts();

  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <Hero />
      <Catalog products={data} isFull={false} />
    </div>
  );
}
