import type { ReactNode } from "react";

export interface CartItem {
	productId: string;
	quantity: number;
}

export interface CartContextValue {
	items: CartItem[];
	cartCount: number;
	addItem: (productId: string, quantity?: number) => void;
	removeItem: (productId: string) => void;
	setItemQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
}

export interface CartProviderProps {
	children: ReactNode;
}
