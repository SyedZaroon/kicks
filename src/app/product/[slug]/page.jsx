import ProductPage from "@/pages/ProductPage";

export default async function Product({ params }) {

  const { slug } = params; 

  const res = await fetch("http://localhost:8000/products");
  const products = await res.json();

  const product = products.find((p) => p.slug === slug);

  if(!product) return <div>Not Found</div>;

  

  
  return <ProductPage product={product} />;
}
