import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './main-layout/layout/layout.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { NavigationComponent } from './main-layout/navigation/navigation.component';
import { HeaderComponent } from './main-layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
