import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletesComponent } from './autocompletes.component';

describe('AutocompletesComponent', () => {
  let component: AutocompletesComponent;
  let fixture: ComponentFixture<AutocompletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
