import { useRef, useEffect, useState, useCallback } from "react";
import { useAppSelector } from "store";
import { IOption } from "../types";

export const useElementOnScreen = (option: IOption) => {
  const containerRef = useRef(null);
  const { globalIsIntersecting } = useAppSelector((state) => state.global);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && globalIsIntersecting) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
      }
    },
    [globalIsIntersecting]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, option);
    const temp = containerRef.current;
    if (temp) {
      observer.observe(temp);
    }

    return () => {
      if (temp) {
        observer.unobserve(temp);
      }
    };
  }, [option, callback]);

  return { containerRef, isIntersecting };
};
