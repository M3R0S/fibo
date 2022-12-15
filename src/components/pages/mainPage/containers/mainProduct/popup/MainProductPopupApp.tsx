import { FC } from "react";
import classNames from "classnames";

import cl from "./mainProductPopupApp.module.scss";

import { useClosePopup, useGetParamsPopup } from "hook";
import { useGetMainProductPopupDefaultQuery } from "store/slice";

import { Error, Loader, PopupOverlay } from "components/ui";
import { MainProductPopupItem } from "./content";

export const MainProductPopupApp: FC = () => {
    const params = useGetParamsPopup();

    const { data: content = [], isFetching, isError } = useGetMainProductPopupDefaultQuery(params);

    const { closePopup, isOpened } = useClosePopup();

    function selectClassName(): string {
        if (!isOpened) {
            return classNames(cl.container, cl.container_disabled);
        }
        if (isFetching) {
            return classNames(cl.container, cl.container_loading);
        }
        if (content.length > 0) {
            return classNames(cl.container, cl.container_enabled);
        }
        return cl.container;
    }

    return (
        <PopupOverlay isOpened={isOpened} onClose={closePopup}>
            <div className={selectClassName()}>
                {isError && (
                    <Error className={cl.error} isPopup={true}>
                        Ошибка загрузки
                    </Error>
                )}
                {isFetching && <Loader className={cl.loader} />}
                {content.length > 0 && (
                    <MainProductPopupItem {...content[0]} onClose={closePopup} />
                )}
            </div>
        </PopupOverlay>
    );
};
