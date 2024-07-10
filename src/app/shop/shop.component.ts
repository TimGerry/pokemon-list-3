import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  today = new Date();
}
