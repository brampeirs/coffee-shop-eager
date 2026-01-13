import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Coffee {
  id: string;
  name: string;
  price: string;
  origin: string;
  rating: string;
  roast: string;
  description: string;
  image: string;
  badge?: string;
}

@Injectable()
export class RecentlyVisitedService {
  private readonly maxItems = 3;
  private visitedCoffees = new BehaviorSubject<Coffee[]>([]);

  visitedCoffees$: Observable<Coffee[]> = this.visitedCoffees.asObservable();

  addVisitedCoffee(coffee: Coffee): void {
    const current = this.visitedCoffees.value;

    // Remove if already exists
    const filtered = current.filter((c) => c.id !== coffee.id);

    // Add to beginning
    const updated = [coffee, ...filtered].slice(0, this.maxItems);

    this.visitedCoffees.next(updated);
  }

  getVisitedCoffees(): Coffee[] {
    return this.visitedCoffees.value;
  }
}
