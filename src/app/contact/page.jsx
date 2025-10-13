import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex mt-2 mb-8 flex-col gap-8 xl:flex-row xl:my-16 xl:gap-0 xl:w-[90%]">
      <Sidebar />
      <div>
        <h1 className="font-rubik text-2xl font-semibold">About Us</h1>

        <div>
          <p className="font-open-sans text-[var(--color-dark-gray)]  text-[16px]">
            Price First is built with a simple goal in mind: to help people get
            the highest possible offer for their old mobile phones and
            gadgets—quickly, safely, and transparently. In a digital world full
            of options, we make it easy to compare verified buyers, lock in the
            best price, and get paid fast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
