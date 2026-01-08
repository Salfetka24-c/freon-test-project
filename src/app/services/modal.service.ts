import { Injectable, signal } from '@angular/core';

/**
 * Усі можливі модальні вікна
 */
export type ModalType = 'feedback' | 'callback' | 'certificates' | null;

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  /**
   * Яке модальне вікно зараз відкрите
   * null = жодного
   */
  active = signal<ModalType>(null);

  /**
   * Відкрити модальне вікно
   */
  open(type: Exclude<ModalType, null>) {
    this.active.set(type);
  }

  /**
   * Закрити будь-яке модальне вікно
   */
  close() {
    this.active.set(null);
  }

  /**
   * Перевірка — чи відкрите саме це вікно
   */
  is(type: Exclude<ModalType, null>): boolean {
    return this.active() === type;
  }
}
