import { FC } from "react";

import cl from "./footerApp.module.scss";

import { useScreenSize } from "hook";

import { FooterDeviceComputer, FooterDeviceMobile, FooterDevicePad } from "../device";

import imageBackground from "assets/images/footer/footer-background.png";

export const FooterApp: FC = () => {
    const { screenWidth } = useScreenSize();

    const deviceComponent = () => {
            if (screenWidth >= 1200) {
                return <FooterDeviceComputer />
            }
            if (screenWidth < 1200) {
                return <FooterDevicePad />
            }
            if (screenWidth < 700) {
                return <FooterDeviceMobile />
            }
    }

    return (
        <footer className={cl.footer}>
            {/* {screenWidth >= 1200 && <FooterDeviceComputer />}
            {screenWidth < 1200 && screenWidth >= 700 && <FooterDevicePad />}
            {screenWidth < 700 && <FooterDeviceMobile />} */}
            {deviceComponent()}
            <img className={cl.pizza_pasta} src={imageBackground} alt="Фоновое изображение" />
        </footer>
    );
};
