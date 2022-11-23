import { useNavigate } from "react-router-dom";

const useGoBack = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return {goBack};
};

export default useGoBack;
