import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Coffee, RecentlyVisitedService } from '../../services/recently-visited.service';

@Component({
  selector: 'app-recently-visited',
  templateUrl: './recently-visited.component.html',
  styleUrls: ['./recently-visited.component.css'],
  standalone: false,
})
export class RecentlyVisitedComponent implements OnInit {
  visitedCoffees$!: Observable<Coffee[]>;

  constructor(private recentlyVisitedService: RecentlyVisitedService, private router: Router) {}

  ngOnInit(): void {
    this.visitedCoffees$ = this.recentlyVisitedService.visitedCoffees$;
  }

  navigateToProduct(coffeeId: string): void {
    this.router.navigate(['/product', coffeeId]);
  }
}
