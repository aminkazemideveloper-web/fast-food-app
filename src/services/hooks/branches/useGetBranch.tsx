import { useQuery } from "@tanstack/react-query";
import { GetBranch } from "../../api/requests/branches/get-branch";

export const useGetBranch = (branchId: string) => {
  return useQuery({
    queryKey: ["branch", branchId],
    queryFn: () => GetBranch(branchId),
    enabled: !!branchId,
  });
};
