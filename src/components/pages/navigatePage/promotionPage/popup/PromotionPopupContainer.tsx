import { FC } from "react";
import cl from "../../../../../assets/styles/pages/promotionPage/popup/promotionPopup.module.sass";
import { useGetPromotionModalItemQuery } from "../../../../../store/slice/promotion/promotionApi";
import { TPopupQueryParams } from "../../../../../store/types/globalStoreSliceType";
import Error from "../../../../ui/assets/error/Error";
import Loader from "../../../../ui/assets/loader/Loader";
import PromotionPopupContent from "./PromotionPopupContent";

interface IPromotionPopupContainer {
  isOpened: boolean;
  onClose: () => void;
  params: TPopupQueryParams;
}

const PromotionPopupContainer: FC<IPromotionPopupContainer> = ({
  isOpened,
  onClose,
  params,
}) => {
  const {
    data: content = [],
    isLoading,
    isError,
  } = useGetPromotionModalItemQuery(params);

  function selectClassName(): string {
    if (!isOpened) return [cl.content, cl.content_disabled].join(" ");
    if (isLoading) return [cl.content, cl.content_loading].join(" ");
    if (content.length > 0) return [cl.content, cl.content_enabled].join(" ");
    return cl.content;
  }

  return (
    <article className={selectClassName()}>
      {isError && (
        <Error className={cl.error} isPopup={true} onClose={onClose}>
          Ошибка загрузки информации
        </Error>
      )}
      {isLoading && <Loader className={cl.loader} />}
      {content.length > 0 && (
        <PromotionPopupContent {...content[0]} onClose={onClose} />
      )}
    </article>
  );
};

export default PromotionPopupContainer;
