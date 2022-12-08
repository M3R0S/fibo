import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

export const useScrollDirection = () => {
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);

  const handleDirectionDebounce = useMemo(
    () =>
      debounce(() => {
        if (scrollY > window.scrollY) {
          setIsScrollDown(false);
        } else if (scrollY < window.scrollY) {
          setIsScrollDown(true);
        }
        setScrollY(window.scrollY);
      }, 50),
    [scrollY]
  );

  const handleDirection = useCallback(handleDirectionDebounce, [handleDirectionDebounce]);

  useEffect(() => {
    window.addEventListener("scroll", handleDirection);
    return () => {
      window.removeEventListener("scroll", handleDirection);
    };
  }, [handleDirection]);

  return { isScrollDown, scrollY };
};
