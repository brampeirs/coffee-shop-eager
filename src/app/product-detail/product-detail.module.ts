import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { RecentlyVisitedModule } from '../recently-visited/recently-visited.module';

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RecentlyVisitedModule
  ],
  exports: [
    ProductDetailComponent
  ]
})
export class ProductDetailModule { }
