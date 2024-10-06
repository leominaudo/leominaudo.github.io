import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { CardBgColor, CardBorder } from './card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    ChipComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  bgColor = input<CardBgColor>('primary');
  border = input<CardBorder>('solid');

  bgColorIsPrimary = computed(() => this.bgColor() === 'primary');
  bgColorIsSecondary = computed(() => this.bgColor() === 'secondary');
}
