import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDistrictMenusComponent } from './side-bar-district-menus.component';

describe('SideBarDistrictMenusComponent', () => {
  let component: SideBarDistrictMenusComponent;
  let fixture: ComponentFixture<SideBarDistrictMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarDistrictMenusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarDistrictMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
