import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUiComponent } from './demo-ui.component';

describe('DemoUiComponent', () => {
  let component: DemoUiComponent;
  let fixture: ComponentFixture<DemoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
