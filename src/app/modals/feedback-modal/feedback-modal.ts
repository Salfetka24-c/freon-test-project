import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-feedback-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="close()"></div>

    <div class="modal">
      <h2>WRITE FEEDBACK</h2>

      <input placeholder="First name" />
      <input placeholder="Second name" />


      <label class="file">
        📎 Attach image
        <input type="file" hidden (change)="onFile($event)" />
      </label>

      <textarea rows="4" placeholder="Feedback"></textarea>

      <button>SEND</button>
    </div>
  `,
})
export class FeedbackModal {
  constructor(private modal: ModalService) {}

  close() {
    this.modal.close();
  }

  onFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  }
}
