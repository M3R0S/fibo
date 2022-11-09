import { FC, memo } from "react";
import cl from "../../../../../../../assets/styles/pages/mainPage/mainProduct/popup/mainProductPopup.module.sass";

import { TPizzaDough } from "../../../../../../../store/slice/mainProduct/types/mainProductTypes";

interface IButtonDoughPizzaItem {
  id: TPizzaDough;
  children: string;
  setActive: (dough: TPizzaDough) => void;
  active: TPizzaDough;
}

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
