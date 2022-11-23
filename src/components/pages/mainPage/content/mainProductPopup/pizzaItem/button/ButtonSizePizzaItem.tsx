import { FC, memo } from "react";
import cl from "./buttonPizza.module.sass"
import { IButtonSizePizzaItem } from "../types";

const ButtonSizePizzaItem: FC<IButtonSizePizzaItem> = ({
  id,
  children,
  active,
  setActive,
}) => {
  function buttonClickHandler() {
    setActive(id);
  }

  return (
    <button
      onClick={buttonClickHandler}
      className={
        active === id ? [cl.button_active, cl.button].join(" ") : cl.button
      }
    >
      {children}
    </button>
  );
};

export default memo(ButtonSizePizzaItem);
