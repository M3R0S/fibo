import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { animateScroll, scroller } from "react-scroll";
import classNames from "classnames";

import cl from "./navbarMenuItem.module.scss";
import { IUseNavbarMenuItem } from "components/navbar/common/types";
import { TIMEOUT_ANIMATION_SCROLL_ENDPOINTS } from "components/navbar/common/const";

import { useAppDispatch, useAppSelector } from "store";
import {
    setIsIntersectingMainProduct,
    setNavbarLinkActive,
    setOpenNavbarBurger,
} from "store/slice";

export const useSetLinkActive = ({ endpoint, isAnchor, to }: IUseNavbarMenuItem) => {
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
            TIMEOUT_ANIMATION_SCROLL_ENDPOINTS
        );
    }

    function onSetLinkActive() {
        dispatch(setNavbarLinkActive(endpoint));
        dispatch(setOpenNavbarBurger(false));
    }

    function onClickInAnchor() {
        const pathname = location.pathname;
        const mainPage = "/main";

        if (pathname !== mainPage) {
            navigate(mainPage);
        }

        if (pathname === mainPage) {
            scroller.scrollTo(endpoint, {
                smooth: isEndLoadingMainProduct ? true : false,
                duration: isEndLoadingMainProduct ? TIMEOUT_ANIMATION_SCROLL_ENDPOINTS : 0,
                offset: -80,
            });
            blockGlobalIntersecting();
        }
    }

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
