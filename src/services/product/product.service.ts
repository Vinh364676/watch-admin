
import { AxiosResponse } from "axios";
import { deleteAsync, getAsync, postAsync, putAsync } from "../http-client";

class ProductService {
  get = async (params: any): Promise<AxiosResponse> => {
    return await getAsync('/Product/GetAll', {
      ...params,
      isPublish: true
    })
  }
  delete = async (id: any): Promise<AxiosResponse> => {
    return await deleteAsync(`/Product/Delete/${id}`);
  }
  post = async (productData: any): Promise<AxiosResponse> => {
    return await postAsync('/Product/Create',productData);
  }
  put = async (id: any, data: any): Promise<AxiosResponse> => {
    return await putAsync(`/Product/Update/${id}`, data); 
  }
  getById = async (id: any): Promise<AxiosResponse> => {
    return await getAsync(`/Product/GetById/${id}`)
  }
}

export default new ProductService();
