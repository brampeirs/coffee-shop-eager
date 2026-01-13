import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Coffee,
  RecentlyVisitedService,
} from '../recently-visited/services/recently-visited.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: false,
})
export class ProductDetailComponent implements OnInit {
  coffee: Coffee | null = null;

  private products: { [key: string]: Coffee } = {
    'ethiopian-yirgacheffe': {
      id: 'ethiopian-yirgacheffe',
      name: 'Ethiopian Yirgacheffe',
      price: '$4.50',
      origin: 'Ethiopia',
      rating: '4.8',
      roast: 'Light',
      description:
        "Bright and floral with notes of jasmine, bergamot, and stone fruit. Light roast. This exceptional coffee is grown in the Yirgacheffe region of Ethiopia, known for producing some of the world's finest coffees. The beans are carefully processed using the washed method, which highlights their delicate floral characteristics and complex flavor profile.",
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
      badge: 'Popular',
    },
    'colombian-supremo': {
      id: 'colombian-supremo',
      name: 'Colombian Supremo',
      price: '$4.25',
      origin: 'Colombia',
      rating: '4.9',
      roast: 'Medium',
      description:
        'Rich and balanced with caramel sweetness and nutty undertones. Medium roast. Sourced from the high-altitude regions of Colombia, this coffee represents the finest grade of Colombian beans. The Supremo classification denotes large, uniform beans that produce a consistently excellent cup with remarkable balance and body.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop',
    },
    'sumatra-mandheling': {
      id: 'sumatra-mandheling',
      name: 'Sumatra Mandheling',
      price: '$4.75',
      origin: 'Indonesia',
      rating: '4.7',
      roast: 'Dark',
      description:
        'Full-bodied with earthy, herbal notes and a syrupy mouthfeel. Dark roast. Grown in the lush highlands of North Sumatra, Mandheling coffee is known for its unique wet-hulling process that gives it distinctive earthy and complex characteristics. This is a coffee for those who appreciate bold, full-bodied flavors.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
      badge: 'New',
    },
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recentlyVisitedService: RecentlyVisitedService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.coffee = this.products[productId] || null;

      if (this.coffee) {
        this.recentlyVisitedService.addVisitedCoffee(this.coffee);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
