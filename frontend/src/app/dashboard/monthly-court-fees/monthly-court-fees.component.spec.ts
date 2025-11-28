import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCourtFeesComponent } from './monthly-court-fees.component';

describe('MonthlyCourtFeesComponent', () => {
  let component: MonthlyCourtFeesComponent;
  let fixture: ComponentFixture<MonthlyCourtFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyCourtFeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyCourtFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
