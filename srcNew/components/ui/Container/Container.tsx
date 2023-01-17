import { FC } from "react";
import { classNames } from "utils";

import cl from "./Container.module.scss";
import { ContainerAccordance, ContainerProps } from ".";

export const Container: FC<ContainerProps> = (props) => {
    const { children, className, tag } = props;

    const containerAccordance: ContainerAccordance = {
        footer: (
            <footer
                {...props}
                className={classNames(cl.footer_root, className)}
            >
                {children}
            </footer>
        ),
        header: (
            <header
                {...props}
                className={classNames(cl.header_root, className)}
            >
                {children}
            </header>
        ),
        main: (
            <main {...props} className={classNames(cl.main_root, className)}>
                {children}
            </main>
        ),
        nav: (
            <nav {...props} className={classNames(cl.nav_root, className)}>
                {children}
            </nav>
        ),
        section: (
            <section
                {...props}
                className={classNames(cl.section_root, className)}
            >
                {children}
            </section>
        ),
    };

    const element = containerAccordance[tag]

    return element
};
