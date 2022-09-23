import { useCallback, useRef, useEffect } from "react";
import { debounce } from "../../helpers/debounce";
import { setIdActive } from "../../store/slice/navbarSlice";
import { useAppDispatch, useAppSelector } from "../storeHook/useStore";

interface IOption {
  threshold: number[] | number;
  root?: Element;
  rootMargin?: string;
}

const useElementOnScreen = (
  option: IOption,
  idEllement: string | null,
  debounceTime?: number
) => {
  const containerRef = useRef(null);
  const dispatch = useAppDispatch();
  const { idActive } = useAppSelector((state) => state.navbar);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(
    debounce((entries: Array<any>, observer: any) => {
      entries.forEach((entr: any) => {
        // console.log(entr.isIntersecting);
        if (idEllement || idActive) {
          if (entr.isIntersecting) {
            dispatch(setIdActive(idEllement));
          }
        } else {
          dispatch(setIdActive(null));
        }
      });
    }, debounceTime ?? 200),
    []
  );
  useEffect(() => {
    const observer = new IntersectionObserver(callback, option);
    const temp = containerRef.current;
    if (temp) observer.observe(temp);
  }, [containerRef.current]);

  return containerRef;
};

export default useElementOnScreen;
