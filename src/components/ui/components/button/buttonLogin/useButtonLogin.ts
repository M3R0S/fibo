import { useAppDispatch } from "hook/useStore/useStore";
import { useLocation, useNavigate } from "react-router-dom";
import { setOpenNavbarBurger } from "store/slice/navbar/navbarSlice";

const useButtonLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  function onOpen() {
    navigate(`${location.pathname}/login`);
    dispatch(setOpenNavbarBurger(false));
  }

  return { onOpen };
};

export default useButtonLogin;
