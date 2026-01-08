import { Component } from '@angular/core';
import { ModalService } from '../.../../core/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public modal: ModalService) {}
}
