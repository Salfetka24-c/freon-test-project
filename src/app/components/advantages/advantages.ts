import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { AdvantagesService } from '../../services/advantages.service';
import { AdvantagesCard } from '../advantages-card/advantages-card';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule, AdvantagesCard],
  templateUrl: './advantages.html',
  styleUrls: ['./advantages.scss'],
})
export class AdvantagesComponent {
  service = inject(AdvantagesService);

  constructor(public modal: ModalService) {}
}
