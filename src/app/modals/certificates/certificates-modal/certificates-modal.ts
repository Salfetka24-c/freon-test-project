import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../core/modal.service';

@Component({
  selector: 'app-certificates-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="close()"></div>
    <div class="modal">
      <div class="modal-header">
        <button class="back-btn" (click)="close()">←</button>

        <h2>CERTIFICATES</h2>

        <div class="certs">
          <img src="assets/ballons/blue512.png" />
          <img src="assets/ballons/orange512.png" />
          <img src="assets/ballons/aqua512.png" />
        </div>
      </div>
    </div>
  `,
})
export class CertificatesModal {
  constructor(private modal: ModalService) {}

  close() {
    this.modal.close();
  }
}
