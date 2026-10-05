import type { BranchType } from "../../../../types/branch-type";
import { apiRequest } from "../../instance";

export const GetBranches = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<BranchType[]> => {
  const response = await apiRequest.get(
    `/branches?_page=${pageParam}&_limit=16`,
  );

  return response.data;
};
