import { FC } from "react";
import cl from "./mainProductApp.module.scss";
import { galleries } from "../const";
import MainProductList from "../mainProductList/MainProductList";
import useSetLinkActiveInMount from "./useSetLinkActiveInMount";
import useSetIsEndLoadingProduct from "./hook/useSetIsEndLoadingProduct";

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
