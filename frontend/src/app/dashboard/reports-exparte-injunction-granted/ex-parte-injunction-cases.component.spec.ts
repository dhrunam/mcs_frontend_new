// ex-parte-injunction-cases.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExParteInjunctionCasesComponent } from './ex-parte-injunction-cases.component';

describe('ExParteInjunctionCasesComponent', () => {
  let component: ExParteInjunctionCasesComponent;
  let fixture: ComponentFixture<ExParteInjunctionCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExParteInjunctionCasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExParteInjunctionCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});