import { useQuery } from "@tanstack/react-query";
import { GetBannersRequest } from "../../api/requests/banners/get-banners";

export const useGetAllBanners = () => {
  return useQuery({
    queryKey: ["banners"],
    queryFn: GetBannersRequest,
  });
};
