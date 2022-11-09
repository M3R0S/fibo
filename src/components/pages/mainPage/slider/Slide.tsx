import { FC, useEffect, useState } from "react";
import { debounce } from "../../../../helpers/debounce";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hook/storeHook/useStore";
import { swipeLeft, swipeRigth } from "../../../../store/slice/sliderSlice";
import cl from "../../../../assets/styles/pages/slider/slide.module.sass";
import { CSSTransition } from "react-transition-group";

const Slide: FC = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.slider);
  const [autoSlideId, setAutoSlideId] = useState<NodeJS.Timer | null>(null);
  const [autoSlide, setAutoSlide] = useState<boolean>(false);
  const [clickSlide, setClickSlide] = useState<boolean>(true);
  const [swipeRighted, setSwipeRighted] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(window.scrollY);

  const addAutoSlide = () => {
    const id = setInterval(() => {
      setClickSlide(!clickSlide);
    }, 6000);
    setAutoSlideId(id);
  };

  const removeAutoSlide = () => {
    autoSlideId && clearInterval(autoSlideId);
    setAutoSlideId(null);
  };

  useEffect(() => {
    setClickSlide(!clickSlide);
    addAutoSlide();
    setAutoSlide(true);
    return () => {
      removeAutoSlide();
    };
  }, [autoSlide]);

  const scrollHandler = debounce(() => {
    if (scrollY === 0) {
      !autoSlideId && addAutoSlide();
    }
    if (scrollY > 300) {
      removeAutoSlide();
    }
    setScrollY(window.scrollY);
  }, 100);

  const clickHandlerRight = () => {
    setSwipeRighted(true);
    setClickSlide(!clickSlide);
    removeAutoSlide();
  };

  const clickHandlerLeft = () => {
    setSwipeRighted(false);
    setClickSlide(!clickSlide);
    removeAutoSlide();
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <section className={cl.container}>
      <button
        type="button"
        onClick={() => clickHandlerLeft()}
        className={[cl.point, cl.left_point].join(" ")}
      ></button>
      <CSSTransition
        in={clickSlide}
        timeout={500}
        classNames={
          !swipeRighted
            ? {
                enter: cl.fake_img_enter_left,
                enterActive: cl.fake_img_enter_active_left,
                enterDone: cl.fake_img_enter_done_left,
                exit: cl.fake_img_exit_left,
                exitActive: cl.fake_img_exit_active_left,
                exitDone: cl.fake_img_exit_done_left,
              }
            : {}
        }
      >
        <img
          className={cl.fake_img}
          src={list[list.length - 1].src}
          alt=""
          width={560}
          height={320}
        />
      </CSSTransition>
      {list.map(({ id, src }, index) => {
        return (
          <CSSTransition
            key={id}
            in={clickSlide}
            onEntered={() => {
              index === 0 && swipeRighted && dispatch(swipeRigth());
              index === 0 && !swipeRighted && dispatch(swipeLeft());
              index === 0 && setClickSlide(!clickSlide);
            }}
            timeout={500}
            classNames={
              swipeRighted
                ? {
                    enter: cl[`img_enter_${index}`],
                    enterActive: cl[`img_enter_active_${index}`],
                    enterDone: cl[`img_enter_done_${index}`],
                    exit: cl[`img_exit_${index}`],
                    exitActive: cl[`img_exit_active_${index}`],
                    exitDone: cl[`img_exit_done_${index}`],
                  }
                : {
                    enter: cl[`img_enter_left_${index}`],
                    enterActive: cl[`img_enter_active_left_${index}`],
                    enterDone: cl[`img_enter_done_left_${index}`],
                    exit: cl[`img_exit_left_${index}`],
                    exitActive: cl[`img_exit_active_left_${index}`],
                    exitDone: cl[`img_exit_done_left_${index}`],
                  }
            }
          >
            <img src={src} alt="" width={560} height={320} />
          </CSSTransition>
        );
      })}
      <CSSTransition
        in={clickSlide}
        timeout={500}
        classNames={
          swipeRighted
            ? {
                enter: cl.fake_img_enter,
                enterActive: cl.fake_img_enter_active,
                enterDone: cl.fake_img_enter_done,
                exit: cl.fake_img_exit,
                exitActive: cl.fake_img_exit_active,
                exitDone: cl.fake_img_exit_done,
              }
            : {}
        }
      >
        <img
          className={cl.fake_img}
          src={list[0].src}
          alt=""
          width={560}
          height={320}
        />
      </CSSTransition>
      <button
        type="button"
        onClick={() => clickHandlerRight()}
        className={[cl.point, cl.right_point].join(" ")}
      ></button>
    </section>
  );
};

export default Slide;
