import { FC } from "react";

import cl from "./mainProductPopupPizzaItem.module.scss";
import { useActiveDoughInfo, useActiveSizeInfo } from "./logic";
import { IMainProductPopupPizzaItem } from "./constants/types";

import { ButtonPizzaApp, MainProductPopupPizzaInfo } from "./content";
import { ButtonAddInBasket } from "components/ui";

export const MainProductPopupPizzaItem: FC<IMainProductPopupPizzaItem> = (props) => {
    const { info } = props;

    const { setActiveSize, activeSize, size, totalPrice, weight } = useActiveSizeInfo({ ...props });

    const { activeDough, dough, setActiveDough } = useActiveDoughInfo();

    return (
        <>
            <MainProductPopupPizzaInfo dough={dough} weight={weight} size={size} />
            <p className={cl.info}>{info}</p>
            <ButtonPizzaApp
                activeDough={activeDough}
                activeSize={activeSize}
                setActiveDough={setActiveDough}
                setActiveSize={setActiveSize}
            />
            <ButtonAddInBasket
                {...props}
                weight={weight}
                size={size}
                dough={dough}
                isPopup={true}
                price={totalPrice}
                className={cl.add_basket}
            />
        </>
    );
};
