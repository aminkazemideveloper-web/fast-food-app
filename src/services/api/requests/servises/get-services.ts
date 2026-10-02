import { apiRequest } from "../../instance";

export const GetServices = async () => {
  const { data } = await apiRequest.get("/services");
  return data;
};
