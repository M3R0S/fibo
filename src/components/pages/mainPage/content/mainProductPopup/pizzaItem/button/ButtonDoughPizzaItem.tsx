import { FC, memo } from "react";
import cl from "./buttonPizza.module.sass"
import { IButtonDoughPizzaItem } from "../types";

const ButtonDoughPizzaItem: FC<IButtonDoughPizzaItem> = ({
  id,
  children,
  setActive,
  active,
}) => {
  function buttonClickHandler() {
    setActive(id);
  }

  return (
    <button
      className={
        active === id ? [cl.button_active, cl.button].join(" ") : cl.button
      }
      onClick={buttonClickHandler}
    >
      {children}
    </button>
  );
};

export default memo(ButtonDoughPizzaItem);
