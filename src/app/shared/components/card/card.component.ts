import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { CardBorder } from './card';
import { ThemeService } from '../../service/theme/theme.service';
import { BgColorType } from '../../service/theme/theme';

@Component({
    selector: 'app-card',
    imports: [
        CommonModule
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
  bgColor = input<BgColorType>('primary');
  border = input<CardBorder>('solid');

  themeService = inject(ThemeService);

  classBgColor = computed<string>(() => this.themeService.getClassBgColor(this.bgColor()));
}
