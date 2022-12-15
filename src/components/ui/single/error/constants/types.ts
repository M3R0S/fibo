export interface IError {
    className?: string;
    children?: string;
    isPopup?: boolean;
    onClose?: () => void;
}
