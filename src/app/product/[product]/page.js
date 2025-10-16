import ProductPage from "@/pages/ProductPage";

export default function Product({ params }) {
  const { product } = params; // dynamic route value e.g. "men"
  return <ProductPage product={product} />;
}
