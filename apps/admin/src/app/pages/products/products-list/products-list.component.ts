import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@my-team/products';

@Component({
    selector: 'admin-products-list',
    templateUrl: './products-list.component.html',
    styles: []
})
export class ProductsListComponent implements OnInit {
    products: any = [];
    i = 'i';

    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this._getProducts();
    }

    private _getProducts() {
        this.productsService.getProducts().subscribe((products) => {
            this.products = products;
        });
    }

    updateProduct(i: string) {}

    deleteProduct(i: string) {}
}
