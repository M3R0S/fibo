import { FC } from "react";

import cl from "./footerContactDeviceComputer.module.scss";

import { FooterCommonLinkContacts } from "components/footer/common";
import { ButtonCallNumber, ButtonOrderCall } from "components/ui";

export const FooterContactDeviceComputer: FC = () => {
    return (
        <section className={cl.container}>
            <ButtonCallNumber className={cl.call_number} />
            <FooterCommonLinkContacts classNameWrapper={cl.link_contacts_wrapper} />
            <ButtonOrderCall className={cl.order_call} />
        </section>
    );
};
