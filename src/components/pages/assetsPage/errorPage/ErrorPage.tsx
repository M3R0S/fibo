import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cl from "../../../../assets/styles/pages/errorPage/errorPage.module.sass";
import * as Scroll from "react-scroll";
import { useAppSelector } from "../../../../hook/storeHook/useStore";
import { setIdActive } from "../../../../store/slice/navbarSlice";
import { useDispatch } from "react-redux";

const ErrorPage: FC = () => {
  const animateScroll = Scroll.animateScroll;
  const scroller = Scroll.scroller;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { staticScrollY, idActive } = useAppSelector((state) => state.navbar);
  const { loadingTime } = useAppSelector((state) => state.mainProduct);

  return (
    <main className={cl.error_container}>
      <section className={cl.error_content}>
        <h1>К сожалению, страница недоступна</h1>
        <div className={cl.button_block}>
          <button
            onClick={() => {
              navigate(-1);
              animateScroll.scrollMore(staticScrollY ? staticScrollY : 0, {
                duration: 300,
                delay: loadingTime,
              });
            }}
          >
            Назад
          </button>
          <button
            onClick={() => {
              navigate("/main");
              animateScroll.scrollToTop();
              dispatch(setIdActive(null));
            }}
          >
            На главную
          </button>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
