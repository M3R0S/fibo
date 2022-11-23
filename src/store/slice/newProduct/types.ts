import { TSectionName } from "store/slice/mainProduct/types";

export interface INewProductItem {
  type: TSectionName;
  id: string;
  title: string;
  price: string;
  img: string;
}
