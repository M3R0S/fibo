import yellowPoster from "assets/images/mainPage/slider/interactive-card1.png";
import blackPoster from "assets/images/mainPage/slider/interactive-card2.png";
import yellowPosterRed from "assets/images/mainPage/slider/interactive-card3.png";
import blackPosterRed from "assets/images/mainPage/slider/interactive-card4.png";

import { ISLIDER_LIST } from "./types";

export const TIMEOUT_SLIDER_ANIMATION = 500;
export const TIMEOUT_SLIDER_DELAY_AUTOSLIDE = 6000;

export const SLIDER_LIST: ISLIDER_LIST[] = [
    { id: 1, src: blackPosterRed, alt: "Чёрно-красный постер" },
    { id: 2, src: yellowPoster, alt: "Жёлтый постер" },
    { id: 3, src: blackPoster, alt: "Чёрный постер" },
    { id: 4, src: yellowPosterRed, alt: "Желто-красный постер" },
];
