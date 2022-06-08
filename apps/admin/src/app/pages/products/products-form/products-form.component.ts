import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '@my-team/products';

@Component({
    selector: 'admin-products-form',
    templateUrl: './products-form.component.html',
    styles: []
})
export class ProductsFormComponent implements OnInit {
    editmode = false;
    isSubmitted = false;
    form: FormGroup;
    categories: any = [];
    constructor(private formBuilder: FormBuilder, private location: Location, private categoriesService: CategoriesService) {}

    ngOnInit(): void {
        this._initForm();
        this._getCategories();
    }

    onSubmit() {}

    private _initForm() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            brand: ['', Validators.required],
            price: ['', Validators.required],
            category: ['', Validators.required],
            countInStock: ['', Validators.required],
            description: ['', Validators.required],
            richDescription: [''],
            image: [''],
            isFeatured: ['']
        });
    }

    private _getCategories() {
        this.categoriesService.getCategories().subscribe((categories) => {
            this.categories = categories;
        });
    }

    onGoBack() {
        this.location.back();
    }

    get productForm() {
        return this.form.controls;
    }
}
