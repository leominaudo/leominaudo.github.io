import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../../service/theme/theme.service';

@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  themeService = inject(ThemeService);

  tag = "</Leonardo>";

}
