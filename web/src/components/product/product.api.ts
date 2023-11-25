import { apiServices } from "@services/api-service";

import { URL } from "@constants/config";

export const deleteProduct = async (id: string) => {
  await apiServices.deleteData(`${URL}/products/delete/${id}`);
};
