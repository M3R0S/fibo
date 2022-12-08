import { useAppDispatch } from "store";
import { setOpenNavbarBurger } from "store/slice/navbar/navbarSlice";

const useMainPageApp = () => {
    const dispatch = useAppDispatch();

    function onCloseNavbarBurger() {
        dispatch(setOpenNavbarBurger(false));
    }

    return { onCloseNavbarBurger };
};

export default useMainPageApp;
