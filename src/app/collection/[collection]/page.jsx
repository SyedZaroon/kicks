import CollectionBanner from "@/components/sections/CollectionBanner";
import CollectionGrid from "@/components/sections/CollectionGrid";
import SortingFilter from "@/components/forms/SortingFilter";
import ProductFilter from "@/components/sections/ProductFilterContent";
import { generateQuery } from "@/utils";
import Pagination from "@/components/ui/Pagination";
import { notFound } from "next/navigation";

const default_limit = 6;

const Collection = async ({ params, searchParams }) => {
  const { collection } = await params;
  const resolvedSearchParams = await searchParams;

  const page = Number(resolvedSearchParams.page) || 1;
  const limit = Number(resolvedSearchParams.limit) || default_limit;

  const queryParams = {
    _page: page,
    _limit: limit,
    ...resolvedSearchParams,
  };

  if (collection !== "all") {
    queryParams.category = collection;
  }

  const { products, totalCount } = await fetchProducts(queryParams);

  const filterParams = {};
  if (collection !== "all") {
    filterParams.category = collection;
  }

  const { products: allProducts, allCategories } = await fetchProducts(
    filterParams
  );

  if (allCategories.size === 0) {
    notFound();
  }

  return (
    <div className="section-margin pb-8">
      <div className="lg:pt-20 lg:pb-8 py-8">
        <CollectionBanner />
      </div>

      <div className="lg:py-8 py-4 flex flex-wrap justify-between">
        <div>
          <h5 className="h5 uppercase">{collection}</h5>
          <p className="p">{totalCount} items</p>
        </div>
        <SortingFilter products={products} />
      </div>

      <div className="grid gap-16 grid-cols-1 xl:grid-cols-3">
        <div>
          <ProductFilter products={allProducts} />
        </div>

        <div className="col-span-2">
          <CollectionGrid products={products} />
          <Pagination
            totalCount={totalCount}
            products={products}
            limit={limit}
            currentPage={page}
            basePath={`/collection/${collection}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;

async function fetchProducts(params) {
  "use server";

  const query = generateQuery(params);
  const url = query
    ? `http://localhost:8000/products?${query}`
    : `http://localhost:8000/products`;

  const res = await fetch(url);
  const products = await res.json();

  const allCategories = new Set();

  products.forEach((product) => {
    allCategories.add(product.category);
  });

  const totalCount = res.headers.get("x-total-count");

  return { products, totalCount, allCategories };
}
