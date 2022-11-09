import { FC } from "react";
import cl from "../../../../../assets/styles/pages/mainPage/mainProduct/page/mainProduct.module.sass";
import { galleries } from "./const";
import MainProductList from "./MainProductList";
import useScrollLinkActiveMount from "../../../../../hook/scrollerHook/useScrollLinkActiveMount";

const MainProductApp: FC = () => {
  useScrollLinkActiveMount();

  return (
    <section className={cl.container}>
      {galleries.map((gallery) => (
        <MainProductList {...gallery} key={gallery.id} />
      ))}
    </section>
  );
};

export default MainProductApp;
