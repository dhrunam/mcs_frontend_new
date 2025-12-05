import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDisposedTransferredCaseReportsComponent } from './monthly-disposed-transferred-case-reports.component';

describe('MonthlyDisposedTransferredCaseReportsComponent', () => {
  let component: MonthlyDisposedTransferredCaseReportsComponent;
  let fixture: ComponentFixture<MonthlyDisposedTransferredCaseReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyDisposedTransferredCaseReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyDisposedTransferredCaseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
