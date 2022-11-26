import cl from "./promotionPopupContainer.module.sass";
import { IUseSelectClassNamePromotionPopup } from "./types";

const useSelectClassNamePromotionPopup = ({
  contentLenght,
  isOpened,
  isFetching,
}: IUseSelectClassNamePromotionPopup) => {
  function selectClassName(): string | undefined {
    if (!isOpened) return [cl.content, cl.content_disabled].join(" ");
    if (isFetching) return [cl.content, cl.content_loading].join(" ");
    if (contentLenght > 0) return [cl.content, cl.content_enabled].join(" ");
  }

  return { selectClassName };
};

export default useSelectClassNamePromotionPopup;
