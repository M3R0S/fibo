import { FC } from "react";
import cl from "./popupContentPizzaItem.module.scss";
import { IMainProductItem } from "store";
import ButtonAddBasket from "components/ui/components/button/buttonAddBasket/ButtonAddBasket";
import ButtonPizzaContainer from "./button/ButtonPizzaContainer";
import PopupContentPizzaInfo from "./info/PopupContentPizzaInfo";
import useActiveSizeInfo from "./useActiveSizeInfo";
import useActiveDoughInfo from "./useActiveDoughInfo";
import { IPopupContentPizzaItem } from "./types";

const PopupContentPizzaItem: FC<IMainProductItem & IPopupContentPizzaItem> = ({
    title,
    info,
    id,
    img,
    type,
    priceBig,
    priceMedium,
    priceSmall,
    sizeBig,
    sizeMedium,
    sizeSmall,
    weightBig,
    weightMedium,
    weightSmall,
    onClose,
}) => {
    const { setActiveSize, activeSize, size, totalPrice, weight } = useActiveSizeInfo({
        priceBig,
        priceMedium,
        priceSmall,
        sizeBig,
        sizeMedium,
        sizeSmall,
        weightBig,
        weightMedium,
        weightSmall,
    });

    const { activeDough, dough, setActiveDough } = useActiveDoughInfo();

    return (
        <>
            <PopupContentPizzaInfo dough={dough} weight={weight} size={size} />
            <p className={cl.info}>{info}</p>
            <ButtonPizzaContainer
                activeDough={activeDough}
                activeSize={activeSize}
                setActiveDough={setActiveDough}
                setActiveSize={setActiveSize}
            />
            <ButtonAddBasket
                id={id}
                img={img}
                type={type}
                info={info}
                price={totalPrice}
                title={title}
                weight={weight}
                dough={dough}
                size={size}
                className={cl.add_basket}
                onClose={onClose}
            />
        </>
    );
};

export default PopupContentPizzaItem;
