import { FC } from "react";
import cl from "./mainProductPopupContainer.module.scss";
import Loader from "components/ui/assets/loader/Loader";
import Error from "components/ui/assets/error/Error";
import MainProductPopupContent from "../../../../content/mainProductPopup/MainProductPopupContent";
import { useGetMainProductPopupDefaultQuery } from "store/slice/mainProduct/mainProductApi";
import useMainProductPopupContainer from "./useMainProductPopupContainer";
import { IMainProductPopupContainer } from "../types";

const MainProductPopupContainer: FC<IMainProductPopupContainer> = ({
    onClose,
    params,
    isOpened,
}) => {
    const { data: content = [], isLoading, isError } = useGetMainProductPopupDefaultQuery(params);

    const { selectClassName } = useMainProductPopupContainer({
        contentLenght: content.length,
        isLoading,
        isOpened,
    });

    return (
        <div className={selectClassName()}>
            {isError && (
                <Error className={cl.error} isPopup={true}>
                    Ошибка загрузки
                </Error>
            )}
            {isLoading && <Loader className={cl.loader} />}
            {content.length > 0 && <MainProductPopupContent {...content[0]} onClose={onClose} />}
        </div>
    );
};

export default MainProductPopupContainer;
