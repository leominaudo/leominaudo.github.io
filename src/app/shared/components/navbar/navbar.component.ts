import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Signal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Observable,
} from 'rxjs';
import { ThemeService } from '../../service/theme/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);

  closeIcon$: Observable<boolean> = new Observable<boolean>();

  menuOpened = signal(false);

  isMenuOpened: Signal<boolean> = computed(() => this.menuOpened());

  text: string = 'Leonardo';
  textToShow: string = '';
  textFinal: string = '';
  index: number = 0;
  speed: number = 80; // Velocità di scrittura (ms)

  show: boolean = false;

  constructor() {
    console.log(this.themeService.isDark())
  }

  ngOnInit(): void {
    /*   this.closeIcon$ = fromEvent(
      document.getElementById('button-navbar') as HTMLButtonElement,
      'click'
    ).pipe(
      map(
        () =>
          (document.getElementById('button-navbar') as HTMLButtonElement)
            .ariaExpanded === 'true'
      ),
      debounceTime(100),
      distinctUntilChanged()
    );*/
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
      console.log('end');
    }
  }

  setMenuOpened() {
    this.menuOpened.set(!this.menuOpened());
  }
}
