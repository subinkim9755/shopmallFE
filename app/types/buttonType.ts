export interface ButtonType {
    text: string;
    cartCount?: number;
    onClick: () => void;
}

export interface ImageButtonType {
    src?: string;
    str?: string;
}