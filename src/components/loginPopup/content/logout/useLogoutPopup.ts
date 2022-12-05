import { setIsAuthorized } from "store/slice/login/userSlice";
import { useAppDispatch } from "hook/useStore/useStore";

const useLogoutPopup = () => {
  const dispatch = useAppDispatch();

  function onLogout() {
    dispatch(setIsAuthorized(false));
  }

  return { onLogout };
};

export default useLogoutPopup;
