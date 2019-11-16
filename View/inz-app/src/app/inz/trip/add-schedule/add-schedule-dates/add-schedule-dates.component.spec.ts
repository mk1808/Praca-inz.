import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleDatesComponent } from './add-schedule-dates.component';

describe('AddScheduleDatesComponent', () => {
  let component: AddScheduleDatesComponent;
  let fixture: ComponentFixture<AddScheduleDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScheduleDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
