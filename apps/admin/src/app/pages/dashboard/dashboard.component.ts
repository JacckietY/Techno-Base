import { Component, OnInit } from '@angular/core';
import { OrdersService } from '@my-team/orders';
import { ProductsService } from '@my-team/products';
import { UsersService } from '@my-team/users';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'admin-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    statistics: number[] = [];
    constructor(private usersService: UsersService, private ordersService: OrdersService, private productsService: ProductsService) {}

    ngOnInit(): void {
        combineLatest([
            this.ordersService.getOrdersCount(),
            this.productsService.getProductsCount(),
            this.usersService.getUsersCount(),
            this.ordersService.getTotalSales()
        ]).subscribe((values) => {
            this.statistics = values;
        });
        console.log('Dashboard has been loaded');
        console.log(this.statistics);
    }
}
