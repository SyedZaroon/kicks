import { apiClient } from "@/lib/apiClient";
import { useQuery } from "@tanstack/react-query";

export function useProducts(params = {}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", params],
    queryFn: async () =>
      await apiClient(
        `http://localhost:8000/products?${generateQuery(params)}`
      ),
  });

  return { products: data, isProductsLoading: isLoading, productsError: error };
}

function generateQuery(params = {}) {
  return Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}
