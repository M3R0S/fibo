import { FC } from "react";
import classNames from "classnames";

import cl from "./loginPopupApp.module.scss";

import { useClosePopup } from "hook";

import { ButtonClosePopup, PopupOverlay } from "components/ui";
import { LoginPopupForm } from "../containers";

export const LoginPopupApp: FC = () => {
    const { closePopup, isOpened } = useClosePopup();

    function selectClassName() {
        if (isOpened) {
            return classNames(cl.container, cl.container_active);
        }
        if (!isOpened) {
            return classNames(cl.container, cl.container_disabled);
        }
        return cl.container;
    }

    return (
        <PopupOverlay isOpened={isOpened} onClose={closePopup}>
            <section className={selectClassName()}>
                <LoginPopupForm />
                <ButtonClosePopup className={cl.close} onClose={closePopup} />
            </section>
        </PopupOverlay>
    );
};
