import { FC } from "react";

import cl from "./footerContactDeviceMobile.module.scss";

import { Copyright, LinkContacts, PaymentSystems } from "components/footer/common";

export const FooterContactDeviceMobile: FC = () => {
    return (
        <section className={cl.container}>
            <LinkContacts classNameWrapper={cl.link_contacts} />
            <Copyright classNameWrapper={cl.copyright}>
                <PaymentSystems classNameWrapper={cl.payment_systems} />
            </Copyright>
        </section>
    );
};
