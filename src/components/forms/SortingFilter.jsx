"use client";

import React, { useState } from "react";
import SelectField from "../ui/SelectField";

const SortingFilter = () => {
  const [selectedSorting, setSelectedSorting] = useState("");

  const sortingOptions = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Price: Low to High", value: "priceLowToHigh" },
    { label: "Price: High to Low", value: "priceHighToLow" },
  ];

  const handleFilter = (e) => {
    e.preventDefault();
    console.log("Filtering by:", { selectedSorting });
  };

  return (
    <form
      onSubmit={handleFilter}
      className="flex flex-wrap gap-6 items-end "
    >
      <SelectField
        name="sorting"
        options={sortingOptions}
        value={selectedSorting}
        onChange={(e) => setSelectedSorting(e.target.value)}
      />

    </form>
  );
};

export default SortingFilter;
