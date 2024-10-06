import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  template: `
  <span class="badge  bg-dark" style="  border-radius: 25px;">{{ label() }}</span>
  `
})
export class ChipComponent {
  label = input<string>();

}
