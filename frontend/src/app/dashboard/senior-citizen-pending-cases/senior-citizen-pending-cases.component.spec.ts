import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorCitizenPendingCasesComponent } from './senior-citizen-pending-cases.component';

describe('SeniorCitizenPendingCasesComponent', () => {
  let component: SeniorCitizenPendingCasesComponent;
  let fixture: ComponentFixture<SeniorCitizenPendingCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeniorCitizenPendingCasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeniorCitizenPendingCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
