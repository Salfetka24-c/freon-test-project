import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly MAX_QTY = 1000;

  products = signal<Product[]>([
    {
      id: 1,
      code: '134A',
      name: 'Freon 134A',
      price: 1999,
      qty: 0,
      image: './assets/ballons/blue512.png',
    },
    {
      id: 2,
      code: '404A',
      name: 'Freon 404A',
      price: 1899,
      qty: 0,
      image: './assets/ballons/orange512.png',
    },
    {
      id: 3,
      code: '507',
      name: 'Freon 507',
      price: 1799,
      qty: 0,
      image: './assets/ballons/aqua512.png',
    },
    {
      id: 4,
      code: '410A',
      name: 'Freon 410A',
      price: 1699,
      qty: 0,
      image: './assets/ballons/pink512.png',
    },
    {
      id: 5,
      code: '407C',
      name: 'Freon 407C',
      price: 1599,
      qty: 0,
      image: './assets/ballons/red512.png',
    },
  ]);

  increment(id: number) {
    this.products.update((list) =>
      list.map((item) => (item.id === id ? { ...item, qty: Math.min(item.qty + 1, this.MAX_QTY) } : item))
    );
  }

  decrement(id: number) {
    this.products.update((list) =>
      list.map((item) => (item.id === id ? { ...item, qty: Math.max(item.qty - 1, 0) } : item))
    );
  }

  setQty(id: number, value: number) {
    const safe = Math.max(0, Math.min(this.MAX_QTY, value || 0));

    this.products.update((list) => list.map((item) => (item.id === id ? { ...item, qty: safe } : item)));
  }
}
