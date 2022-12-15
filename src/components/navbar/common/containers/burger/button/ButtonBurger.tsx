import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import classNames from "classnames";

import cl from "./buttonBurger.module.scss";
import { useChangeStateBurger } from "./logic";
import { TIMEOUT_ANIMATION_BURGER_BUTTON } from "./constants/const";
import { IButtonBurger } from "./constants/types";

export const ButtonBurger: FC<IButtonBurger> = ({ className }) => {
    const { openNavbarBurger, changeStateBurger } = useChangeStateBurger();

    const transitionClassNames: CSSTransitionClassNames = {
        enterActive: cl.burger_root_enter_active,
        enterDone: cl.burger_root_enter_done,
        exit: cl.burger_root_exit,
        exitActive: cl.burger_root_exit_active,
    };

    return (
        <CSSTransition
            in={openNavbarBurger}
            timeout={TIMEOUT_ANIMATION_BURGER_BUTTON}
            classNames={transitionClassNames}
        >
            <button className={classNames(cl.burger_root, className)} onClick={changeStateBurger} />
        </CSSTransition>
    );
};
