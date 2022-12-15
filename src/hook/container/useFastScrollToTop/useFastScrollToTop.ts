import { animateScroll } from "react-scroll";

export const useFastScrollToTop = () => {
    const fastScrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 0,
        });
    };

    return { fastScrollToTop };
};
