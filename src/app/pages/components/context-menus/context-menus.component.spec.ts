import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenusComponent } from './context-menus.component';

describe('ContextMenusComponent', () => {
  let component: ContextMenusComponent;
  let fixture: ComponentFixture<ContextMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ContextMenusComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ContextMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
