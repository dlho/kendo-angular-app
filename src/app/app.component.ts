import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'kendo-angular-app';
  items: string[] = []

  myDate1: Date = new Date(1997, 9, 1);
  myDate2: Date = new Date(1969, 4, 22);
  myDate3: Date = new Date(1965, 1, 6);
  myDate4: Date = new Date();
  
  onEv(data: string[]) {
    this.items.push(JSON.stringify(data));
  }
}
