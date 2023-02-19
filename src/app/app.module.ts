import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KendoDatePickerComponent } from './kendo-date-picker/kendo-date-picker.component';
import { LogTraceComponent } from './log-trace/log-trace.component';

import { IntlModule } from '@progress/kendo-angular-intl';

import '@progress/kendo-angular-intl/locales/fr/all';

@NgModule({
  declarations: [
    AppComponent,
    KendoDatePickerComponent,
    LogTraceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule,
    IntlModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr-FR",
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
