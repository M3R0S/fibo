import { useAppDispatch } from "store";
import { useElementOnScreen } from "hook";
import { useEffect } from "react";
import { animateScroll } from "react-scroll";
import { setLinkActive } from "store/slice/navbar/navbarSlice";

const usePromotionList = () => {
    const dispatch = useAppDispatch();

    function linkToPromotionPage() {
        animateScroll.scrollToTop({
            duration: 0,
        });
    }

    const { containerRef, isIntersecting } = useElementOnScreen({
        threshold: 0.7,
    });

    useEffect(() => {
        if (isIntersecting) {
            dispatch(setLinkActive(null));
        }
    }, [dispatch, isIntersecting]);

    return { linkToPromotionPage, containerRef };
};

export default usePromotionList;
