import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { App } from './app';
import { HomeComponent } from './home/home.component';
import { RecentlyVisitedModule } from './recently-visited/recently-visited.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@NgModule({
  declarations: [App, HomeComponent, CoffeeListComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    BrowserModule,
    RouterModule.forRoot(routes),
    RecentlyVisitedModule,
    ProductDetailModule,
  ],
  bootstrap: [App],
})
export class AppModule {}
