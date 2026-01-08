import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrls: ['./order.scss'], // ⬅️ ОСЬ ЦЕ
})
export class Order {
  constructor(public productService: ProductService) {}

  get totalQty(): number {
    return this.productService.products().reduce((sum, p) => sum + p.qty, 0);
  }

  get totalPrice(): number {
    return this.productService.products().reduce((sum, p) => sum + p.qty * p.price, 0);
  }
  applyQty(code: string, rawValue: string) {
    const value = Number(rawValue);

    if (isNaN(value)) return;

    this.productService.setQty(code, value);
  }
}
