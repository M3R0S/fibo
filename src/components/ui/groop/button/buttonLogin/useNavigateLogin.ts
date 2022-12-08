import { useLocation, useNavigate } from "react-router-dom";

export const useNavigateLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    function navigateLogin() {
        navigate(`${location.pathname}/login`);
    }

    return { navigateLogin };
};
