import { TPizzaDough, TPizzaSize } from "../../../../../store/slice/mainProduct/types/mainProductTypes";

export const pizzaSizeButtonArray: Array<{
    id: TPizzaSize;
    info: string;
  }> = [
    {
      id: "small",
      info: "Маленькая",
    },
    {
      id: "medium",
      info: "Средняя",
    },
    {
      id: "big",
      info: "Большая",
    },
  ];

export const pizzaDoughButtonArray: Array<{
    id: TPizzaDough;
    info: string;
  }> = [
    {
      id: "classic",
      info: "Классическое",
    },
    {
      id: "slim",
      info: "Тонкое",
    },
  ];