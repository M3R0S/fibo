import { FC } from "react";

import cl from "./deliveryApp.module.scss";

import { useElementOnScreen } from "hook";

import { DeliveryList, YandexMap } from "./content";

export const DeliveryApp: FC = () => {
    const { containerRef, isIntersecting } = useElementOnScreen({
        threshold: 0.7,
    });

    return (
        <section ref={containerRef} className={cl.container}>
            <div className={cl.content}>
                <h1>Оплата и доставка</h1>
                <DeliveryList />
                <YandexMap isIntersecting={isIntersecting} />
            </div>
        </section>
    );
};
