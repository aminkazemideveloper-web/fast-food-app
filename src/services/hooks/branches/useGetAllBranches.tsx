import { useInfiniteQuery } from "@tanstack/react-query";
import { GetBranches } from "../../api/requests/branches/get-branches";

export const useGetAllBranches = () => {
  return useInfiniteQuery({
    queryKey: ["branches"],

    queryFn: GetBranches,

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 10) {
        return allPages.length + 1;
      }

      return undefined;
    },
  });
};
