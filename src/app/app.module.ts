import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DetailsModalComponent } from './Components/details-modal/details-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { AddCityCardComponent } from './Components/add-city-card/add-city-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCityModalComponent } from './Components/add-city-modal/add-city-modal.component';
import { MatChipsModule } from '@angular/material/chips';
import { DetailViewofCityComponent } from './Components/detail-viewof-city/detail-viewof-city.component';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { HeaderComponent } from './Common/header/header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    DetailsModalComponent,
    HomepageComponent,
    AddCityCardComponent,
    AddCityModalComponent,
    DetailViewofCityComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
