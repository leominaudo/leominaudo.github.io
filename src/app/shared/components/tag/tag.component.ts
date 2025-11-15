import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { ThemeService } from '../../service/theme/theme.service';
import { BgColorType } from '../../service/theme/theme';

@Component({
    selector: 'app-tag',
    imports: [CommonModule],
    templateUrl: './tag.component.html',
    styleUrl: './tag.component.scss'
})
export class TagComponent {
  themeService = inject(ThemeService);

  name = input<string>();
  bgColor = input<BgColorType>('primary');

  openTag = computed(() => `<${this.name()}>`);
  closeTag = computed(() => `</${this.name()}>`);

  classBgColor = computed<string>(() => this.themeService.getClassBgColor(this.bgColor()));


}
