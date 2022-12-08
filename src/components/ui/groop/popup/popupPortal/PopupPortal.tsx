import { FC } from "react";
import ReactDOM from "react-dom";

import { IPopupPortal } from "../types";
import { useCreatePopupPortal } from "./useCreatePopupPortal";

export const PopupPortal: FC<IPopupPortal> = ({ children }) => {
    const { container } = useCreatePopupPortal();

    return ReactDOM.createPortal(children, container);
};
