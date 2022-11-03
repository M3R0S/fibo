import React, { FC } from "react";
import { useGetPromotionModalItemQuery } from "../../../../../store/slice/promotion/promotionApi";
import { TPromotionQueryParams } from "../../../../../store/slice/promotion/types/promotionTypes";
import Error from "../../../../ui/assets/error/Error";
import Loader from "../../../../ui/assets/loader/Loader";
import animation from "../../../../ui/components/popup/popup.module.sass";
import cl from "../../../../../assets/styles/pages/promotionPage/popup/promotionPopup.module.sass";
import PromotionPopupContent from "./PromotionPopupContent";

interface IPromotionPopupContainer {
  isOpened: boolean;
  onClose: () => void;
  endpoints: TPromotionQueryParams;
}

const PromotionPopupContainer: FC<IPromotionPopupContainer> = ({
  isOpened,
  onClose,
  endpoints,
}) => {
  const {
    data: content,
    isLoading,
    isError,
  } = useGetPromotionModalItemQuery(endpoints);

  function selectClassName(): string {
    if (!isOpened) return [cl.content, animation.content_disabled].join(" ");
    if (isLoading) return [cl.content, animation.content_loading].join(" ");
    if (content) return [cl.content, animation.content_enabled].join(" ");
    return cl.content;
  }

  return (
    <article className={selectClassName()}>
      {isError && (
        <Error className={cl.Error} isPopup={true} onClose={onClose}>
          Ошибка загрузки информации
        </Error>
      )}
      {isLoading && <Loader className={cl.loader} />}
      {content && <PromotionPopupContent {...content} onClose={onClose} />}
    </article>
  );
};

export default PromotionPopupContainer;
