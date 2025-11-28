import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDisposalAndPendingReportComponent } from './monthly-disposal-and-pending-report.component';

describe('MonthlyDisposalAndPendingReportComponent', () => {
  let component: MonthlyDisposalAndPendingReportComponent;
  let fixture: ComponentFixture<MonthlyDisposalAndPendingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyDisposalAndPendingReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyDisposalAndPendingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
