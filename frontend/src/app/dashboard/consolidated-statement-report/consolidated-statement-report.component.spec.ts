import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedStatementReportComponent } from './consolidated-statement-report.component';

describe('ConsolidatedStatementReportComponent', () => {
  let component: ConsolidatedStatementReportComponent;
  let fixture: ComponentFixture<ConsolidatedStatementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolidatedStatementReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsolidatedStatementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
