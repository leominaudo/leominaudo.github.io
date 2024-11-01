import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, inject, model, signal } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ThemeService } from '../../service/theme/theme.service';

@Component({
  selector: 'app-switch-button-theme',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './switch-button-theme.component.html',
  styleUrl: './switch-button-theme.component.scss'
})
export class SwitchButtonThemeComponent {
  themeService = inject(ThemeService);


  value = signal(this.themeService.isLight());

  setTheme() {
    this.value.update(x => !x);
    this.themeService.setTheme(this.value() ? 'light' : 'dark');
  }
}
