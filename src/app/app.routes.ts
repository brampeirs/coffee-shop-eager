import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./product-detail/product-detail.module').then((m) => m.ProductDetailModule),
  },
];
