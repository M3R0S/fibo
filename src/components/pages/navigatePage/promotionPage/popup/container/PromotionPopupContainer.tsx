import { FC, useEffect } from "react";
import cl from "./promotionPopupContainer.module.sass";
import { useGetPromotionModalItemQuery } from "store/slice/promotionPage/promotionPageApi";
import Error from "components/ui/assets/error/Error";
import Loader from "components/ui/assets/loader/Loader";
import PromotionPopupContent from "../content/PromotionPopupContent";
import { IPromotionPopupContainer } from "./types";
import useSelectClassNamePromotionPopup from "./useSelectClassNamePromotionPopup";

const PromotionPopupContainer: FC<IPromotionPopupContainer> = ({ onClose, params, isOpened }) => {
  const {
    data: content = [],
    isError,
    isFetching,
  } = useGetPromotionModalItemQuery(params);
  const { selectClassName } = useSelectClassNamePromotionPopup({
    contentLenght: content.length,
    isOpened,
    isFetching,
  });

  useEffect(() => {
    console.log(isFetching);
  }, [isFetching]);

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
