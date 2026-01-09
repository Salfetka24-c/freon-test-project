import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { MainSection } from './components/main-section/main-section';
import { AdvantagesComponent } from './components/advantages/advantages';
import { Vitrine } from './components/vitrine/vitrine';
import { Assortiment } from './components/assortiment/assortiment';
import { ReviewsComponent } from './components/reviews/reviews';
import { Order } from './components/order/order';
import { ModalService } from './services/modal.service';
import { CallbackModal } from './modals/callback-modal/callback-modal';
import { CertificatesModal } from './modals/certificates-modal/certificates-modal';
import { FeedbackModal } from './modals/feedback-modal/feedback-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    MainSection,
    AdvantagesComponent,
    Vitrine,
    Assortiment,
    ReviewsComponent,
    Order,
    CallbackModal,
    CertificatesModal,
    FeedbackModal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(public modal: ModalService) { }
  protected readonly title = signal('angular-course');
}
