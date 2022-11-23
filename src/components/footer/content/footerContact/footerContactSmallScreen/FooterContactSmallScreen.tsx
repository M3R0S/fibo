import { FC } from "react";
import cl from "./footerContactSmallScreen.module.sass";
import LinkContacts from "../../ui/linkContacts/LinkContacts";
import ButtonCallNumber from "components/ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonOrderCall from "components/ui/components/button/buttonOrderCall/ButtonOrderCall";
import PaymentSystems from "../../ui/paymentSystems/PaymentSystems";
import Copyright from "../../ui/copyright/Copyright";

const FooterContactSmallScreen: FC = () => {
  return (
    <section className={cl.container}>
      <LinkContacts classNameWrapper={cl.link_contacts} />
      <div className={cl.control}>
        <ButtonCallNumber className={cl.call_number} />
        <ButtonOrderCall className={cl.order_call} />
        <PaymentSystems classNameWrapper={cl.payment_systems} />
      </div>
      <Copyright classNameWrapper={cl.footer} />  
    </section>
  );
};

export default FooterContactSmallScreen;
