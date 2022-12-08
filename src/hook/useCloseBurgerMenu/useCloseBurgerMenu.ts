import { useAppDispatch } from "store";
import { setOpenNavbarBurger } from "store/slice/navbar/navbarSlice";

export const useCloseBurgerMenu = () => {
    const dispatch = useAppDispatch();

    function closeBurgerMenu() {
        dispatch(setOpenNavbarBurger(false));
    }

    return { closeBurgerMenu };
};
