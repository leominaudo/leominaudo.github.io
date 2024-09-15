import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoverComponent } from './components/cover/cover.component';
import { RowInfoComponent } from './components/row-info/row-info.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
