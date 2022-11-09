import { FC, memo } from "react";
import cl from "../../../../../../../assets/styles/pages/mainPage/mainProduct/popup/mainProductPopup.module.sass";

import { TPizzaSize } from "../../../../../../../store/slice/mainProduct/types/mainProductTypes";

interface IButtonSizePizzaItem {
  id: TPizzaSize;
  children: string;
  active: TPizzaSize;
  setActive: (id: TPizzaSize) => void;
}

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
