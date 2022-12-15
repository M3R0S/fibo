import { FC } from "react";
import cl from "./promotionPopupContent.module.scss";
import { IPromotionPopupContent } from "./constants/types"; 

export const PromotionPopupContent: FC<IPromotionPopupContent> = (props) => {
    const { img, title, info, onClose } = props
    
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
