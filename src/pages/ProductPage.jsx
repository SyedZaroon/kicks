import Button from "@/components/ui/Button";
import ProductImagesSlider from "@/components/sliders/ProductImagesSlider";
import FeatureProducts from "@/components/sections/FeatureProducts";
import VariantPicker from "@/components/sections/VariantPicker";

export default function ProductPage({ product }) {
  return (
    <>
      <section className="section-margin lg:my-8 my-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
          <div className="lg:sticky lg:top-8 self-start">
            <ProductImagesSlider />
          </div>

          <div className="flex flex-col justify-start">
            <Button state="secondary" className="w-fit">New Release</Button>

            <h2 className="h3 mt-4">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h2>

            <p className="mt-2 text-[var(--color-blue)] h5">$125.00</p>

            <div className="mt-6">
              <VariantPicker />
            </div>

            <p className="mt-8 text-gray-600 leading-relaxed">
              These running shoes are made in part with Parley Ocean Plastic.
              Enjoy performance and sustainability in one.
            </p>
          </div>
        </div>
      </section>

      <section className="section-margin py-8">
        <FeatureProducts
          title="You may also like"
          button={false}
          titleClass="h2"
        />
      </section>
    </>
  );
}
