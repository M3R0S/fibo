import { FC } from "react";

import cl from "./socialNetwork.module.scss";
import { IUiClassName } from "../types";
import { socialNetwork } from "../const";

import { LinkBlank } from "components/ui";

export const SocialNetwork: FC<IUiClassName> = ({ classNameWrapper }) => {
    return (
        <>
            <h1 className={cl.title}>Мы в соцсетях:</h1>
            <figure className={classNameWrapper}>
                {socialNetwork.map(({ id, src, title }) => (
                    <LinkBlank href={src} key={id} className={cl.link}>
                        {title}
                    </LinkBlank>
                ))}
            </figure>
        </>
    );
};
