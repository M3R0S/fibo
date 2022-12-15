import { FC } from "react";
import CountUp from "react-countup";
import ReactTextTransition, { presets } from "react-text-transition";

import cl from "./mainProductPopupPizzaInfo.module.scss";
import { IMainProductPopupPizzaInfo } from "./constants/types";

export const MainProductPopupPizzaInfo: FC<IMainProductPopupPizzaInfo> = (props) => {
    const { dough, size, weight } = props;

    return (
        <div className={cl.pizza_info}>
            <CountUp end={Number(size)} duration={0.5} preserveValue suffix=" см," />
            <CountUp end={Number(weight)} duration={0.5} preserveValue suffix=" г," prefix=" " />
            <ReactTextTransition springConfig={presets.wobbly}>
                {`${dough} тесто.`}
            </ReactTextTransition>
        </div>
    );
};
