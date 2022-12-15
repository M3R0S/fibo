import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

import { SCROLLER_OFFSET_MAIN_PRODUCT, SCROLLER_DURATION_MAIN_PRODUCT } from "utils/globalConst";

import { useAppSelector } from "store";

export const useSetLinkActiveInMount = () => {
    const { navbarLinkActive } = useAppSelector((state) => state.navbar);
    const [active] = useState(navbarLinkActive);

    useEffect(() => {
        active &&
            setTimeout(() => {
                scroller.scrollTo(active, {
                    offset: SCROLLER_OFFSET_MAIN_PRODUCT,
                });
            }, SCROLLER_DURATION_MAIN_PRODUCT);
        console.log(active);
    }, [active]);
};
