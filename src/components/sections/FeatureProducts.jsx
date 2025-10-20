import Button from "../ui/Button";
import { productData } from "../../data/productData";
import ProductCard from "@/components/ui/ProductCard";
const FeatureProducts = ({
  title = "Don’t miss out new drops",
  button = true,
  titleClass = "section-heading uppercase md:max-w-[60%]",
}) => {
  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row md:justify-between">
        <h2 className={titleClass}>{title}</h2>
        <div className="sm:self-end">
          {button && <Button state="secondary">Shop New Drops</Button>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
        {productData?.slice(0, 4).map((items, index) => {
          return (
            <ProductCard
              key={index}
              productName={items.productName}
              productImage={items.productImage}
              productPrice={items.productPrice}
              badgeText={items.productBadge}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
