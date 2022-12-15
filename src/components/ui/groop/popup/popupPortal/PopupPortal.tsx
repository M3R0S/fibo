import { FC } from "react";
import ReactDOM from "react-dom";

import { IPopupPortal } from "./constants/types";
import { useCreatePopupPortal } from "./logic";

export const PopupPortal: FC<IPopupPortal> = ({ children }) => {
    const { container } = useCreatePopupPortal();

    return ReactDOM.createPortal(children, container);
};
