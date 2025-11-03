"use client";

import Button from "../ui/Button";
import ProductCard from "@/components/ui/ProductCard";
import { useProducts } from "@/hooks/useProducts";
const FeatureProducts = ({
  title = "Don’t miss out new drops",
  button = true,
  titleClass = "section-heading uppercase md:max-w-[60%]",
}) => {
  const { products, isProductsLoading, productsError } =
    useProducts("?limit=4");

  if (isProductsLoading) return <div>Loading...</div>;
  if (!!productsError) return <div>Error loading products</div>;

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row md:justify-between">
        <h2 className={titleClass}>{title}</h2>
        <div className="sm:self-end">
          {button && <Button state="secondary">Shop New Drops</Button>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
        {products?.slice(0, 4).map((items) => {
          return (
            <ProductCard
              key={items.id}
              productName={items.title}
              productImage={items.images[0]}
              productPrice={items.sale_price || items.regular_price}
              badgeText={items.tags[0]}
              slug={items.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
