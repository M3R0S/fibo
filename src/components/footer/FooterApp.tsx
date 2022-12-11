import { FC } from "react";

import cl from "./footerApp.module.scss";

import { useScreenSize } from "hook";

import {FooterDeviceComputer, FooterDeviceMobile, FooterDevicePad} from './device'

import imageBackground from "assets/images/footer/footer-background.png";

export const FooterApp: FC = () => {
    const { screenWidth } = useScreenSize();

    return (
        <footer className={cl.footer}>
            {screenWidth > 1200 ? (
                <FooterDeviceComputer />
            ) : screenWidth > 700 ? (
                <FooterDevicePad />
            ) : (
                <FooterDeviceMobile />
            )}
            <img className={cl.pizza_pasta} src={imageBackground} alt="Фоновое изображение" />
        </footer>
    );
};
