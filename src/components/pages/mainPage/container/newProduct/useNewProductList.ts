import { useEffect } from "react";
import { useAppDispatch } from "store";
import { useElementOnScreen } from "hook";
import { setLinkActive } from "store/slice/navbar/navbarSlice";

const useNewProductList = () => {
    const dispatch = useAppDispatch();

    const { containerRef, isIntersecting } = useElementOnScreen({
        threshold: 0.7,
    });

    useEffect(() => {
        if (isIntersecting) {
            dispatch(setLinkActive(null));
        }
    }, [isIntersecting, dispatch]);

    return { containerRef };
};

export default useNewProductList;
