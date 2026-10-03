import { useQuery } from "@tanstack/react-query";
import { GetBranches } from "../../api/requests/branches/get-branches";

export const useGetAllBranches = () => {
  return useQuery({
    queryKey: ["branches"],
    queryFn: GetBranches,
  });
};
