import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll, scroller } from "react-scroll";
import classNames from "classnames";

import cl from "../navbarMenuItem.module.scss";
import { IUseNavbarMenuItem } from "../constants/types";
import { SCROLLER_DURATION_MAIN_PRODUCT, SCROLLER_OFFSET_MAIN_PRODUCT } from "utils/globalConst";

import { useAppDispatch, useAppSelector } from "store";
import {
    setIsIntersectingMainProduct,
    setNavbarLinkActive,
    setOpenNavbarBurger,
} from "store/slice";

export const useSetLinkActive = (params: IUseNavbarMenuItem) => {
    const { endpoint, isAnchor, to } = params;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { isEndLoadingMainProduct } = useAppSelector((state) => state.mainProduct);
    const { navbarLinkActive } = useAppSelector((state) => state.navbar);

    const [linkClassName, setLinkClassName] = useState<string>(cl.link);

    function blockGlobalIntersecting() {
        dispatch(setIsIntersectingMainProduct(false));
        setTimeout(
            () => dispatch(setIsIntersectingMainProduct(true)),
            SCROLLER_DURATION_MAIN_PRODUCT
        );
    }

    function onSetLinkActive() {
        dispatch(setNavbarLinkActive(endpoint));
        dispatch(setOpenNavbarBurger(false));
    }

    const onClickInAnchor = () => {
        const pathname = location.pathname;
        const mainPage = "/main";

        if (pathname !== mainPage) {
            navigate(mainPage);
            blockGlobalIntersecting();
        }

        if (pathname === mainPage) {
            scroller.scrollTo(endpoint, {
                smooth: isEndLoadingMainProduct ? true : false,
                duration: isEndLoadingMainProduct ? SCROLLER_DURATION_MAIN_PRODUCT : 0,
                offset: SCROLLER_OFFSET_MAIN_PRODUCT,
            });
            blockGlobalIntersecting();
        }
    };

    function onClickInLink() {
        navigate(to);
        animateScroll.scrollToTop({
            duration: 0,
        });
    }

    function onClick() {
        onSetLinkActive();

        if (isAnchor) {
            onClickInAnchor();
        }

        if (!isAnchor) {
            onClickInLink();
        }
    }

    useEffect(() => {
        if (navbarLinkActive === endpoint) {
            setLinkClassName(classNames(cl.link, cl.link_active));
        }

        if (navbarLinkActive !== endpoint) {
            setLinkClassName(cl.link);
        }
    }, [endpoint, navbarLinkActive]);

    return { onClick, linkClassName };
};
