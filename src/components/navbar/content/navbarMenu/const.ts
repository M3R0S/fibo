import { INavLink } from "./types";

export const navLinks: INavLink[] = [
    {
      id: "1",
      to: "/main",
      title: "Пицца",
      isAnchor: true,
      endpoint: "pizza",
    },
    {
      id: "2",
      to: "/main",
      title: "Паста",
      isAnchor: true,
      endpoint: "pasta",
    },
    {
      id: "3",
      to: "/main",
      title: "Супы",
      isAnchor: true,
      endpoint: "soup",
    },
    {
      id: "4",
      to: "/main",
      title: "Салаты",
      isAnchor: true,
      endpoint: "salad",
    },
    {
      id: "5",
      to: "/drink",
      title: "Напитки",
      isAnchor: false,
      endpoint: "drink",
    },
    {
      id: "6",
      to: "/desert",
      title: "Десерты",
      isAnchor: false,
      endpoint: "desert",
    },
    {
      id: "7",
      to: "/bakaly",
      title: "Бакалея",
      isAnchor: false,
      endpoint: "bakaly",
    },
    {
      id: "8",
      to: "/antipasty",
      title: "Антипасти",
      isAnchor: false,
      endpoint: "antipasty",
    },
    {
      id: "9",
      to: "/promotion",
      title: "Акции",
      isAnchor: false,
      endpoint: "promotion",
    },
    {
      id: "10",
      to: "/combo",
      title: "Комбо",
      isAnchor: false,
      endpoint: "combo",
    },
    {
      id: "11",
      to: "/contact",
      title: "Контакты",
      isAnchor: false,
      endpoint: "contact",
    },
  ];