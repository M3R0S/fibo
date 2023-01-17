import { FC } from "react";

import cl from "./HeaderInfo.module.scss";
import { Logo } from "components";
import { Box, Button, Container } from "components/ui";

export const HeaderInfo: FC = () => {
    return (
        <Container tag="section" className={cl.container}>
            <Box tag="div" className={cl.wrapper}>
                <Logo />
                <HeaderDeliveryInfo />
            </Box>
            <Box tag="div" className={cl.wrapper}>
                <Button variant="OrderCall">Заказать звонок</Button>
                <Button variant="CallNumber" className={cl.call_number} />
            </Box>
        </Container>
    );
};
