import { Component, inject, input } from '@angular/core';
import { ThemeService } from '../../service/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
  <span class="badge" [ngClass]="themeService.isLight() ? 'bg-dark' : 'text-dark bg-light'" style="  border-radius: 25px;">{{ label() }}</span>
  `
})
export class ChipComponent {
  themeService = inject(ThemeService);

  label = input<string>();

}
