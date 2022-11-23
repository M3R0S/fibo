import { FC } from "react";
import cl from "./mainProductApp.module.sass";
import { galleries } from "../const";
import MainProductList from "../mainProductList/MainProductList";
import useSetLinkActiveInMount from "./useSetLinkActiveInMount";
import useSetIsEndLoadingProduct from "./useSetIsEndLoadingProduct";

const MainProductApp: FC = () => {
  useSetLinkActiveInMount();
  useSetIsEndLoadingProduct();

  return (
    <section className={cl.galleries_container}>
      {galleries.map((gallery) => (
        <MainProductList {...gallery} key={gallery.id} />
      ))}
    </section>
  );
};

export default MainProductApp;
