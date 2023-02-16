import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoDatePickerComponent } from './kendo-date-picker/kendo-date-picker.component';



@NgModule({
  declarations: [
    AppComponent,
    KendoDatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
