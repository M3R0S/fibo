import { IPopupQueryParams } from "store/slice/global/globalTypes";

export interface IPromotionPopupContainer {
  isOpened: boolean;
  onClose: () => void;
  params: IPopupQueryParams;
}

export interface IUseSelectClassNamePromotionPopup {
  isOpened: boolean;
  contentLenght: number;
  isFetching: boolean
}
