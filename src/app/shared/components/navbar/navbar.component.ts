import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Signal,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Observable,
} from 'rxjs';
import { ThemeService } from '../../service/theme/theme.service';
import { SwitchButtonThemeComponent } from '../switch-button-theme/switch-button-theme.component';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterModule, SwitchButtonThemeComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);

  sections = input<string[]>();

  closeIcon$: Observable<boolean> = new Observable<boolean>();

  menuOpened = signal(false);

  isMenuOpened: Signal<boolean> = computed(() => this.menuOpened());

  text: string = 'Leonardo';
  textToShow: string = '';
  textFinal: string = '';
  index: number = 0;
  speed: number = 80; // Velocità di scrittura (ms)

  show: boolean = false;

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter() {
    if (this.index < this.text.length) {
      this.textToShow += this.text.charAt(this.index);
      this.textFinal = `<${this.textToShow}${this.index === this.text.length - 1 ? '' : '|'
        }>`;
      this.index++;

      setTimeout(() => this.typeWriter(), this.speed);
    } else {
      this.show = true;
    }
  }

  setMenuOpened() {
    this.menuOpened.set(!this.menuOpened());
  }
}
