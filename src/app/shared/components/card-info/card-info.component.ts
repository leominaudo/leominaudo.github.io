import { Component, computed, inject, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardBorder } from '../card/card';
import { ChipComponent } from '../chip/chip.component';
import { CardInfo } from './cardInfo';
import { BgColorType } from '../../service/theme/theme';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../service/theme/theme.service';

@Component({
    selector: 'app-card-info',
    imports: [CommonModule, CardComponent, ChipComponent],
    templateUrl: './card-info.component.html',
    styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  themeService = inject(ThemeService);

  /* Input styles */
  bgColor = input<BgColorType>('primary');
  border = input<CardBorder>('solid');

  /* Input */
  cardInfo = input<CardInfo>();

  period = computed(() => this.cardInfo()?.period);
  title = computed(() => this.cardInfo()?.title);
  description = computed(() => this.cardInfo()?.description);
  chips = computed(() => this.cardInfo()?.chips);
  company = computed(() => this.cardInfo()?.company);
  list = computed(() => this.cardInfo()?.list);

}
