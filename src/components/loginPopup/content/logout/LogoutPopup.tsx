import { FC } from "react";
import cl from "./logoutPopup.module.sass";
import useLogoutPopup from "./useLogoutPopup";

const LogoutPopup: FC = () => {
  const { onLogout } = useLogoutPopup();
  return (
    <div className={cl.container}>
      <h1>Вы уверены, что хотите выйти из учётной записи?</h1>
      <button onClick={onLogout}>Подтвердить</button>
    </div>
  );
};

export default LogoutPopup;
