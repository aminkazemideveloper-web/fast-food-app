import type { BranchType } from "../../../../types/branch-type";
import { apiRequest } from "../../instance";

export const GetBranches = async (): Promise<BranchType[]> => {
  const { data } = await apiRequest.get("/branches");
  return data;
};
