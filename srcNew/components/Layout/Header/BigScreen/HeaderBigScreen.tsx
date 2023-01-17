import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import cl from "./headerBigScreen.module.scss";
import { TIMEOUT_ANIMATION_SCROLL_HEADER } from "utils";
import { useProcessingHeaderInfo } from "./hook";
import { Container } from "components/ui";
import { HeaderInfo } from "./Info";
import { HeaderMenu } from "./Menu";

export const HeaderBigScreen: FC = () => {
    const {
        isScrollDown,
        isEnabledHeaderInfo,
        onDisabledHeaderInfo,
        onEnabledHeaderInfo,
    } = useProcessingHeaderInfo();

    const transitionClassNames: CSSTransitionClassNames = {
        enterActive: cl.header_enter_active,
        exitActive: cl.header_exit_active,
    };

    return (
        <CSSTransition
            in={isScrollDown}
            timeout={TIMEOUT_ANIMATION_SCROLL_HEADER}
            onExiting={onEnabledHeaderInfo}
            onEntered={onDisabledHeaderInfo}
            classNames={transitionClassNames}
        >
            <Container tag="header" className={cl.header}>
                {isEnabledHeaderInfo && <HeaderInfo />}
                <HeaderMenu />
            </Container>
        </CSSTransition>
    );
};
