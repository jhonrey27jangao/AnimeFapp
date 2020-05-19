export type ModalProps = {
  children?: any;
  show?: boolean;
  width?: "full" | "half";
  onClose?: () => void | undefined;
};
