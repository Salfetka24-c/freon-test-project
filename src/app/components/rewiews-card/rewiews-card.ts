import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rewiews-card.html',
  styleUrls: ['./rewiews-card.scss']
})
export class ReviewCard {
  @Input({ required: true }) data!: Review;
}