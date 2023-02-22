import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { TraceService } from '../trace.service';

@Component({
  selector: 'app-kendo-date-picker',
  templateUrl: './kendo-date-picker.component.html',
  styleUrls: ['./kendo-date-picker.component.css']
})

export class KendoDatePickerComponent implements OnChanges {
  @Input() parametre = new Date();
  
  public calendarMin: Date = new Date(1960, 0, 1);
  public calendarMax: Date = new Date(2023, 11, 31);   
  public currentDate = new Date();
  public events: string[] = [];  
  
  constructor(
    public intlService: IntlService, 
    private traceService: TraceService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
 
    for (let property in changes) {
        if (property === 'parametre') {
          this.currentDate = this.parametre;
          console.log('Previous:', changes[property].previousValue);
          console.log('Current:', changes[property].currentValue);
          console.log('firstChange:', changes[property].firstChange);
        } 
    }
  }

  public onChange(value: Date): void {
    this.log('change', value);
  } 
  
  private log(event: string, value?: Date): void {
    this.events = [`${event}${this.formatValue(value)}`].concat(this.events);
    //console.log(this.events);
    this.traceService.add(JSON.stringify(this.events));
  }
  
  private formatValue(value?: Date): string {
    return value ? ` - ${this.intlService.formatDate(value, 'dd/MM/yyyy')}` : '';
  }

  whoAmI() {
    return "Je suis le composant KendoDatePickerComponent";
  }

}
