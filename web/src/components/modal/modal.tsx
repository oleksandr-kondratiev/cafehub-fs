import Modal from "react-modal";

import { ModalProps } from "./modal.types";
import { ICONS } from "@constants/icons";

import { Button } from "@components/button/button";
import { H1 } from "@styles/text.styled";
import { ModalCaption } from "./modal.styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalWindow = (props: ModalProps) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <ModalCaption>
        <H1>{props.caption}</H1>
        <Button isIcon onClick={props.onRequestClose}>
          <img src={ICONS.close} alt="icon" />
        </Button>
      </ModalCaption>
      {props.children}
    </Modal>
  );
};
