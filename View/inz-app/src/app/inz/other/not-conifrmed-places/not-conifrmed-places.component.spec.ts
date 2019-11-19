import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotConifrmedPlacesComponent } from './not-conifrmed-places.component';

describe('NotConifrmedPlacesComponent', () => {
  let component: NotConifrmedPlacesComponent;
  let fixture: ComponentFixture<NotConifrmedPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotConifrmedPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotConifrmedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
