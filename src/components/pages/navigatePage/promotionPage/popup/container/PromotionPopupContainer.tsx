import { FC } from "react";
import cl from "./promotionPopupContainer.module.sass";
import { useGetPromotionModalItemQuery } from "store/slice/promotionPage/promotionPageApi";
import Error from "components/ui/assets/error/Error";
import Loader from "components/ui/assets/loader/Loader";
import PromotionPopupContent from "../content/PromotionPopupContent";
import { IPromotionPopupContainer } from "./types";

const PromotionPopupContainer: FC<IPromotionPopupContainer> = ({ onClose, params, isOpened }) => {
  const {
    data: content = [],
    isError,
    isFetching,
  } = useGetPromotionModalItemQuery(params);

  function selectClassName(): string | undefined {
    if (!isOpened) return [cl.content, cl.content_disabled].join(" ");
    if (isFetching) return [cl.content, cl.content_loading].join(" ");
    if (content.length > 0) return [cl.content, cl.content_enabled].join(" ");
  }

  return (
    <article className={selectClassName()}>
      {isError && (
        <Error className={cl.error} isPopup={true} onClose={onClose}>
          Ошибка загрузки информации
        </Error>
      )}
      {isFetching && <Loader className={cl.loader} />}
      {content.length > 0 && <PromotionPopupContent {...content[0]} onClose={onClose} />}
    </article>
  );
};

export default PromotionPopupContainer;
