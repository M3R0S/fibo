import { useCallback, useRef } from "react";
import { debounce } from "../../helpers/debounce";
import { setIdActive } from "../../store/slice/navbarSlice";
import { useAppDispatch } from "../storeHook/useStore";

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(
    debounce((entries: Array<any>, observer: any) => {
      entries.forEach((entr: any) => {
        if (entr.isIntersecting) {
          dispatch(setIdActive(idEllement));
          console.log(idEllement);
        }
      });
    }, debounceTime ?? 200),
    []
  );

  const observer = new IntersectionObserver(callback, option);
  const temp = containerRef.current;
  if (temp) observer.observe(temp);

  return containerRef;
};

export default useElementOnScreen;
