import ButtonClosePopup from "components/ui";
import { FC } from "react";
import LoginPopupForm from "../content/LoginPopupForm";
import cl from "./loginPopupContainer.module.scss";
import { ILoginPopupContainer } from "./types";

const LoginPopupContainer: FC<ILoginPopupContainer> = ({ onClose }) => {
    return (
        <section className={cl.container}>
            <LoginPopupForm />
            <ButtonClosePopup className={cl.close} onClose={onClose} />
        </section>
    );
};

export default LoginPopupContainer;
