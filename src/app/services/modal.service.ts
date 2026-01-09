import { Injectable, signal } from '@angular/core';


export type ModalType = 'feedback' | 'callback' | 'certificates' | null;

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  active = signal<ModalType>(null);


  open(type: Exclude<ModalType, null>) {
    this.active.set(type);
  }


  close() {
    this.active.set(null);
  }


  is(type: Exclude<ModalType, null>): boolean {
    return this.active() === type;
  }
}
