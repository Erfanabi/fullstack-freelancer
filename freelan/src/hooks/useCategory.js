import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/categoryService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["cateogries"],
    queryFn: getCategories,
    retry: false,
  });

  const { categories = [] } = data || {};

  const newCategories = categories.map((item) => ({
    lable: item.title,
    value: item._id,
    // englishTitle: item.englishTitle,
  }));
  const transformedCategories = categories.map((item) => ({
    lable: item.title,
    value: item.englishTitle,
  }));

  return { categories: newCategories, transformedCategories, isLoading };
}
