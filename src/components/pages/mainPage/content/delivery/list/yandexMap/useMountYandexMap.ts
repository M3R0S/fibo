import { useEffect, useState } from "react";
import { IYandexMap } from "../../constants/types";

export const useMountYandexMap = ({ isIntersecting }: IYandexMap) => {
  const [mountMap, setMountMap] = useState<boolean>(false);

  useEffect(() => {
    if (isIntersecting) {
      setMountMap(true);
    }
  }, [isIntersecting]);

  return { mountMap };
};
