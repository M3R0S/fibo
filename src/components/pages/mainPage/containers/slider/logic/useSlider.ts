import { useCallback, useEffect, useState } from "react";

import {
    SLIDER_LIST,
    TIMEOUT_SLIDER_ANIMATION,
    TIMEOUT_SLIDER_DELAY_AUTOSLIDE,
} from "../constants/const";
import { ISLIDER_LIST } from "../constants/types";

import { useElementOnScreen } from "hook";

export const useSlider = () => {
    const [clickSlide, setClickSlide] = useState<boolean>(false);
    const [swipeRighted, setSwipeRighted] = useState<boolean>(true);
    const [updateSliderList, setUpdateSliderList] = useState<ISLIDER_LIST[]>(SLIDER_LIST);
    const [blockClick, setBlockClick] = useState<boolean>(false);
    const [autoSlide, setAutoSlide] = useState<boolean>(false);
    const [autoSlideId, setAutoSlideId] = useState<NodeJS.Timeout | null>(null);

    const { containerRef, isIntersecting } = useElementOnScreen({ threshold: 0.1 });

    // Слушатели кликов по стрелочкам

    const clickPoint = useCallback(() => {
        setClickSlide(!clickSlide);

        setBlockClick(true);
        setTimeout(() => setBlockClick(false), TIMEOUT_SLIDER_ANIMATION);
    }, [clickSlide]);

    const clickRightPoint = useCallback(() => {
        if (!blockClick) {
            setSwipeRighted(true);
            clickPoint();
        }
    }, [blockClick, clickPoint]);

    const clickLeftPoint = useCallback(() => {
        if (!blockClick) {
            setSwipeRighted(false);
            clickPoint();
        }
    }, [blockClick, clickPoint]);

    // Функционал включения и выключения автослайдов

    function onFocus() {
        setAutoSlide(false);
    }

    function onBlur() {
        setAutoSlide(true);
    }

    const onSetAutoSlide = useCallback(() => {
        if (autoSlide && !autoSlideId) {
            setAutoSlideId(setInterval(clickRightPoint, TIMEOUT_SLIDER_DELAY_AUTOSLIDE));
        }
        if (!autoSlide && autoSlideId) {
            clearInterval(autoSlideId);
            setAutoSlideId(null);
        }
    }, [autoSlide, autoSlideId, clickRightPoint]);

    const onDeleteAutoSlide = useCallback(() => {
        if (autoSlideId) {
            clearInterval(autoSlideId);
            setAutoSlideId(null);
        }
    }, [autoSlideId]);

    useEffect(() => {
        onSetAutoSlide();
        return () => {
            onDeleteAutoSlide();
        };
    }, [onDeleteAutoSlide, onSetAutoSlide]);

    useEffect(() => {
        if (isIntersecting) {
            setAutoSlide(true);
        }
        if (!isIntersecting) {
            setAutoSlide(false);
        }
    }, [isIntersecting]);

    // Выполнение в конце анимации. Проверка на индекс нужна для выполения кода 1 раз.

    function onEntered() {
        if (swipeRighted) {
            swipeRigth();
        }
        if (!swipeRighted) {
            swipeLeft();
        }
        setClickSlide(!clickSlide);
    }

    // Свайпы слайдов и перестроение массива

    function swipeRigth() {
        setUpdateSliderList(
            updateSliderList.map((item, index, array) =>
                array[index + 1] ? array[index + 1] : array[0]
            )
        );
    }

    function swipeLeft() {
        setUpdateSliderList(
            updateSliderList.map((item, index, array) =>
                array[index - 1] ? array[index - 1] : array[array.length - 1]
            )
        );
    }

    return {
        clickRightPoint,
        clickLeftPoint,
        onEntered,
        clickSlide,
        swipeRighted,
        updateSliderList,
        containerRef,
        onFocus,
        onBlur,
    };
};
