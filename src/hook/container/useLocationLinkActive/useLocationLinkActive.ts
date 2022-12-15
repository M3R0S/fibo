import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { setNavbarLinkActive } from "store/slice";
import { useAppDispatch } from "store";
import { LOCATION_LINK_ACCORDANCE } from "./constants/const";

export const useLocationLinkActive = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const path = location.pathname.substring(1);
        const active = LOCATION_LINK_ACCORDANCE[path];
        dispatch(setNavbarLinkActive(active));
    }, [dispatch, location.pathname]);

    // const { ANTIPASTY, BAKALY, COMBO, CONTACT, DESERT, DRINK, ERROR, PROMOTION } = LOCATION_LINK;

    // useEffect(() => {
    //     const path = location.pathname;
    //     if (path === "/" + PROMOTION) {
    //         dispatch(setNavbarLinkActive(PROMOTION));
    //     }
    //     if (path === "/" + CONTACT) {
    //         dispatch(setNavbarLinkActive(CONTACT));
    //     }
    //     if (path === "/" + DRINK) {
    //         dispatch(setNavbarLinkActive(DRINK));
    //     }
    //     if (path === "/" + DESERT) {
    //         dispatch(setNavbarLinkActive(DESERT));
    //     }
    //     if (path === "/" + BAKALY) {
    //         dispatch(setNavbarLinkActive(BAKALY));
    //     }
    //     if (path === "/" + ANTIPASTY) {
    //         dispatch(setNavbarLinkActive(ANTIPASTY));
    //     }
    //     if (path === "/" + COMBO) {
    //         dispatch(setNavbarLinkActive(COMBO));
    //     }
    //     if (path === "/" + ERROR) {
    //         dispatch(setNavbarLinkActive(null));
    //     }
    // }, [ANTIPASTY, BAKALY, COMBO, CONTACT, DESERT, DRINK, ERROR, PROMOTION, dispatch, location]);
};
