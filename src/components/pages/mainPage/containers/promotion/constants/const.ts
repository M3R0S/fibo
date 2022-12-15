import { IPROMOTION_IMAGES } from "./types";

import promotion from "assets/images/mainPage/promotion/promotion.png";
import promotionMini from "assets/images/mainPage/promotion/promotion-mini.png";
import modelWoman from "assets/images/mainPage/promotion/model-woman.png";

export const PROMOTION_IMAGES: IPROMOTION_IMAGES[] = [
    {
        id: "1",
        img: promotion,
        alt: "Большое изображение акции",
    },
    {
        id: "2",
        img: promotionMini,
        alt: "Маленькое изображение акции",
    },
    {
        id: "3",
        img: promotionMini,
        alt: "Маленькое изображение акции",
    },
    {
        id: "4",
        img: promotionMini,
        alt: "Маленькое изображение акции",
    },
    {
        id: "5",
        img: promotionMini,
        alt: "Маленькое изображение акции",
    },
];

export const MODEL_WOMAN = {
    SRC: modelWoman,
    ALT: "Фоновое изображение",
};
