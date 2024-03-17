import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickersComponent } from './datepickers.component';

describe('DatepickersComponent', () => {
  let component: DatepickersComponent;
  let fixture: ComponentFixture<DatepickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
