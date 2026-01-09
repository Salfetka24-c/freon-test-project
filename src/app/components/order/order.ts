import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrls: ['./order.scss'],
})
export class Order {
  constructor(public productService: ProductService) {}

  get totalQty(): number {
    return this.productService.products().reduce((sum, p) => sum + p.qty, 0);
  }

  get totalPrice(): number {
    return this.productService.products().reduce((sum, p) => sum + p.qty * p.price, 0);
  }
  applyQty(id: number, rawValue: string) {
    const value = Number(rawValue);

    if (isNaN(value)) return;
    this.productService.setQty(id, value);
  }
}
