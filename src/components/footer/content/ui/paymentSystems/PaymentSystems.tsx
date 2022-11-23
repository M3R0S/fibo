import LinkBlank from "components/ui/components/link/linkBlank/LinkBlank";
import { FC } from "react";
import { paymentSystems } from "../const";
import { IUiClassName } from "../types";
import cl from "./paymentSystems.module.sass";

const PaymentSystems: FC<IUiClassName> = ({ classNameWrapper }) => {
  return (
    <figure className={classNameWrapper}>
      {paymentSystems.map(({ id, src }) => (
        <LinkBlank className={cl.link} href={src} key={id} />
      ))}
    </figure>
  );
};

export default PaymentSystems;
