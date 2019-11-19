import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlacesAdminComponent } from './all-places-admin.component';

describe('AllPlacesAdminComponent', () => {
  let component: AllPlacesAdminComponent;
  let fixture: ComponentFixture<AllPlacesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPlacesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlacesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
