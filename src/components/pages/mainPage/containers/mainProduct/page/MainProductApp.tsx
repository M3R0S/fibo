import { FC } from "react";

import cl from "./mainProductApp.module.scss";
import { MAIN_PRODUCT_GALLERIES } from "./constants/const";
import { useSetIsEndLoadingProduct, useSetLinkActiveInMount } from "./logic";

import { MainProductList } from "./content";

export const MainProductApp: FC = () => {
    useSetLinkActiveInMount();
    useSetIsEndLoadingProduct();

    return (
        <section className={cl.galleries_container}>
            {MAIN_PRODUCT_GALLERIES.map((gallery) => (
                <MainProductList {...gallery} key={gallery.id} />
            ))}
        </section>
    );
};
