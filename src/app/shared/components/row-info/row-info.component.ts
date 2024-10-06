import { CommonModule } from '@angular/common';
import { Component, OnInit, input, signal } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { CardComponent } from '../card/card.component';
import { CardInfoComponent } from '../card-info/card-info.component';

@Component({
  selector: 'app-row-info',
  standalone: true,
  imports: [CommonModule, CardInfoComponent, ChipComponent],
  templateUrl: './row-info.component.html',
  styleUrl: './row-info.component.scss',
})
export class RowInfoComponent {
  bgGrey = input<boolean>(true);
}
