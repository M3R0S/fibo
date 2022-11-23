import { useEffect, useState } from "react";
import { TBasketPageItemInfo } from "./types";

const useBasketPageItemInfo = ({dough, info, size, typeProduct, weight} : TBasketPageItemInfo) => {
  const [isFullInfo, setIsFullInfo] = useState<boolean>(false);
  const [exactlyInfo, setExactlyInfo] = useState<string>(info.substring(0, 30) + "...");
  const [showExactlyInfo, setShowExactyInfo] = useState<string>("Показать весь состав");
  const [footerInfo, setFooterInfo] = useState<string>(`${weight} г.`);

  useEffect(() => {
    if (typeProduct === "pizza") {
      setFooterInfo(`${dough} тесто. ${size} см. ${weight} г.`);
    }
  }, [dough, size, typeProduct, weight]);

  function onSetExactlyInfo() {
    if (!isFullInfo) {
      setIsFullInfo(true);
      setExactlyInfo(info);
      setShowExactyInfo("Свернуть");
    } else {
      setIsFullInfo(false);
      setExactlyInfo(info.substring(0, 30) + "...");
      setShowExactyInfo("Показать весь состав");
    }
  }

  return {exactlyInfo, showExactlyInfo, footerInfo, onSetExactlyInfo}

};

export default useBasketPageItemInfo;
