import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionClassNames } from "react-transition-group/CSSTransition";

import cl from "./slider.module.scss";
import { useSlider } from "./logic";
import { TIMEOUT_SLIDER_ANIMATION } from "./constants/const";

export const Slider: FC = () => {
    const {
        clickLeftPoint,
        clickRightPoint,
        onEntered,
        clickSlide,
        swipeRighted,
        updateSliderList,
        containerRef,
        onBlur,
        onFocus,
    } = useSlider();

    const firstPoster = updateSliderList[updateSliderList.length - 1];
    const lastPoster = updateSliderList[0];
    const transitionClassNames: CSSTransitionClassNames = {
        enterActive: swipeRighted ? cl.img_enter_active_right : cl.img_enter_active_left,
    };

    return (
        <section className={cl.container} onFocus={onFocus} onBlur={onBlur} ref={containerRef}>
            <button onClick={clickLeftPoint} className={cl.point_left} />
            <CSSTransition
                in={clickSlide}
                timeout={TIMEOUT_SLIDER_ANIMATION}
                classNames={transitionClassNames}
            >
                <img src={firstPoster.src} alt={firstPoster.alt} />
            </CSSTransition>
            {updateSliderList.map(({ id, src, alt }) => {
                return (
                    <CSSTransition
                        key={id}
                        in={clickSlide}
                        timeout={TIMEOUT_SLIDER_ANIMATION}
                        onEntered={() => id === 1 && onEntered()}
                        classNames={transitionClassNames}
                    >
                        <img src={src} alt={alt} />
                    </CSSTransition>
                );
            })}
            <CSSTransition
                in={clickSlide}
                timeout={TIMEOUT_SLIDER_ANIMATION}
                classNames={transitionClassNames}
            >
                <img src={lastPoster.src} alt={lastPoster.alt} />
            </CSSTransition>
            <button onClick={clickRightPoint} className={cl.point_right} />
        </section>
    );
};
