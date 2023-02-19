import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraceService {

  traces: string[] = [];

  constructor() { }

  add(trace: string) {
    this.traces.push(trace);
  }

  clear() {
    this.traces = [];
  }
  
}
