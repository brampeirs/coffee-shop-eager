import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Coffee } from '../recently-visited/services/recently-visited.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
  standalone: false,
})
export class CoffeeListComponent {
  @Input() coffees: Coffee[] = [];

  constructor(private router: Router) {}

  navigateToProduct(coffeeId: string): void {
    this.router.navigate(['/product', coffeeId]);
  }
}

