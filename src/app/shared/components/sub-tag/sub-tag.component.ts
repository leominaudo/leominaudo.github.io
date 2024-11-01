import { Component, computed, inject, input } from '@angular/core';
import { ThemeService } from '../../service/theme/theme.service';
import { BgColorType } from '../../service/theme/theme';

@Component({
  selector: 'app-sub-tag',
  standalone: true,
  imports: [],
  templateUrl: './sub-tag.component.html',
  styleUrl: './sub-tag.component.scss'
})
export class SubTagComponent {
  themeService = inject(ThemeService);

  link = input<string>();
  name = input<string>();
  bgColor = input<BgColorType>('primary');

  openTag = computed(() => `<${this.name()}>`);
  closeTag = computed(() => `</${this.name()}>`);

  classBgColor = computed<string>(() => this.themeService.getClassBgColor(this.bgColor()));

}
