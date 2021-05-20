import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
//providers
import {PieDataService} from './pie-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ PieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
