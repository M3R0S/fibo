export {
    basketPageReducer,
    basketPageSlice,
    changeBasketPromoCodeRatio,
    clearBasket,
    decrementQuantityBasketItem,
    deleteBasketItem,
    incrementQuantityBasketItem,
    postBasketItem,
    setBasketPromoCodeActive,
    setQuantityBasketItem,
} from "./basketPage/basketPageSlice";
export { globalReducer, globalSlice, setGlobalScreenWidth } from "./global/globalSlice";
export { userReducer, userSlice, setUser } from "./login/userSlice";
export { loginReducer, loginSlice, setIsOpenedLoginPopup, setIsLogin } from "./login/loginSlice";
export {
    mainProductReducer,
    mainProductSlice,
    setEndLoadingMainProduct,
    setIsEndLoadingMainProduct,
    setIsIntersectingMainProduct,
} from "./mainProduct/mainProductSlice";
export {
    navbarReducer,
    navbarSlice,
    setNavbarLinkActive,
    setOpenNavbarBurger,
} from "./navbar/navbarSlice";

export {
    loginApiReducer,
    loginApiReducerPath,
    loginApiMiddleware,
    loginApi,
    useLazyGetUsersQuery,
    usePostUserMutation,
} from "./login/loginApi";
export {
    mainProductApiReducer,
    mainProductApiReducerPath,
    mainProductApiMiddleware,
    mainProductApi,
    useGetMainProductPopupDefaultQuery,
    useLazyGetMainProductListQuery,
} from "./mainProduct/mainProductApi";
export {
    newProductApiReducer,
    newProductApiReducerPath,
    newProductApiMiddleware,
    newProductApi,
    useGetNewProductListQuery,
} from "./newProduct/newProductApi";
export {
    promotionPageApiReducer,
    promotionPageApiReducerPath,
    promotionPageApiMiddleware,
    promotionPageApi,
    useGetPromotionModalItemQuery,
    useGetPromotionPageListQuery,
} from "./promotionPage/promotionPageApi";
