import { apiServices } from "@services/api-service";

import { URL } from "@constants/config";

export const deleteMenu = async (id: string) => {
  await apiServices.deleteData(`${URL}/menus/delete/${id}`);
};
