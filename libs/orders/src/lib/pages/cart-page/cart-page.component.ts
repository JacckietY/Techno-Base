import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '@my-team/products';
import { CartItem } from '../../models/cart';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'orders-cart-page',
    templateUrl: './cart-page.component.html',
    styles: []
})
export class CartPageComponent implements OnInit {
    constructor(private router: Router, private cartService: CartService, private productService: ProductsService) {}

    ngOnInit(): void {
        this._getCartDetails();
    }

    private _getCartDetails() {
        this.cartService.cart$.pipe().subscribe((respCart) => {
            respCart.items.forEach((cartItem) => {
                this.productService.getProduct(cartItem.productId).subscribe((product) => {});
            });
        });
    }

    backToShop() {
        this.router.navigate(['/products']);
    }

    deleteCartItem() {}
}
