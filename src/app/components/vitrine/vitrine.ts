import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { VitrineService, VitrineItem } from '../../services/vitrine.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.scss',
})
export class Vitrine implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);
  private vitrineService = inject(VitrineService);

  items: VitrineItem[] = [];

  activeIndex = 0;
  ringKey = 0;

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.items = this.vitrineService.getItems();

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.start(), 0);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  start(): void {
    this.timer = setInterval(() => {
      this.next();
    }, 15100);
  }

  next(): void {
    if (!this.items.length) return;

    this.activeIndex = (this.activeIndex + 1) % this.items.length;
    this.ringKey++;
    this.cdr.detectChanges();
  }

  select(index: number): void {
    this.activeIndex = index;
    this.ringKey++;

    if (this.timer) {
      clearInterval(this.timer);
      this.start();
    }

    this.cdr.detectChanges();
  }
}
