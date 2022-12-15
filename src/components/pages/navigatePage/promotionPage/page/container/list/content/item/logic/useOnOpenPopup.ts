import { useNavigate } from "react-router-dom";

import { IUseOnOpenPopup } from "../constants/types";

export const useOnOpenPopup = ({ id }: IUseOnOpenPopup) => {
    const navigate = useNavigate();

    const patchPopup = `${id}/info`;

    function onOpenPopup() {
        navigate(patchPopup);
    }

    return { onOpenPopup };
};
