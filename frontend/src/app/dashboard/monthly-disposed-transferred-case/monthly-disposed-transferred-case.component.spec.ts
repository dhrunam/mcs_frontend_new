import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDisposedTransferredCaseComponent } from './monthly-disposed-transferred-case.component';

describe('MonthlyDisposedTransferredCaseComponent', () => {
  let component: MonthlyDisposedTransferredCaseComponent;
  let fixture: ComponentFixture<MonthlyDisposedTransferredCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyDisposedTransferredCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyDisposedTransferredCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
