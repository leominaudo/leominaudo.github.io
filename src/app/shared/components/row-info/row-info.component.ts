import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { CardInfoComponent } from '../card-info/card-info.component';
import { TagComponent } from '../tag/tag.component';
import { RowComponent } from '../row/row.component';
import { Section } from './rowInfo';

@Component({
  selector: 'app-row-info',
  standalone: true,
  imports: [CommonModule, RowComponent, CardInfoComponent, TagComponent],
  templateUrl: './row-info.component.html',
  styleUrl: './row-info.component.scss',
})
export class RowInfoComponent {
  section = input<Section>();
  index = input<number>(0);

  pair = computed(() => this.index() % 2 === 0);
}
