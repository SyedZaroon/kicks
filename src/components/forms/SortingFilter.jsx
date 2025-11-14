"use client";

import SelectField from "../ui/SelectField";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const SortingFilter = ({ products }) => {
  if (!products || products.length === 0) return null;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sortingOptions = [
    {
      label: "Alphabetically A–Z",
      value: "title-asc",
      sort: "title",
      order: "asc",
    },
    {
      label: "Alphabetically Z–A",
      value: "title-desc",
      sort: "title",
      order: "desc",
    },
    {
      label: "Price: Low to High",
      value: "sale_price-asc",
      sort: "sale_price",
      order: "asc",
    },
    {
      label: "Price: High to Low",
      value: "sale_price-desc",
      sort: "sale_price",
      order: "desc",
    },
  ];

  const handleChange = (e) => {
    const selected = sortingOptions.find((opt) => opt.value === e.target.value);

    const params = new URLSearchParams(searchParams);

    params.set("_sort", selected.sort);
    params.set("_order", selected.order);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const currentValue = `${searchParams.get("_sort") || ""}-${
    searchParams.get("_order") || ""
  }`;

  return (
    <form onSubmit={handleChange} className="flex flex-wrap gap-6 items-end">
      <SelectField
        name="sorting"
        options={sortingOptions}
        value={currentValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default SortingFilter;
