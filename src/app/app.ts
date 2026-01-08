import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { Advantages } from './advantages/advantages';
import { Vitrine } from './vitrine/vitrine';
import { Assortiment } from './assortiment/assortiment';
import { Reviews } from './reviews/reviews';
import { Order } from './order/order';
import { ModalService } from './core/modal.service';
import { CallbackModal } from './modals/callback/callback-modal/callback-modal'; // ✅ ДОДАТИ
import { CertificatesModal } from './modals/certificates/certificates-modal/certificates-modal';
import { FeedbackModal } from './modals/feedback/feedback-modal/feedback-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    Header,
    HeroSection,
    Advantages,
    Vitrine,
    Assortiment,
    Reviews,
    Order,
    CallbackModal,
    CertificatesModal,
    FeedbackModal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(public modal: ModalService) {}
  protected readonly title = signal('angular-course');
}
