import ProductPage from "@/pages/ProductPage";

export default async function Product({ params }) {
  const { product } = await params;
  return <ProductPage product={product} />;
}
