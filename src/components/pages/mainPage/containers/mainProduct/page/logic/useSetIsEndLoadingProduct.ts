import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store";
import { setIsEndLoadingMainProduct } from "store/slice";

export const useSetIsEndLoadingProduct = () => {
    const dispatch = useAppDispatch();
    const { endLoadingMainProduct } = useAppSelector((state) => state.mainProduct);
    const { pasta, pizza, salad, soup } = endLoadingMainProduct;

    const onSetIsEndLoadingProduct = useCallback(
        (loading: boolean) => {
            if (pasta && pizza && salad && soup) {
                dispatch(setIsEndLoadingMainProduct(loading));
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
