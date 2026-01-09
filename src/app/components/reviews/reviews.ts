import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { ReviewsService } from '../../services/reviews.service';
import { ReviewCard } from '../rewiews-card/rewiews-card';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewCard],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.scss'],
})
export class ReviewsComponent {

  service = inject(ReviewsService);

  constructor(public modal: ModalService) {}
}
