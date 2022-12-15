import { FC } from "react";

import cl from "./footerCommonPaymentSystems.module.scss";
import { IFooterCommonPaymentSystems } from "./constants/types";
import { PAYMENT_SYSTEM } from "./constants/const";

import { LinkBlank } from "components/ui";

export const FooterCommonPaymentSystems: FC<IFooterCommonPaymentSystems> = ({ classNameWrapper }) => {
    return (
        <figure className={classNameWrapper}>
            {PAYMENT_SYSTEM.map(({ id, src }) => (
                <LinkBlank className={cl.link} href={src} key={id} />
            ))}
        </figure>
    );
};
