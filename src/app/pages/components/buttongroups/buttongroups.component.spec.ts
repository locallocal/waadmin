import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtongroupsComponent } from './buttongroups.component';

describe('ButtongroupsComponent', () => {
  let component: ButtongroupsComponent;
  let fixture: ComponentFixture<ButtongroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ButtongroupsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ButtongroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
