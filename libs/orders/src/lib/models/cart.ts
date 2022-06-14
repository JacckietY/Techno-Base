export class Cart {
    items?: CartItem[];
}

export class CartItem {
    productId: string;
    quantity: number;
}

export default class CartItemDetailed {
    product?: any;
    quantity?: number;
}
