import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";

import cl from "./buttonNavbarBurger.module.scss";
import { useChangeStateBurger } from "./useChangeStateBurger";
import { IButtonNavbarBurger } from "../../types";

const ButtonNavbarBurger: FC<IButtonNavbarBurger> = ({ className }) => {
    const { openNavbarBurger, changeStateBurger } = useChangeStateBurger();

    return (
        <CSSTransition
            in={openNavbarBurger}
            timeout={500}
            classNames={{
                enterActive: cl.burger_root_enter_active,
                enterDone: cl.burger_root_enter_done,
                exit: cl.burger_root_exit,
                exitActive: cl.burger_root_exit_active,
            }}
        >
            <button className={classNames(cl.burger_root, className)} onClick={changeStateBurger} />
        </CSSTransition>
    );
};

export default ButtonNavbarBurger;
