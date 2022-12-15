import { useNavigate } from "react-router-dom";

import { IUseOpenPopup } from "./constants/types";

export const useOpenPopup = ({ type, id }: IUseOpenPopup) => {
    const navigate = useNavigate();

    function onOpenPopup() {
        navigate(type ? `${type}/${id}/info` : `${id}/info`);
    }

    return { onOpenPopup };
};
