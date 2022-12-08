import { ILinkContact, IPaymentSystem, ISocialNetwork } from "./types";

export const linkContacts: ILinkContact[] = [
  {
    id: "1",
    src: "https://www.visa.com.ru/",
  },
  {
    id: "2",
    src: "https://www.visa.com.ru/",
  },
  {
    id: "3",
    src: "https://www.visa.com.ru/",
  },
  {
    id: "4",
    src: "https://www.visa.com.ru/",
  },
  {
    id: "5",
    src: "https://www.visa.com.ru/",
  },
  {
    id: "6",
    src: "https://www.visa.com.ru/",
  },
];

export const paymentSystems: IPaymentSystem[] = [
  { id: "1", src: "https://www.visa.com.ru" },
  { id: "2", src: "https://www.paypal.com/ru" },
  { id: "3", src: "https://www.mastercard.ru" },
];

export const socialNetwork: ISocialNetwork[] = [
  { id: "1", title: "YouTube", src: "https://www.youtube.com/" },
  { id: "2", title: "Facebook", src: "https://facebook.com/" },
  { id: "3", title: "Instagram", src: "https://instagram.com/" },
  { id: "4", title: "ВКонтакте", src: "https://vk.com/" },
  { id: "5", title: "Москва ул. Проспект Вернадского 86В", src: "https://yandex.ru/maps/" },
];
