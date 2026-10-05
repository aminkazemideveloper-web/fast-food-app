import type { BranchType } from "../../../../types/branch-type";
import { apiRequest } from "../../instance";

type Props = {
  pageParam?: number;
  search: string;
};

export const GetBranches = async ({
  pageParam = 1,
  search,
}: Props): Promise<BranchType[]> => {
  const response = await apiRequest.get(
    `/branches?region_like=${search}&_page=${pageParam}&_limit=16`,
  );

  return response.data;
};
