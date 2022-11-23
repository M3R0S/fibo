export interface IButtonAddBasket {
    type: string;
    id: string;
    title: string;
    info: string;
    img: string;
    weight: string;
    price: string;
    dough?: string;
    size?: string;
    className?: string;
    onClose: () => void;
  }

  export interface IUseButtonAddBasket {
    type: string;
    id: string;
    title: string;
    info: string;
    img: string;
    weight: string;
    price: string;
    dough?: string;
    size?: string;
    onClose: () => void;
  }