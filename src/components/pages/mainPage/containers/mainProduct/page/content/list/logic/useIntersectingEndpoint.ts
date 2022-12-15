import { useCallback, useEffect } from "react";

import { IUseIntersectingEndpoint } from "../constants/types";

import { useAppDispatch } from "store";
import { useElementOnScreen } from "hook";
import {
    setEndLoadingMainProduct,
    setNavbarLinkActive,
    useLazyGetMainProductListQuery,
} from "store/slice";

export const useIntersectingEndpoint = ({ endpoint }: IUseIntersectingEndpoint) => {
    const [trigger, { data: list = [], isLoading, isError }] = useLazyGetMainProductListQuery();

    const dispatch = useAppDispatch();
    const { containerRef, isIntersecting } = useElementOnScreen({
        threshold: 0.3,
    });

    const onIntersecting = useCallback(() => {
        dispatch(setNavbarLinkActive(endpoint));
        !(list.length > 0) && trigger(endpoint);
        dispatch(setEndLoadingMainProduct({ endpoint, result: true }));
    }, [dispatch, endpoint, list.length, trigger]);

    useEffect(() => {
        if (isIntersecting) {
            onIntersecting();
        }
    }, [isIntersecting, onIntersecting]);

    return { containerRef, list, isLoading, isError };
};
