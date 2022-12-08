export { basketPageReducer } from "./basketPage/basketPageSlice";
export { globalReducer } from "./global/globalSlice";
export { userReducer } from "./login/userSlice";
export { mainProductReducer } from "./mainProduct/mainProductSlice";
export { navbarReducer } from "./navbar/navbarSlice";

export { loginApiReducer, loginApiReducerPath, loginApiMiddleware } from "./login/loginApi";
export {
    mainProductApiReducer,
    mainProductApiReducerPath,
    mainProductApiMiddleware,
} from "./mainProduct/mainProductApi";
export {
    newProductApiReducer,
    newProductApiReducerPath,
    newProductApiMiddleware,
} from "./newProduct/newProductApi";
export {
    promotionPageApiReducer,
    promotionPageApiReducerPath,
    promotionPageApiMiddleware,
} from "./promotionPage/promotionPageApi";
