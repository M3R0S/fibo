import { FC } from "react";

import cl from "./loginPopupContainer.module.sass";

import { useClosePopup } from "hook";

import { ButtonClosePopup, PopupOverlay } from "components/ui";
import { LoginPopupForm } from "./form/LoginPopupForm";

export const LoginPopupApp: FC = () => {
    const { closePopup, isOpened } = useClosePopup();

    return (
        <PopupOverlay isOpened={isOpened} onClose={closePopup}>
            <section className={cl.container}>
                <LoginPopupForm />
                <ButtonClosePopup className={cl.close} onClose={closePopup} />
            </section>
        </PopupOverlay>
    );
};
