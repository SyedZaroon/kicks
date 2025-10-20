import Image from 'next/image'
import React from 'react'
import product1 from '../../assets/images/productImages/product1.png'
import Badge from '../ui/Badge';
import Button from '../ui/Button';
const ProductCard = ({productImage = product1, badgeText = "New", productPrice = "125", productName = "ADIDAS 4DFWD X PARLEY RUNNING SHOES"}) => {
  return (
    <>
      <div className="w-fit">
        <div className="bg-[var(--color-natural-light)] p-2 rounded-3xl">
          <div className="relative">
            <Image
              src={productImage}
              alt="Product"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-0 z-10">
              <Badge text={badgeText} />
            </span>
          </div>
        </div>
        <h5 className="h5 mt-4">{productName}</h5>
        <Button className="mt-4 w-full justify-center h4">
          View Product -{" "}
          <span className="text-[var(--color-yellow)]">${productPrice}</span>
        </Button>
      </div>
    </>
  );
}

export default ProductCard