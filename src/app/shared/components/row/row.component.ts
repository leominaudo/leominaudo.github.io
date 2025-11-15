import { Component, computed, inject, input } from '@angular/core';
import { ThemeService } from '../../service/theme/theme.service';
import { BgColorType } from '../../service/theme/theme';

@Component({
    selector: 'app-row',
    imports: [],
    templateUrl: './row.component.html',
    styleUrl: './row.component.scss'
})
export class RowComponent {
  themeService = inject(ThemeService);

  bgColor = input<BgColorType>('primary');

  classBgColor = computed<string>(() => this.themeService.getClassBgColor(this.bgColor()));


}
