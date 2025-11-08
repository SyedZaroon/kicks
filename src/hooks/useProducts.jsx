import { apiClient } from "@/lib/apiClient";
import { generateQuery } from "@/utils";
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
