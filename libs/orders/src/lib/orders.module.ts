import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { CartService } from './services/cart.service';
import { BadgeModule } from 'primeng/badge';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

const routes: Routes = [
    {
        path: 'cart',
        component: CartPageComponent
    }
];

export const ordersRoutes: Route[] = [];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), BadgeModule, ButtonModule, InputNumberModule],
    declarations: [CartIconComponent, CartPageComponent],
    exports: [CartIconComponent, CartPageComponent]
})
export class OrdersModule {
    constructor(cartService: CartService) {
        cartService.initCartLocalStorage();
    }
}
