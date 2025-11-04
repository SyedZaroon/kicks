import CollectionBanner from '@/components/sections/CollectionBanner'
import CollectionGrid from '@/components/sections/CollectionGrid'
import SortingFilter from "@/components/forms/SortingFilter";
import ProductFilter from '@/components/sections/ProductFilterContent'
import { productData } from '@/data/productData'

const Collection = async ({ params }) => {
  const { collection } = await params;

  const res = await fetch(
    `http://localhost:8000/products?category=${collection}`
  );
  const products = await res.json();

  return (
    <div className="section-margin pb-8">
      <div className=" lg:pt-20 lg:pb-8 py-8">
        <CollectionBanner />
      </div>
      <div className="lg:py-8 py-4  flex flex-wrap justify-between">
        <div>
          <h5 className="h5 uppercase">{collection}</h5>
          <p className="p">{products.length} items</p>
        </div>
        <SortingFilter />
      </div>
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-[20%_75%]">
        <div className="">
          <ProductFilter />
        </div>
        <div>
          <CollectionGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default Collection