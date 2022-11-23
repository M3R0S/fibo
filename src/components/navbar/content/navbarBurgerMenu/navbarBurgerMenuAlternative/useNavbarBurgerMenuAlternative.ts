import { useAppDispatch, useAppSelector } from "hook/useStore/useStore";
import { setOpenNavbarBurger } from "store/slice/navbar/navbarSlice";

const useNavbarBurgerMenuAlternative = () => {
  const dispatch = useAppDispatch();
  const { openNavbarBurger } = useAppSelector((state) => state.navbar);

  function onClose() {
    dispatch(setOpenNavbarBurger(false));
  }
  return { onClose, openNavbarBurger };
};

export default useNavbarBurgerMenuAlternative;
