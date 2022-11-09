import { FC, memo } from "react";
import cl from "../../../../../../../assets/styles/pages/mainPage/mainProduct/popup/mainProductPopup.module.sass";

import {
  TPizzaDough,
  TPizzaSize,
} from "../../../../../../../store/slice/mainProduct/types/mainProductTypes";
import { pizzaDoughButtonArray, pizzaSizeButtonArray } from "../../const";
import ButtonDoughPizzaItem from "./ButtonDoughPizzaItem";
import ButtonSizePizzaItem from "./ButtonSizePizzaItem";

interface IButtonPizzaContainer {
  activeSize: TPizzaSize;
  setActiveSize: (activeSize: TPizzaSize) => void;
  activeDough: TPizzaDough;
  setActiveDough: (activeDough: TPizzaDough) => void;
}

const ButtonPizzaContainer: FC<IButtonPizzaContainer> = ({
  activeDough,
  activeSize,
  setActiveDough,
  setActiveSize,
}) => {
  return (
    <>
      <div className={cl.button_size_container}>
        {pizzaSizeButtonArray.map(({ id, info }) => (
          <ButtonSizePizzaItem
            key={id}
            id={id}
            active={activeSize}
            setActive={setActiveSize}
          >
            {info}
          </ButtonSizePizzaItem>
        ))}
      </div>
      <div className={cl.button_dough_container}>
        {pizzaDoughButtonArray.map(({ info, id }) => (
          <ButtonDoughPizzaItem
            key={id}
            setActive={setActiveDough}
            active={activeDough}
            id={id}
          >
            {info}
          </ButtonDoughPizzaItem>
        ))}
      </div>
    </>
  );
};

export default memo(ButtonPizzaContainer);
