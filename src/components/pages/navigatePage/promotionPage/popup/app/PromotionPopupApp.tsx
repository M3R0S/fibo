import { FC } from "react";
import classNames from "classnames";

import cl from "./promotionPopupApp.module.scss";

import { useGetParamsPopup, useClosePopup } from "hook";
import { useGetPromotionModalItemQuery } from "store/slice";

import { PromotionPopupContent } from "../container";
import { Error, Loader, PopupOverlay } from "components/ui";

export const PromotionPopupApp: FC = () => {
    const paramsPopup = useGetParamsPopup();
    const { closePopup, isOpened } = useClosePopup();

    const { data: content = [], isError, isFetching } = useGetPromotionModalItemQuery(paramsPopup);

    function selectClassName(): string {
        if (!isOpened) return classNames(cl.content, cl.content_disabled);
        if (isFetching) return classNames(cl.content, cl.content_loading);
        if (content.length > 0) return classNames(cl.content, cl.content_enabled);
        return cl.content;
    }

    return (
        <PopupOverlay isOpened={isOpened} onClose={closePopup}>
            <article className={selectClassName()}>
                {isError && (
                    <Error className={cl.error} isPopup={true} onClose={closePopup}>
                        Ошибка загрузки информации
                    </Error>
                )}
                {isFetching && <Loader className={cl.loader} />}
                {content.length > 0 && (
                    <PromotionPopupContent {...content[0]} onClose={closePopup} />
                )}
            </article>
        </PopupOverlay>
    );
};
