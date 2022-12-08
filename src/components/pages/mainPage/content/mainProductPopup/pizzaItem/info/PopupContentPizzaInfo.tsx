import { FC, memo } from "react";
import cl from "./popupContentPizzaInfo.module.scss";
import CountUp from "react-countup";
import ReactTextTransition, { presets } from "react-text-transition";
import { IPopupContentPizzaInfo } from "../types";

const PopupContentPizzaInfo: FC<IPopupContentPizzaInfo> = ({ dough, size, weight }) => {
    return (
        <div className={cl.pizza_info}>
            {<CountUp end={Number(size)} duration={0.5} preserveValue suffix=" см," />}
            {<CountUp end={Number(weight)} duration={0.5} preserveValue suffix=" г," prefix=" " />}
            {
                <ReactTextTransition
                    springConfig={presets.wobbly}
                >{`${dough} тесто.`}</ReactTextTransition>
            }
        </div>
    );
};

export default memo(PopupContentPizzaInfo);
