import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import cartItemsDetailed from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'orders-cart-page',
    templateUrl: './cart-page.component.html',
    styles: []
})
export class CartPageComponent implements OnInit, OnDestroy {
    cartItemsDetailed: cartItemsDetailed[] = [];
    cartCount = 0;
    endSubs$: Subject<any> = new Subject();

    constructor(private router: Router, private cartService: CartService, private ordersService: OrdersService) {}

    ngOnInit(): void {
        this._getCartDetails();
    }

    ngOnDestroy(): void {
        this.endSubs$.next(void 0);
        this.endSubs$.complete();
    }

    private _getCartDetails() {
        this.cartService.cart$.pipe(takeUntil(this.endSubs$)).subscribe((respCart) => {
            this.cartItemsDetailed = [];
            this.cartCount = respCart?.items?.length ?? 0;
            respCart.items!.forEach((cartItem) => {
                this.ordersService.getProduct(cartItem.productId!).subscribe((respProduct) => {
                    this.cartItemsDetailed.push({
                        product: respProduct,
                        quantity: cartItem.quantity
                    });
                });
            });
        });
    }

    backToShop() {
        this.router.navigate(['/products']);
    }

    deleteCartItem(cartItem: cartItemsDetailed) {
        this.cartService.deleteCartItem(cartItem.product.id);
    }

    updateCartItemQuantity(event: any, cartItem: cartItemsDetailed) {
        this.cartService.setCartItem(
            {
                productId: cartItem.product.id,
                quantity: event.value
            },
            true
        );
    }
}
