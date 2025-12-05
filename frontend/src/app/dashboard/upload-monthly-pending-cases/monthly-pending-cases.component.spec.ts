import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPendingCasesComponent } from './monthly-pending-cases.component';

describe('MonthlyPendingCasesComponent', () => {
  let component: MonthlyPendingCasesComponent;
  let fixture: ComponentFixture<MonthlyPendingCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyPendingCasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyPendingCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
