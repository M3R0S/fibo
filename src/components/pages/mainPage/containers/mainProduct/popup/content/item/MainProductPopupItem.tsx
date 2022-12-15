import { FC } from "react";

import cl from "./mainProductPopupItem.module.scss";
import { IMainProductPopupItem, ITypeAccordance } from "./constants/types";

import { ButtonClosePopup } from "components/ui";
import { MainProductPopupDefaultItem, MainProductPopupPizzaItem } from "./content";

export const MainProductPopupItem: FC<IMainProductPopupItem> = (content) => {
    const { title, img, onClose, type } = content;

    const typeAccordance: ITypeAccordance = {
        pizza: <MainProductPopupPizzaItem {...content} />,
        pasta: <MainProductPopupDefaultItem {...content} />,
        salad: <MainProductPopupDefaultItem {...content} />,
        soup: <MainProductPopupDefaultItem {...content} />,
    };

    return (
        <article className={cl.content}>
            <img className={cl.content_img} src={img} alt="Продукт" />
            <main className={cl.main}>
                <h1>{title}</h1>
                {typeAccordance[type]}
            </main>
            <ButtonClosePopup className={cl.close} onClose={onClose} />
        </article>
    );
};
