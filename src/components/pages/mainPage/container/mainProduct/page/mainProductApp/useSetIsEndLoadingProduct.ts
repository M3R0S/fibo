import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hook/useStore/useStore";
import { setIsEndLoadingProduct } from "store/slice/mainProduct/mainProductSlice";

const useSetIsEndLoadingProduct = () => {
  const dispatch = useAppDispatch();
  const { endLoadingProduct } = useAppSelector((state) => state.mainProduct);
  const { pasta, pizza, salad, soup } = endLoadingProduct;

  const onSetIsEndLoadingProduct = useCallback(
    (loading: boolean) => {
      if (pasta && pizza && salad && soup) {
        dispatch(setIsEndLoadingProduct(loading));
      }
    },
    [dispatch, pasta, pizza, salad, soup]
  );

  useEffect(() => {
    onSetIsEndLoadingProduct(true);
    return () => {
      onSetIsEndLoadingProduct(false);
    };
  }, [onSetIsEndLoadingProduct]);
};

export default useSetIsEndLoadingProduct;
