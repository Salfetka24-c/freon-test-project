import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

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

  ballonsImgSrc = [
    'assets/ballons/aqua512.png',
    'assets/ballons/blue512.png',
    'assets/ballons/orange512.png',
    'assets/ballons/pink512.png',
    'assets/ballons/red512.png',
  ];

  activeIndex = 0;
  ringKey = 0;

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
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
    this.activeIndex = (this.activeIndex + 1) % this.ballonsImgSrc.length;
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
