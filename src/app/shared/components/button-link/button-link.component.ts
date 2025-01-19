import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-button-link',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss'
})
export class ButtonLinkComponent {
  label = input<string>();
  link = input<string>();
  icon = input<string>();

}
