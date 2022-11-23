import useScrollDirection from "hook/useScrollDirection/useScrollDirection";
import { useCallback, useEffect, useState } from "react";

const useNavbarBigScreen = () => {
  const { scrollDown } = useScrollDirection();

  const [isAnimateScrollDown, setIsAnimateScrollDown] = useState<boolean>(false);

  const onSetIsMounted = useCallback(() => {
    if (scrollDown) {
      setTimeout(() => {
        setIsAnimateScrollDown(true);
      }, 200);
    }
    if (!scrollDown) {
      setIsAnimateScrollDown(false);
    }
  }, [scrollDown]);

  useEffect(() => {
    onSetIsMounted();
  }, [onSetIsMounted]);

  return { scrollDown, isAnimateScrollDown };
};

export default useNavbarBigScreen;
