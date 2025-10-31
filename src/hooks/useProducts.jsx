import { apiClient } from "@/lib/apiClient";
import { useQuery } from "@tanstack/react-query";

export function useProducts(query) {
  
    const { data, isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: ()=>apiClient(`http://localhost:8000/products${query ? `${query}` : ''}`),
    })
  
  return { products: data, isProductsLoading: isLoading, productsError: error };
}