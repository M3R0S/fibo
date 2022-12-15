import { FC } from "react";

import cl from "./footerContactDeviceMobile.module.scss";

import {
    FooterCommonCopyright,
    FooterCommonLinkContacts,
    FooterCommonPaymentSystems,
} from "components/footer/common";

export const FooterContactDeviceMobile: FC = () => {
    return (
        <section className={cl.container}>
            <FooterCommonLinkContacts classNameWrapper={cl.link_contacts} />
            <FooterCommonCopyright classNameWrapper={cl.copyright}>
                <FooterCommonPaymentSystems classNameWrapper={cl.payment_systems} />
            </FooterCommonCopyright>
        </section>
    );
};
