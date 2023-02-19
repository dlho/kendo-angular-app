import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTraceComponent } from './log-trace.component';

describe('LogTraceComponent', () => {
  let component: LogTraceComponent;
  let fixture: ComponentFixture<LogTraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTraceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
