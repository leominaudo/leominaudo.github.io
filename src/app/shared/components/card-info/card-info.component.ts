import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardBgColor, CardBorder } from '../card/card';
import { TextMutedComponent } from "../text-muted/text-muted.component";
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [CardComponent, TextMutedComponent, ChipComponent],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  bgColor = input<CardBgColor>('primary');
  border = input<CardBorder>('solid');

  period = input<string>();
  title = input<string>();
  description = input<string>();
  chips = input<string[]>();

}
