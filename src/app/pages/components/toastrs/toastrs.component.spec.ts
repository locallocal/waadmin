import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrsComponent } from './toastrs.component';

describe('ToastrsComponent', () => {
  let component: ToastrsComponent;
  let fixture: ComponentFixture<ToastrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ToastrsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ToastrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
