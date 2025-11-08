import ProductImagesSlider from "@/components/sliders/ProductImagesSlider";
import FeatureProducts from "@/components/sections/FeatureProducts";
import VariantPicker from "@/components/sections/VariantPicker";
import Badge from "@/components/ui/Badge";

export default function ProductPage({ product }) {
  return (
    <>
      <section className="section-margin lg:my-8 my-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
          <div className="lg:sticky lg:top-8 self-start">
            <ProductImagesSlider images={product.images} />
          </div>

          <div className="flex flex-col justify-start">
            {product.tags.slice(0, 1).map((tag) => {
              return (
                <div className="w-[20%]" key={tag}>
                  <Badge>{tag}</Badge>
                </div>
              );
            })}

            <h5 className="h5 uppercase mt-4">
              category:<span className="ml-2">{product.category}</span>
            </h5>
            <h2 className="h3 mt-4">{product.title}</h2>

            <div className="flex items-center gap-2">
              <p className="mt-2 text-blue h5">
                ${product.sale_price || product.regular_price}
              </p>

              {product.sale_price && (
                <p className="mt-2 text-error h5 line-through">
                  ${product.regular_price}
                </p>
              )}
            </div>

            <div className="mt-6">
              <VariantPicker variants={product.variants} />
            </div>

            <h5 className="h5 uppercase mb-4">
              Stock:<span className="ml-2">{product.stock}</span>
            </h5>

            <p className=" text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>
      {!!product.id && (
        <section className="section-margin py-8">
          <FeatureProducts
            title="You may also like"
            button={false}
            titleClass="h2"
          />
        </section>
      )}
    </>
  );
}
