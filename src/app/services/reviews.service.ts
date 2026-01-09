import { Injectable, signal } from '@angular/core';
import { Review } from '../models/review.model';

@Injectable({ providedIn: 'root' })
export class ReviewsService {

  reviews = signal<Review[]>([
    {
      id: 1,
      name: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      avatar: '/assets/reviews/Ellipse.png'
    },
    {
      id: 2,
      name: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      avatar: '/assets/reviews/Ellipse.png'
    },
    {
      id: 3,
      name: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      avatar: '/assets/reviews/Ellipse.png'
    }
  ]);
}