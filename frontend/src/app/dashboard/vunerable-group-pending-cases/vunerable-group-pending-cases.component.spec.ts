import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VunerableGroupPendingCasesComponent } from './vunerable-group-pending-cases.component';

describe('VunerableGroupPendingCasesComponent', () => {
  let component: VunerableGroupPendingCasesComponent;
  let fixture: ComponentFixture<VunerableGroupPendingCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VunerableGroupPendingCasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VunerableGroupPendingCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
