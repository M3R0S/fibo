import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  const debounceResize = useMemo(
    () =>
      debounce(() => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
      }, 200),
    []
  );

  const resize = useCallback(debounceResize, [debounceResize]);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return { screenWidth, screenHeight };
};

export default useScreenSize;
