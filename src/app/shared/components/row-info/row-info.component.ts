import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, input, numberAttribute, signal } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { CardComponent } from '../card/card.component';
import { CardInfoComponent } from '../card-info/card-info.component';
import { SubTagComponent } from '../sub-tag/sub-tag.component';
import { TagComponent } from '../tag/tag.component';
import { RowComponent } from '../row/row.component';
import { Section } from './rowInfo';

@Component({
  selector: 'app-row-info',
  standalone: true,
  imports: [CommonModule, RowComponent, CardInfoComponent, ChipComponent, SubTagComponent, TagComponent],
  templateUrl: './row-info.component.html',
  styleUrl: './row-info.component.scss',
})
export class RowInfoComponent {
  section = input<Section>();
  index = input<number>(0);

  pair = computed(() => this.index() % 2 === 0);
}
