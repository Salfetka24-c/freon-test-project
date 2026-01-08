import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-assortiment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assortiment.html',
  styleUrl: './assortiment.scss',
})
export class Assortiment {
  constructor(public productService: ProductService) {}
}
