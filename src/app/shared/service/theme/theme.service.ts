import { Injectable, computed, inject, signal } from '@angular/core';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private THEME_STORAGE_KEY = 'theme';
  selectedTheme = signal<Theme>('light');
  isLight = computed<boolean>(() => this.selectedTheme() === 'light');

  initTheme() {
    const storedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);

    if (this.isValidTheme(storedTheme)) {
      this.setTheme(storedTheme);
    }
  }

  /**
   * 
   * @param {Theme} theme 
   */
  setTheme(theme: Theme) {
    this.selectedTheme.set(theme);
    localStorage.setItem(this.THEME_STORAGE_KEY, theme);
  }

  private isValidTheme(theme: string | null): theme is Theme {
    return theme === 'light' || theme === 'dark';
  }
}
