import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMonthlyStatementComponent } from './submit-monthly-statement.component';

describe('SubmitMonthlyStatementComponent', () => {
  let component: SubmitMonthlyStatementComponent;
  let fixture: ComponentFixture<SubmitMonthlyStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitMonthlyStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitMonthlyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
