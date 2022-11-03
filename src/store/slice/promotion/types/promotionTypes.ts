
export type TPromotionContent = {
    id: string;
    img: string;
    title: string;
    info: string;
  };
  
export type TPromotionSlice = {
    openModal: boolean;
    idModal: string;
  };

export type TPromotionQueryParams = {
  popupId: string
}