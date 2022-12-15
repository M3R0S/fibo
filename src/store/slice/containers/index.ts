export {
    basketPageReducer,
    basketPageSlice,
} from "./basketPage/basketPageSlice";
export { globalReducer, globalSlice } from "./global/globalSlice";
export { userReducer, userSlice } from "./login/userSlice";
export {
    loginReducer,
    loginSlice,
} from "./login/loginSlice";
export {
    mainProductReducer,
    mainProductSlice,
} from "./mainProduct/mainProductSlice";
export {
    navbarReducer,
    navbarSlice,
} from "./navbar/navbarSlice";

export {
    loginApiReducer,
    loginApiReducerPath,
    loginApiMiddleware,
    loginApi,
} from "./login/loginApi";
export {
    mainProductApiReducer,
    mainProductApiReducerPath,
    mainProductApiMiddleware,
    mainProductApi,
} from "./mainProduct/mainProductApi";
export {
    newProductApiReducer,
    newProductApiReducerPath,
    newProductApiMiddleware,
    newProductApi,
} from "./newProduct/newProductApi";
export {
    promotionPageApiReducer,
    promotionPageApiReducerPath,
    promotionPageApiMiddleware,
    promotionPageApi,
} from "./promotionPage/promotionPageApi";