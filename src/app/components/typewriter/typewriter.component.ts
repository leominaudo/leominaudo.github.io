import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {
  text: string = "Testo da scrivere...";
  textToShow: string = "";
  index: number = 0;
  speed: number = 50; // Velocità di scrittura (ms)

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter() {
    if (this.index < this.text.length) {
      this.textToShow += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  }
}
