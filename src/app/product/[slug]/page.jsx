import ProductPage from "@/pages/ProductPage";
import { notFound } from "next/navigation";

export default async function Product({ params }) {
  const { slug } = await params;

  const res = await fetch(`http://localhost:8000/products?slug=${slug}`);
  const product = await res.json();

  if (!product[0]) return notFound();

  console.log(product);

  return <ProductPage product={product[0]} />;
}
