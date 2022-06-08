import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'admin-products-form',
    templateUrl: './products-form.component.html',
    styles: []
})
export class ProductsFormComponent implements OnInit {
    editmode = false;
    isSubmitted = false;
    form: FormGroup;
    constructor(private formBuilder: FormBuilder, private location: Location) {}

    ngOnInit(): void {
        this._initForm();
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

    onGoBack() {
        this.location.back();
    }

    get productForm() {
        return this.form.controls;
    }
}
