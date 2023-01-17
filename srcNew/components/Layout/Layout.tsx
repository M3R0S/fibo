import { FC } from "react";

import { LayoutProps } from ".";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
