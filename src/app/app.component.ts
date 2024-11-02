import { Component, computed, signal } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { cover, rowInfo } from "src/db";
import { CoverInfo } from "./shared/components/cover/cover";
import { Section } from "./shared/components/row-info/rowInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  coverInfo = signal<CoverInfo>(cover);
  rowInfo = signal<Section[]>(rowInfo);

  sections = computed<string[]>(() => this.rowInfo().map(x => x.name));

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.activatedRoute.snapshot.fragment;
        if (fragment) {
          this.scrollTo(fragment);
        }
      }
    });
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}