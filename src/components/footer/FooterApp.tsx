import React from "react";
import FooterContact from "./FooterContact";
import FooterInfo from "./FooterInfo";
import cl from "../../assets/styles/footer/footer.module.sass";
import pizaPasta from "../../assets/image/footer-back.png";
import { useAppSelector } from "../../hook/storeHook/useStore";
import FooterMedia1200 from "./FooterMedia1200";

const FooterApp = () => {
  const { screenWidth } = useAppSelector((state) => state.navbar);

  return (
    <footer>
      <section className={cl.wrapper}>
        {screenWidth && screenWidth > 1200 ? (
          <>
            <FooterInfo></FooterInfo>
            <FooterContact></FooterContact>
          </>
        ) : (
          <FooterMedia1200></FooterMedia1200>
        )}
        <img className={cl.piza_pasta} src={pizaPasta} alt="pizaPasta" />
      </section>
    </footer>
  );
};

export default FooterApp;
