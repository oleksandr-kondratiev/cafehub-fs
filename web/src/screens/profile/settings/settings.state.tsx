import { useState } from "react";

const initialState = {
  modalCaption: "",
  isModalOpen: false,
};

export const UseSettingState = () => {
  const [state, setState] = useState(initialState);
  const [children, setChildren] = useState<JSX.Element>(<></>);

  const handleModalToggler = () => {
    setState((state) => ({
      ...state,
      isModalOpen: !state.isModalOpen,
    }));
  };

  const setModalContent = (children: JSX.Element, modalCaption: string) => {
    setState((state) => ({
      ...state,
      modalCaption,
    }));
    setChildren(children);
  };

  return {
    ...state,
    children,
    handleModalToggler,
    setModalContent,
  };
};
