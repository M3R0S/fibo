import { TSectionName } from "../../../../../store/slice/mainPosition/types/mainPositionTypes";

export const galleries: Array<{
    id: string;
    title: string;
    endpoint: TSectionName;
    idEllement: string;
  }> = [
    {
      id: '1',
      title: "Пицца",
      endpoint: "pizza",
      idEllement: "mainProductSectionPizza",
    },
    {
      id: '2',
      title: "Паста",
      endpoint: "pasta",
      idEllement: "mainProductSectionPasta",
    },
    {
      id: '3',
      title: "Супы",
      endpoint: "soup",
      idEllement: "mainProductSectionSoup",
    },
    {
      id: '4',
      title: "Салаты",
      endpoint: "salad",
      idEllement: "mainProductSectionSalad",
    },
  ];