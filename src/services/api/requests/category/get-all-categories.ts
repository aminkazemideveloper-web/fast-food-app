import type { CategoryType } from "../../../../types/category-type";
import { apiRequest } from "../../instance";

export const GetAllCategories = async (): Promise<CategoryType[]> => {
  const { data } = await apiRequest.get("/navbar");
  return data;
};
