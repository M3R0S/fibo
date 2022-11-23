export interface IPopupQueryParams {
  popupId: string | null;
  popupType?: string | null;
}

export interface IGlobalSlice {
  globalIsIntersecting: boolean;
  screenWidth: number | null;
}
