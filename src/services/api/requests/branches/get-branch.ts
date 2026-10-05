import type { BranchType } from "../../../../types/branch-type";
import { apiRequest } from "../../instance";

export const GetBranch = async (branchId: string): Promise<BranchType> => {
  const { data } = await apiRequest.get( `/branches?branchId=${branchId}`);
  return data[0];
};
