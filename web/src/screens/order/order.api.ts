import { notifyError, notifySuccess } from "@components/notify/notify.services";
import { apiServices } from "@services/api-service";

import { URL } from "@constants/config";

export const ApiOrder = () => {
  const fetchUserOrders = async (id: string) => {
    try {
      const { data } = await apiServices.fetchData(
        `${URL}/orders/getall/${id}`
      );
      return data;
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const fetchManagerOrders = async () => {
    try {
      const { data } = await apiServices.fetchData(`${URL}/orders/getall`);
      return data;
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const changeOrder = async (id: string, status: string) => {
    try {
      await apiServices.updateData(`${URL}/orders/update`, { id, status });
      notifySuccess(`Orders ${id} status was successfully updated!`);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  const removeOrder = async (id: string) => {
    try {
      await apiServices.deleteData(`${URL}/orders/update${id}`);
      notifySuccess(`Order ${id} was successfully removed!`);
    } catch (error) {
      notifyError((error as Error).message);
    }
  };

  return {
    fetchUserOrders,
    fetchManagerOrders,
    changeOrder,
    removeOrder,
  };
};
