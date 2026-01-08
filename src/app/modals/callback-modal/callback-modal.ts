import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-callback-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="close()"></div>

    <div class="modal">
      <div class="modal-header">
        <button class="back-btn" (click)="close()">←</button>
        <h2>WE’LL CALL BACK</h2>
      </div>

      <input placeholder="First name" />
      <input placeholder="Your city" />
      <input placeholder="Phone number" />

      <button>MAKE ORDER</button>
    </div>
  `,
})
export class CallbackModal {
  constructor(private modal: ModalService) {}

  close() {
    this.modal.close();
  }
}
