import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-sub-tag',
  standalone: true,
  imports: [],
  templateUrl: './sub-tag.component.html',
  styleUrl: './sub-tag.component.scss'
})
export class SubTagComponent {
  link = input<string>();
  name = input<string>();

  openTag = computed(() => `<${this.name()}>`);
  closeTag = computed(() => `</${this.name()}>`);

}
