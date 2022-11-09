import { FC, useState, useEffect, useCallback } from "react";
import cl from "../../../../../../assets/styles/pages/mainPage/mainProduct/popup/mainProductPopup.module.sass";
import {
  TMainProductItem,
  TPizzaDough,
  TPizzaSize,
} from "../../../../../../store/slice/mainProduct/types/mainProductTypes";
import ButtonAddBasket from "../../../../../ui/components/button/buttonAddBasket/ButtonAddBasket";
import ButtonPizzaContainer from "./button/ButtonPizzaContainer";
import PopupContentPizzaInfo from "./info/PopupContentPizzaInfo";

interface IPopupContentPizzaItem {
  onClose: () => void;
}

const PopupContentPizzaItem: FC<TMainProductItem & IPopupContentPizzaItem> = ({
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
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [dough, setDough] = useState<string>("");
  const [activeSize, setActiveSize] = useState<TPizzaSize>("medium");
  const [activeDough, setActiveDough] = useState<TPizzaDough>("classic");

  function changeActiveInfo(price: string, size: string, weight: string) {
    setTotalPrice(price);
    setSize(size);
    setWeight(weight);
  }

  const checkActiveSizeInfo = useCallback(() => {
    if (activeSize === "small") {
      changeActiveInfo(priceSmall, sizeSmall, weightSmall);
    }
    if (activeSize === "medium") {
      changeActiveInfo(priceMedium, sizeMedium, weightMedium);
    }
    if (activeSize === "big") {
      changeActiveInfo(priceBig, sizeBig, weightBig);
    }
  }, [
    activeSize,
    priceBig,
    priceMedium,
    priceSmall,
    sizeBig,
    sizeMedium,
    sizeSmall,
    weightBig,
    weightMedium,
    weightSmall,
  ]);

  useEffect(() => {
    checkActiveSizeInfo();
  }, [checkActiveSizeInfo]);

  const checkActiveDoughInfo = useCallback(() => {
    if (activeDough === "classic") {
      setDough("классическое");
    }
    if (activeDough === "slim") {
      setDough("тонкое");
    }
  }, [activeDough]);

  useEffect(() => {
    checkActiveDoughInfo();
  }, [checkActiveDoughInfo]);

  return (
    <>
      <PopupContentPizzaInfo dough={dough} weight={weight} size={size} />
      <p>{info}</p>
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
