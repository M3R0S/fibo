import { FC, memo } from "react";
import cl from "./promotionPage.module.scss";
import { IPromotionContent } from "store";
import useOnOpenPopup from "./useOnOpenPopup";

const PromotionPageItem: FC<IPromotionContent> = ({ id, img, title, info }) => {
    const { onOpenPopup } = useOnOpenPopup({ id });

    return (
        <article className={[cl.card, cl.card_enabled].join(" ")}>
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

export default memo(PromotionPageItem);
