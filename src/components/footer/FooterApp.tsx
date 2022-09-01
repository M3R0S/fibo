import React from "react";
import FooterContact from "./FooterContact";
import FooterInfo from "./FooterInfo";
import cl from "../../assets/styles/footer/footer.module.sass";
import pizaPasta from "../../assets/image/footer-back.png";

const FooterApp = () => {
  return (
    <footer>
      <section className={cl.wrapper}>
        <FooterInfo></FooterInfo>
        <FooterContact></FooterContact>
        <img className={cl.pizaPasta} src={pizaPasta} alt="pizaPasta" />
      </section>
    </footer>
  );
};

export default FooterApp;
