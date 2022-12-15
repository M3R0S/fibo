import { FC } from "react";

import cl from "./mainProductPopupDefaultItem.module.scss";
import { IMainProductPopupDefaultItem } from "./constants/types";

import { ButtonAddInBasket } from "components/ui";

export const MainProductPopupDefaultItem: FC<IMainProductPopupDefaultItem> = (props) => {
    const { info, weight } = props;
    return (
        <>
            <p className={cl.info}>{`${info} ${weight} г.`}</p>
            <ButtonAddInBasket {...props} isPopup={true} className={cl.add_basket} />
        </>
    );
};
