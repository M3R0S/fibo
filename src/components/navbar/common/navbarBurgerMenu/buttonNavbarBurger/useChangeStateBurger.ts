import { useAppDispatch, useAppSelector } from "store";
import { setOpenNavbarBurger } from "store/slice/navbar/navbarSlice";

export const useChangeStateBurger = () => {
    const dispatch = useAppDispatch();
    const { openNavbarBurger } = useAppSelector((state) => state.navbar);

    function changeStateBurger() {
        dispatch(setOpenNavbarBurger(!openNavbarBurger));
    }
    return { openNavbarBurger, changeStateBurger };
};
