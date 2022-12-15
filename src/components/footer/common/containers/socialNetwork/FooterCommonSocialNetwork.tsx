import { FC } from "react";

import cl from "./footerCommonSocialNetwork.module.scss";
import { IFooterCommonSocialNetwork } from "./constants/types";
import { SOCIAL_NETWORK } from "./constants/const";

import { LinkBlank } from "components/ui";

export const FooterCommonSocialNetwork: FC<IFooterCommonSocialNetwork> = ({ classNameWrapper }) => {
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
