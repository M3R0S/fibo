export interface IPopupQueryParams {
  popupId: string | null;
  popupType?: string | null;
}

export interface IGlobalSlice {
  isOpenedLoginPopup: boolean;
  globalIsIntersecting: boolean;
  screenWidth: number | null;
}
