import { useNavigate } from "react-router-dom";
import { IUseOnOpenPopup } from "./types";

const useOnOpenPopup = ({ id }: IUseOnOpenPopup) => {
  const navigate = useNavigate();

  function onOpenPopup() {
    navigate(`${id}/info`);
  }

  return { onOpenPopup };
};

export default useOnOpenPopup;
