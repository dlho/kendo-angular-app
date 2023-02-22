import { Component } from '@angular/core';
import { TraceService } from '../trace.service';

@Component({
  selector: 'app-log-trace',
  templateUrl: './log-trace.component.html',
  styleUrls: ['./log-trace.component.css']
})

export class LogTraceComponent {

  constructor(
    public traceService: TraceService
  ) {}

}
