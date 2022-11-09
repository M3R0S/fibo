import { FC, memo } from "react";
import cl from "../../../../../../../assets/styles/pages/mainPage/mainProduct/popup/mainProductPopup.module.sass";
import CountUp from "react-countup";
import ReactTextTransition, { presets } from "react-text-transition";

interface IPopupContentPizzaInfo {
  size: string;
  dough: string;
  weight: string;
}

const PopupContentPizzaInfo: FC<IPopupContentPizzaInfo> = ({
  dough,
  size,
  weight,
}) => {
  return (
    <div className={cl.pizza_info}>
      {
        <CountUp
          end={Number(size)}
          duration={0.5}
          preserveValue
          suffix=" см,"
        />
      }
      {
        <CountUp
          end={Number(weight)}
          duration={0.5}
          preserveValue
          suffix=" г,"
          prefix=" "
        />
      }
      {
        <ReactTextTransition springConfig={presets.wobbly}>
          {`${dough} тесто.`}
        </ReactTextTransition>
      }
    </div>
  );
};

export default memo(PopupContentPizzaInfo);
