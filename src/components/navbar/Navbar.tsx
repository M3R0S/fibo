import React, { FC, useCallback, useEffect, useState } from "react";
import NavInfo from "./navInfo/NavInfo";
import NavMenu from "./navMenu/NavMenu";
import cl from "../../assets/styles/navbar/navbar.module.sass";
import { debounce } from "../../helpers/debounce";
import { Transition } from "react-transition-group";
import { useAppSelector } from "../../hook/storeHook/useStore";

const Navbar: FC = () => {
  const [scrollY, setScrollY] = useState<number>(window.scrollY);
  const [scrollDown, setScrollDown] = useState<boolean>(false);
  
  const handleNavigation = useCallback(
    debounce(() => {
      if (scrollY > window.scrollY) {
        // console.log("top");
        setScrollDown(false);
      } else if (scrollY < window.scrollY) {
        // console.log("down");
        setScrollDown(true);
      }
      setScrollY(window.scrollY);
    }),
    [scrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Transition in={scrollDown} timeout={500}>
      {(state) => (
        <header className={`${cl.header} ${cl[state]}`}>
          {scrollDown ? (
            <NavMenu scrollDown={scrollDown}></NavMenu>
          ) : (
            <>
              <NavInfo></NavInfo>
              <NavMenu scrollDown={scrollDown}></NavMenu>
            </>
          )}
        </header>
      )}
    </Transition>
  );
};

export default Navbar;
