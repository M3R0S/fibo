export interface IError {
    className?: string;
    children?: string;
    isPopup?: boolean;
    onClose?: () => void;
}

export interface ILoader {
    className?: string;
}

export interface ILogo {
    classNameLogo?: string;
    classNameHome?: string;
}
