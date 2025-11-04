import ProductCard from "../ui/ProductCard";
const CollectionGrid = ({ products }) => {
  if (products.length === 0)
    return <div className="h1 text-center uppercase">No products found</div>;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.title}
            productImage={product.images[0]}
            productPrice={product.sale_price}
            badgeText={product.productBadge}
            slug={product.slug}
          />
        ))}
      </div>
    </>
  );
};

export default CollectionGrid;
