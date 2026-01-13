import { Injectable, signal, computed, Signal } from '@angular/core';

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
  private readonly visitedCoffeesSignal = signal<Coffee[]>([]);

  // Expose as readonly computed signal
  readonly visitedCoffees: Signal<Coffee[]> = computed(() => this.visitedCoffeesSignal());

  addVisitedCoffee(coffee: Coffee): void {
    // Remove if already exists
    const filtered = this.visitedCoffeesSignal().filter((c) => c.id !== coffee.id);

    // Add to beginning
    const updated = [coffee, ...filtered].slice(0, this.maxItems);

    this.visitedCoffeesSignal.set(updated);
  }

  getVisitedCoffees(): Coffee[] {
    return this.visitedCoffeesSignal();
  }
}
