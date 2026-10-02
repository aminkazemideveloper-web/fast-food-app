import type { BannerType } from "../../../../types/banner-type";
import { apiRequest } from "../../instance";

export const GetBannersRequest = async (): Promise<BannerType[]> => {
  const { data } = await apiRequest.get("/banners");
  return data;
};
