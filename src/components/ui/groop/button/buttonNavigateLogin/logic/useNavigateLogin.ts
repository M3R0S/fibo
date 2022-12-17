import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch } from "store";
import { setIsAuthorized } from "store/slice";

export const useNavigateLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch()

    function navigateLogin() {
        navigate(`${location.pathname}/login`);
    }

    function logout() {
        dispatch(setIsAuthorized(false))
    }

    return { navigateLogin, logout };
};
