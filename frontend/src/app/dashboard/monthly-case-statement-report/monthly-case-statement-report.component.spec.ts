import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCaseStatementReportComponent } from './monthly-case-statement-report.component';

describe('MonthlyCaseStatementReportComponent', () => {
  let component: MonthlyCaseStatementReportComponent;
  let fixture: ComponentFixture<MonthlyCaseStatementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyCaseStatementReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyCaseStatementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
