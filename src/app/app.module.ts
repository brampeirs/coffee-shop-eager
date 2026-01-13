import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { App } from './app';
import { HomeComponent } from './home/home.component';
import { RecentlyVisitedModule } from './recently-visited/recently-visited.module';
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
  ],
  bootstrap: [App],
})
export class AppModule {}
