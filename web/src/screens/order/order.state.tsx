import { useEffect, useState } from "react";
import { format } from "date-fns";

import { storageService } from "@services/storage-service";
import { ApiOrder } from "./order.api";

import { IOrder } from "typings/order";
import { ROLES } from "@constants/roles";
import { notifyError } from "@components/notify/notify.services";

interface IValues {
  orders: IOrder[];
  status: string;
  defaultOrdersByDates: {
    date: string;
    orders: IOrder[];
  }[];
  ordersByDates: {
    date: string;
    orders: IOrder[];
  }[];
  modal: {
    isOpen: boolean;
    caption: string;
    children: JSX.Element;
  };
}

export const useOrderState = () => {
  const { fetchUserOrders, fetchManagerOrders, changeOrder, removeOrder } =
    ApiOrder();

  const { id, role } = storageService.getUser();

  const [state, setState] = useState<IValues>({
    orders: [],
    status: "waiting",
    defaultOrdersByDates: [],
    ordersByDates: [],
    modal: {
      isOpen: false,
      caption: "",
      children: <></>,
    },
  });

  useEffect(() => {
    fetchInitialOrders(id);
  }, []);

  const fetchInitialOrders = async (id: string) => {
    const orders =
      role === ROLES.user
        ? await fetchUserOrders(id)
        : await fetchManagerOrders();

    setInitialOrdersByDates(orders);

    setState((state) => ({
      ...state,
      orders,
    }));
  };

  const setInitialOrdersByDates = async (orders: IOrder[]) => {
    const combinedOrders = await orders.reduce((acc: any, order: IOrder) => {
      const date = format(new Date(order.date), "MM/dd/yyyy");
      acc[date] = acc[date] || [];
      if (acc[date]) {
        acc[date].push(order);
      }
      return acc;
    }, {});

    const combinedOrdersByDates = Object.keys(combinedOrders).map((key) => {
      return {
        date: key,
        orders: combinedOrders[key],
      };
    });

    setState((state) => ({
      ...state,
      ordersByDates: combinedOrdersByDates,
      defaultOrdersByDates: combinedOrdersByDates,
    }));
  };

  const handleFilterByStatus = (status: string) => {
    if (status === "waiting") {
      const combinedOrders = state.defaultOrdersByDates.reduce(
        (
          acc: any,
          order: {
            date: string;
            orders: IOrder[];
          }
        ) => {
          const filteredOrders = order.orders.filter(
            (order) => order.status !== "delivered"
          );
          if (filteredOrders.length) {
            return [
              ...acc,
              {
                date: order.date,
                orders: filteredOrders,
              },
            ];
          } else {
            return [];
          }
        },
        []
      );

      setState((state) => ({
        ...state,
        ordersByDates: combinedOrders!,
      }));
    } else {
      const combinedOrders = state.defaultOrdersByDates.reduce(
        (
          acc: any,
          order: {
            date: string;
            orders: IOrder[];
          }
        ) => {
          const filteredOrders = order.orders.filter(
            (order) => order.status === status
          );
          if (filteredOrders.length) {
            return [
              ...acc,
              {
                date: order.date,
                orders: filteredOrders,
              },
            ];
          } else {
            return [];
          }
        },
        []
      );

      setState((state) => ({
        ...state,
        ordersByDates: combinedOrders!,
      }));
    }
  };

  const handleModalToggler = () => {
    setState((state) => ({
      ...state,
      modal: {
        ...state.modal,
        isOpen: false,
      },
    }));
  };

  const handleSetModal = (caption: string, children: JSX.Element) => {
    setState((state) => ({
      ...state,
      modal: {
        isOpen: true,
        caption,
        children,
      },
    }));
  };

  const handleRemoveOrder = async (id: string) => {
    await removeOrder(id);
  };

  const handleChangeOrder = async (id: string, status: string) => {
    const nextStatus: "delivered" | "ready" | "on way" = statusChanger(status)!;
    await changeOrder(id, nextStatus);
  };

  const statusChanger = (status: string) => {
    switch (status) {
      case "created":
        return "ready";
      case "ready":
        return "on way";
      case "on way":
        return "delivered";
      default:
        notifyError("Something goes wrong!");
    }
  };

  return {
    ...state,
    handleFilterByStatus,
    handleModalToggler,
    handleSetModal,
    handleRemoveOrder,
    handleChangeOrder,
  };
};
