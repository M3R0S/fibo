import { FC } from "react";

import cl from "./buttonPizzaApp.module.scss";

import { PIZZA_DOUGH_BUTTON_ARRAY, PIZZA_SIZE_BUTTON_ARRAY } from "./constants/const";
import { IButtonPizzaApp } from "./constants/types";

import { ButtonDoughPizzaItem, ButtonSizePizzaItem } from "./content";

export const ButtonPizzaApp: FC<IButtonPizzaApp> = (props) => {
    const { activeDough, activeSize, setActiveDough, setActiveSize } = props;

    return (
        <>
            <div className={cl.button_size_container}>
                {PIZZA_SIZE_BUTTON_ARRAY.map(({ id, info }) => (
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
                {PIZZA_DOUGH_BUTTON_ARRAY.map(({ id, info }) => (
                    <ButtonDoughPizzaItem
                        key={id}
                        id={id}
                        setActive={setActiveDough}
                        active={activeDough}
                    >
                        {info}
                    </ButtonDoughPizzaItem>
                ))}
            </div>
        </>
    );
};
