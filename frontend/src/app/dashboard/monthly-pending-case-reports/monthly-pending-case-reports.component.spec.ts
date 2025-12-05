import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPendingCaseReportsComponent } from './monthly-pending-case-reports.component';

describe('MonthlyPendingCaseReportsComponent', () => {
  let component: MonthlyPendingCaseReportsComponent;
  let fixture: ComponentFixture<MonthlyPendingCaseReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyPendingCaseReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyPendingCaseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
