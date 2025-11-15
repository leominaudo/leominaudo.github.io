import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  computed,
  inject,
  input,
} from '@angular/core';
import {
  Subscription,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs';
import { ThemeService } from '../../service/theme/theme.service';
import { CoverInfo } from './cover';

@Component({
    selector: 'app-cover',
    imports: [CommonModule],
    templateUrl: './cover.component.html',
    styleUrl: './cover.component.scss'
})
export class CoverComponent implements AfterViewInit, OnDestroy {
  themeService = inject(ThemeService);

  coverInfo = input<CoverInfo>();

  title = computed(() => this.coverInfo()?.title);
  subTitle = computed(() => this.coverInfo()?.subTitle);
  description = computed(() => this.coverInfo()?.description);
  avatarSrc = computed(() => this.coverInfo()?.avatarSrc ?? '/assets/image/photo.jpg');

  space: number = 45;
  orange: string = '#ff7514';
  green: string = '#77dd77';
  red: string = '#ec5353';
  grey: string = '#c0c0c0';
  blue: string = '#5d9b9b';

  @ViewChild('innerDiv', { static: true })
  innerDivRef!: ElementRef;
  outerDivHeight: number = 300;
  outerDivHeight$!: Subscription;

  constructor(private elementRef: ElementRef) { }

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
