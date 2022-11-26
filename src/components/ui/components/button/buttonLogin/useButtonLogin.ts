import { useLocation, useNavigate } from "react-router-dom";

const useButtonLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function onOpen() {
    navigate(`${location.pathname}/login`);
  }

  return { onOpen };
};

export default useButtonLogin;
