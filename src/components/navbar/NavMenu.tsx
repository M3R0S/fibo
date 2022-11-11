import { FC, memo, useEffect } from "react";
import cl from "../../assets/styles/navbar/navMenu.module.sass";
import ButtonHome from "../ui/components/button/buttonHome/ButtonHome";
import LogoImg from "../ui/assets/logoImg/LogoImg";
import NavMenuItem from "./NavMenuItem";
import ButtonBasket from "../ui/components/button/buttonBasket/ButtonBasket";
import ButtonLogin from "../ui/components/button/buttonLogin/ButtonLogin";
import { useAppDispatch, useAppSelector } from "../../hook/storeHook/useStore";
import { setIsEndLoadingProduct } from "../../store/slice/navbarSlice";

interface INavMenu {
  scrollDown: boolean;
}

const NavMenu: FC<INavMenu> = ({ scrollDown }) => {

  const dispatch = useAppDispatch()
  const { endLoadingProduct } = useAppSelector((state) => state.navbar);
  const { pasta, pizza, salad, soup } = endLoadingProduct;

  useEffect(() => {
    if (pasta && pizza && salad && soup) {
      dispatch(setIsEndLoadingProduct(true))
    }
    return () => {
      dispatch(setIsEndLoadingProduct(false))
    };
  }, [pasta, pizza, salad, soup, dispatch]);

  return (
    <section className={cl.container}>
      {scrollDown && (
        <ButtonHome>
          <LogoImg className={cl.logo_scroll} />
        </ButtonHome>
      )}
      <nav className={cl.navbar}>
        <ul className={cl.navbar_list}>
          {navLinks.map((obj) => (
            <NavMenuItem
              {...obj}
              key={obj.id}
            ></NavMenuItem>
          ))}
        </ul>
      </nav>
      {!scrollDown && <ButtonLogin className={cl.login}></ButtonLogin>}
      <ButtonBasket></ButtonBasket>
    </section>
  );
};

export default memo(NavMenu);

export const navLinks = [
  {
    id: 1,
    to: "/main",
    title: "Пицца",
    isAnchor: true,
    endpoint: "pizza",
  },
  {
    id: 2,
    to: "/main",
    title: "Паста",
    isAnchor: true,
    endpoint: "pasta",
  },
  {
    id: 3,
    to: "/main",
    title: "Супы",
    isAnchor: true,
    endpoint: "soup",
  },
  {
    id: 4,
    to: "/main",
    title: "Салаты",
    isAnchor: true,
    endpoint: "salad",
  },
  {
    id: 5,
    to: "/error",
    title: "Напитки",
    isAnchor: false,
    endpoint: "water",
  },
  {
    id: 6,
    to: "/error",
    title: "Десерты",
    isAnchor: false,
    endpoint: "desert",
  },
  {
    id: 7,
    to: "/error",
    title: "Бакалея",
    isAnchor: false,
    endpoint: "bakaly",
  },
  {
    id: 8,
    to: "/error",
    title: "Антипасти",
    isAnchor: false,
    endpoint: "antipasty",
  },
  {
    id: 9,
    to: "/promotion",
    title: "Акции",
    isAnchor: false,
    endpoint: "promotion",
  },
  {
    id: 10,
    to: "/error",
    title: "Комбо",
    isAnchor: false,
    endpoint: "combo",
  },
  {
    id: 11,
    to: "/contact",
    title: "Контакты",
    isAnchor: false,
    endpoint: "contact",
  },
];
