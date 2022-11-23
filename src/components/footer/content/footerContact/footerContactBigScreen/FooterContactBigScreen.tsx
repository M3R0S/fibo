import { FC } from "react";
import cl from "./footerContactBigScreen.module.sass";
import ButtonCallNumber from "components/ui/components/button/buttonCallNumber/ButtonCallNumber";
import ButtonOrderCall from "components/ui/components/button/buttonOrderCall/ButtonOrderCall";
import LinkContacts from "../../ui/linkContacts/LinkContacts";

const FooterContactBigScreen: FC = () => {
  return (
    <section className={cl.container}>
      <ButtonCallNumber className={cl.call_number} /> 
      <LinkContacts classNameWrapper={cl.link_contacts_wrapper} />
      <ButtonOrderCall className={cl.order_call} />
    </section>
  );
};

export default FooterContactBigScreen;
