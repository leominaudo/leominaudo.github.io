import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  startWith,
} from 'rxjs';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent implements AfterViewInit, OnDestroy {
  space: number = 45;
  orange: string = '#ff7514';
  green: string = '#77dd77';
  red: string = '#ec5353';
  grey: string = '#c0c0c0';
  blue: string = '#5d9b9b';

  @ViewChild('innerDiv', { static: true })
  innerDivRef!: ElementRef;
  outerDivHeight: number = 275;
  outerDivHeight$!: Subscription;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.outerDivHeight$ = fromEvent(window, 'resize')
      .pipe(
        map(() => this.innerDivRef.nativeElement.offsetHeight),
        distinctUntilChanged()
      )
      .subscribe((height) => {
        this.outerDivHeight = height;
      });

    this.outerDivHeight = this.innerDivRef.nativeElement.offsetHeight;
  }

  ngOnDestroy(): void {
    this.outerDivHeight$?.unsubscribe();
  }
}
