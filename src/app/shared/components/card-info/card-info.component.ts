import { Component, computed, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardBorder } from '../card/card';
import { TextMutedComponent } from "../text-muted/text-muted.component";
import { ChipComponent } from '../chip/chip.component';
import { CardInfo } from './cardInfo';
import { BgColorType } from '../../service/theme/theme';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [CardComponent, TextMutedComponent, ChipComponent],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  /* Input styles */
  bgColor = input<BgColorType>('primary');
  border = input<CardBorder>('solid');

  /* Input */
  cardInfo = input<CardInfo>();

  period = computed(() => this.cardInfo()?.period);
  title = computed(() => this.cardInfo()?.title);
  description = computed(() => this.cardInfo()?.description);
  chips = computed(() => this.cardInfo()?.chips);

}
