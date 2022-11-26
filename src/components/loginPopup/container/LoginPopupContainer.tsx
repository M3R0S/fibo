import ButtonClosePopup from "components/ui/components/button/buttonClosePopup/ButtonClosePopup";
import { FC } from "react";
import LoginPopupForm from "../content/LoginPopupForm";
import cl from "./loginPopupContainer.module.sass";
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
