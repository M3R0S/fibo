import { useCallback, useEffect } from "react";
import { useAppDispatch } from "hook/useStore/useStore";
import useElementOnScreen from "hook/useElementOnScreen/useElementOnScreen";
import { setLinkActive } from "store/slice/navbar/navbarSlice";
import { IUseMainProductList } from "../types";
import { setEndLoadingProduct } from "store/slice/mainProduct/mainProductSlice";

const useMainProductList = ({ endpoint, trigger }: IUseMainProductList) => {
  const dispatch = useAppDispatch();
  const { containerRef, isIntersecting } = useElementOnScreen({
    threshold: 0.3,
  });

  const onIntersecting = useCallback(() => {
    dispatch(setLinkActive(endpoint));
    trigger(endpoint);
    dispatch(setEndLoadingProduct({ endpoint, result: true }));
  }, [dispatch, endpoint, trigger]);

  useEffect(() => {
    if (isIntersecting) {
      onIntersecting();
    }
  }, [isIntersecting, onIntersecting]);

  return { containerRef };
};

export default useMainProductList;
