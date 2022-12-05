import ButtonClosePopup from "components/ui/components/button/buttonClosePopup/ButtonClosePopup";
import { FC } from "react";
import LoginPopupForm from "components/loginPopup/content/login/LoginPopupForm";
import cl from "./loginPopupContainer.module.sass";
import { ILoginPopupContainer } from "./types";
import { useAppSelector } from "hook/useStore/useStore";
import LogoutPopup from "../content/logout/LogoutPopup";

const LoginPopupContainer: FC<ILoginPopupContainer> = ({ onClose, isOpened }) => {
  const { isAuthorized } = useAppSelector((state) => state.user);

  function selectClassName(): string {
    if (!isOpened) return [cl.container, cl.container_disabled].join(" ");
    if (isOpened) return [cl.container, cl.container_enabled].join(" ");
    return cl.content;
  }

  return (
    <section className={selectClassName()}>
      { isAuthorized ? <LogoutPopup /> : <LoginPopupForm onClose={onClose} />}
      <ButtonClosePopup className={cl.close} onClose={onClose} />
    </section>
  );
};

export default LoginPopupContainer;
