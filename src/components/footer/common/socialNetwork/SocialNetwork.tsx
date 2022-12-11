import { FC } from "react";

import cl from "./socialNetwork.module.scss";
import { IFooterConstantsClassName } from "../types";
import { SOCIAL_NETWORK } from "../const";

import { LinkBlank } from "components/ui";

export const SocialNetwork: FC<IFooterConstantsClassName> = ({ classNameWrapper }) => {
    return (
        <>
            <h1 className={cl.title}>Мы в соцсетях:</h1>
            <figure className={classNameWrapper}>
                {SOCIAL_NETWORK.map(({ id, src, title }) => (
                    <LinkBlank href={src} key={id} className={cl.link}>
                        {title}
                    </LinkBlank>
                ))}
            </figure>
        </>
    );
};
