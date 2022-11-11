import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import cl from "../../../assets/styles/navbar/navbarMedia1200.module.sass";
import ButtonLogin from "../../ui/components/button/buttonLogin/ButtonLogin";
import { navLinks } from "../NavMenu";
import NavMenuItem from "../NavMenuItem";

interface INavbarBurgerNavClassic {
  openModalBurger: boolean;
}

const NavbarBurgerNavClassic: FC<INavbarBurgerNavClassic> = ({
  openModalBurger,
}) => {

  return (
    <>
      <CSSTransition
        in={openModalBurger}
        timeout={500}
        unmountOnExit
        classNames={{
          enter: cl.navbar_enter,
          enterActive: cl.navbar_enter_active,
          enterDone: cl.navbar_enter_done,
          exit: cl.navbar_exit,
          exitActive: cl.navbar_exit_active,
          exitDone: cl.navbar_exit_done,
        }}
      >
        <nav className={cl.navbar}>
          <ul>
            {navLinks.map((obj) => (
              <NavMenuItem
                {...obj}
                key={obj.id}
              ></NavMenuItem>
            ))}
            <ButtonLogin className={cl.login}></ButtonLogin>
          </ul>
        </nav>
      </CSSTransition>
    </>
  );
};

export default NavbarBurgerNavClassic;
