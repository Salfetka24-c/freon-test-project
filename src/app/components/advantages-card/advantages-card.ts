import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Advantages } from '../../models/advantages.model';

@Component({
  selector: 'app-advantages-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advantages-card.html',
  styleUrl: './advantages-card.scss',
})
export class AdvantagesCard {
  @Input({ required: true }) data!: Advantages;
}
