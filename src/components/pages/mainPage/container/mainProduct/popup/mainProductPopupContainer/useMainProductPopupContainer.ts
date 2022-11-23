import cl from "./mainProductPopupContainer.module.sass";
import { IUseMainProductPopupContainer } from "../types";

const useMainProductPopupContainer = ({
  contentLenght,
  isLoading,
  isOpened,
}: IUseMainProductPopupContainer) => {

  function selectClassName(): string {
    if (!isOpened) {
      return [cl.container, cl.container_disabled].join(" ");
    }
    if (isLoading) {
      return [cl.container, cl.container_loading].join(" ");
    }
    if (contentLenght > 0) {
      return [cl.container, cl.container_enabled].join(" ");
    }
    return cl.container;
  }

  return { selectClassName };
};

export default useMainProductPopupContainer;
