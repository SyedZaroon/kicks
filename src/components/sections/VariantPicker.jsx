import React from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Heart from "@/assets/icons/outline/Heart";

const VariantPicker = () => {
  return (
    <div>
          <div className="flex gap-6 flex-col">
              
        <div>
          <h6 className="h6">Color</h6>
          <div className="mt-4 flex gap-4 flex-wrap">
            <div className="h-[32px] w-[32px] bg-yellow rounded-full hover:outline-1 hover:outline-[var(--color-dark-gray)] hover:outline-offset-3"></div>
            <div className="h-[32px] w-[32px] bg-blue rounded-full hover:outline-1 hover:outline-[var(--color-dark-gray)] hover:outline-offset-3"></div>
            <div className="h-[32px] w-[32px] bg-amber-700 rounded-full hover:outline-1 hover:outline-[var(--color-dark-gray)] hover:outline-offset-3"></div>
            <div className="h-[32px] w-[32px] bg-red-400 rounded-full hover:outline-1 hover:outline-[var(--color-dark-gray)] hover:outline-offset-3"></div>
            <div className="h-[32px] w-[32px] bg-orange-400 rounded-full hover:outline-1 hover:outline-[var(--color-dark-gray)] hover:outline-offset-3"></div>
          </div>
        </div>

        <div>
          <h6 className="h6">Size</h6>
          <div className="mt-4 flex gap-4 flex-wrap">
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              38
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              39
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              40
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              41
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              42
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              43
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              44
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              45
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              46
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              47
            </Button>
            <Button className="bg-[var(--color-white)] !text-[var(--color-dark-gray)]">
              48
            </Button>
              </div>
              </div>
              
              <div className="flex gap-4 items-center flex-wrap">
                  <div className="w-[80%]">
                  <Button className="w-full justify-center">ADD TO CART</Button>
                  </div>
                  <Icon icon={Heart} size={24} />
              </div>

              <div>
                  <Button className="w-full justify-center" state="secondary">BUY It NOW</Button>
              </div>
      </div>
    </div>
  );
};

export default VariantPicker;
