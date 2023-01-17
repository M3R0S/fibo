import { FC } from "react";

import { Layout } from "components";
import { AppRouter } from "routes";

export const App: FC = () => {
    return (
        <Layout>
            <AppRouter />
        </Layout>
    );
};
