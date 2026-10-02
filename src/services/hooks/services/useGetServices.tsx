import { useQuery } from "@tanstack/react-query";
import { GetServices } from "../../api/requests/servises/get-services";

export const useGetServvices = () => {
  return useQuery({
    queryKey: ["servises"],
    queryFn: GetServices,
  });
};
