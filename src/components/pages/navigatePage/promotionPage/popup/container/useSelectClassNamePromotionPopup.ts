import cl from "./promotionPopupContainer.module.sass";
import { IUseSelectClassNamePromotionPopup } from "./types";

const useSelectClassNamePromotionPopup = ({
  contentLenght,
  isLoading,
  isOpened,
}: IUseSelectClassNamePromotionPopup) => {
  function selectClassName(): string {
    if (!isOpened) return [cl.content, cl.content_disabled].join(" ");
    if (isLoading) return [cl.content, cl.content_loading].join(" ");
    if (contentLenght > 0) return [cl.content, cl.content_enabled].join(" ");
    return cl.content;
  }

  return { selectClassName };
};

export default useSelectClassNamePromotionPopup;
