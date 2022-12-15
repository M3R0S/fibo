import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useClosePopup = () => {
    const [isOpened, setIsOpened] = useState<boolean>(true);
    const navigate = useNavigate();

    function closePopup() {
        setIsOpened(false);
        setTimeout(() => navigate(-1), 500);
    }

    return { closePopup, isOpened };
};

// todo ПЕРЕДЕЛАТЬ
