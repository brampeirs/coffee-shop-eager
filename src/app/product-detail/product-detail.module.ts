import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { RecentlyVisitedModule } from '../recently-visited/recently-visited.module';

const routes: Routes = [{ path: '', component: ProductDetailComponent }];

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), RecentlyVisitedModule],
  exports: [ProductDetailComponent],
})
export class ProductDetailModule {}
