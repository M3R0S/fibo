import { useCallback, useEffect, useState } from "react";
import { TPizzaSize } from "store/slice/mainProduct/types";
import { IUseActiveSizeInfo } from "./types";

const useActiveSizeInfo = ({
  priceBig,
  priceMedium,
  priceSmall,
  sizeBig,
  sizeMedium,
  sizeSmall,
  weightBig,
  weightMedium,
  weightSmall,
}: IUseActiveSizeInfo) => {
  const [activeSize, setActiveSize] = useState<TPizzaSize>("medium");
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

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

  return { activeSize, setActiveSize, totalPrice, size, weight };
};

export default useActiveSizeInfo;
