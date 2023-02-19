import { Component, ViewChild, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { KendoDatePickerComponent } from './kendo-date-picker/kendo-date-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'kendo-angular-app';
  message1: string | undefined;

  myDate1: Date = new Date(1997, 9, 1);
  myDate2: Date = new Date(1969, 4, 22);
  myDate3: Date = new Date(1965, 1, 6);
  myDate4: Date = new Date();

  constructor(private cdr: ChangeDetectorRef) {}
  
  @ViewChild(KendoDatePickerComponent) messChild1!: KendoDatePickerComponent
  @ViewChild('message2') message2!: ElementRef;

  ngAfterViewInit() {
    this.message1 = this.messChild1.whoAmI();
    this.message2.nativeElement.textContent = "Je suis le composant LogTraceComponent";
    this.cdr.detectChanges();
  }
}
