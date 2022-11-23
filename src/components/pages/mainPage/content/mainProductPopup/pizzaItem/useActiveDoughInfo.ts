import { useCallback, useEffect, useState } from "react";
import { TPizzaDough } from "store/slice/mainProduct/types";

const useActiveDoughInfo = () => {
  const [dough, setDough] = useState<string>("");
  const [activeDough, setActiveDough] = useState<TPizzaDough>("classic");

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

  return { dough, setActiveDough, activeDough };
};

export default useActiveDoughInfo;
