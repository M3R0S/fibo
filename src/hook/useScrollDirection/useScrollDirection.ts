import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

const useScrollDirection = () => {
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [scrollDown, setScrollDown] = useState<boolean>(false);

  const handleDirectionDebounce = useMemo(
    () =>
      debounce(() => {
        if (scrollY > window.scrollY) {
          setScrollDown(false);
        } else if (scrollY < window.scrollY) {
          setScrollDown(true);
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

  return { scrollDown, scrollY };
};

export default useScrollDirection;
