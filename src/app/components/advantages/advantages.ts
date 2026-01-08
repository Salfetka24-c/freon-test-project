import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [],
  templateUrl: './advantages.html',
  styleUrls: ['./advantages.scss'],
})
export class Advantages {
  constructor(public modal: ModalService) {}
}
