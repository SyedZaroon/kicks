"use client";

import SelectField from "../ui/SelectField";
import { useRouter, usePathname } from "next/navigation";

const SortingFilter = ({ currentSort, currentQuery }) => {
  const router = useRouter();
  const pathname = usePathname();

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

    // preserve old query params but replace sort/order
    const newQuery = {
      ...currentQuery,
      _sort: selected.sort,
      _order: selected.order,
    };

    const queryString = new URLSearchParams(newQuery).toString();
    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  return (
    <form onSubmit={handleChange} className="flex flex-wrap gap-6 items-end">
      <SelectField
        name="sorting"
        options={sortingOptions}
        value={`${currentQuery._sort || "sale_price"}-${
          currentQuery._order || "asc"
        }`}
        onChange={handleChange}
      />
    </form>
  );
};

export default SortingFilter;
