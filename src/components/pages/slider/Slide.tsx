import React, { FC, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { debounce } from "../../../helpers/throttle";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hook/storeHook/useStore";
import { swipeLeft, swipeRigth } from "../../../store/slice/sliderSlice";
import cl from "../../../assets/styles/pages/slider/slide.module.sass";

const Slide: FC = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.slider);
  // const [autoSlideId, setAutoSlideId] = useState<NodeJS.Timer | null>(null);

  // const addAutoSlide = useCallback(() => {
  //   const id = setInterval(() => dispatch(swipeRigth()), 3000);
  //   setAutoSlideId(id);
  // }, []);
  // const removeAutoSlide = useCallback(() => {
  //   autoSlideId && clearInterval(autoSlideId);
  //   setAutoSlideId(null);
  // }, []);

  // const scrollHandler = useCallback(
  //   debounce(() => {
  //     if (window.scrollY > 215 && autoSlideId) {
  //       removeAutoSlide();
  //     }
  //     // if (window.scrollY <= 215 && !autoSlideId) {
  //     //   addAutoSlide();
  //     // }
  //   }),
  //   []
  // );

  // useEffect(() => {
  //   window.removeEventListener("scroll", scrollHandler);
  //   window.addEventListener(
  //     "scroll",
  //     scrollHandler
  //   );
  //   return () => {
  //     removeAutoSlide();
  //   };
  // }, []);

  return (
    <section onMouseEnter={() => {}} className={cl.container}>
      <button
        type="button"
        onClick={() => dispatch(swipeLeft())}
        className={cl.left_point}
      ></button>
      {list.map((i) => (
        <img src={i} alt={i} key={uuidv4()}></img>
      ))}
      <button
        type="button"
        onClick={() => dispatch(swipeRigth())}
        className={cl.right_point}
      ></button>
    </section>
  );
};

export default Slide;
