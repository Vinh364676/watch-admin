import { AxiosResponse } from "axios"
import { getAsync } from "../http-client";

class BrandService {
  get = async (params: any): Promise<AxiosResponse> => {
    return await getAsync('/Brand/GetAll', {
      ...params,
      isPublish: true
    })
  }
//   getOne = async (id: any): Promise<AxiosResponse> => {
//     return await getAsync(`/Brand/GetAll/${id}`)
//   }
}

export default new BrandService();
