import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TypewriterComponent } from './shared/components/typewriter/typewriter.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoverComponent } from './shared/components/cover/cover.component';
import { RowInfoComponent } from './shared/components/row-info/row-info.component';
import { ThemeService } from './shared/service/theme/theme.service';
import { FooterComponent } from './shared/components/footer/footer.component';

function setTheme(themeService: ThemeService) {
  themeService.initTheme();
}

@NgModule({
  declarations: [
    TypewriterComponent,
    HomeComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    NgbModule,
    CoverComponent,
    RowInfoComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setTheme,
      deps: [ThemeService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
