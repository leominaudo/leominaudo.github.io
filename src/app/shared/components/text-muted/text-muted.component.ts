import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-muted',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="text-muted" [ngStyle]="{ 'font-size': fontSize()}">
    {{ label() }}
  </div>
  `,
})
export class TextMutedComponent {
  label = input<string>();
  fontSize = input<string>('small');

}
