import { Component, Signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Coffee, RecentlyVisitedService } from '../../services/recently-visited.service';

@Component({
  selector: 'app-recently-visited',
  templateUrl: './recently-visited.component.html',
  styleUrls: ['./recently-visited.component.css'],
  standalone: false,
})
export class RecentlyVisitedComponent {
  private readonly recentlyVisitedService = inject(RecentlyVisitedService);
  private readonly router = inject(Router);

  readonly visitedCoffees: Signal<Coffee[]> = this.recentlyVisitedService.visitedCoffees;

  navigateToProduct(coffeeId: string): void {
    this.router.navigate(['/product', coffeeId]);
  }
}
