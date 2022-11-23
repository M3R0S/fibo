import { FC } from "react";
import cl from "./navbarDeliveryInfo.module.sass";
import LinkBlank from "components/ui/components/link/linkBlank/LinkBlank";

const NavbarDeliveryInfo: FC = () => {
  return (
    <figure className={cl.delivery_info}>
      <h1>
        Доставка еды в<span>Ялте</span>
      </h1>
      <div className={cl.delivery_yandex}>
        <LinkBlank href="https://dostavka.yandex.ru/">
          <span>Яндекс еда</span>
          <span>4.8</span>
        </LinkBlank>
        <b>Время доставки</b>
        <b>от 31 мин</b>
      </div>
    </figure>
  );
};

export default NavbarDeliveryInfo;
