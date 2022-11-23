import { useAppDispatch, useAppSelector } from "hook/useStore/useStore";
import { setOpenNavbarBurger } from "store/slice/navbar/navbarSlice";

const useButtonNavbarBurger = () => {
  const dispatch = useAppDispatch();

  const { openNavbarBurger } = useAppSelector((state) => state.navbar);

  function onClick() {
    dispatch(setOpenNavbarBurger(!openNavbarBurger));
  }
  return { openNavbarBurger, onClick };
};

export default useButtonNavbarBurger;
