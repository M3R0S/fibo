import ButtonBack from "components/ui/components/button/buttonBack/ButtonBack";
import ButtonHome from "components/ui/components/button/buttonHome/ButtonHome";
import { FC } from "react";
import cl from "./errorContent.module.sass";

const ErrorContent: FC = () => {
  return (
    <section className={cl.container}>
    <h1>К сожалению, страница недоступна</h1>
    <div className={cl.control}>
      <ButtonBack className={cl.back}>Назад</ButtonBack>
      <ButtonHome className={cl.home}>На главную</ButtonHome>
    </div>
  </section>
);
};

export default ErrorContent;