import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { debounce } from "../../../../helpers/debounce";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import { swipeLeft, swipeRigth } from "../../../../store/slice/sliderSlice";
import cl from "../../../../assets/styles/pages/slider/slide.module.sass";
import { CSSTransition, Transition } from "react-transition-group";

const Slide: FC = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.slider);

  const [autoSlideId, setAutoSlideID] = useState<NodeJS.Timer | null>(null);
  const [clickSlide, setClickSlide] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(window.scrollY);

  const addAutoSlide = () => {
    const id = setInterval(() => dispatch(swipeRigth()), 3000);
    setAutoSlideID(id);
  };

  const removeAutoSlide = () => {
    autoSlideId && clearInterval(autoSlideId);
    setAutoSlideID(null);
  };

  const scrollHandler = debounce(() => {
    if (scrollY > window.scrollY) {
      !autoSlideId && addAutoSlide();
      // console.log("top");
    }
    if (scrollY < window.scrollY) {
      removeAutoSlide();
      // console.log("down");
    }
    setScrollY(window.scrollY);
  });

  const clickHandlerRight = () => {
    setTimeout(() => {
      dispatch(swipeRigth());
    }, 0);
    setClickSlide((prev) => !prev);
    removeAutoSlide();
  };

  const clickHandlerLeft = () => {
    setTimeout(() => {
      dispatch(swipeLeft());
    }, 0);
    setClickSlide((prev) => !prev);
    removeAutoSlide();
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler);
  //   };
  // }, [scrollHandler]);

  useEffect(() => {
    // addAutoSlide()
    return () => {
      removeAutoSlide();
    };
  }, []);

  return (
    <section onMouseEnter={() => {}} className={cl.container}>
      <button
        type="button"
        onClick={() => clickHandlerLeft()}
        className={cl.left_point}
      ></button>
      <Transition in={clickSlide} timeout={100} key={uuidv4()}>
        {(state) =>
          list.map((i) => (
            <img
              className={`${cl[state]}`}
              src={i}
              alt={i}
              key={uuidv4()}
            ></img>
          ))
        }
      </Transition>
      <button
        type="button"
        onClick={() => clickHandlerRight()}
        className={cl.right_point}
      ></button>
    </section>
  );
};

export default Slide;
