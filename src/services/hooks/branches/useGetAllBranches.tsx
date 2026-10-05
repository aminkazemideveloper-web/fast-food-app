import { useInfiniteQuery } from "@tanstack/react-query";
import { GetBranches } from "../../api/requests/branches/get-branches";
export const useGetAllBranches = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["branches", search],
    queryFn: ({ pageParam }) => GetBranches({ pageParam, search }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 16) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });
};
