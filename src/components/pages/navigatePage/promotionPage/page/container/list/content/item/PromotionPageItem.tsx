import { FC } from "react";
import classNames from "classnames";

import cl from "./promotionPage.module.scss";
import { useOnOpenPopup } from "./logic";
import { IPromotionContent } from "store/slice/constants/types";

export const PromotionPageItem: FC<IPromotionContent> = (props) => {
    const { id, img, title, info } = props;

    const { onOpenPopup } = useOnOpenPopup({ id });

    return (
        <article className={classNames(cl.card, cl.card_enabled)}>
            <img src={img} alt="Акция" />
            <div className={cl.info}>
                <h2>{title}</h2>
                <p>{info.length > 200 ? info.substring(0, 200) + "..." : info}</p>
            </div>
            <button className={cl.open_popup} onClick={onOpenPopup}>
                Посмотреть
            </button>
        </article>
    );
};
