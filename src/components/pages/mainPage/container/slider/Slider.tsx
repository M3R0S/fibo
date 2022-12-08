import { FC } from "react";
import cl from "./slider.module.scss";
import { CSSTransition } from "react-transition-group";
import useSlider from "./useSlider";

const Slider: FC = () => {
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

    return (
        <section className={cl.container} onFocus={onFocus} onBlur={onBlur} ref={containerRef}>
            <button type="button" onClick={clickLeftPoint} className={cl.point_left} />
            <CSSTransition
                in={clickSlide}
                timeout={500}
                classNames={{
                    enterActive: swipeRighted ? cl.img_enter_active : cl.img_enter_active_left,
                }}
            >
                <img
                    src={updateSliderList[updateSliderList.length - 1].src}
                    alt="Акционное предложение"
                />
            </CSSTransition>
            {updateSliderList.map(({ id, src }, index) => {
                return (
                    <CSSTransition
                        key={id}
                        in={clickSlide}
                        timeout={500}
                        onEntered={() => onEntered(index)}
                        classNames={{
                            enterActive: swipeRighted
                                ? cl.img_enter_active
                                : cl.img_enter_active_left,
                        }}
                    >
                        <img src={src} alt="Акционные предложения" />
                    </CSSTransition>
                );
            })}
            <CSSTransition
                in={clickSlide}
                timeout={500}
                classNames={{
                    enterActive: swipeRighted ? cl.img_enter_active : cl.img_enter_active_left,
                }}
            >
                <img src={updateSliderList[0].src} alt="Акционное предложение" />
            </CSSTransition>
            <button type="button" onClick={clickRightPoint} className={cl.point_right} />
        </section>
    );
};

export default Slider;
