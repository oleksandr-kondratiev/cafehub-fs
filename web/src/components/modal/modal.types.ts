export interface ModalProps {
  children: React.ReactNode;
  caption: string;
  isOpen: boolean;

  onRequestClose: () => void;
}
