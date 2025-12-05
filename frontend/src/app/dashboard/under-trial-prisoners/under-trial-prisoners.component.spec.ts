import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTrialPrisonersComponent } from './under-trial-prisoners.component';

describe('UnderTrialPrisonersComponent', () => {
  let component: UnderTrialPrisonersComponent;
  let fixture: ComponentFixture<UnderTrialPrisonersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderTrialPrisonersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderTrialPrisonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
