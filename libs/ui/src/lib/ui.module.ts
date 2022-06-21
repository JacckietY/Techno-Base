import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonModule } from 'primeng/button';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Routes } from '@angular/router';
import { ProductsListComponent } from 'libs/products/src/lib/pages/products-list/products-list.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductsListComponent
    }
];

@NgModule({
    imports: [CommonModule, ButtonModule],
    declarations: [BannerComponent, GalleryComponent],
    exports: [BannerComponent, GalleryComponent]
})
export class UiModule {}
