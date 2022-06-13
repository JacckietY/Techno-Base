export class Cart {
    items?: CartItem[];
}

export class CartItem {
    productId?: string;
    quantity?: number;
}

export default class cartItemsDetailed {
    product?: any;
    quantity?: number;
}
