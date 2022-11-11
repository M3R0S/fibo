import { FC } from "react";
import cl from "../../../../../assets/styles/pages/mainPage/mainProduct/popup/mainProductPopup.module.sass";
import Loader from "../../../../ui/assets/loader/Loader";
import Error from "../../../../ui/assets/error/Error";
import MainProductPopupContent from "./MainProductPopupContent";
import { useGetMainProductPopupDefaultQuery } from "../../../../../store/slice/mainProduct/mainProductApi";
import { TPopupQueryParams } from "../../../../../store/globalTypes/globalStoreSliceType";

interface IMainProductPopupContainer {
  onClose: () => void;
  params: TPopupQueryParams;
  isOpened: boolean;
}

const MainProductPopupContainer: FC<IMainProductPopupContainer> = ({
  onClose,
  params,
  isOpened,
}) => {
  const {
    data: content = [],
    isLoading,
    isError,
  } = useGetMainProductPopupDefaultQuery(params);

  function selectClassName(): string {
    if (!isOpened)
      return [cl.wrapper_content, cl.wrapper_content_disabled].join(" ");
    if (isLoading)
      return [cl.wrapper_content, cl.wrapper_content_loading].join(" ");
    if (content.length > 0)
      return [cl.wrapper_content, cl.wrapper_content_enabled].join(" ");
    return cl.wrapper_content;
  }

  return (
    <div className={selectClassName()}>
      {isError && (
        <Error className={cl.error} isPopup={true}>
          Ошибка загрузки
        </Error>
      )}
      {isLoading && <Loader className={cl.loader} />}
      {content.length > 0 && (
        <MainProductPopupContent {...content[0]} onClose={onClose} />
      )}
    </div>
  );
};

export default MainProductPopupContainer;
