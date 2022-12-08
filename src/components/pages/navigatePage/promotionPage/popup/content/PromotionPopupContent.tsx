import { FC, memo } from "react";
import cl from "./promotionPopupContent.module.scss";
import { IPromotionPopupContent } from "./types";

const PromotionPopupContent: FC<IPromotionPopupContent> = ({ img, title, info, onClose }) => {
    return (
        <>
            <img className={cl.main_img} src={img} alt="Изображение акции" />
            <div className={cl.card}>
                <h2>{title}</h2>
                <p>{info}</p>
                <button className={cl.closed} onClick={onClose}>
                    Закрыть
                </button>
            </div>
        </>
    );
};

export default memo(PromotionPopupContent);
