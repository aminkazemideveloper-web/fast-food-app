import { useQuery } from "@tanstack/react-query";
import { GetAllCategories } from "../../api/requests/category/get-all-categories";

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["navbar"],
    queryFn: GetAllCategories,
  });
};
