export {
    changeBasketPromoCodeRatio,
    clearBasket,
    decrementQuantityBasketItem,
    deleteBasketItem,
    incrementQuantityBasketItem,
    postBasketItem,
    setBasketPromoCodeActive,
    setQuantityBasketItem,
} from "./containers/basketPage/basketPageSlice";
export { setGlobalScreenWidth } from "./containers/global/globalSlice";
export { setUser } from "./containers/login/userSlice";
export { setIsOpenedLoginPopup, setIsLogin } from "./containers/login/loginSlice";
export {
    setEndLoadingMainProduct,
    setIsEndLoadingMainProduct,
    setIsIntersectingMainProduct,
} from "./containers/mainProduct/mainProductSlice";
export { setNavbarLinkActive, setOpenNavbarBurger } from "./containers/navbar/navbarSlice";

export { useLazyGetUsersQuery, usePostUserMutation } from "./containers/login/loginApi";
export {
    useGetMainProductPopupDefaultQuery,
    useLazyGetMainProductListQuery,
} from "./containers/mainProduct/mainProductApi";
export { useGetNewProductListQuery } from "./containers/newProduct/newProductApi";
export {
    useGetPromotionModalItemQuery,
    useGetPromotionPageListQuery,
} from "./containers/promotionPage/promotionPageApi";
