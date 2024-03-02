import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent {
  space: number = 30;
  orange: string = '#ff7514';
  green: string = '#77dd77';
  red: string = '#ec5353';
  grey: string = '#c0c0c0';
  blue: string = '#5d9b9b';
}
