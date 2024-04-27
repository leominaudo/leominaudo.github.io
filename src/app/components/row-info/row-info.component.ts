import { CommonModule } from '@angular/common';
import { Component, OnInit, input, signal } from '@angular/core';

@Component({
  selector: 'app-row-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './row-info.component.html',
  styleUrl: './row-info.component.scss',
})
export class RowInfoComponent {
  bgGrey = input<boolean>(true);
}
