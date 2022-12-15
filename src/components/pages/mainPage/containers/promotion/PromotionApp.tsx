import { FC } from "react";
import { Link } from "react-router-dom";

import cl from "./promotionApp.module.scss";
import { MODEL_WOMAN, PROMOTION_IMAGES } from "./constants/const";

import { useDisabledNavbarLinkActive } from "hook";
import { useFastScrollToTop } from "hook/container/useFastScrollToTop/useFastScrollToTop";

import { PromotionItem } from "./content";

export const PromotionApp: FC = () => {
    const { containerRef } = useDisabledNavbarLinkActive();
    const { fastScrollToTop } = useFastScrollToTop();

    const { SRC, ALT } = MODEL_WOMAN;
    const linkToPromotion = "/promotion";

    return (
        <section className={cl.container}>
            <h1>
                Наши <span>акции</span>
            </h1>
            <figure className={cl.content}>
                {PROMOTION_IMAGES.map(({ id, img, alt }) => (
                    <PromotionItem img={img} alt={alt} key={id} />
                ))}
            </figure>
            <Link
                className={cl.link}
                to={linkToPromotion}
                ref={containerRef}
                onClick={fastScrollToTop}
            >
                Все акции
            </Link>
            <img src={SRC} alt={ALT} className={cl.model_woman} />
        </section>
    );
};
