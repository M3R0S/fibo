import { FC } from "react";
import cl from "./buttonNavbarBurger.module.sass";
import { CSSTransition } from "react-transition-group";
import useButtonNavbarBurger from "./useButtonNavbarBurger";
import { IButtonNavbarBurger } from "./types";

const ButtonNavbarBurger: FC<IButtonNavbarBurger> = ({ className }) => {
  const { openNavbarBurger, onClick } = useButtonNavbarBurger();

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
      <button className={[cl.burger_root, className].join(" ")} onClick={onClick} />
    </CSSTransition>
  );
};

export default ButtonNavbarBurger;
